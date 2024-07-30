
import { Component, OnDestroy, Injectable, Inject } from '@angular/core';
import { DuplicateCheckParameter } from '../create-new-identity/duplicate-check-parameter.interface';
import { DuplicatesSidesheetComponent } from '../create-new-identity/duplicates-sidesheet/duplicates-sidesheet.component';
import { Subscription } from 'rxjs';
import { PortalPersonReportsInteractive,PortalPersonReports, QerProjectConfig } from 'imx-api-qer';
import { EuiLoadingService, EuiSidesheetRef, EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { IdentitiesService } from '../identities.service';
import { FormGroup } from '@angular/forms';
import { ColumnDependentReference, ConfirmationService, SnackBarService, BaseCdr, CCC_BaseCdr, imx_SessionService, ISessionState ,CdrFactoryService } from 'qbm';
import { CollectionLoadParameters, IEntity } from 'imx-qbm-dbts';
import { PersonService } from '../../person/person.service';
import { QerPermissionsService } from '../../admin/qer-permissions.service';
import { FormArray, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'CCC-outsource-identity',
  templateUrl: './outsource-identity.component.html',
  styleUrls: ['./outsource-identity.component.scss']
})
export class OutsourceIdentityComponent implements OnDestroy {

    public identityForm = new UntypedFormGroup({});
    public cdrListPersonal: ColumnDependentReference[] = [];
    public cdrListOrganizational: ColumnDependentReference[] = [];
    public cdrListLocality: ColumnDependentReference[] = [];
    public cdrListIdentifier: ColumnDependentReference[] = [];
  
  public nameIsOff = 0;
  public accountIsOff = 0;
  public mailIsOff = 0;
  private subscriptions: Subscription[] = [];

  constructor(
    @Inject(EUI_SIDESHEET_DATA) public data: {
      selectedIdentity: PortalPersonReports,
      projectConfig: QerProjectConfig,
    },
    public readonly session: imx_SessionService,
    private readonly person: PersonService,
    private qerPersmission: QerPermissionsService,

    private readonly busyService: EuiLoadingService,
    private readonly snackbar: SnackBarService,
    private readonly sidesheetRef: EuiSidesheetRef,
    private readonly sidesheetService: EuiSidesheetService,
    private readonly translate: TranslateService,
    private readonly confirm: ConfirmationService,
    private readonly identityService: IdentitiesService,
    private readonly cdrFactoryService: CdrFactoryService,
    ) {
        this.setup();
      }
    

