/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
<<<<<<< HEAD
 * Copyright 2022 One Identity LLC.
=======
 * Copyright 2023 One Identity LLC.
>>>>>>> oned/v92
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

<<<<<<< HEAD
import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Params } from '@angular/router';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { PwoExtendedData, RecommendationEnum } from 'imx-api-qer';
=======
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Params } from '@angular/router';
import { EuiSidesheetService } from '@elemental-ui/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { PwoExtendedData, RecommendationEnum, ViewConfigData } from 'imx-api-qer';
>>>>>>> oned/v92
import { ValType, ExtendedTypedEntityCollection, TypedEntity, EntitySchema, DataModel, IClientProperty } from 'imx-qbm-dbts';
import {
  DataSourceToolbarSettings,
  ClassloggerService,
  AuthenticationService,
  DataTableComponent,
  SettingsService,
  IExtension,
  ExtService,
  buildAdditionalElementsString,
<<<<<<< HEAD
=======
  DataSourceToolbarViewConfig,
  ClientPropertyForTableColumns,
  BusyService,
>>>>>>> oned/v92
} from 'qbm';
import { ApprovalsSidesheetComponent } from './approvals-sidesheet/approvals-sidesheet.component';
import { Approval } from './approval';
import { ProjectConfigurationService } from '../project-configuration/project-configuration.service';
import { ApprovalsService } from './approvals.service';
import { WorkflowActionService } from './workflow-action/workflow-action.service';
import { ApprovalsLoadParameters } from './approvals-load-parameters';
import { ApprovalsDecision } from './approvals-decision.enum';
import { UserModelService } from '../user/user-model.service';
import { RecommendationSidesheetComponent } from './recommendation-sidesheet/recommendation-sidesheet.component';
<<<<<<< HEAD

=======
import { QerPermissionsService } from '../admin/qer-permissions.service';

import { ViewConfigService } from '../view-config/view-config.service';
import { isCancelPwO } from '../admin/qer-permissions-helper';
>>>>>>> oned/v92
@Component({
  templateUrl: './approvals-table.component.html',
  selector: 'imx-approvals-table',
  styleUrls: ['./approvals-table.component.scss'],
})
export class ApprovalsTableComponent implements OnInit, OnDestroy {
  public recApprove = RecommendationEnum.Approve;
  public recDeny = RecommendationEnum.Deny;

<<<<<<< HEAD
=======
  private isChiefApprover = false;

  public get tableReady() { return this.countTableLoading == 0; }
  private countTableLoading = 0;

>>>>>>> oned/v92
  @Input() public params: Params = {};
  public isUserEscalationApprover = false;

  public get canWithdrawAdditionalApprover(): boolean {
    return this.selectedItems.every((item) => item.canWithdrawAdditionalApprover(this.currentUserId));
  }
  public get canAddApprover(): boolean {
    return this.selectedItems.every((item) => item.canAddApprover(this.currentUserId));
  }
  public get canDelegateDecision(): boolean {
    return this.selectedItems.every((item) => item.canDelegateDecision(this.currentUserId));
  }
  public get canDenyApproval(): boolean {
    return this.selectedItems.every((item) => item.canDenyApproval(this.currentUserId));
  }
  public get canEscalateDecision(): boolean {
    return this.selectedItems.every((item) => item.canEscalateDecision);
  }
  public get canRerouteDecision(): boolean {
    return this.selectedItems.every((item) => item.canRerouteDecision(this.currentUserId));
  }
<<<<<<< HEAD
=======

  public get canResetReservation(): boolean{
    return this.selectedItems.every((item)=> item.canResetReservation(this.isChiefApprover));
  }

  public get canRecallInquiry(): boolean{
    return this.selectedItems.every((item)=>  item.canRecallInquiry);
  }


>>>>>>> oned/v92
  public get canPerformActions(): boolean {
    return (
      this.selectedItems.length > 0 &&
      (this.canWithdrawAdditionalApprover ||
        this.canAddApprover ||
        this.canDelegateDecision ||
        this.canDenyApproval ||
        this.canRerouteDecision ||
<<<<<<< HEAD
        this.canEscalateDecision)
=======
        this.canEscalateDecision ||
        this.canRecallInquiry || this.canResetReservation)
>>>>>>> oned/v92
    );
  }

  public currentUserId: string;
  public dstSettings: DataSourceToolbarSettings;
  public readonly entitySchema: EntitySchema;
  public canBeDelegated = false;
  public selectedItems: Approval[] = [];
  public approvalsCollection: ExtendedTypedEntityCollection<Approval, PwoExtendedData>;
