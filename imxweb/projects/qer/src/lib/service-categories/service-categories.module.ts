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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

import {
  CdrModule,
  ClassloggerService,
  DataTreeWrapperModule,
<<<<<<< HEAD
=======
  HELP_CONTEXTUAL,
  HelpContextualModule,
>>>>>>> oned/v92
  MenuItem,
  MenuService,
  RouteGuardService
} from 'qbm';

import { ServiceCategoriesComponent } from './service-categories.component';
import { ServiceCategoryComponent } from './service-category.component';
import { ServiceItemsModule } from '../service-items/service-items.module';
<<<<<<< HEAD
import { ShopAdminGuardService } from '../guards/shop-admin-guard.service';
import { isShopAdmin } from '../admin/qer-permissions-helper';
=======
import { isShopAdmin, isShopStatistics } from '../admin/qer-permissions-helper';
import { ShopGuardService } from '../guards/shop-guard.service';
>>>>>>> oned/v92

const routes: Routes = [
  {
    path: 'configuration/servicecategories',
    component: ServiceCategoriesComponent,
<<<<<<< HEAD
    canActivate: [RouteGuardService, ShopAdminGuardService],
    resolve: [RouteGuardService]
=======
    canActivate: [RouteGuardService, ShopGuardService],
    resolve: [RouteGuardService],
    data:{
      contextId: HELP_CONTEXTUAL.ServiceCategories
    }
>>>>>>> oned/v92
  }
];

@NgModule({
  declarations: [
    ServiceCategoriesComponent,
    ServiceCategoryComponent
  ],
  imports: [
    CdrModule,
    CommonModule,
    DataTreeWrapperModule,
    EuiCoreModule,
    EuiMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
<<<<<<< HEAD
    ServiceItemsModule
=======
    ServiceItemsModule,
    HelpContextualModule,
>>>>>>> oned/v92
  ]
})
export class ServiceCategoriesModule {

  constructor(
    private readonly menuService: MenuService,
    logger: ClassloggerService) {
<<<<<<< HEAD
    logger.info(this, '▶️ ServiceCategoriesModule loaded');
=======
    logger.info(this, '▶︝ ServiceCategoriesModule loaded');
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
              id: 'QER_Setup_Servicecategories',
              route: 'configuration/servicecategories',
              title: '#LDS#Menu Entry Service categories',
<<<<<<< HEAD
              sorting: '50-30'
=======
              sorting: '60-30'
>>>>>>> oned/v92
            }
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
