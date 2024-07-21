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

import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { EuiDownloadOptions, EuiLoadingService, EuiSidesheetRef, EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
=======
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray } from '@angular/forms';
import { EuiDownloadOptions, EuiLoadingService, EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
>>>>>>> oned/v92

import {
  ColumnDependentReference,
  BaseCdr, ClassloggerService,
  SystemInfoService,
<<<<<<< HEAD
  TabControlHelper,
=======
>>>>>>> oned/v92
  SnackBarService,
  ElementalUiConfigService,
  ConfirmationService,
  TabItem,
  ExtService,
} from 'qbm';
import {
  HelperAlertContent,
  ProjectConfigurationService,
  ServiceItemsEditFormComponent
} from 'qer';
import { PortalTargetsystemUnsGroupServiceitem } from 'imx-api-tsb';
import { TypedEntity } from 'imx-qbm-dbts';
import { GroupsService } from '../groups.service';
import { GroupSidesheetData } from '../groups.models';
import { GroupsReportsService } from '../groups-reports.service';
import { GroupMembersComponent } from './group-members/group-members.component';
import { DbObjectKeyBase } from '../../target-system/db-object-key-wrapper.interface';

@Component({
  selector: 'imx-group-sidesheet',
  templateUrl: './group-sidesheet.component.html',
  styleUrls: ['./group-sidesheet.component.scss'],
})
export class GroupSidesheetComponent implements OnInit {
  public get groupId(): string {
    return this.sidesheetData.group.GetEntity().GetKeys().join('');
  }

  public get isAdmin(): boolean {
    return this.sidesheetData.isAdmin;
  }

<<<<<<< HEAD
  public readonly serviceItemFormGroup: FormGroup;
  public readonly detailsFormGroup: FormGroup;
=======
  public readonly serviceItemFormGroup: UntypedFormGroup;
  public readonly detailsFormGroup: UntypedFormGroup;
>>>>>>> oned/v92
  public cdrList: ColumnDependentReference[] = [];
  public isRequestable: boolean;
  public parameters: { objecttable: string; objectuid: string; };
  public unsGroupDbObjectKey: DbObjectKeyBase;
  public reportDownload: EuiDownloadOptions;
  public buttonBarExtensionReferrer: { type: string, uidGroup: string, defaultDownloadOptions: EuiDownloadOptions };
  public readonly pendingAttestations: HelperAlertContent = { loading: false };

  public canCreateServiceItem = false;

  @ViewChild('groupMembers') public groupMembersComponent: GroupMembersComponent;
  @ViewChild('serviceItemsEditForm') public serviceItemsEditForm: ServiceItemsEditFormComponent;

  public dynamicTabs: TabItem[] = [];

  constructor(
<<<<<<< HEAD
    formBuilder: FormBuilder,
=======
    formBuilder: UntypedFormBuilder,
>>>>>>> oned/v92
    public groups: GroupsService,
    @Inject(EUI_SIDESHEET_DATA) private readonly sidesheetData: GroupSidesheetData,
    private readonly logger: ClassloggerService,
    private readonly busyService: EuiLoadingService,
    private readonly snackbar: SnackBarService,
<<<<<<< HEAD
    private readonly sidesheet: EuiSidesheetService,
=======
>>>>>>> oned/v92
    private readonly elementalUiConfigService: ElementalUiConfigService,
    private readonly systemInfoService: SystemInfoService,
    private readonly reports: GroupsReportsService,
    private readonly configService: ProjectConfigurationService,
    private readonly sidesheetRef: EuiSidesheetRef,
    private readonly tabService: ExtService,
    private readonly confirmation: ConfirmationService,
  ) {

    this.sidesheetRef.closeClicked().subscribe(async () => {
      if (!this.detailsFormGroup.dirty && !this.serviceItemFormGroup.dirty) {
        this.sidesheetRef.close();
        return;
      }

      if (await this.confirmation.confirmLeaveWithUnsavedChanges()) {
        await this.cancelProcess();
      }
    });

<<<<<<< HEAD
    this.detailsFormGroup = new FormGroup({ formArray: formBuilder.array([]) });
    this.serviceItemFormGroup = new FormGroup({ formArray: formBuilder.array([]) });
=======
    this.detailsFormGroup = new UntypedFormGroup({ formArray: formBuilder.array([]) });
    this.serviceItemFormGroup = new UntypedFormGroup({ formArray: formBuilder.array([]) });
>>>>>>> oned/v92

    this.isRequestable = sidesheetData.groupServiceItem != null && !sidesheetData.groupServiceItem.IsInActive.value;

    this.reportDownload = {
      ... this.elementalUiConfigService.Config.downloadOptions,
      url: this.reports.groupsByGroupReport(30, this.groupId),
    };

    this.unsGroupDbObjectKey = this.sidesheetData.unsGroupDbObjectKey;

    if (this.sidesheetData.unsGroupDbObjectKey) {
      this.parameters = {
        objecttable: this.unsGroupDbObjectKey.TableName,
        objectuid: this.unsGroupDbObjectKey.Keys[0]
      };
    }
    this.canCreateServiceItem = !sidesheetData.group.GetEntity().GetColumn('XReadOnlyMemberships')?.GetValue();

    this.buttonBarExtensionReferrer = {
      type: this.sidesheetData.unsGroupDbObjectKey.TableName,
      uidGroup: this.sidesheetData.group.GetEntity().GetKeys()[0],
      defaultDownloadOptions: this.elementalUiConfigService.Config.downloadOptions
    };
  }

  public async ngOnInit(): Promise<void> {
    this.setup();
  }

  get groupServiceItem(): PortalTargetsystemUnsGroupServiceitem {
    return this.sidesheetData.groupServiceItem;
  }

  get isAadGroup(): boolean {
    let isAad = false;
    const xObjKey = this.sidesheetData.unsGroupDbObjectKey;
    isAad = xObjKey ? xObjKey.TableName === 'AADGroup' : false;
    return isAad;
  }

<<<<<<< HEAD
  get formArray(): FormArray {
    return this.detailsFormGroup.get('formArray') as FormArray;
  }

  get siFormArray(): FormArray {
    return this.serviceItemFormGroup.get('formArray') as FormArray;
  }

  public cancel(): void {
    this.sidesheet.close();
=======
  get formArray(): UntypedFormArray {
    return this.detailsFormGroup.get('formArray') as UntypedFormArray;
  }

  get siFormArray(): UntypedFormArray {
    return this.serviceItemFormGroup.get('formArray') as UntypedFormArray;
  }

  public cancel(): void {
    this.sidesheetRef.close();
>>>>>>> oned/v92
  }

  public async createServiceItem(): Promise<void> {
    this.sidesheetData.group.extendedData = {
      CreateServiceItem: true
    };
    await this.saveChanges(this.detailsFormGroup, this.sidesheetData.group, '#LDS#The service item has been successfully created.', true);
  }

  public async saveGroup(): Promise<void> {
    this.saveChanges(this.detailsFormGroup, this.sidesheetData.group, '#LDS#The system entitlement has been successfully saved.');
  }

  public async saveGroupServiceItem(): Promise<void> {
    this.serviceItemsEditForm?.saveTags();
    const uidPerson = this.serviceItemsEditForm?.getSelectedUidPerson;
    let confirmMessage = '#LDS#The service item has been successfully saved.';
    if (uidPerson) {
      this.groupServiceItem.extendedData = {
        UidPerson: uidPerson,
        CopyAllMembers: true,
      };
      confirmMessage = '#LDS#The service item has been successfully saved. It may take some time for the changes to take effect.';
    } else {
      this.groupServiceItem.extendedData = undefined;
    }
    this.saveChanges(this.serviceItemFormGroup, this.groupServiceItem, confirmMessage);
  }

  public canUnsubscribeSelected(): boolean {
    return this.groupMembersComponent?.canUnsubscribeSelected();
  }

  public canDeleteSelected(): boolean {
    return this.groupMembersComponent?.canDeleteSelected();
  }

  public async onDeleteGroupMembers(mode: 'delete' | 'unsubscribe'): Promise<void> {
    return mode === 'delete' ? this.groupMembersComponent.deleteMembers() : this.groupMembersComponent.unsubscribeMembership();
  }

  public async requestMembership(): Promise<void> {
    return this.groupMembersComponent.requestMembership(this.groupServiceItem);
  }

  public async cancelProcess(): Promise<void> {
    if (!this.detailsFormGroup.pristine) {
      this.snackbar.open({ key: '#LDS#The changes were discarded.' }, '#LDS#Close');
    }

    this.sidesheetRef.close();
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
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      const systemInfo = await this.systemInfoService.get();
      const config = (await this.configService.getConfig()).OwnershipConfig;
      const type = this.parameters?.objecttable;

      this.dynamicTabs = (await this.tabService.getFittingComponents<TabItem>('groupSidesheet',
      (ext) =>  ext.inputData.checkVisibility(this.parameters)))
      .sort((tab1: TabItem, tab2: TabItem) => tab1.sortOrder - tab2.sortOrder);

      const cols = this.sidesheetData.group
        .getColumns(systemInfo.PreProps.includes('RISKINDEX'), type == null ? [] : config.EditableFields[type]);

      this.cdrList = cols
        .map(column => new BaseCdr(column));
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }


  private async saveChanges(
<<<<<<< HEAD
    formGroup: FormGroup,
=======
    formGroup: UntypedFormGroup,
>>>>>>> oned/v92
    objectToSave: TypedEntity,
    confirmationText: string,
    reloadServiceItem: boolean = false
  ): Promise<void> {
    if (formGroup.valid) {
      this.logger.debug(this, `Saving group changes`);
      const overlayRef = this.busyService.show();
      try {
        await objectToSave.GetEntity().Commit(true);
        if (reloadServiceItem) {
          this.sidesheetData.uidAccProduct = this.sidesheetData.group.GetEntity().GetColumn('UID_AccProduct').GetValue();
          this.sidesheetData.groupServiceItem = await this.groups.getGroupServiceItem(this.sidesheetData.uidAccProduct);
        }
        this.isRequestable = !this.groupServiceItem.IsInActive.value;
        formGroup.markAsPristine();
        this.snackbar.open({ key: confirmationText }, '#LDS#Close');
      } finally {
        this.busyService.hide(overlayRef);
      }
    }
  }
}
