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
import { PolicyListComponent } from './policies/policy-list/policy-list.component';
<<<<<<< HEAD
import { ClassloggerService, RouteGuardService } from 'qbm';
=======
import { PolicyGroupListComponent } from './policy-group/policy-group-list/policy-group-list.component';
import { ClassloggerService, HELP_CONTEXTUAL, RouteGuardService } from 'qbm';
>>>>>>> oned/v92
import { InitService } from './init.service';
import { AttestationDecisionModule } from './decision/attestation-decision.module';
import { AttestationDecisionComponent } from './decision/attestation-decision.component';
import { DashboardPluginComponent } from './dashboard-plugin/dashboard-plugin.component';
import { AttestationRunsModule } from './runs/attestation-runs.module';
import { RunsComponent } from './runs/runs.component';
import { TilesModule } from 'qer';
import { AttestationHistoryWrapperComponent } from './attestation-history/attestation-history-wrapper.component';
import { AttestationFeatureGuardService } from './attestation-feature-guard.service';
import { PickCategoryComponent } from './pick-category/pick-category.component';
import { AttestionAdminGuardService } from './guards/attestation-admin-guard.service';
import { AttestationPoliciesGuardService } from './guards/attestation-policies-guard.service';
import { ClaimDeviceComponent } from './claim-device/claim-device.component';
<<<<<<< HEAD

=======
import { MyAttestationCasesComponent } from './attestation-history/my-attestation-cases/my-attestation-cases.component';
import { HardwareGuardService } from './hardware-guard.service';
>>>>>>> oned/v92
const routes: Routes = [
  {
    path: 'attestation/policies',
    component: PolicyListComponent,
    canActivate: [RouteGuardService, AttestationFeatureGuardService, AttestationPoliciesGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
    data: {
      contextId: HELP_CONTEXTUAL.AttestationPolicies,
    },
>>>>>>> oned/v92
  },
  {
    path: 'attestation/runs',
    component: RunsComponent,
    canActivate: [RouteGuardService, AttestationFeatureGuardService, AttestationPoliciesGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
    data: {
      contextId: HELP_CONTEXTUAL.AttestationRuns,
    },
>>>>>>> oned/v92
  },
  {
    path: 'attestation/history',
    component: AttestationHistoryWrapperComponent,
    canActivate: [RouteGuardService, AttestationFeatureGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
    data: {
      contextId: HELP_CONTEXTUAL.AttestationHistory,
    },
>>>>>>> oned/v92
  },
  {
    path: 'attestation/decision',
    component: AttestationDecisionComponent,
    canActivate: [RouteGuardService, AttestationFeatureGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
    data: {
      contextId: HELP_CONTEXTUAL.PendingAttestations,
    },
>>>>>>> oned/v92
  },
  {
    path: 'attestation/preselection',
    component: PickCategoryComponent,
    canActivate: [RouteGuardService, AttestationFeatureGuardService, AttestionAdminGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
    data: {
      contextId: HELP_CONTEXTUAL.AttestationPreselection,
    },
>>>>>>> oned/v92
  },
  {
    path: 'claimdevice',
    component: ClaimDeviceComponent,
<<<<<<< HEAD
    canActivate: [RouteGuardService],
    resolve: [RouteGuardService]
  }
=======
    canActivate: [RouteGuardService, HardwareGuardService],
    resolve: [RouteGuardService],
    data: {
      contextId: HELP_CONTEXTUAL.ClaimDevice,
    },
  },
  {
    path: 'attestation/policy-group',
    component: PolicyGroupListComponent,
    canActivate: [RouteGuardService, AttestationFeatureGuardService, AttestationPoliciesGuardService],
    data: {
      contextId: HELP_CONTEXTUAL.AttestationPolicyCollections,
    },
    resolve: [RouteGuardService],
  },
  {
    path: 'attestation/myattestationcases',
    component: MyAttestationCasesComponent,
    canActivate: [RouteGuardService, AttestationFeatureGuardService],
    resolve: [RouteGuardService],
    data: {
      contextId: HELP_CONTEXTUAL.AttestationMyAttestationCases,
    },
  },
>>>>>>> oned/v92
];

@NgModule({
  declarations: [
    DashboardPluginComponent
  ],
  imports: [
    CommonModule,
    TilesModule,
    AttestationDecisionModule,
    RouterModule.forChild(routes),
    AttestationRunsModule,
    MatIconModule,
    MatListModule,
    TranslateModule,
<<<<<<< HEAD
    EuiCoreModule
=======
    EuiCoreModule,
>>>>>>> oned/v92
  ]
})
export class AttConfigModule {
  constructor(
    private readonly initializer: InitService, private readonly logger: ClassloggerService) {
    this.logger.info(this, '🔥 ATT loaded');
    this.initializer.onInit(routes);
    this.logger.info(this, '▶️ ATT initialized');
  }
}
