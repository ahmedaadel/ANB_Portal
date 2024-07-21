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
=======
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> oned/v92

import { UserConfig, ProjectConfig, QerProjectConfig } from 'imx-api-qer';
import { UserModelService } from '../../user/user-model.service';
import { PendingItemsType } from '../../user/pending-items-type.interface';
import { ProjectConfigurationService } from '../../project-configuration/project-configuration.service';
import { imx_SessionService, SystemInfoService } from 'qbm';
import { SystemInfo } from 'imx-api-qbm';
<<<<<<< HEAD
=======
import { DashboardService } from './dashboard.service';
>>>>>>> oned/v92

@Component({
  templateUrl: './start.component.html',
  selector: 'imx-start',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  public userConfig: UserConfig;
  public projectConfig: QerProjectConfig & ProjectConfig;
  public pendingItems: PendingItemsType;
  public systemInfo: SystemInfo;
  public viewReady: boolean;
  public userUid: string;

  constructor(
    public readonly router: Router,
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
    private readonly userModelSvc: UserModelService,
    private readonly systemInfoService: SystemInfoService,
    private readonly sessionService: imx_SessionService,
=======
    private readonly dashboardService: DashboardService,
    private readonly userModelSvc: UserModelService,
    private readonly systemInfoService: SystemInfoService,
    private readonly sessionService: imx_SessionService,
    private readonly detectRef: ChangeDetectorRef,
>>>>>>> oned/v92
    private readonly projectConfigurationService: ProjectConfigurationService
  ) {}

  public async ngOnInit(): Promise<void> {
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));
=======
    this.dashboardService.busyStateChanged.subscribe(busy => {
      this.viewReady = !busy;
      this.detectRef.detectChanges();
    });
    const busy = this.dashboardService.beginBusy();
>>>>>>> oned/v92
    try {
      this.userConfig = await this.userModelSvc.getUserConfig();
      this.pendingItems = await this.userModelSvc.getPendingItems();
      this.projectConfig = await this.projectConfigurationService.getConfig();
      this.systemInfo = await this.systemInfoService.get();
      this.userUid = (await this.sessionService.getSessionState()).UserUid;
<<<<<<< HEAD
      this.viewReady = true;
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
    } finally {
      busy.endBusy();
>>>>>>> oned/v92
    }
  }

  public ShowPasswordTile(): boolean {
<<<<<<< HEAD
    return this.userConfig.ShowPasswordTile;
  }

  public ShowPasswordMgmtTile(): boolean {
    return this.projectConfig.PasswordConfig.VI_MyData_MyPassword_Visibility && !!this.projectConfig.PasswordConfig.PasswordMgmtUrl;
=======
    return this.userConfig?.ShowPasswordTile;
  }

  public ShowPasswordMgmtTile(): boolean {
    return this.projectConfig?.PasswordConfig.VI_MyData_MyPassword_Visibility && !!this.projectConfig?.PasswordConfig.PasswordMgmtUrl;
>>>>>>> oned/v92
  }

  public GoToMyPassword(): void {
    this.router.navigate(['profile', 'profile-password-questions']);
  }

  public GoToPasswordMgmtWeb(): void {
<<<<<<< HEAD
    this.router.navigate(['/externalRedirect', { externalUrl: this.projectConfig.PasswordConfig.PasswordMgmtUrl }]);
=======
    this.router.navigate(['/externalRedirect', { externalUrl: this.projectConfig?.PasswordConfig.PasswordMgmtUrl }]);
>>>>>>> oned/v92
  }

  public GoToShoppingCart(): void {
    this.router.navigate(['shoppingcart']);
  }

  public GoToProductSelection(): void {
<<<<<<< HEAD
    this.router.navigate(['productselection']);
=======
    this.router.navigate(['newrequest']);
>>>>>>> oned/v92
  }

  public GoToItshopApprovals(): void {
    this.router.navigate(['itshop', 'approvals']);
  }

  public GoToItShopApprovalInquiries(): void {
<<<<<<< HEAD
    this.router.navigate(['itshop', 'answerquestions']);
=======
    this.router.navigate(['itshop', 'approvals'], {queryParams: {inquiries:true}});
>>>>>>> oned/v92
  }

  public GoToMyProcesses(): void {
    this.router.navigate(['/QBM_MyProcesses'], {});
  }

  public ShowQpmIntegration(): boolean {
<<<<<<< HEAD
    return !!this.projectConfig.PasswordConfig.QpmBaseUrl;
=======
    return !!this.projectConfig?.PasswordConfig.QpmBaseUrl;
>>>>>>> oned/v92
  }

  public GoToQpm(): void {
    this.router.navigate(['qpmintegration'], {});
  }

  public GoToDashboardEmployeesByRiskIndex(): void {
    // TODO (ADO 207303) this.router.navigate(['/VI_Start_Governance'], { Part: 'Risk' });
  }

  public GoToDashboardOrganization(): void {
    // TODO (ADO 207303) this.router.navigate(['/VI_Start_Governance'], { Part: 'Organization' });
  }

  public GoToDashboardRequests(): void {
    // TODO (ADO 207303) this.router.navigate(['/VI_Start_Governance'], { Part: 'ITShop' });
  }

  public GetCountProductsinShoppingCart(): number {
<<<<<<< HEAD
    return this.pendingItems.CountProductsInShoppingCart;
=======
    return this.pendingItems?.CountProductsInShoppingCart;
>>>>>>> oned/v92
  }

  public GetCountInRequestHistory(): number {
    return this.userConfig.CountPendingRequests;
  }

  public GetCountPendingRequests(): number {
<<<<<<< HEAD
    return this.pendingItems.OpenPWO;
  }

  public GetCountRequestInquiries(): number {
    return this.pendingItems.OpenInquiries;
=======
    return this.pendingItems?.OpenPWO;
  }

  public GetCountRequestInquiries(): number {
    return this.pendingItems?.OpenInquiries;
>>>>>>> oned/v92
  }

  public GetCountNewProcesses(): number {
    return 0; // hide for now
    // return this.pendingItems.NewProcesses;
  }

  public ShowPasswordLink(): boolean {
    // TODO (TFS 805999) not(isnullorempty(getconfig('VI_Common_PasswordWebLink')))
    return true;
  }

  public ShowNewRequestLink(): boolean {
    // Starting a new request is only allowed when the session has an identity and the ITShop(Requests) feature is enabled
    return this.userConfig?.IsITShopEnabled && this.userUid && this.systemInfo.PreProps.includes('ITSHOP');
  }
}
