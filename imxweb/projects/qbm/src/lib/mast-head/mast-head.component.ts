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

import { OverlayRef } from '@angular/cdk/overlay';
<<<<<<< HEAD
import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EuiLoadingService } from '@elemental-ui/core';
=======
import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EuiLoadingService, EuiSidesheetService, EuiTopNavigationItem } from '@elemental-ui/core';
>>>>>>> oned/v92
import { Subscription } from 'rxjs';

import { AppConfigService } from '../appConfig/appConfig.service';
import { AboutComponent } from '../about/About.component';
import { AuthenticationService } from '../authentication/authentication.service';
import { ISessionState } from '../session/session-state';
import { MastHeadService } from './mast-head.service';
import { ConfirmationService } from '../confirmation/confirmation.service';
<<<<<<< HEAD
=======
import { SystemInfoService } from '../system-info/system-info.service';
import { ConnectionComponent } from '../connection/connection.component';
import { TranslateService } from '@ngx-translate/core';
import { ExtService } from '../ext/ext.service';
import { IExtension } from '../ext/extension';
>>>>>>> oned/v92

/**
 * Masthead of IMX web applications. It can contain dynamic menus or buttons, emitting menus/menu itmes when selected.
 *
 * @example
 * Template containing a masthead.
 *
 * <ng-container *ngIf="isLoggedIn">
 *  <imx-mast-head [menuList]="mastheadMenuList" (menuItemClicked)="onMenuItemClicked($event)"></imx-mast-head>
 *  <imx-menu [menuItems]="menuItems"></imx-menu>
 *  <imx-usermessage></imx-usermessage>
 * </ng-container>
 * <router-outlet></router-outlet>
 *
 * The supplied "mastheadMenuList" Input contains two menus and one button as follows:
 *
 *  this.mastheadMenuList =
 *     [{
 *       iconName: 'user',
 *       identifier: 'user-menu',
 *       type: 'menu',
 *       menuItems:
 *         [
 *           {
 *             identifier: 'user-menu-profile',
 *             caption: '#LDS#Menu Entry My profile'
 *           },
 *           {
 *             identifier: 'user-menu-addressbook',
 *             caption: '#LDS#Menu Entry Address book'
 *           }
 *         ]
 *     },
 *     {
 *       iconName: 'performance',
 *       identifier: 'performance-menu',
 *       type: 'menu',
 *       menuItems:
 *         [
 *           {
 *             identifier: 'performance-menu-item3',
 *             caption: '#LDS#Item 3'
 *           },
 *           {
 *             identifier: 'performance-menu-item4',
 *             caption: '#LDS#Item 4'
 *           }
 *         ]
 *     },
 *     {
 *       iconName: 'reports',
 *       identifier: 'reports-button',
 *       type: 'button',
 *       menuItems: []
 *     }];
 *
 * NOTE: If you want to use a button instead of a menu, the "type" field has to be set to "button" instead of "menu".
 *
 */
@Component({
  selector: 'imx-mast-head',
  templateUrl: './mast-head.component.html',
  styleUrls: ['./mast-head.component.scss']
})
export class MastHeadComponent implements OnDestroy {

<<<<<<< HEAD
=======
  /**
   * When these {@link EuiTopNavigationItem|items} are set, the menu is displayed.
   */
  @Input() public menuItems: EuiTopNavigationItem[];

>>>>>>> oned/v92
  public get hasDocumentationConfig(): boolean {
    return !!this.appConfig.Config.LocalDocPath;
  }

  public get isMobile(): boolean {
    return document.body.offsetWidth <= 768;
  }

  public get isAuthenticated(): boolean {
    return this.sessionState?.IsLoggedIn;
  }

<<<<<<< HEAD
  public sessionState: ISessionState;
  public logoUrl: string;
=======
  public get isAppOverview(): boolean {
    return this.appConfig?.Config?.WebAppIndex === 'admin' && this.router.url === '/';
  }