<<<<<<< HEAD
=======
  public hasData = false;

  public busyService = new BusyService();
>>>>>>> oned/v92

  @ViewChild(DataTableComponent) private readonly table: DataTableComponent<TypedEntity>;

  private navigationState: ApprovalsLoadParameters;
  private approvalsDecision: ApprovalsDecision = ApprovalsDecision.none;
  private extensions: IExtension[] = [];
  private readonly subscriptions: Subscription[] = [];
  private readonly UID_ComplianceRuleId = 'cpl.UID_ComplianceRule';
  private dataModel: DataModel;
<<<<<<< HEAD
=======
  private viewConfig: DataSourceToolbarViewConfig;
  private viewConfigPath = 'itshop/approve/requests';

  private displayedColumns: ClientPropertyForTableColumns[];
>>>>>>> oned/v92

  constructor(
    public readonly actionService: WorkflowActionService,
    private readonly approvalsService: ApprovalsService,
<<<<<<< HEAD
    private readonly sideSheet: EuiSidesheetService,
    private readonly logger: ClassloggerService,
    private readonly busyService: EuiLoadingService,
=======
    private viewConfigService: ViewConfigService,
    private readonly sideSheet: EuiSidesheetService,
    private readonly logger: ClassloggerService,
>>>>>>> oned/v92
    private readonly projectConfig: ProjectConfigurationService,
    private readonly translator: TranslateService,
    settingsService: SettingsService,
    private readonly userModelService: UserModelService,
    authentication: AuthenticationService,
<<<<<<< HEAD
    private readonly ext: ExtService
  ) {
    this.navigationState = { PageSize: settingsService.DefaultPageSize, StartIndex: 0 };
    this.entitySchema = approvalsService.PortalItshopApproveRequestsSchema;
=======
    private readonly ext: ExtService,
    private readonly permissions : QerPermissionsService,
  ) {
    this.navigationState = { PageSize: settingsService.DefaultPageSize, StartIndex: 0 };
    this.entitySchema = approvalsService.PortalItshopApproveRequestsSchema;
    this.displayedColumns = [
      this.entitySchema?.Columns?.DisplayOrg,
      this.entitySchema?.Columns?.UiOrderState,
      this.entitySchema?.Columns?.OrderDate,
      this.entitySchema?.Columns?.PWOPriority,
      {
        ColumnName: 'decision',
        Type: ValType.String,
        afterAdditionals: true,
        untranslatedDisplay: '#LDS#Approval decision'
      },
      {
        ColumnName: 'recommendations',
        Type: ValType.String,
        untranslatedDisplay: '#LDS#Recommendation'
      },
    ];
>>>>>>> oned/v92
    this.subscriptions.push(
      this.actionService.applied.subscribe(async () => {
        this.getData();
        this.table.clearSelection();
      })
    );
    this.subscriptions.push(
      authentication.onSessionResponse.subscribe((state) => {
        this.currentUserId = state.UserUid;
        if (state.IsLoggedIn) {
          this.viewEscalation = false;
        }
      })
    );
<<<<<<< HEAD
    this.userModelService.getGroups().then((groups) => {
      this.isUserEscalationApprover = groups.find((g) => g.Name === 'vi_4_ITSHOPADMIN_CANCEL') != null;
=======
    this.userModelService.getFeatures().then((featureInfo) => {
      this.isUserEscalationApprover = isCancelPwO(featureInfo.Features || []);
>>>>>>> oned/v92
    });

    this.extensions = this.ext.Registry[this.UID_ComplianceRuleId];

    if (this.extensions && this.extensions.length > 0) {
      this.extensions[0].subject.subscribe((dstSettings: DataSourceToolbarSettings) => {
        this.dstSettings = dstSettings;
      });
    }
  }

  public async ngOnInit(): Promise<void> {
    this.parseParams();
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));

    try {
      this.dataModel = await this.approvalsService.getApprovalDataModel();
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
    await this.getData();
    this.handleDecision();
  }

  public ngOnDestroy(): void {
=======
    const isBusy = this.busyService.beginBusy();

    try {
      this.dataModel = await this.approvalsService.getApprovalDataModel();
      this.isChiefApprover = await this.permissions.isCancelPwO();
      this.viewConfig = await this.viewConfigService.getInitialDSTExtension(this.dataModel, this.viewConfigPath);

      await this.getData();
      this.handleDecision();
    } finally {
      isBusy.endBusy();
    }
  }

  public ngOnDestroy(): void {
    this.approvalsService.abortCall();
>>>>>>> oned/v92
    // Set service value back to false since the toggle value is stored there
    this.approvalsService.isChiefApproval = false;
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

<<<<<<< HEAD
=======
  public async updateConfig(config: ViewConfigData): Promise<void> {
    await this.viewConfigService.putViewConfig(config);
    this.viewConfig = await this.viewConfigService.getDSTExtensionChanges(this.viewConfigPath);
    this.dstSettings.viewConfig = this.viewConfig;
  }

  public async deleteConfigById(id: string): Promise<void> {
    await this.viewConfigService.deleteViewConfig(id);
    this.viewConfig = await this.viewConfigService.getDSTExtensionChanges(this.viewConfigPath);
    this.dstSettings.viewConfig = this.viewConfig;
  }

>>>>>>> oned/v92
  public get viewEscalation(): boolean {
    return this.approvalsService.isChiefApproval;
  }
  public set viewEscalation(val: boolean) {
    this.approvalsService.isChiefApproval = val;
  }

  public switchEscalation(): Promise<void> {
    // Set start index to 0 and clear selection before changing
    const navigationState = {
      ...this.navigationState,
      ...{
        StartIndex: 0,
      },
    };
    this.table.clearSelection();
    return this.getData(navigationState);
  }

  public getAdditionalText(entity: Approval, additional: IClientProperty[]): string {
    return buildAdditionalElementsString(entity.GetEntity(), additional);
  }

  public async getData(parameters?: ApprovalsLoadParameters): Promise<void> {
    if (parameters) {
      this.navigationState = parameters;
    }

<<<<<<< HEAD
    let busyIndicator: OverlayRef;
    setTimeout(() => (busyIndicator = this.busyService.show()));

    try {
      this.approvalsCollection = await this.approvalsService.get(this.navigationState);
=======
    const isBusy = this.busyService.beginBusy();

    try {
      this.approvalsCollection = await this.approvalsService.get(this.navigationState, {signal: this.approvalsService.abortController.signal});
      this.hasData = this.approvalsCollection?.totalCount > 0 || (this.navigationState.search ?? '') !== '';
>>>>>>> oned/v92
      this.updateTable();

      if (this.extensions && this.extensions[0]) {
        this.extensions[0].inputData = this.dstSettings;
      }
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(busyIndicator));
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  /**
   * Occurs when user clicks the edit button for a request
   *
   * @param pwo Selected PortalItshopApproveRequests.
   */
  public async editPwo(pwo: Approval): Promise<void> {
    this.logger.trace('New selected pwo', pwo);
    const doUpdate = await this.sideSheet
      .open(ApprovalsSidesheetComponent, {
        title: await this.translator.get('#LDS#Heading View Request Details').toPromise(),
<<<<<<< HEAD
        headerColour: 'blue',
        bodyColour: 'asher-gray',
        panelClass: 'imx-sidesheet',
=======
        subTitle: pwo.GetEntity().GetDisplay(),
>>>>>>> oned/v92
        padding: '0',
        width: 'max(700px, 60%)',
        testId: 'approvals-sidesheet',
        data: {
          pwo,
          itShopConfig: (await this.projectConfig.getConfig()).ITShopConfig,
<<<<<<< HEAD
=======
          fromInquiry: false,
>>>>>>> oned/v92
        },
      })
      .afterClosed()
      .toPromise();

    if (doUpdate) {
      await this.getData();
    }
  }

  /**
   * Occurs when user clicks the edit button for a request
   *
   * @param pwo Selected PortalItshopApproveRequests.
   */
  public async viewRecommendationDetails(pwo: Approval): Promise<void> {
    this.logger.trace('See recommendations of: ', pwo);
    const decision: 'approve' | 'deny' | null = await this.sideSheet
      .open(RecommendationSidesheetComponent, {
        title: await this.translator.get('#LDS#Heading View Recommendation Details').toPromise(),
<<<<<<< HEAD
        headerColour: 'blue',
        bodyColour: 'asher-gray',
=======
        subTitle: pwo.GetEntity().GetDisplay(),
>>>>>>> oned/v92
        panelClass: 'imx-sidesheet',
        padding: '0',
        width: 'max(700px, 60%)',
        testId: 'approval-recommendation-sidesheet',
        data: pwo.pwoData.Recommendation,
      })
      .afterClosed()
      .toPromise();

    if (decision === 'approve') {
      this.actionService.approve([pwo]);
    } else if (decision === 'deny') {
      this.actionService.deny([pwo]);
    }
  }

  public onSearch(keywords: string): Promise<void> {
    const navigationState = {
      ...this.navigationState,
      ...{
        StartIndex: 0,
        search: keywords,
      },
    };

    return this.getData(navigationState);
  }

  public onSelectionChanged(items: Approval[]): void {
    this.logger.trace(this, 'selection changed', items);
    this.selectedItems = items;
  }

  private updateTable(): void {
    if (this.approvalsCollection) {
<<<<<<< HEAD
=======
      const exportMethod = this.approvalsService.exportApprovalRequests(this.navigationState);
      exportMethod.initialColumns = this.displayedColumns.map(col => col.ColumnName);
>>>>>>> oned/v92
      this.dstSettings = {
        dataSource: this.approvalsCollection,
        extendedData: this.approvalsCollection.extendedData.Data,
        entitySchema: this.entitySchema,
        navigationState: this.navigationState,
<<<<<<< HEAD
        displayedColumns: [
          this.entitySchema.Columns.DisplayOrg,
          this.entitySchema.Columns.UiOrderState,
          this.entitySchema.Columns.OrderDate,
          this.entitySchema.Columns.PWOPriority,
          {
            ColumnName: 'decision',
            Type: ValType.String,
            afterAdditionals: true,
          },
          {
            ColumnName: 'edit',
            Type: ValType.String,
          },
          {
            ColumnName: 'recommendations',
            Type: ValType.String,
          },
        ],
        dataModel: this.dataModel,
        identifierForSessionStore: 'approvals-table',
=======
        displayedColumns: this.displayedColumns,
        dataModel: this.dataModel,
        viewConfig: this.viewConfig,
        filters: this.dataModel.Filters,
        exportMethod
>>>>>>> oned/v92
      };
    } else {
      this.dstSettings = undefined;
    }
  }

  private parseParams(): void {
    // Cases: VI_BuildITShopLink_Approve, VI_BuildITShopLink_Deny, VI_BuildITShopLink_Reject
    if (this.params.uid_personwantsorg && this.params.uid_pwohelperpwo && this.params.decision) {
      this.navigationState.uid_personwantsorg = this.params.uid_personwantsorg;
      this.navigationState.uid_pwohelperpwo = this.params.uid_pwohelperpwo;

      // Will otherwise result in a string
      this.approvalsDecision = ApprovalsDecision[this.params.decision.toLowerCase()] as unknown as ApprovalsDecision;
      return;
    }

    // Case: VI_BuildITShopLink_Show_for_Approver
    if (this.params.uid_personwantsorg && this.params.uid_pwohelperpwo) {
      this.navigationState.uid_personwantsorg = this.params.uid_personwantsorg;
      this.navigationState.uid_pwohelperpwo = this.params.uid_pwohelperpwo;
      return;
    }

    // Case: VI_BuildITShopLink_Pending
    // Nothing to handle here.
  }

  private handleDecision(): void {
    if (
      this.approvalsDecision === ApprovalsDecision.none ||
      this.approvalsCollection.Data == null ||
      this.approvalsCollection.Data.length === 0
    ) {
      return;
    }

    switch (this.approvalsDecision) {
      case ApprovalsDecision.approve:
        this.actionService.approve(this.approvalsCollection.Data);
        break;
      case ApprovalsDecision.deny:
        this.actionService.deny(this.approvalsCollection.Data);
        break;
      case ApprovalsDecision.denydecision:
        this.actionService.denyDecisions(this.approvalsCollection.Data);
        break;
    }
  }
}
