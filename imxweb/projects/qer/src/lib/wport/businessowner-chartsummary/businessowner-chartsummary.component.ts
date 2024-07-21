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
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { UserModelService } from '../../user/user-model.service';
import { OwnershipInformation, PortalPersonReports, PortalPersonReportsInteractive, ProjectConfig } from 'imx-api-qer';
import { QerApiService } from '../../qer-api-client.service';
import { ProjectConfigurationService } from '../../project-configuration/project-configuration.service';
import { IdentitySidesheetComponent } from '../../identities/identity-sidesheet/identity-sidesheet.component';
import { QerPermissionsService } from '../../admin/qer-permissions.service';
import { CreateNewIdentityComponent } from '../../identities/create-new-identity/create-new-identity.component';
import { TranslateService } from '@ngx-translate/core';
=======
import { OverlayRef } from '@angular/cdk/overlay';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { OwnershipInformation, PortalPersonReports, ProjectConfig } from 'imx-api-qer';
import { QerPermissionsService } from '../../admin/qer-permissions.service';
import { IdentitySidesheetComponent } from '../../identities/identity-sidesheet/identity-sidesheet.component';
import { ProjectConfigurationService } from '../../project-configuration/project-configuration.service';
import { QerApiService } from '../../qer-api-client.service';
import { UserModelService } from '../../user/user-model.service';
import { DashboardService } from '../start/dashboard.service';
import { CreateNewIdentityComponent } from '../../identities/create-new-identity/create-new-identity.component';
>>>>>>> oned/v92
import { IdentitiesService } from '../../identities/identities.service';

@Component({
  templateUrl: './businessowner-chartsummary.component.html',
  selector: 'imx-businessowner-chartsummary',
<<<<<<< HEAD
  styleUrls: ['./businessowner-chartsummary.component.scss']
=======
  styleUrls: ['./businessowner-chartsummary.component.scss'],
>>>>>>> oned/v92
})
export class BusinessOwnerChartSummaryComponent implements OnInit {
  public reports: PortalPersonReports[];
  public ownerships: OwnershipInformation[];
<<<<<<< HEAD
  public viewReady: boolean;
=======
  public get viewReady(): boolean {
    return !this.dashboardService.isBusy;
  }
>>>>>>> oned/v92
  public allReportsCount: number;

  private projectConfig: ProjectConfig;

  constructor(
    private readonly router: Router,
    private readonly qerClient: QerApiService,
    private readonly busyService: EuiLoadingService,
<<<<<<< HEAD
=======
    private readonly dashboardService: DashboardService,
>>>>>>> oned/v92
    private readonly sideSheet: EuiSidesheetService,
    private readonly errorHandler: ErrorHandler,
    private readonly configService: ProjectConfigurationService,
    private readonly identitiesService: IdentitiesService,
<<<<<<< HEAD
    private readonly translate: TranslateService,
    private readonly userModelService: UserModelService,
    public readonly qerPermissions: QerPermissionsService
  ) { }

  public async ngOnInit(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
=======
    private readonly userModelService: UserModelService,
    public readonly qerPermissions: QerPermissionsService,
    public readonly translate: TranslateService
  ) {}

  public async ngOnInit(): Promise<void> {
    const busy = this.dashboardService.beginBusy();
>>>>>>> oned/v92
    try {
      const userConfig = await this.userModelService.getUserConfig();
      this.ownerships = userConfig.Ownerships;

      this.projectConfig = await this.configService.getConfig();

      await this.getData();
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      busy.endBusy();
>>>>>>> oned/v92
    }
  }

  public openIdentitiesOverview(): void {
<<<<<<< HEAD
    this.router.navigate(['resp', 'identities']);
  }

  public async openIdentitySidesheet(identity: PortalPersonReports): Promise<void> {

    const uid = identity.GetEntity().GetKeys()[0];
    let selectedIdentity: PortalPersonReportsInteractive;

    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
=======
    this.router.navigate(['myresponsibilities', 'identities']);
  }

  public async openIdentitySidesheet(identity: PortalPersonReports): Promise<void> {
    const uid = identity.GetEntity().GetKeys()[0];
    let selectedIdentity: PortalPersonReports;

    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));
