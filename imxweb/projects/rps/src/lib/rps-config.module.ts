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
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { RouteGuardService } from 'qbm';
=======
import { HELP_CONTEXTUAL, RouteGuardService } from 'qbm';
>>>>>>> oned/v92

import { InitService } from './init.service';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { EditReportComponent } from './reports/edit-report.component';
import { EditReportModule } from './reports/edit-report.module';
import { ReportButtonModule } from './report-button/report-button.module';
<<<<<<< HEAD
=======
import {StatisticReportButtonModule} from './statistic-report-button/statistic-report-button.module';
>>>>>>> oned/v92

const routes: Routes = [
  {
    path: 'reports',
    component: EditReportComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
    data:{
      contextId: HELP_CONTEXTUAL.Reports
    }
>>>>>>> oned/v92
  }
];

@NgModule({
  imports: [
    EditReportModule,
    SubscriptionsModule,
    ReportButtonModule,
<<<<<<< HEAD
=======
    StatisticReportButtonModule,
>>>>>>> oned/v92
    RouterModule.forChild(routes)
  ]
})
export class RpsConfigModule {
  constructor(private readonly initializer: InitService) {
    console.log('🔥 RPS loaded');
    this.initializer.onInit(routes);

    console.log('▶️ RPS initialized');
  }
}
