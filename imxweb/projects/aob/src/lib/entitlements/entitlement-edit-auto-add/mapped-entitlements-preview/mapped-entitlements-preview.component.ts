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
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';

<<<<<<< HEAD
import { DisplayColumns, EntitySchema, TypedEntityCollectionData } from 'imx-qbm-dbts';
=======
import { CollectionLoadParameters, DisplayColumns, EntitySchema, TypedEntityCollectionData } from 'imx-qbm-dbts';
>>>>>>> oned/v92
import { DataSourceToolbarSettings } from 'qbm';
import { EntitlementToAddTyped } from '../entitlement-to-add-typed';

@Component({
  templateUrl: './mapped-entitlements-preview.component.html',
<<<<<<< HEAD
  styleUrls: ['./mapped-entitlements-preview.component.scss']
})
export class MappedEntitlementsPreviewComponent implements OnInit {

  public settings: DataSourceToolbarSettings;
  public readonly DisplayColumns = DisplayColumns;
  public entitySchema: EntitySchema;

  public alertText = '#LDS#The following system entitlements will be added to this application by the condition. System entitlements that are already assigned to an application will be skipped.';
  public speedupText = '#LDS#To speed up the process, you can check the "assign system entitlements after saving" option.'

  constructor(
    @Inject(EUI_SIDESHEET_DATA) public data: {
      withSave: boolean,
      entitlementToAdd: TypedEntityCollectionData<EntitlementToAddTyped>
    },
    private readonly sidesheetRef: EuiSidesheetRef,
  ) { }
=======
  styleUrls: ['./mapped-entitlements-preview.component.scss'],
})
export class MappedEntitlementsPreviewComponent implements OnInit {
  public settings: DataSourceToolbarSettings;
  public readonly DisplayColumns = DisplayColumns;
  public entitySchema: EntitySchema;
  public navigationState: CollectionLoadParameters = {StartIndex:0, PageSize:20};

  public alertText =
    '#LDS#Here you can get an overview of application entitlements that will be added to this application by the conditions. Application entitlements that are already assigned to an application will be skipped.';
  public speedupText =
    '#LDS#In addition, you can specify whether the application entitlements should be assigned immediately after the conditions are saved. However, you can also have the application entitlements added later.';

  constructor(
    @Inject(EUI_SIDESHEET_DATA)
    public data: {
      withSave: boolean;
      entitlementToAdd: TypedEntityCollectionData<EntitlementToAddTyped>;
    },
    private readonly sidesheetRef: EuiSidesheetRef
  ) {}
>>>>>>> oned/v92

  public apply(map: boolean): void {
    this.sidesheetRef.close({ save: true, map });
  }

  public getCount(type: '' | 'add' | 'assigned' | 'conflicted'): number {
<<<<<<< HEAD

    switch (type) {
      case 'conflicted': return this.data.entitlementToAdd.Data.filter(elem => elem.IsAssignedToOther.value).length;
      case 'add': return this.data.entitlementToAdd.Data.filter(elem => !elem.IsAssignedToMe.value && !elem.IsAssignedToOther.value).length;
      case 'assigned': return this.data.entitlementToAdd.Data.filter(elem => elem.IsAssignedToMe.value).length;
=======
    switch (type) {
      case 'conflicted':
        return this.data.entitlementToAdd.Data.filter((elem) => elem.IsAssignedToOther.value).length;
      case 'add':
        return this.data.entitlementToAdd.Data.filter((elem) => !elem.IsAssignedToMe.value && !elem.IsAssignedToOther.value).length;
      case 'assigned':
        return this.data.entitlementToAdd.Data.filter((elem) => elem.IsAssignedToMe.value).length;
>>>>>>> oned/v92
    }

    return this.data.entitlementToAdd.totalCount;
  }

<<<<<<< HEAD
  public async ngOnInit(): Promise<void> {
    this.entitySchema = EntitlementToAddTyped.GetEntitySchema();

    const displayedColumns = [
      this.entitySchema.Columns.DisplayName,
      this.entitySchema.Columns.IsAssignedToMe,
      this.entitySchema.Columns.UID_AOBApplicationConflicted
    ];

    this.settings = {
      dataSource: this.data.entitlementToAdd,
      entitySchema: this.entitySchema,
      displayedColumns,
      navigationState: {}
    };
  }
=======
  public navigate(source: CollectionLoadParameters): void {
    this.entitySchema = EntitlementToAddTyped.GetEntitySchema();
    this.navigationState = { ...this.navigationState, ...source };
   
    const data = this.data.entitlementToAdd.Data.slice(this.navigationState.StartIndex, this.navigationState.StartIndex + this.navigationState.PageSize);
     const displayedColumns = [
       this.entitySchema.Columns.DisplayName,
       this.entitySchema.Columns.IsAssignedToMe,
       this.entitySchema.Columns.UID_AOBApplicationConflicted,
     ];
    this.settings = {
      displayedColumns: displayedColumns,
      dataSource: {
        Data: data,
        totalCount: this.data.entitlementToAdd.totalCount,
      },
      entitySchema: this.entitySchema,
      navigationState: this.navigationState,
    };
  }

  public async ngOnInit(): Promise<void> {

   this.navigate({});
  }
>>>>>>> oned/v92
}
