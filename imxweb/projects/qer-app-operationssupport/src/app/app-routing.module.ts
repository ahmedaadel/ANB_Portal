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
import { AuthenticationGuardService, LoginComponent, RouteGuardService } from 'qbm';
>>>>>>> oned/v92
import { ObjectOverviewComponent } from './object-overview/object-overview.component';
import { JobsComponent } from './processes/jobs/jobs.component';
import { JournalComponent } from './journal/journal.component';
import { UnresolvedRefsComponent } from './unresolved-refs/unresolved-refs.component';
import { SystemStatusComponent } from './information/system-status/system-status.component';
import { WebApplicationsComponent } from './web-applications/web-applications.component';
import { ServiceAvailabilityComponent } from './service-report/service-availability.component';
import { ServicesInactiveComponent } from './service-report/services-inactive.component';
import { FrozenJobsComponent } from './processes/frozen-jobs/frozen-jobs.component';
import { JobChainsComponent } from './processes/job-chains/job-chains.component';
<<<<<<< HEAD
=======
import { JobHistoryComponent } from './processes/job-history/job-history.component';
>>>>>>> oned/v92
import { JobPerformanceComponent } from './processes/job-performance/job-performance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SyncInformationComponent } from './sync/sync-information/sync-information.component';
import { SyncJournalComponent } from './sync/sync-journal/sync-journal.component';
import { OutstandingComponent } from 'dpr';
import { SystemStatusRouteGuardService } from './guards/system-status-route-guard.service';
import { OutstandingManagerGuardService } from './guards/outstanding-manager-guard.service';
<<<<<<< HEAD

const routes: Routes = [
  {
    path: 'start',
    component: DashboardComponent,
    canActivate: [RouteGuardService],
    resolve: [RouteGuardService]
=======
import { ObjectsByIdComponent } from './processes/objects-by-id/objects-by-id.component';
import { DataChangesComponent } from './data-changes/data-changes.component';
import { DbQueueComponent } from './db-queue/db-queue.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthenticationGuardService],
    resolve: [RouteGuardService]
  },
  {
    path: 'start',
    component: DashboardComponent,
    canActivate: [RouteGuardService],
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'FrozenJobs',
    component: FrozenJobsComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'JobChainInformation',
    component: JobChainsComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'object/:table/:uid',
    component: ObjectOverviewComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
  },
  {
    path: 'object/:table/:uid/:tab',
    component: ObjectOverviewComponent,
    canActivate: [RouteGuardService],
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'jobserver/:queueName',
    component: FrozenJobsComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
  },
=======
    resolve: [RouteGuardService],
  },

>>>>>>> oned/v92
  {
    path: 'outstanding',
    component: OutstandingComponent,
    canActivate: [RouteGuardService, OutstandingManagerGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'Jobs',
    component: JobsComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'journal',
    component: JournalComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'unresolvedRefs',
    component: UnresolvedRefsComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'JobPerformance',
    component: JobPerformanceComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
  },
  {
    path: 'JobHistory',
    component: JobHistoryComponent,
    canActivate: [RouteGuardService],
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'SystemStatus',
    component: SystemStatusComponent,
    canActivate: [RouteGuardService, SystemStatusRouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'WebApplications',
    component: WebApplicationsComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'ServiceAvailability',
    component: ServiceAvailabilityComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'ServicesInactive',
    component: ServicesInactiveComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'SyncInformation',
    component: SyncInformationComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'SyncJournal',
    component: SyncJournalComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'SyncJournal/:uidSyncShell',
    component: SyncJournalComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
  },
=======
    resolve: [RouteGuardService],
  },
  {
    path: 'ObjectByProccessId',
    component: ObjectsByIdComponent,
    canActivate: [RouteGuardService],
    resolve: [RouteGuardService],
  },
  {
    path: 'DataChanges',
    component: DataChangesComponent,
    canActivate: [RouteGuardService],
    resolve: [RouteGuardService]
  },
  {
    path: 'DbQueue',
    component: DbQueueComponent,
    canActivate: [RouteGuardService],
    resolve: [RouteGuardService],
  },
>>>>>>> oned/v92
  { path: '**', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
<<<<<<< HEAD
  exports: [RouterModule]
=======
  exports: [RouterModule],
>>>>>>> oned/v92
})
export class AppRoutingModule {}
