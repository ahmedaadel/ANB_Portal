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
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
=======
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormGroup, UntypedFormArray, UntypedFormControl } from '@angular/forms';
>>>>>>> oned/v92
import { EuiLoadingService, EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { BehaviorSubject, Subscription } from 'rxjs';

<<<<<<< HEAD
import { ColumnDependentReference, BaseCdr, SnackBarService, ClassloggerService } from 'qbm';
=======
import { ColumnDependentReference, BaseCdr, SnackBarService, ClassloggerService, LdsReplacePipe } from 'qbm';
>>>>>>> oned/v92
import { UserModelService } from 'qer';
import { FilterModel } from '../policy-editor/filter-model';
import { Policy } from '../policy.interface';
import { PolicyService } from '../policy.service';
import { FilterElementColumnService } from '../editors/filter-element-column.service';
import { ConfirmDeactivationComponent } from '../confirm-deactivation/confirm-deactivation.component';
<<<<<<< HEAD
import { ConfirmationService } from 'qbm';
import { EntitySchema } from 'imx-qbm-dbts';

@Component({
  templateUrl: './edit-master-data.component.html',
  styleUrls: ['./edit-master-data.component.scss']
})
export class EditMasterDataComponent implements OnInit, OnDestroy {

  public readonly formGroup: FormGroup;
  public readonly schema: EntitySchema;
  public objectProperties: { [key: string]: ({ cdr: ColumnDependentReference, formControl?: FormControl }) } = {};
  public readonly formArray: FormArray;
  public reload = false;
  public filterModel: FilterModel;
  public hasAttestations: boolean;
=======
import { ConfirmationService, HELP_CONTEXTUAL, HelpContextualValues } from 'qbm';
import { EntitySchema } from 'imx-qbm-dbts';
import { TranslateService } from '@ngx-translate/core';
import { PolicyEditorComponent } from '../policy-editor/policy-editor.component';

@Component({
  templateUrl: './edit-master-data.component.html',
  styleUrls: ['./edit-master-data.component.scss'],
})
export class EditMasterDataComponent implements OnInit, OnDestroy {
  public readonly formGroup: UntypedFormGroup;
  public readonly schema: EntitySchema;
  public objectProperties: { [key: string]: { cdr: ColumnDependentReference; formControl?: UntypedFormControl } } = {};
  public readonly formArray: UntypedFormArray;
  public reload = false;
  public filterModel: FilterModel;
  public hasAttestations: boolean;
  public contextId: HelpContextualValues;

  @ViewChild('filterControl', { static: true }) policyEditor: PolicyEditorComponent;
>>>>>>> oned/v92

  private isPoliyEditorEnabled = true;
  private valueChangedSubscription: Subscription;
  private closeSubscription: Subscription;
<<<<<<< HEAD
=======
  private threshold = -1;
>>>>>>> oned/v92

  constructor(
    @Inject(EUI_SIDESHEET_DATA) public readonly policy: Policy,
    public readonly sidesheetRef: EuiSidesheetRef,
    private readonly busyService: EuiLoadingService,
    private readonly snackBar: SnackBarService,
    private readonly dialog: MatDialog,
    private readonly policyService: PolicyService,
    private readonly columnService: FilterElementColumnService,
    private readonly logger: ClassloggerService,
    private readonly userService: UserModelService,
<<<<<<< HEAD
    private readonly confirmationService: ConfirmationService
  ) {

    this.schema = policyService.AttestationPolicyEditSchema;
    this.initOrRefreshCdrDictionary();

    this.formGroup = new FormGroup({
      formArray: new FormArray([])
    });
    this.formArray = this.formGroup.get('formArray') as FormArray;
    this.closeSubscription = this.sidesheetRef.closeClicked().subscribe(async () => {
      if (!this.formGroup.dirty
        || await confirmationService.confirmLeaveWithUnsavedChanges()) {
=======
    private readonly confirmationService: ConfirmationService,
    private readonly translate: TranslateService,
    private readonly ldsReplace: LdsReplacePipe
  ) {
    this.schema = policyService.AttestationPolicyEditSchema;
    this.initOrRefreshCdrDictionary();

    this.formGroup = new UntypedFormGroup({
      formArray: new UntypedFormArray([]),
    });
    this.formArray = this.formGroup.get('formArray') as UntypedFormArray;
    this.closeSubscription = this.sidesheetRef.closeClicked().subscribe(async () => {
      if (!this.formGroup.dirty || (await confirmationService.confirmLeaveWithUnsavedChanges())) {
>>>>>>> oned/v92
        this.sidesheetRef.close(this.reload);
      }
    });

    this.filterModel = new FilterModel(this.columnService, new BehaviorSubject<boolean>(true), new BehaviorSubject<string>(undefined));
    this.filterModel.uidAttestationObject = this.policy.policy.UID_AttestationObject.value;
    this.filterModel.policyFilterData = this.policy.filterData;
  }

  public ngOnDestroy(): void {
    if (this.valueChangedSubscription) {
      this.valueChangedSubscription.unsubscribe();
    }
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

<<<<<<< HEAD
  public async ngOnInit(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      this.hasAttestations = (await this.policyService.getRunCountForPolicy(this.policy.policy.GetEntity().GetKeys()[0])) > 0;
=======
  public get objectType(): string {
    return this.policy.policy.GetEntity().TypeName;
  }

  public get objectUid(): string {
    return this.policy.policy.GetEntity().GetKeys().join(',');
  }

  public async ngOnInit(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));
    try {
      this.hasAttestations = (await this.policyService.getRunCountForPolicy(this.policy.policy.GetEntity().GetKeys()[0])) > 0;
      this.threshold = await this.policyService.getCasesThreshold();
>>>>>>> oned/v92
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
    if (this.policy.isNew) {
      this.formGroup.markAsDirty();
    }
    this.logger.trace('call isEnabledSubject with', this.policy.policy.UID_QERPickCategory.value == null);
<<<<<<< HEAD
    this.filterModel.isEnabledSubject.next(this.policy.policy.UID_QERPickCategory.value == null ||
      this.policy.policy.UID_QERPickCategory.value === '');
  }

  public addControl(evt: FormControl, columnName: string): void {
=======
    this.filterModel.isEnabledSubject.next(
      this.policy.policy.UID_QERPickCategory.value == null || this.policy.policy.UID_QERPickCategory.value === ''
    );

    this.contextId = this.policy.isNew ? HELP_CONTEXTUAL.AttestationPoliciesCreate : HELP_CONTEXTUAL.AttestationPoliciesEdit
  }

  public addControl(evt: UntypedFormControl, columnName: string): void {
>>>>>>> oned/v92
    setTimeout(() => {
      this.formGroup.removeControl(columnName);
      this.objectProperties[columnName].formControl = evt;
      this.formGroup.addControl(columnName, evt);
      this.logger.debug(this, 'new Control added to form group');

<<<<<<< HEAD

=======
>>>>>>> oned/v92
      if (columnName === 'IsInActive') {
        if (this.valueChangedSubscription) {
          this.valueChangedSubscription.unsubscribe();
        }
<<<<<<< HEAD
        this.valueChangedSubscription = evt.valueChanges.subscribe(value => {
=======
        this.valueChangedSubscription = evt.valueChanges.subscribe((value) => {
>>>>>>> oned/v92
          this.confirmDeactivation(value);
        });
      }
    });
  }

  public updateMethodAndFilter(): void {
    this.objectProperties.UID_PWODecisionMethod.cdr = new BaseCdr(this.policy.policy.UID_PWODecisionMethod.Column);
    this.filterModel.attestationObjectSubject.next(this.policy.policy.UID_AttestationObject.value);
    this.policy.filterData = {
      IsReadOnly: this.policy?.filterData == null || this.policy?.filterData.IsReadOnly,
      Filter: { Elements: [] },
<<<<<<< HEAD
      InfoDisplay: []
=======
      InfoDisplay: [],
>>>>>>> oned/v92
    };
    this.logger.debug(this, 'UID_PWODecisionMethod updated and filter removed');
  }

  public async updateAttestation(): Promise<void> {
    this.objectProperties.Attestators.cdr = new BaseCdr(this.policy.policy.Attestators.Column);
    this.logger.debug(this, 'Attestator cdr updated');
  }

<<<<<<< HEAD

  public async updatePickCategory(): Promise<void> {
    const showConfirmation =
      this.isPoliyEditorEnabled
      && this.filterModel.policyFilterData?.Filter.Elements.length
      && (this.policy.policy.UID_QERPickCategory.value?.length > 0);
=======
  public async updateReadOnlySchedule(){
    this.objectProperties.UID_DialogSchedule.cdr = new BaseCdr(this.policy.policy.UID_DialogSchedule.Column);
    this.logger.debug(this, 'UID_DialogSchedule cdr updated');
  }

  public async updatePickCategory(): Promise<void> {
    const showConfirmation =
      this.isPoliyEditorEnabled &&
      this.filterModel.policyFilterData?.Filter.Elements.length &&
      this.policy.policy.UID_QERPickCategory.value?.length > 0;
>>>>>>> oned/v92

    this.logger.debug(this, 'Checked for existing filters if sample data was changed from null to value', showConfirmation);

    if (showConfirmation) {
      const confirmed = await this.confirmationService.confirm({
        Title: '#LDS#Heading Use Sample Data',
<<<<<<< HEAD
        Message: '#LDS#Do you want to use the selected sample data instead of the specified conditions?'
=======
        Message: '#LDS#Do you want to use the selected sample data instead of the specified conditions?',
>>>>>>> oned/v92
      });
      if (confirmed) {
        this.policy.filterData = {
          IsReadOnly: this.policy.filterData.IsReadOnly,
          Filter: { Elements: [] },
<<<<<<< HEAD
          InfoDisplay: []
=======
          InfoDisplay: [],
>>>>>>> oned/v92
        };
        this.logger.debug(this, 'filter removed due to sample data seleted');
      } else {
        let overlayRef: OverlayRef;
<<<<<<< HEAD
        setTimeout(() => overlayRef = this.busyService.show());
=======
        setTimeout(() => (overlayRef = this.busyService.show()));
>>>>>>> oned/v92
        try {
          await this.policy.policy.UID_QERPickCategory.Column.PutValue(undefined);
        } finally {
          setTimeout(() => this.busyService.hide(overlayRef));
        }
        this.objectProperties.UID_QERPickCategory.cdr = new BaseCdr(this.policy.policy.UID_QERPickCategory.Column);
        this.logger.debug(this, 'Sample data is removed');
      }
    }

    this.isPoliyEditorEnabled = this.policy.policy.UID_QERPickCategory.value == null || this.policy.policy.UID_QERPickCategory.value === '';
    this.filterModel.isEnabledSubject.next(this.isPoliyEditorEnabled);
    this.logger.debug(this, 'Visibility of the policy editor:', this.isPoliyEditorEnabled ? 'visible' : 'hidden');
  }

  public async submit(): Promise<void> {
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {

      const filter = this.filterModel.policyFilterData.Filter;

      this.policy.policy.extendedData = [
        (this.policy.policy.UID_QERPickCategory.value == null ||
          this.policy.policy.UID_QERPickCategory.value === '')
          ? filter : null];
=======
    if (!(await this.confirmCreation())) {
      return;
    }
    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));
    try {
      const filter = this.filterModel.policyFilterData.Filter;

      this.policy.policy.extendedData = [
        this.policy.policy.UID_QERPickCategory.value == null || this.policy.policy.UID_QERPickCategory.value === '' ? filter : null,
      ];
>>>>>>> oned/v92
      await this.policy.policy.GetEntity().Commit(false);
      this.logger.debug(this, 'data submitted');

      this.sidesheetRef.close(true);
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }

<<<<<<< HEAD
    this.snackBar.open({
      key: '#LDS#The attestation policy "{0}" has been successfully saved.',
      parameters: [this.policy.policy.GetEntity().GetDisplay()]
    }, '#LDS#Close');
=======
    this.snackBar.open(
      {
        key: '#LDS#The attestation policy "{0}" has been successfully saved.',
        parameters: [this.policy.policy.GetEntity().GetDisplay()],
      },
      '#LDS#Close'
    );
>>>>>>> oned/v92
    this.reload = true;
  }

  public async delete(): Promise<void> {
<<<<<<< HEAD
    if (await this.confirmationService.confirm({
      Title: '#LDS#Heading Delete Attestation Policy',
      Message: '#LDS#Are you sure you want to delete the attestation policy?'
    })) {
      await this.policyService.deleteAttestationPolicy(this.policy.policy.GetEntity().GetKeys()[0]);
      this.logger.debug(this, 'policy is deleted');

      this.snackBar.open({
        key: '#LDS#The attestation policy "{0}" has been successfully deleted.',
        parameters: [this.policy.policy.GetEntity().GetDisplay()]
      }, '#LDS#Close');
=======
    if (
      await this.confirmationService.confirm({
        Title: '#LDS#Heading Delete Attestation Policy',
        Message: '#LDS#Are you sure you want to delete the attestation policy?',
      })
    ) {
      await this.policyService.deleteAttestationPolicy(this.policy.policy.GetEntity().GetKeys()[0]);
      this.logger.debug(this, 'policy is deleted');

      this.snackBar.open(
        {
          key: '#LDS#The attestation policy "{0}" has been successfully deleted.',
          parameters: [this.policy.policy.GetEntity().GetDisplay()],
        },
        '#LDS#Close'
      );
>>>>>>> oned/v92
      this.sidesheetRef.close(true);
    }
  }

<<<<<<< HEAD
=======
  private async confirmCreation(): Promise<boolean> {
    if (!this.policyEditor?.showWarning) {
      return true;
    }
    const message = this.ldsReplace.transform(
      await this.translate
        .get(
          '#LDS#This attestation policy affects more than {0} objects. Running this attestation policy may take some time and generate notifications to many approvers. Are you sure you want to save the attestation policy?'
        )
        .toPromise(),
      this.threshold
    );
    return this.confirmationService.confirm({
      Title: '#LDS#Heading Many Objects Affected',
      Message: message,
    });
  }

>>>>>>> oned/v92
  private async confirmDeactivation(deativate: boolean): Promise<void> {
    if (!deativate) {
      return;
    }

    const hasPending = this.policy.policy.CountOpenCases.value > 0;
    if (!hasPending) {
      return;
    }

    this.logger.debug(this, 'confirm deactivation of pending policy');

    const ref = this.dialog.open(ConfirmDeactivationComponent, {
      disableClose: true,
      autoFocus: false,
<<<<<<< HEAD
      panelClass: 'imx-messageDialog'
=======
      panelClass: 'imx-messageDialog',
>>>>>>> oned/v92
    });
    const result = await ref.afterClosed().toPromise();

    if (result) {
      this.policy.policy.IsInActive.value = false;
      this.objectProperties.IsInActive.cdr = new BaseCdr(this.policy.policy.IsInActive.Column);
      this.logger.debug(this, 'column IsInActive was reseted');
    }
  }

  private initOrRefreshCdrDictionary(refresh: boolean = false): void {
    if (this.policy.policy == null) {
      return;
    }

    const columns = [
      this.policy.policy.Ident_AttestationPolicy.Column,
      this.policy.policy.Description.Column,
      this.policy.policy.UID_AttestationObject.Column,
      this.policy.policy.UID_PWODecisionMethod.Column,
      this.policy.policy.Attestators.Column,
      this.policy.policy.UID_DialogSchedule.Column,
      this.policy.policy.SolutionDays.Column,
      this.policy.policy.UID_PersonOwner.Column,
      this.policy.policy.RiskIndex.Column,
      this.policy.policy.Areas.Column,
      this.policy.policy.UID_AttestationPolicyGroup.Column,
      this.policy.policy.UID_DialogCulture.Column,
      this.policy.policy.IsShowElementsInvolved.Column,
      this.policy.policy.IsInActive.Column,
      this.policy.policy.IsAutoCloseOldCases.Column,
      this.policy.policy.LimitOfOldCases.Column,
      this.policy.policy.IsApproveRequiresMfa.Column,
<<<<<<< HEAD
      this.policy.policy.UID_QERPickCategory.Column
=======
      this.policy.policy.UID_QERPickCategory.Column,
>>>>>>> oned/v92
    ];

    for (const column of columns) {
      if (!column.GetMetadata().CanSee()) {
        continue;
      }
      if (refresh) {
        this.objectProperties[column.ColumnName].cdr = new BaseCdr(column);
      } else {
        this.objectProperties[column.ColumnName] = { cdr: new BaseCdr(column) };
      }
    }
  }
}
