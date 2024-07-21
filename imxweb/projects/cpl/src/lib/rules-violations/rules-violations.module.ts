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
<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
=======
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
>>>>>>> oned/v92
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

import {
  CdrModule,
  ClassloggerService,
  DataSourceToolbarModule,
  DataTableModule,
<<<<<<< HEAD
  MenuItem,
  MenuService,
  RouteGuardService
=======
  HelpContextualModule,
  ExtModule,
  MenuItem,
  MenuService,
  SelectedElementsModule
>>>>>>> oned/v92
} from 'qbm';
import { RulesViolationsComponent } from './rules-violations.component';
import { RulesViolationsDetailsComponent } from './rules-violations-details/rules-violations-details.component';
import { RulesViolationsActionComponent } from './rules-violations-action/rules-violations-action.component';
import { JustificationModule } from 'qer';
import { RulesViolationsMultiActionComponent } from './rules-violations-action/rules-violations-multi-action/rules-violations-multi-action.component';
import { RulesViolationsSingleActionComponent } from './rules-violations-action/rules-violations-single-action/rules-violations-single-action.component';
import { ResolveComponent } from './resolve/resolve.component';
import { MatStepperModule } from '@angular/material/stepper';
import { isExceptionAdmin } from '../rules/admin/permissions-helper';
<<<<<<< HEAD
import { RuleViolationsGuardService } from '../guards/rule-violations-guard.service';
const routes: Routes = [
  {
    path: 'compliance/rulesviolations/approve',
    component: RulesViolationsComponent,
    canActivate: [RouteGuardService, RuleViolationsGuardService],
    resolve: [RouteGuardService]
  }
];
=======
import { MitigatingControlsPersonComponent } from './mitigating-controls-person/mitigating-controls-person.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MitigatingControlContainerModule } from '../mitigating-control-container/mitigating-control-container.module';
import { ProjectConfig } from 'imx-api-qer';

>>>>>>> oned/v92

@NgModule({
  declarations: [
    ResolveComponent,
    RulesViolationsComponent,
    RulesViolationsDetailsComponent,
    RulesViolationsActionComponent,
    RulesViolationsMultiActionComponent,
<<<<<<< HEAD
    RulesViolationsSingleActionComponent
=======
    RulesViolationsSingleActionComponent,
    MitigatingControlsPersonComponent
>>>>>>> oned/v92
  ],
  imports: [
    CdrModule,
    CommonModule,
    DataSourceToolbarModule,
    DataTableModule,
    EuiCoreModule,
    EuiMaterialModule,
<<<<<<< HEAD
=======
    ExtModule,
>>>>>>> oned/v92
    FormsModule,
    JustificationModule,
    MatCardModule,
    MatStepperModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ]
=======
    MatExpansionModule,
    ReactiveFormsModule,
    TranslateModule,
    SelectedElementsModule,
    MitigatingControlContainerModule,
    HelpContextualModule,
  ],
  exports:[MitigatingControlsPersonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
>>>>>>> oned/v92
})
export class RulesViolationsModule {

  constructor(
    private readonly menuService: MenuService,
    logger: ClassloggerService
  ) {
<<<<<<< HEAD
    logger.info(this, '▶️ RulesViolationsnModule loaded');
=======
    logger.info(this, '▶︝ RulesViolationsnModule loaded');
>>>>>>> oned/v92
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories(
<<<<<<< HEAD
      (preProps: string[], groups: string[]) => {
=======
      (preProps: string[], features: string[], projectConfig: ProjectConfig, groups: string[]) => {
>>>>>>> oned/v92

        const items: MenuItem[] = [];

        if (preProps.includes('ITSHOP') && isExceptionAdmin(groups)) {
          items.push(
            {
              id: 'CPL_Compliance_RulesViolations',
              navigationCommands: {
                commands: ['compliance', 'rulesviolations', 'approve']
              },
              title: '#LDS#Menu Entry Rule violations',
              description: '#LDS#Shows the rule violations for which you can grant or deny exceptions.',
              sorting: '25-20',
            },
          );
        }

        if (items.length === 0) {
          return null;
        }
        return {
          id: 'ROOT_Compliance',
          title: '#LDS#Compliance',
          sorting: '25',
          items
        };
      },
    );
  }


}
