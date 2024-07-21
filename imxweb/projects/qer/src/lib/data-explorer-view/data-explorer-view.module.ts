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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
=======
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
>>>>>>> oned/v92
import { Router, Routes } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

<<<<<<< HEAD
import { DataExplorerViewComponent } from './data-explorer-view.component';
import { DataExplorerRegistryService } from './data-explorer-registry.service';
import { RouteGuardService } from 'qbm';
import { ApplicationGuardService } from '../guards/application-guard.service';
=======
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouteGuardService, SideNavigationViewModule } from 'qbm';
import { ApplicationGuardService} from '../guards/application-guard.service';
import { DataExplorerGuardService } from '../guards/data-explorer-guard.service';
import { DataExplorerRegistryService } from './data-explorer-registry.service';
import { DataExplorerViewComponent } from './data-explorer-view.component';
>>>>>>> oned/v92

const routes: Routes = [
  {
    path: 'admin/dataexplorer',
    component: DataExplorerViewComponent,
<<<<<<< HEAD
    canActivate: [RouteGuardService, ApplicationGuardService],
=======
    canActivate: [
      RouteGuardService,
      ApplicationGuardService,
      DataExplorerGuardService
    ],
>>>>>>> oned/v92
    resolve: [RouteGuardService],
  },
  {
    path: 'admin/dataexplorer/:tab',
    component: DataExplorerViewComponent,
<<<<<<< HEAD
    canActivate: [RouteGuardService, ApplicationGuardService],
=======
    canActivate: [
      RouteGuardService,
      ApplicationGuardService,
      DataExplorerGuardService
    ],
>>>>>>> oned/v92
    resolve: [RouteGuardService],
  },
];

@NgModule({
<<<<<<< HEAD
  declarations: [
    DataExplorerViewComponent
  ],
  imports: [
    CommonModule,
    EuiCoreModule,
    EuiMaterialModule,
    TranslateModule
  ],
  providers: [
    DataExplorerRegistryService
  ]
})
export class DataExplorerViewModule {

  constructor(
    readonly router: Router) {
=======
  declarations: [DataExplorerViewComponent],
  imports: [CommonModule, EuiCoreModule, EuiMaterialModule, MatTooltipModule, TranslateModule, SideNavigationViewModule],
  providers: [DataExplorerRegistryService],
})
export class DataExplorerViewModule {
  constructor(readonly router: Router) {
>>>>>>> oned/v92
    const config = router.config;
    routes.forEach((route) => {
      // because these both routes have a placeholder, add them next to the last route (the wildcard-route)
      config.splice(config.length - 1, 0, route);
    });
    this.router.resetConfig(config);
  }
}
