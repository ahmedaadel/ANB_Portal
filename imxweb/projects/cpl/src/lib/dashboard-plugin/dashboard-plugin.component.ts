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
import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EuiLoadingService } from '@elemental-ui/core';

import { PendingItemsType, UserModelService } from 'qer';
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService, PendingItemsType, UserModelService } from 'qer';
import { CplPermissionsService } from '../rules/admin/cpl-permissions.service';
>>>>>>> oned/v92

@Component({
  templateUrl: './dashboard-plugin.component.html'
})
export class DashboardPluginComponent implements OnInit {

  public pendingItems: PendingItemsType;

<<<<<<< HEAD
  constructor(
    public readonly router: Router,
    private readonly busyService: EuiLoadingService,
=======
  public isExceptionAdmin = false;

  constructor(
    public readonly router: Router,
    private readonly dashboardService: DashboardService,
    private readonly permissionService: CplPermissionsService,
>>>>>>> oned/v92
    private readonly userModelSvc: UserModelService
  ) { }

  public async ngOnInit(): Promise<void> {

<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());

    try {
      this.pendingItems = await this.userModelSvc.getPendingItems();
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
    const busy = this.dashboardService.beginBusy();

    try {
      this.isExceptionAdmin = await this.permissionService.isExceptionAdmin();
      if (this.isExceptionAdmin) {
        this.pendingItems = await this.userModelSvc.getPendingItems();
      }
    } finally {
      busy.endBusy();
>>>>>>> oned/v92
    }
  }
}
