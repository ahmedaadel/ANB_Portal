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
>>>>>>> oned/v92

@Component({
  templateUrl: './dashboard-plugin.component.html'
})
export class DashboardPluginComponent implements OnInit {

  public pendingItems: PendingItemsType;

  constructor(
    public readonly router: Router,
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
=======
    private readonly dashboardService: DashboardService,
>>>>>>> oned/v92
    private readonly userModelSvc: UserModelService
  ) { }

  public async ngOnInit(): Promise<void> {

<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
=======
    const busy = this.dashboardService.beginBusy();
>>>>>>> oned/v92

    try {
      this.pendingItems = await this.userModelSvc.getPendingItems();
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      busy.endBusy();
>>>>>>> oned/v92
    }
  }
}
