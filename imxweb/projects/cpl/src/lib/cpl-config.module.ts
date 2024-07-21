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
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';
import { EuiCoreModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

<<<<<<< HEAD
import { CdrModule, ClassloggerService, RouteGuardService } from 'qbm';
=======
import { CdrModule, ClassloggerService, HELP_CONTEXTUAL, RouteGuardService } from 'qbm';
>>>>>>> oned/v92
import { InitService } from './init.service';
import { TilesModule } from 'qer';
import { DashboardPluginComponent } from './dashboard-plugin/dashboard-plugin.component';
import { CartItemComplianceCheckComponent } from './item-validator/cart-item-compliance-check/cart-item-compliance-check.component';
import { RulesComponent } from './rules/rules.component';
<<<<<<< HEAD
import { ComplianceViolationDetailsComponent } from './request/compliance-violation-details/compliance-violation-details.component';
import { WorkflowViolationDetailsComponent } from './request/workflow-violation-details/workflow-violation-details.component';
=======

>>>>>>> oned/v92
import { IdentityRuleViolationsModule } from './identity-rule-violations/identity-rule-violations.module';
import { RulesViolationsModule } from './rules-violations/rules-violations.module';
import { RulesViolationsComponent } from './rules-violations/rules-violations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplianceRulesGuardService } from './guards/compliance-rules-guard.service';
import { RuleViolationsGuardService } from './guards/rule-violations-guard.service';
import { MatCardModule } from '@angular/material/card';
<<<<<<< HEAD

=======
import { RequestModule} from './request/request.module';
>>>>>>> oned/v92
const routes: Routes = [
  {
    path: 'compliance/rules',
    component: RulesComponent,
    canActivate: [RouteGuardService, ComplianceRulesGuardService],
    resolve: [RouteGuardService],
<<<<<<< HEAD
=======
    data:{
      contextId: HELP_CONTEXTUAL.ComplianceRules
    }
>>>>>>> oned/v92
  },
  {
    path: 'compliance/rulesviolations/approve',
    component: RulesViolationsComponent,
    canActivate: [RouteGuardService, RuleViolationsGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
    data:{
      contextId: HELP_CONTEXTUAL.ComplianceRulesViolationsApprove
    }
>>>>>>> oned/v92
  },
];

@NgModule({
  declarations: [
    DashboardPluginComponent,
    CartItemComplianceCheckComponent,
<<<<<<< HEAD
    ComplianceViolationDetailsComponent,
    WorkflowViolationDetailsComponent,
=======
>>>>>>> oned/v92
  ],
  imports: [
    CommonModule,
    CdrModule,
    EuiCoreModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RulesViolationsModule,
<<<<<<< HEAD
=======
    RequestModule,
>>>>>>> oned/v92
    TilesModule,
    TranslateModule,
    EuiCoreModule,
    IdentityRuleViolationsModule
  ],
})
export class CplConfigModule {
  constructor(private readonly initializer: InitService, private readonly logger: ClassloggerService) {
    this.logger.info(this, '🔥 CPL loaded');
    this.initializer.onInit(routes);
<<<<<<< HEAD
    this.logger.info(this, '▶️ CPL initialized');
=======
    this.logger.info(this, '▶︝ CPL initialized');
>>>>>>> oned/v92
  }
}
