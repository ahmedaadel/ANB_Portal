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
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { EuiCoreModule } from '@elemental-ui/core';

<<<<<<< HEAD
import { ClassloggerService, RouteGuardService } from 'qbm';
=======
import { ClassloggerService, HELP_CONTEXTUAL, RouteGuardService } from 'qbm';
>>>>>>> oned/v92
import { InitService } from './init.service';
import { TilesModule } from 'qer';
import { DashboardPluginComponent } from './dashboard-plugin/dashboard-plugin.component';
import { PolicyViolationsComponent } from './policy-violations/policy-violations.component';
<<<<<<< HEAD
import { PolicyViolationsModule } from './policy-violations/policy-violations.module';
import { PolicyViolationApproverGuardService } from './guards/policy-violation-approver-guard.service';
=======
import { PoliciesModule } from './policies/policies.module';
import { PolicyViolationsModule } from './policy-violations/policy-violations.module';
import { PoliciesComponent } from './policies/policies.component';
import { PolicyAdminGuardService } from './guards/policy-admin-guard.service';
>>>>>>> oned/v92

const routes: Routes = [
  {
    path: 'compliance/policyviolations/approve',
    component: PolicyViolationsComponent,
<<<<<<< HEAD
    canActivate: [RouteGuardService, PolicyViolationApproverGuardService],
    resolve: [RouteGuardService]
=======
    canActivate: [RouteGuardService, PolicyAdminGuardService],
    resolve: [RouteGuardService],
    data:{
      contextId: HELP_CONTEXTUAL.CompliancePolicyViolations
    }
>>>>>>> oned/v92
  },
  {
    path: 'compliance/policyviolations',
    component: PolicyViolationsComponent,
<<<<<<< HEAD
    canActivate: [RouteGuardService, PolicyViolationApproverGuardService],
    resolve: [RouteGuardService]
  }
=======
    canActivate: [RouteGuardService, PolicyAdminGuardService],
    resolve: [RouteGuardService],
    data:{
      contextId: HELP_CONTEXTUAL.CompliancePolicyViolations
    }
  },
  {
    path: 'compliance/policies',
    component: PoliciesComponent,
    canActivate: [RouteGuardService, PolicyAdminGuardService],
    resolve: [RouteGuardService],
    data:{
      contextId: HELP_CONTEXTUAL.CompanyPolicies
    }
  },
>>>>>>> oned/v92
];

@NgModule({
  declarations: [
    DashboardPluginComponent,
  ],
  imports: [
    CommonModule,
    TilesModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatListModule,
    TranslateModule,
    EuiCoreModule,
<<<<<<< HEAD
    PolicyViolationsModule
=======
    PoliciesModule,
    PolicyViolationsModule,
>>>>>>> oned/v92
  ]
})
export class PolConfigModule {
  constructor(
    private readonly initializer: InitService, private readonly logger: ClassloggerService) {
    this.logger.info(this, '🔥 POL loaded');
    this.initializer.onInit(routes);
    this.logger.info(this, '▶️ POL initialized');
  }
}
