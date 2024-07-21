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

import { StepperSelectionEvent } from '@angular/cdk/stepper';
<<<<<<< HEAD
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
=======
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { Subscription } from 'rxjs';
>>>>>>> oned/v92

import { PortalPickcategory, PortalPickcategoryItems } from 'imx-api-qer';
import { DisplayColumns } from 'imx-qbm-dbts';

import {
  BaseCdr,
  ColumnDependentReference,
<<<<<<< HEAD
=======
  ConfirmationService,
>>>>>>> oned/v92
  DataSourceToolbarSettings,
  DataSourceWrapper,
} from 'qbm';
import { PickCategorySelectIdentitiesComponent } from '../pick-category-select-identities/pick-category-select-identities.component';
import { PickCategoryService } from '../pick-category.service';

@Component({
  selector: 'imx-pick-category-create',
  templateUrl: './pick-category-create.component.html',
  styleUrls: ['./pick-category-create.component.scss']
})
<<<<<<< HEAD
export class PickCategoryCreateComponent implements OnInit {

  public readonly displayNameForm = new FormGroup({});
=======
export class PickCategoryCreateComponent implements OnInit, OnDestroy {

  public readonly displayNameForm = new UntypedFormGroup({});
>>>>>>> oned/v92

  public readonly dstWrapper: DataSourceWrapper<PortalPickcategoryItems>;
  public dstSettings: DataSourceToolbarSettings;

  public selectedItems: PortalPickcategoryItems[] = [];

  public displayNameCdr: ColumnDependentReference;
  public displayNameReadonlyCdr: ColumnDependentReference;
<<<<<<< HEAD
=======
  
  private readonly subscriptions: Subscription[] = [];
>>>>>>> oned/v92

  @ViewChild(PickCategorySelectIdentitiesComponent) public selectIndentities: PickCategorySelectIdentitiesComponent;

  constructor(
    @Inject(EUI_SIDESHEET_DATA) public data: {
      pickCategory: PortalPickcategory
    },
<<<<<<< HEAD
    private readonly sidesheet: EuiSidesheetService,
    readonly pickCategoryService: PickCategoryService
=======
    private readonly sidesheetRef: EuiSidesheetRef,
    readonly pickCategoryService: PickCategoryService,    
    confirmation: ConfirmationService
>>>>>>> oned/v92
  ) {
    const entitySchema = pickCategoryService.pickcategoryItemsSchema;

    this.dstWrapper = new DataSourceWrapper(
      () => Promise.resolve({
        totalCount: this.selectIndentities.selection?.length,
        Data: this.selectIndentities.selection
      }),
      [entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME]],
      entitySchema
    );
<<<<<<< HEAD
=======

    this.subscriptions.push(sidesheetRef.closeClicked().subscribe(async () => {
      if (!this.displayNameForm.pristine && !(await confirmation.confirmLeaveWithUnsavedChanges())) {
        return;
      }

      sidesheetRef.close(false);
    }));
>>>>>>> oned/v92
  }

  public async ngOnInit(): Promise<void> {
    this.displayNameCdr = new BaseCdr(this.data.pickCategory.DisplayName.Column);
    this.displayNameCdr.minLength = 1;
    this.displayNameReadonlyCdr = new BaseCdr(this.data.pickCategory.GetEntity().GetColumn(DisplayColumns.DISPLAY_PROPERTYNAME));
  }

<<<<<<< HEAD
=======
  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

>>>>>>> oned/v92
  public async stepChange(change: StepperSelectionEvent): Promise<void> {
    switch (change.selectedIndex) {
      case 2:
        return this.showSummary();
    }
  }

  public async showSummary(): Promise<void> {
    this.getData();
  }

  public closeSidesheet(): void {
<<<<<<< HEAD
    this.sidesheet.close({
=======
    this.sidesheetRef.close({
>>>>>>> oned/v92
      create: true,
      pickCategory: this.data.pickCategory,
      pickedItems: this.selectIndentities?.selection
    });
  }

  private async getData(): Promise<void> {
    this.dstSettings = await this.dstWrapper.getDstSettings();
  }
}
