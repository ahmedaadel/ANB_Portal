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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

import {
<<<<<<< HEAD
=======
  BusyIndicatorModule,
>>>>>>> oned/v92
  CdrModule,
  ClassloggerService,
  DataSourceToolbarModule,
  DataTableModule,
  DataTreeModule,
  DynamicTabsModule,
  ExtModule,
<<<<<<< HEAD
=======
  HELP_CONTEXTUAL,
  HelpContextualModule,
>>>>>>> oned/v92
  LdsReplaceModule,
  MenuItem,
  MenuService,
  ObjectHistoryModule,
<<<<<<< HEAD
  RouteGuardService
=======
  RouteGuardService,
>>>>>>> oned/v92
} from 'qbm';
import { DataExplorerIdentitiesComponent } from './identities.component';
import { IdentitiesService } from './identities.service';
import { IdentitySidesheetComponent } from './identity-sidesheet/identity-sidesheet.component';
import { IdentitiesReportsService } from './identities-reports.service';
<<<<<<< HEAD
import { CCC_isHROutsourceAdmin, CCC_isOutsourceAdmin, isPersonAdmin } from '../admin/qer-permissions-helper';
=======
import { isAuditor, isPersonAdmin, isPersonManager } from '../admin/qer-permissions-helper';
>>>>>>> oned/v92
import { RiskModule } from '../risk/risk.module';
import { DataExplorerRegistryService } from '../data-explorer-view/data-explorer-registry.service';
import { AssignmentsComponent } from './identity-sidesheet/assignments/assignments.component';
import { IdentityRoleMembershipsModule } from './identity-sidesheet/identity-role-memberships/identity-role-memberships.module';
import { OrgChartModule } from '../org-chart/org-chart.module';
import { CreateNewIdentityComponent } from './create-new-identity/create-new-identity.component';
import { DuplicatesSidesheetComponent } from './create-new-identity/duplicates-sidesheet/duplicates-sidesheet.component';
<<<<<<< HEAD
import { OutsourceIdentityComponent } from './outsource-identity/outsource-identity.component';
=======
import { RequestHistoryModule } from '../request-history/request-history.module';
import { ObjectHyperviewModule } from '../object-hyperview/object-hyperview.module';
import { MyResponsibilitiesRegistryService } from '../my-responsibilities-view/my-responsibilities-registry.service';
import { MatMenuModule } from '@angular/material/menu';
import { ProjectConfig } from 'imx-api-qbm';
>>>>>>> oned/v92

const routes: Routes = [
  {
    path: 'resp/identities',
    component: DataExplorerIdentitiesComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
  }
];


=======
    resolve: [RouteGuardService],
  },
];

>>>>>>> oned/v92
@NgModule({
  declarations: [
    DataExplorerIdentitiesComponent,
    IdentitySidesheetComponent,
    AssignmentsComponent,
    CreateNewIdentityComponent,
    DuplicatesSidesheetComponent,
<<<<<<< HEAD
    OutsourceIdentityComponent
=======
>>>>>>> oned/v92
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EuiCoreModule,
    EuiMaterialModule,
    CdrModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    TranslateModule,
    DataSourceToolbarModule,
    DataTableModule,
    LdsReplaceModule,
    DataTreeModule,
    ObjectHistoryModule,
<<<<<<< HEAD
=======
    ObjectHyperviewModule,
    RequestHistoryModule,
>>>>>>> oned/v92
    ExtModule,
    RiskModule,
    DynamicTabsModule,
    OrgChartModule,
<<<<<<< HEAD
    IdentityRoleMembershipsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    IdentitiesService,
    IdentitiesReportsService
  ],
  exports: [DataExplorerIdentitiesComponent, OutsourceIdentityComponent],
  entryComponents: [
    CreateNewIdentityComponent,
    DuplicatesSidesheetComponent
  ]
=======
    BusyIndicatorModule,
    IdentityRoleMembershipsModule,
    RouterModule.forChild(routes),
    MatMenuModule,
    HelpContextualModule
  ],
  providers: [IdentitiesService, IdentitiesReportsService],
  exports: [DataExplorerIdentitiesComponent],
  entryComponents: [CreateNewIdentityComponent, DuplicatesSidesheetComponent],
>>>>>>> oned/v92
})
export class IdentitiesModule {
  constructor(
    private readonly dataExplorerRegistryService: DataExplorerRegistryService,
    private readonly menuService: MenuService,
<<<<<<< HEAD
=======
    private readonly myResponsibilitiesRegistryService: MyResponsibilitiesRegistryService,
>>>>>>> oned/v92
    logger: ClassloggerService
  ) {
    logger.info(this, '▶️ IdentitiesModule loaded');
    this.init();
<<<<<<< HEAD
=======
    this.setupMyResponsibilitiesView();
>>>>>>> oned/v92
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories(
<<<<<<< HEAD
      (preProps: string[], groups: string[]) => {

        const items: MenuItem[] = [];
        if ((preProps.includes('ITSHOP') &&  CCC_isOutsourceAdmin(groups)) || (preProps.includes('ITSHOP') &&  CCC_isHROutsourceAdmin(groups))) {
=======
      (preProps: string[], features: string[], projectConfig: ProjectConfig, groups: string[]) => {

        const items: MenuItem[] = [];
        if (preProps.includes('ITSHOP') && (isPersonAdmin(features) || isAuditor(groups))) {
>>>>>>> oned/v92
          items.push(
            {
              id: 'QER_DataExplorer',
              navigationCommands: { commands: ['admin', 'dataexplorer'] },
<<<<<<< HEAD
              title: '#LDS#Data Explorer',
=======
              title: '#LDS#Menu Entry Data Explorer',
>>>>>>> oned/v92
              sorting: '40-10',
            },
          );
        }
<<<<<<< HEAD

=======
>>>>>>> oned/v92
        if (items.length === 0) {
          return null;
        }
        return {
          id: 'ROOT_Data',
<<<<<<< HEAD
          title: '#LDS#Identity Management',
=======
          title: '#LDS#Data administration',
>>>>>>> oned/v92
          sorting: '40',
          items
        };
      },
    );
  }

  private init(): void {

<<<<<<< HEAD
    this.dataExplorerRegistryService.registerFactory((preProps: string[], groups: string[]) => {
      if (!(CCC_isOutsourceAdmin(groups) || CCC_isHROutsourceAdmin(groups))  ) {
=======
    this.dataExplorerRegistryService.registerFactory((preProps: string[], features: string[], projectConfig: ProjectConfig, groups: string[]) => {
      if (!isPersonAdmin(features) && !isAuditor(groups)) {
>>>>>>> oned/v92
        return;
      }
      return {
        instance: DataExplorerIdentitiesComponent,
        sortOrder: 1,
<<<<<<< HEAD
        name: 'Outsource ',
        caption: '#LDS#Outsource',
        icon: 'contactinfo'
        
=======
        name: 'identities',
        caption: '#LDS#Identities',
        icon: 'contactinfo',
        contextId: HELP_CONTEXTUAL.DataExplorerIdentities
      };
    });
  }

  private setupMyResponsibilitiesView(): void {
    this.myResponsibilitiesRegistryService.registerFactory((preProps: string[], groups: string[]) => {
      if (!isPersonManager(groups)) {
        return;
      }
      return {
        instance: DataExplorerIdentitiesComponent,
        sortOrder: 1,
        name: 'identities',
        caption: '#LDS#Identities',
        contextId: HELP_CONTEXTUAL.MyResponsibilitiesIdentities
>>>>>>> oned/v92
      };
    });
  }
}
