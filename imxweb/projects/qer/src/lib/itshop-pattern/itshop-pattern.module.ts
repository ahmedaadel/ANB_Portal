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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

import { ProjectConfig } from 'imx-api-qbm';
import { QerProjectConfig } from 'imx-api-qer';

import {
  CdrModule,
  ClassloggerService,
  DataSourceToolbarModule,
  DataTableModule,
<<<<<<< HEAD
  MenuItem,
  MenuService,
  RouteGuardService,
=======
  HELP_CONTEXTUAL,
  HelpContextualModule,
  MenuItem,
  MenuService,
  RouteGuardService,
  SelectedElementsModule,
>>>>>>> oned/v92
  UserMessageModule
} from 'qbm';
import { ItshopPatternComponent } from './itshop-pattern.component';
import { ItshopPatternSidesheetComponent } from './itshop-pattern-sidesheet/itshop-pattern-sidesheet.component';
import { ItshopPatternCreateSidesheetComponent } from './itshop-pattern-create-sidesheet/itshop-pattern-create-sidesheet.component';
import { ItshopPatternAddProductsComponent } from './itshop-pattern-add-products/itshop-pattern-add-products.component';
import { ServiceItemsModule } from '../service-items/service-items.module';
import { DuplicatePatternItemsComponent } from './duplicate-pattern-items/duplicate-pattern-items.component';
import { UserModule } from '../user/user.module';
import { ItshopPatternGuardService } from '../guards/itshop-pattern-guard.service';
<<<<<<< HEAD
=======
import { ItshopPatternItemEditComponent } from './itshop-pattern-item-edit/itshop-pattern-item-edit.component';
>>>>>>> oned/v92

const routes: Routes = [
  {
    path: 'itshop/requesttemplates',
    component: ItshopPatternComponent,
    canActivate: [RouteGuardService, ItshopPatternGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
    data:{
      contextId: HELP_CONTEXTUAL.RequestTemplates
    }
>>>>>>> oned/v92
  }
];

@NgModule({
  declarations: [
    ItshopPatternComponent,
    ItshopPatternSidesheetComponent,
    ItshopPatternCreateSidesheetComponent,
    ItshopPatternAddProductsComponent,
<<<<<<< HEAD
    DuplicatePatternItemsComponent
=======
    DuplicatePatternItemsComponent,
    ItshopPatternItemEditComponent
>>>>>>> oned/v92
  ],
  imports: [
    CdrModule,
    CommonModule,
    DataSourceToolbarModule,
    DataTableModule,
    EuiCoreModule,
    EuiMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceItemsModule,
    TranslateModule,
    RouterModule.forChild(routes),
    UserMessageModule,
<<<<<<< HEAD
    UserModule
=======
    UserModule,
    SelectedElementsModule,
    HelpContextualModule,
>>>>>>> oned/v92
  ]
})
export class ItshopPatternModule {

  constructor(
    private readonly menuService: MenuService,
    logger: ClassloggerService
  ) {
    logger.info(this, '▶️ ItshopPatternModule loaded');
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories(
<<<<<<< HEAD
      (preProps: string[], groups: string[], projectConfig: QerProjectConfig & ProjectConfig) => {
=======
      (preProps: string[], features: string[], projectConfig: QerProjectConfig & ProjectConfig) => {
>>>>>>> oned/v92
        const items: MenuItem[] = [];
        const requestTemplatesEnabled = projectConfig.ITShopConfig.VI_ITShop_ProductSelectionFromTemplate;

        if (preProps.includes('ITSHOP') && requestTemplatesEnabled) {
          items.push(
            {
              id: 'QER_Request_RequestTemplates',
              navigationCommands: {
                commands: ['itshop', 'requesttemplates']
              },
<<<<<<< HEAD
              title: '#LDS#Menu Entry Request templates',
=======
              title: '#LDS#Menu Entry Product bundles',
>>>>>>> oned/v92
              sorting: '10-50',
            }
          );
        }

        if (items.length === 0) {
          return null;
        }
        return {
          id: 'ROOT_Request',
          title: '#LDS#Requests',
          sorting: '10',
          items
        };
      }
    );
  }
}
