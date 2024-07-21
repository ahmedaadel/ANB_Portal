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

import { Component, Inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { BaseCdr, ClassloggerService, ColumnDependentReference, HELPER_ALERT_KEY_PREFIX, StorageService, TabControlHelper } from 'qbm';
=======
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';

import { BaseCdr, ClassloggerService, ColumnDependentReference, ConfirmationService, HELPER_ALERT_KEY_PREFIX, StorageService, HELP_CONTEXTUAL } from 'qbm';
>>>>>>> oned/v92
import { RequestConfigSidesheetData } from '../request-config-sidesheet/request-config-sidesheet.component';
import { EntitlementCountUpdateData } from '../request-shelf-entitlements/request-shelf-entitlements.component';
import { ACTION_DISMISS, RequestsService } from '../requests.service';

const helperAlertKey = `${HELPER_ALERT_KEY_PREFIX}_requestShopShelfDetails`;

@Component({
  selector: 'imx-request-shelf-sidesheet',
  templateUrl: './request-shelf-sidesheet.component.html',
<<<<<<< HEAD
  styleUrls: ['../request-config-sidesheet-common.scss']
})
export class RequestShelfSidesheetComponent implements OnInit {

  public readonly detailsFormGroup: FormGroup;
  public cdrList: ColumnDependentReference[] = [];
  private entitlementCount: number;

  constructor(
    formBuilder: FormBuilder,
=======
  styleUrls: ['../request-config-sidesheet-common.scss'],
})
export class RequestShelfSidesheetComponent implements OnInit {
  public readonly detailsFormGroup: UntypedFormGroup;
  public cdrList: ColumnDependentReference[] = [];
  public detailsContextIds = HELP_CONTEXTUAL.ConfigurationRequestsShelvesDetail;
  private entitlementCount: number;
  private reload = false;

  constructor(
    formBuilder: UntypedFormBuilder,
>>>>>>> oned/v92
    public requestsService: RequestsService,
    @Inject(EUI_SIDESHEET_DATA) public data: RequestConfigSidesheetData,
    private readonly logger: ClassloggerService,
    private readonly storageService: StorageService,
<<<<<<< HEAD
    private readonly sidesheet: EuiSidesheetService,
  ) {
    this.detailsFormGroup = new FormGroup({ formArray: formBuilder.array([]) });
=======
    private readonly sidesheetRef: EuiSidesheetRef,
    confirm: ConfirmationService
  ) {
    this.detailsFormGroup = new UntypedFormGroup({ formArray: formBuilder.array([]) });
    sidesheetRef.closeClicked().subscribe(async () => {
      if (this.detailsFormGroup.pristine || (await confirm.confirmLeaveWithUnsavedChanges())) {
        this.data.requestConfig.GetEntity().DiscardChanges();
        sidesheetRef.close(this.reload);
      }
    });
>>>>>>> oned/v92
  }

  get selectedShelfId(): string {
    const keys = this.data?.requestConfig?.GetEntity()?.GetKeys();
    return keys?.length ? keys[0] : undefined;
  }

  get shelfHasEntitlements(): boolean {
    return this.entitlementCount > 0;
  }

  get deleteHelperTooltip(): string {
    let display = '';
    if (this.shelfHasEntitlements) {
      display = '#LDS#To enable deletion, remove all assigned products.';
    } else if (this.entitlementRecentlyDeleted) {
      display = '#LDS#Currently, products are being removed. Deletion will be enabled in a few moments.';
    }
    return display;
  }

  get showHelperAlert(): boolean {
    return !this.storageService.isHelperAlertDismissed(helperAlertKey);
  }

<<<<<<< HEAD
  get formArray(): FormArray {
    return this.detailsFormGroup.get('formArray') as FormArray;
=======
  get formArray(): UntypedFormArray {
    return this.detailsFormGroup.get('formArray') as UntypedFormArray;
>>>>>>> oned/v92
  }

  get entitlementRecentlyDeleted(): boolean {
    let recentlyDeleted = false;
    if (this.selectedShelfId) {
      // If entitlements were recently removed, then we should only enable delete of the shelf
      // after a timeout has passed (tracked through the service)
      recentlyDeleted = this.requestsService.shelvesBlockedDeleteStatus[this.selectedShelfId] || false;
    }
    return recentlyDeleted;
  }

  public ngOnInit(): void {
    this.setup();
  }

<<<<<<< HEAD
  public cancel(): void {
    this.sidesheet.close();
  }

=======
>>>>>>> oned/v92
  public onEntitlementCountUpdated(updateData: EntitlementCountUpdateData): void {
    this.entitlementCount = updateData.count;
    if (updateData.recentDeleteAction && this.entitlementCount === 0) {
      // Use the service to manage the delete timeout, so we maintain the state if a user
      // navugates away from this sidesheet/page
      this.requestsService.manageShelfDeleteStatus(this.selectedShelfId);
    }
  }

  public async delete(): Promise<void> {
    await this.requestsService.deleteRequestConfiguration(this.selectedShelfId);
    this.requestsService.openSnackbar('#LDS#The shelf has been successfully deleted.', ACTION_DISMISS);
<<<<<<< HEAD
    this.sidesheet.close();
=======
    this.sidesheetRef.close(true);
>>>>>>> oned/v92
  }

  public async saveShelf(): Promise<void> {
    if (this.detailsFormGroup.valid) {
      this.logger.debug(this, `Saving request shelf changes`);
      if (this.data.isNew) {
        this.createNew();
      } else {
        this.requestsService.handleOpenLoader();
        try {
          await this.data.requestConfig.GetEntity().Commit(true);
          this.processSaveConfirmation();
        } finally {
          this.requestsService.handleCloseLoader();
        }
      }
<<<<<<< HEAD
=======
      this.reload = true;
>>>>>>> oned/v92
    }
  }

  public onHelperDismissed(): void {
    this.storageService.storeHelperAlertDismissal(helperAlertKey);
  }

  private async createNew(): Promise<void> {
    this.requestsService.handleOpenLoader();
    try {
      this.data.requestConfig.reload = true;
      const newShelf = await this.requestsService.createNewRequestConfig(this.data.requestConfig);
      this.processSaveConfirmation(true);
      if (newShelf?.Data?.length) {
        this.data.requestConfig = newShelf.Data[0];
        this.data.isNew = false;
      }
    } finally {
      this.requestsService.handleCloseLoader();
    }
  }

  private processSaveConfirmation(isNew: boolean = false): void {
    this.detailsFormGroup.markAsPristine();
    if (isNew) {
      this.requestsService.openSnackbar('#LDS#The shelf has been successfully created.', ACTION_DISMISS);
    } else {
      this.requestsService.openSnackbar('#LDS#The shelf has been successfully saved.', ACTION_DISMISS);
    }
  }

  private setup(): void {
<<<<<<< HEAD
    /**
     * Resolve an issue where the mat-tab navigation arrows could appear on first load
     */
    setTimeout(() => {
      TabControlHelper.triggerResizeEvent();
    });

=======
>>>>>>> oned/v92
    this.cdrList = [
      new BaseCdr(this.data.requestConfig.Ident_Org.Column),
      new BaseCdr(this.data.requestConfig.Description.Column),
      new BaseCdr(this.data.requestConfig.UID_OrgAttestator.Column),
      new BaseCdr(this.data.requestConfig.DecisionMethods.Column),
      new BaseCdr(this.data.requestConfig.UID_PersonHead.Column),
      new BaseCdr(this.data.requestConfig.UID_PersonHeadSecond.Column),
    ];
  }
<<<<<<< HEAD

=======
>>>>>>> oned/v92
}