      public ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
      }


  public async submit(): Promise<void> {
    if (this.identityForm.valid) {


      let canSubmit = true;
      if (this.mailIsOff || this.nameIsOff) {
        canSubmit = await this.confirm.confirm({
          Title: '#LDS#Heading Create Identity With Same Properties',
          Message: this.mailIsOff && this.nameIsOff ?
            '#LDS#There is at least one identity with the same properties. Are you sure you want to create the identity?'
            : this.mailIsOff ?
              '#LDS#There is at least one identity with the same email address. Are you sure you want to create the identity?' :
              '#LDS#There is at least one identity with the same first and last name. Are you sure you want to create the identity?',
          identifier: 'create-new-identity-confirm-saving'
        });
      }

      if (!canSubmit) {
        return;
      }

      const overlayRef = this.busyService.show();
      try {
        await this.data.selectedIdentity.GetEntity().Commit(false);
        this.snackbar.open({ key: '#LDS#The identity has been successfully created.' });
        this.sidesheetRef.close(true);
      } finally {
        this.busyService.hide(overlayRef);
      }
    }
  }

  public async showDuplicates(type: 'account' | 'mail' | 'name'): Promise<void> {
    let duplicateParameter: DuplicateCheckParameter;

    switch (type) {
      case 'account':
        duplicateParameter = { centralAccount: this.data.selectedIdentity.GetEntity().GetColumn('CentralAccount').GetValue() };
        break;
      case 'mail':
        duplicateParameter = { defaultEmailAddress: this.data.selectedIdentity.GetEntity().GetColumn('DefaultEmailAddress').GetValue() };
        break;
      default:
        duplicateParameter = {
          firstName: this.data.selectedIdentity.GetEntity().GetColumn('FirstName').GetValue(),
          lastName: this.data.selectedIdentity.GetEntity().GetColumn('LastName').GetValue()
        };
        break;
    }

    await this.sidesheetService.open(DuplicatesSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading View Identities With Same Properties').toPromise(),
      padding: '0px',
      width: 'max(600px, 60%)',
      icon: 'contactinfo',
      testId: 'duplicate-identities-sidesheet',
      data: {
        projectConfig: this.data.projectConfig,
        get: async (param: CollectionLoadParameters) => this.identityService.getDuplicates(param),
        getFilter: (filter: DuplicateCheckParameter) => this.identityService.buildFilterForduplicates(filter),
        duplicateParameter,
        entitySchema: this.identityService.personAllSchema,
      }
    }).afterClosed().toPromise();
  }

  public update(cdr: ColumnDependentReference, list: ColumnDependentReference[]): void {
    const index = list.findIndex(elem => elem.column.ColumnName === cdr.column.ColumnName);
    if (index === -1) { return; }

    this.identityForm.removeControl(cdr.column.ColumnName);
    list.splice(index, 1, new BaseCdr(cdr.column));
  }

  public async checkValues(name: string): Promise<void> {
    switch (name) {
      case 'FirstName':
      case 'LastName':
        this.nameIsOff = (await this.identityService.getDuplicates(
          {
            filter: this.identityService.buildFilterForduplicates(
              {
                firstName: this.data.selectedIdentity.GetEntity().GetColumn('FirstName').GetValue(),
                lastName: this.data.selectedIdentity.GetEntity().GetColumn('LastName').GetValue(),
              }
            ), PageSize: -1
          }
        )).totalCount;
        break;
      case 'CentralAccount':
        this.accountIsOff = (await this.identityService.getDuplicates(
          {
            filter: this.identityService.buildFilterForduplicates(
              {
                centralAccount: this.data.selectedIdentity.GetEntity().GetColumn('CentralAccount').GetValue()
              }
            ), PageSize: -1
          }
        )).totalCount;
        break;
      case 'DefaultEmailAddress':
        this.mailIsOff = (await this.identityService.getDuplicates(
          {
            filter: this.identityService.buildFilterForduplicates(
              {
                defaultEmailAddress: this.data.selectedIdentity.GetEntity().GetColumn('DefaultEmailAddress').GetValue()
              }
            ), PageSize: -1
          }
        )).totalCount;
        break;
    }
  }

  private async setup(): Promise<void> {
    let IsOutsourceStaff: boolean = await this.qerPersmission.CCC_isOutsourceAdmin()
    let IsOutsourceHR: boolean = await this.qerPersmission.CCC_isHROutsourceAdmin()
    let sessionState = await this.session.getSessionState();
    let UID_Department: string = "";
    if (!IsOutsourceHR) {
      let MasterDataInteractive = (await this.person.getMasterdataInteractive(sessionState.UserUid))
      UID_Department = MasterDataInteractive.Data[0].UID_Department.value
    }
    this.data.selectedIdentity.GetEntity().GetColumn("IsExternal").PutValue(true)
    this.data.selectedIdentity.GetEntity().GetColumn("CCC_OutsourceEmployeeType").PutValue(1)

    this.data.selectedIdentity.GetEntity().GetColumn("UID_Department").PutValue(UID_Department)
    this.data.selectedIdentity.GetEntity().GetColumn("CompanyMember").PutValue("Outsource Staff")
    this.data.selectedIdentity.GetEntity().GetColumn("Gender").PutValue(1)

    // const personalColumns = ['PersonnelNumber', 'FirstName', "MiddleName", 'LastName', 'CCC_FirstName_AR', "CCC_MiddleName_AR", 'CCC_LastName_AR',
    //   "BirthDate", "Gender", "CentralAccount", "DefaultEmailAddress", "Title", "CCC_Title_AR",
    //   "PhoneMobile", "CCC_ADAccountRequired", "CCC_MailRequired", "UID_DialogCountry", "CCC_IdentityType", 'CCC_IdentityNumber'];
    // const organizationalColumns = ['UID_Department', "IsExternal", 'CCC_OutsourceEmployeeType', "EntryDate", "ExitDate", "UID_PersonHead"];
    // const localityColumns = ["City", "Building"];

    this.subscriptions.push(this.sidesheetRef.closeClicked().subscribe(async () => {
      if (this.identityForm.dirty) {
        const close = await this.confirm.confirmLeaveWithUnsavedChanges();
        if (close) {
          this.sidesheetRef.close(false);
        }
      } else {
        this.sidesheetRef.close(false);
      }
    }));

    // this.cdrListPersonal = personalColumns.map(col => new CCC_BaseCdr(this.data.selectedIdentity.GetEntity().GetColumn(col)));
    // //const organizationalColumns = this.data.projectConfig.PersonConfig.VI_Employee_MasterData_OrganizationalAttributes;
    // this.cdrListOrganizational = organizationalColumns.map(col => new CCC_BaseCdr(this.data.selectedIdentity.GetEntity().GetColumn(col)));
    // this.cdrListLocality = localityColumns.map(col => new BaseCdr(this.data.selectedIdentity.GetEntity().GetColumn(col)));
    const identifierColumns = ['FirstName', 'LastName', 'CentralAccount', 'DefaultEmailAddress'];
    this.cdrListIdentifier = this.cdrFactoryService.buildCdrFromColumnListAdvanced(this.data.selectedIdentity.GetEntity(),identifierColumns);

    const personalColumns = this.data.projectConfig.PersonConfig.VI_Employee_MasterData_Attributes
      .filter(personal => !identifierColumns.includes(personal));
    this.cdrListPersonal = this.cdrFactoryService.buildCdrFromColumnListAdvanced(this.data.selectedIdentity.GetEntity(),personalColumns);
   

    const organizationalColumns = this.data.projectConfig.PersonConfig.VI_Employee_MasterData_OrganizationalAttributes;
    this.cdrListOrganizational = this.cdrFactoryService.buildCdrFromColumnListAdvanced(this.data.selectedIdentity.GetEntity(),organizationalColumns);

    const localityColumns = this.data.projectConfig.PersonConfig.VI_Employee_MasterData_LocalityAttributes;
    this.cdrListLocality = this.cdrFactoryService.buildCdrFromColumnListAdvanced(this.data.selectedIdentity.GetEntity(),localityColumns);

  }

}
