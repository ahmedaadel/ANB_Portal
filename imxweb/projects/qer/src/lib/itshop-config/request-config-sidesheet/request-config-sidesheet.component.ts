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

import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { PortalShopConfigStructure } from 'imx-api-qer';
import { TypedEntityCollectionData } from 'imx-qbm-dbts';
import { BaseCdr, ClassloggerService, ColumnDependentReference, StorageService, HELPER_ALERT_KEY_PREFIX, TabControlHelper } from 'qbm';
=======
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';

import { PortalShopConfigStructure } from 'imx-api-qer';
import { TypedEntityCollectionData } from 'imx-qbm-dbts';
import { BaseCdr, ClassloggerService, ColumnDependentReference, StorageService, HELPER_ALERT_KEY_PREFIX, ConfirmationService, HELP_CONTEXTUAL } from 'qbm';
>>>>>>> oned/v92
import { ACTION_DISMISS, RequestsService } from '../requests.service';

export interface RequestConfigSidesheetData {
  requestConfig: PortalShopConfigStructure;
  isNew?: boolean;
}

const helperAlertKey = `${HELPER_ALERT_KEY_PREFIX}_requestShopDetails`;

@Component({
  selector: 'imx-request-config-sidesheet',
  templateUrl: './request-config-sidesheet.component.html',
<<<<<<< HEAD
  styleUrls: ['../request-config-sidesheet-common.scss']
})
export class RequestConfigSidesheetComponent implements OnInit {

  public readonly detailsFormGroup: FormGroup;
  public cdrList: ColumnDependentReference[] = [];
  public shelfData: TypedEntityCollectionData<PortalShopConfigStructure>;
  private shelfCount: number;
  private memberCount: number;

  constructor(
    formBuilder: FormBuilder,
=======
  styleUrls: ['../request-config-sidesheet-common.scss'],
})
export class RequestConfigSidesheetComponent implements OnInit {
  public readonly detailsFormGroup: UntypedFormGroup;
  public cdrList: ColumnDependentReference[] = [];
  public shelfData: TypedEntityCollectionData<PortalShopConfigStructure>;
  public detailsContextIds = HELP_CONTEXTUAL.ConfigurationRequestsDetail;
  private shelfCount: number;
  private memberCount: number;
  private reload= false;

  constructor(
    formBuilder: UntypedFormBuilder,
>>>>>>> oned/v92
    public requestsService: RequestsService,
    @Inject(EUI_SIDESHEET_DATA) public data: RequestConfigSidesheetData,
    private readonly storageService: StorageService,
    private readonly logger: ClassloggerService,
<<<<<<< HEAD
    private readonly sidesheet: EuiSidesheetService
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

  get selectedRequestConfigKey(): string {
    const keys = this.data?.requestConfig?.GetEntity()?.GetKeys();
    return keys?.length ? keys[0] : undefined;
  }

  get requestConfigContainsShelves(): boolean {
    return this.shelfCount > 0;
  }

  get requestConfigHasMembers(): boolean {
    return this.memberCount > 0;
  }

  get deleteHelperTooltip(): string {
    let display = '';
    if (this.requestConfigContainsShelves || this.requestConfigHasMembers) {
      display = '#LDS#To enable deletion, remove all shelves and access members.';
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

  public async ngOnInit(): Promise<void> {
    this.setup();
  }

<<<<<<< HEAD
  public cancel(): void {
    this.sidesheet.close();
  }

=======
>>>>>>> oned/v92
  public onShelfCountUpdated(count: number): void {
    this.shelfCount = count;
  }

  public onMemberCountUpdated(count: number): void {
    this.memberCount = count;
  }

  public async delete(): Promise<void> {
    await this.requestsService.deleteRequestConfiguration(this.selectedRequestConfigKey);
    this.requestsService.openSnackbar(this.requestsService.LdsShopHasBeenDeleted, ACTION_DISMISS);
<<<<<<< HEAD
    this.sidesheet.close();
=======
    this.sidesheetRef.close(true);
>>>>>>> oned/v92
  }

  public async saveRequestConfig(): Promise<void> {
    if (this.detailsFormGroup.valid) {
      this.logger.debug(this, `Saving request changes`);
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
      const newRequestConfig = await this.requestsService.createNewRequestConfig(this.data.requestConfig);
      this.processSaveConfirmation(true);
      if (newRequestConfig?.Data?.length) {
        this.data.requestConfig = newRequestConfig.Data[0];
        this.data.isNew = false;
      }
    } finally {
      this.requestsService.handleCloseLoader();
    }
  }

  private processSaveConfirmation(isNew: boolean = false): void {
    this.detailsFormGroup.markAsPristine();
    if (isNew) {
      this.requestsService.openSnackbar(this.requestsService.LdsShopHasBeenCreated, ACTION_DISMISS);
    } else {
      this.requestsService.openSnackbar(this.requestsService.LdsShopHasBeenSaved, ACTION_DISMISS);
    }
  }

  private async setup(): Promise<void> {
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
