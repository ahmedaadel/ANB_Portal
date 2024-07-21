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

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

import {
  CdrModule,
  ClassloggerService,
  DataSourceToolbarModule,
  DataTableModule,
  FkAdvancedPickerModule,
<<<<<<< HEAD
  LdsReplaceModule,
  MenuItem,
  MenuService,
  RouteGuardService
=======
  HELP_CONTEXTUAL,
  HelpContextualModule,
  InfoModalDialogModule,
  LdsReplaceModule,
  MenuItem,
  MenuService,
  RouteGuardService,
  SelectedElementsModule
>>>>>>> oned/v92
} from 'qbm';

import { RequestsComponent } from './requests/requests.component';
import { RequestConfigSidesheetComponent } from './request-config-sidesheet/request-config-sidesheet.component';
import { RequestShelfSidesheetComponent } from './request-shelf-sidesheet/request-shelf-sidesheet.component';
import { RequestShelvesComponent } from './request-shelves/request-shelves.component';
import { RequestConfigMembersComponent } from './request-config-members/request-config-members.component';
import { RequestShelfEntitlementsComponent } from './request-shelf-entitlements/request-shelf-entitlements.component';
import { RequestsEntitySelectorComponent } from './requests-selector/requests-entity-selector.component';
import { DynamicExclusionDialogModule } from '../dynamic-exclusion-dialog/dynamic-exclusion-dialog.module';
<<<<<<< HEAD
import { MemberSelectorComponent } from './request-config-members/member-selector.component';
import { ShopAdminGuardService } from '../guards/shop-admin-guard.service';
import { isShopAdmin } from '../admin/qer-permissions-helper';
import { CREATE_SHELF_TOKEN } from './request-shelves/request-shelf-token';
=======
import { MemberSelectorComponent } from './request-config-members/member-selector/member-selector.component';
import { isShopAdmin, isShopStatistics } from '../admin/qer-permissions-helper';
import { CREATE_SHELF_TOKEN } from './request-shelves/request-shelf-token';
import { ObjectHyperviewModule } from '../object-hyperview/object-hyperview.module';
import { ShopGuardService } from '../guards/shop-guard.service';
import { JustificationModule } from '../justification/justification.module';
import { ReasonSidesheetComponent } from './request-config-members/reason-sidesheet/reason-sidesheet.component';
>>>>>>> oned/v92


const routes: Routes = [
  {
    path: 'configuration/requests',
    component: RequestsComponent,
<<<<<<< HEAD
    canActivate: [RouteGuardService, ShopAdminGuardService],
    resolve: [RouteGuardService]
=======
    canActivate: [RouteGuardService, ShopGuardService],
    resolve: [RouteGuardService],
    data:{
      contextId: HELP_CONTEXTUAL.ConfigurationRequests
    }
>>>>>>> oned/v92
  },
];

@NgModule({
  declarations: [
    MemberSelectorComponent,
    RequestsComponent,
    RequestConfigSidesheetComponent,
    RequestShelfSidesheetComponent,
    RequestShelvesComponent,
    RequestConfigMembersComponent,
    RequestShelfEntitlementsComponent,
<<<<<<< HEAD
    RequestsEntitySelectorComponent
=======
    RequestsEntitySelectorComponent,
    ReasonSidesheetComponent
>>>>>>> oned/v92
  ],
  imports: [
    CommonModule,
    DynamicExclusionDialogModule,
    FormsModule,
    ReactiveFormsModule,
    EuiCoreModule,
    EuiMaterialModule,
    CdrModule,
    TranslateModule,
    DataSourceToolbarModule,
    DataTableModule,
    LdsReplaceModule,
    FkAdvancedPickerModule,
<<<<<<< HEAD
    RouterModule.forChild(routes),
=======
    SelectedElementsModule,
    ObjectHyperviewModule,
    InfoModalDialogModule,
    JustificationModule,
    RouterModule.forChild(routes),
    HelpContextualModule,
>>>>>>> oned/v92
  ],
  providers: [{provide: CREATE_SHELF_TOKEN, useValue: RequestShelfSidesheetComponent}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RequestConfigModule {

  constructor(
    private readonly menuService: MenuService,
    logger: ClassloggerService) {
<<<<<<< HEAD
    logger.info(this, '▶️ RequestConfigModule loaded');
=======
    logger.info(this, '▶︝ RequestConfigModule loaded');
>>>>>>> oned/v92
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories(
<<<<<<< HEAD
      (preProps: string[], groups: string[]) => {

        const items: MenuItem[] = [];

        if (isShopAdmin(groups)) {
=======
      (preProps: string[], features: string[]) => {

        const items: MenuItem[] = [];

        if (isShopAdmin(features) || isShopStatistics(features)) {
>>>>>>> oned/v92
          items.push(
            {
              id: 'QER_Setup_ITShop',
              route: 'configuration/requests',
              title: '#LDS#Menu Entry Shops',
<<<<<<< HEAD
              sorting: '50-20',
=======
              sorting: '60-20',
>>>>>>> oned/v92
            },
          );
        }

        if (items.length === 0) {
          return null;
        }
        return {
          id: 'ROOT_Setup',
          title: '#LDS#Setup',
<<<<<<< HEAD
          sorting: '50',
=======
          sorting: '60',
>>>>>>> oned/v92
          items
        };
      },
    );
  }
}