>>>>>>> oned/v92
    try {
      const identityCollection = await this.qerClient.typedClient.PortalPersonReportsInteractive.Get_byid(uid);
      selectedIdentity = identityCollection?.Data?.[0];
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }

    if (!selectedIdentity) {
      this.errorHandler.handleError('Identity could not be loaded.');
      return;
    }

<<<<<<< HEAD
    await this.sideSheet.open(IdentitySidesheetComponent, {
      title: selectedIdentity.GetEntity().GetDisplay(),
      headerColour: 'iris-blue',
      padding: '0px',
      disableClose: true,
      width: 'max(700px, 70%)',
      icon: 'contactinfo',
      testId: 'identity-sidesheet',
      data: {
        isAdmin: false,
        projectConfig: this.projectConfig,
        selectedIdentity,
      }
    }).afterClosed().toPromise();
=======
    await this.sideSheet
      .open(IdentitySidesheetComponent, {
        title: await this.translate.get('#LDS#Heading Edit Identity').toPromise(),
        subTitle: selectedIdentity.GetEntity().GetDisplay(),
        padding: '0px',
        disableClose: true,
        width: 'max(768px, 90%)',
        icon: 'contactinfo',
        testId: 'businessowner-identity-sidesheet',
        data: {
          isAdmin: false,
          projectConfig: this.projectConfig,
          selectedIdentity,
          canEdit: true
        },
      })
      .afterClosed()
      .toPromise();
>>>>>>> oned/v92

    await this.loadDirectReports();
  }

  public async openCreateNewIdentitySidesheet(): Promise<void> {
   const identityCreated = await this.sideSheet.open(CreateNewIdentityComponent, {
      title: await this.translate.get('#LDS#Heading Create Identity').toPromise(),
      headerColour: 'iris-blue',
<<<<<<< HEAD
      bodyColour: 'asher-gray',
=======
>>>>>>> oned/v92
      padding: '0px',
      width: 'max(650px, 65%)',
      disableClose: true,
      testId: 'create-new-identity-sidesheet',
      icon: 'contactinfo',
      data: {
        selectedIdentity: await this.identitiesService.createEmptyEntity(),
        projectConfig: this.projectConfig
      }
    }).afterClosed().toPromise();

    if (identityCreated) {
<<<<<<< HEAD
      let overlayRef: OverlayRef;
      setTimeout(() => overlayRef = this.busyService.show());
      try {
        await this.getData();
      } finally {
        setTimeout(() => this.busyService.hide(overlayRef));
=======
      const busy = this.dashboardService.beginBusy();
      try {
        await this.getData();
      } finally {
        busy.endBusy();
>>>>>>> oned/v92
      }
 }  }

  public openOwnership(ownerShip: OwnershipInformation): void {
<<<<<<< HEAD
    this.router.navigate(['resp', ownerShip.TableName]);
  }

  private async getData(): Promise<void> {    
    this.viewReady = false;
=======
    this.router.navigate(['myresponsibilities', ownerShip.TableName]);
  }

  private async getData(): Promise<void> {
>>>>>>> oned/v92
    await this.loadIndirectOrDirectReports();
    if (this.allReportsCount > 0 ) {
      await this.loadDirectReports();
    }
<<<<<<< HEAD
    this.viewReady = true;
  }

  private async loadDirectReports(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      if (await this.qerPermissions.isPersonManager()) {
        this.reports = (await this.qerClient.typedClient.PortalPersonReports.Get({
          OnlyDirect: true, // direct reports only
          PageSize: 10000
        })).Data;
      }
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
  }

  private async loadDirectReports(): Promise<void> {
    if (await this.qerPermissions.isPersonManager()) {
      this.reports = (
        await this.qerClient.typedClient.PortalPersonReports.Get({
          OnlyDirect: true, // direct reports only
          PageSize: 10000,
          isinactive: '0'
        })
      ).Data;
>>>>>>> oned/v92
    }
  }

  private async loadIndirectOrDirectReports(): Promise<void> {
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      if (await this.qerPermissions.isPersonManager()) {
        this.allReportsCount = (await this.qerClient.typedClient.PortalPersonReports.Get({
          PageSize: -1
        })).totalCount;
      }
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
    if (await this.qerPermissions.isPersonManager()) {
      this.allReportsCount = (await this.qerClient.typedClient.PortalPersonReports.Get({
        PageSize: -1
      })).totalCount;
>>>>>>> oned/v92
    }
  }
}