  public get isAppAdminPortal(): boolean {
    return this.appConfig?.Config?.WebAppIndex === 'admin' && this.router.url === '/dashboard';
  }

  public sessionState: ISessionState;
  public logoUrl: string;
  public productName: string;
  public extensions: IExtension[] = [];
>>>>>>> oned/v92

  private readonly subscriptions: Subscription[] = [];

  constructor(
    public readonly appConfig: AppConfigService,
<<<<<<< HEAD
=======
    private readonly systemInfoService: SystemInfoService,
>>>>>>> oned/v92
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly confirmationService: ConfirmationService,
    private readonly busyService: EuiLoadingService,
    private readonly mastHeadService: MastHeadService,
<<<<<<< HEAD
    private readonly authentication: AuthenticationService
=======
    private readonly authentication: AuthenticationService,
    private readonly sideSheetService: EuiSidesheetService,
    private readonly translate: TranslateService,
    private readonly extService: ExtService,
>>>>>>> oned/v92
  ) {
    this.subscriptions.push(this.authentication.onSessionResponse.subscribe((sessionState: ISessionState) =>
      this.sessionState = sessionState
    ));

    // apply custom logo from configuration
<<<<<<< HEAD
    this.appConfig.getImxConfig().then(config => {
=======
    this.systemInfoService.getImxConfig().then(config => {
>>>>>>> oned/v92
      if (config.CompanyLogoUrl) {
        // make relative URL absolute if needed
        this.logoUrl = new URL(config.CompanyLogoUrl, this.appConfig.BaseUrl).href;
      }
<<<<<<< HEAD
    });
=======
      const name = config.ProductName;
      if (name) {
        this.productName = name;
      }

    });

    this.getDynamicExtensions();
  }

  public getDynamicExtensions(): void{
    this.extensions = this.extService.Registry['mastHead'];

  }

  public showExtension(extension: IExtension): void {
    if (!!extension.inputData.url) {
      this.router.navigate([extension.inputData.url]);
    }
>>>>>>> oned/v92
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * For navigating home, you know.
   */
  public goHome(): void {
<<<<<<< HEAD
    this.router.navigate([this.appConfig.Config.routeConfig.start], { queryParams: {} });
=======
    if (!this.isAppOverview) this.router.navigate([this.appConfig.Config.routeConfig.start], { queryParams: {} });
>>>>>>> oned/v92
  }

  /**
   * Opens the About view.
   */
  public openAboutDialog(): void {
    this.dialog.open(AboutComponent, { panelClass: 'imx-AboutPanel' });
  }

  /**
<<<<<<< HEAD
=======
   * Opens the Connection sidesheet.
   */
  public async openConnection(): Promise<void> {
    const data = await this.mastHeadService.getConnectionData(this.appConfig.Config.WebAppIndex);

    await this.sideSheetService.open(ConnectionComponent, {
      icon: 'rss',
      title: this.translate.instant('#LDS#Heading Connection Information'),
      padding: '0px',
      width: 'max(700px, 60%)',
      data: data
    }).afterClosed().toPromise();
  }

  /**
>>>>>>> oned/v92
   * Logs out and kills the session.
   */
  public async logout(): Promise<void> {
    if (await this.confirmationService.confirm({
<<<<<<< HEAD
      Title: '#LDS#Log off',
      Message: '#LDS#Are you sure you want to log off?',
=======
      Title: '#LDS#Heading Log Out',
      Message: '#LDS#Are you sure you want to log out?',
>>>>>>> oned/v92
      identifier: 'confirm-logout-'
    })) {
      let overlayRef: OverlayRef;
      setTimeout(() => (overlayRef = this.busyService.show()));
      try {
        await this.authentication.logout();
      } finally {
        setTimeout(() => this.busyService.hide(overlayRef));
      }
    }
  }

  /**
   * Logs out and kills the session.
   */
  public navigateToDocumentation(): void {
    this.mastHeadService.openDocumentationLink();
  }
}
