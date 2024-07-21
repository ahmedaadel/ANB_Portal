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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

<<<<<<< HEAD
import { DataSourceToolbarModule, DataTableModule, CdrModule, LdsReplaceModule, DataTreeModule, ExtModule, DynamicTabsModule } from 'qbm';
=======
import {
  DataSourceToolbarModule,
  DataTableModule,
  CdrModule,
  LdsReplaceModule,
  DataTreeModule,
  ExtModule,
  DynamicTabsModule,
  ObjectHistoryModule,
  BusyIndicatorModule,
  SelectedElementsModule,
  HelpContextualModule
 } from 'qbm';
>>>>>>> oned/v92

import { GroupSidesheetComponent } from './group-sidesheet/group-sidesheet.component';
import { GroupMembersComponent } from './group-sidesheet/group-members/group-members.component';
import { DataExplorerGroupsComponent } from './groups.component';
import { ChildSystemEntitlementsComponent } from './group-sidesheet/child-system-entitlements/child-system-entitlements.component';
import { NoDataModule } from '../no-data/no-data.module';
import { DataFiltersModule } from '../data-filters/data-filters.module';
import { ProductOwnerSidesheetComponent } from './product-owner-sidesheet/product-owner-sidesheet.component';
<<<<<<< HEAD
import { OwnerControlModule, ServiceItemsEditFormModule } from 'qer';
import { IdentityRoleMembershipsModule } from 'qer';
=======
import { IdentityRoleMembershipsModule, ObjectHyperviewModule, OwnerControlModule, ServiceItemsEditFormModule } from 'qer';
import { GroupMembershipsExtComponent } from './group-memberships-ext/group-memberships-ext.component';
>>>>>>> oned/v92

@NgModule({
  declarations: [
    DataExplorerGroupsComponent,
    GroupSidesheetComponent,
    GroupMembersComponent,
    ChildSystemEntitlementsComponent,
<<<<<<< HEAD
    ProductOwnerSidesheetComponent
=======
    ProductOwnerSidesheetComponent,
    GroupMembershipsExtComponent,
>>>>>>> oned/v92
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EuiCoreModule,
    EuiMaterialModule,
    ExtModule,
    CdrModule,
    RouterModule,
<<<<<<< HEAD
    OwnerControlModule,
=======
    ObjectHyperviewModule,
    OwnerControlModule,
    BusyIndicatorModule,
>>>>>>> oned/v92
    ServiceItemsEditFormModule,
    TranslateModule,
    DataSourceToolbarModule,
    DataTableModule,
    LdsReplaceModule,
    DataFiltersModule,
    NoDataModule,
    DataTreeModule,
    DynamicTabsModule,
<<<<<<< HEAD
    IdentityRoleMembershipsModule
  ],
  exports: [
    DataExplorerGroupsComponent,
    ChildSystemEntitlementsComponent
  ]
})
export class GroupsModule { }
=======
    ObjectHistoryModule,
    IdentityRoleMembershipsModule,
    SelectedElementsModule,
    HelpContextualModule
  ],
  exports: [DataExplorerGroupsComponent, ChildSystemEntitlementsComponent],
})
export class GroupsModule {}
>>>>>>> oned/v92
