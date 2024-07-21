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
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { EuiLoadingService } from '@elemental-ui/core';
import { Subscription } from 'rxjs';

import { MenuItem, AuthenticationService, ISessionState, MenuService, SettingsService, imx_SessionService, SplashService } from 'qbm';
import { FeatureConfigService } from 'qer';
import { UserService } from './user/user.service';
import { FeatureConfig } from 'imx-api-qer';
import { isOutstandingManager } from './permissions/permissions-helper';
=======
import { Component, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, EventType } from '@angular/router';
import { EuiLoadingService, EuiTheme, EuiThemeService, EuiTopNavigationItem } from '@elemental-ui/core';
import { Subscription } from 'rxjs';

import {
  MenuItem,
  AuthenticationService,
  ISessionState,
  MenuService,
  SettingsService,
  imx_SessionService,
  SplashService,
  ImxTranslationProviderService,
} from 'qbm';
import { FeatureConfigService, OpSupportUserService, QerApiService, SettingsComponent } from 'qer';
import { FeatureConfig, ProfileSettings } from 'imx-api-qer';
import { isOutstandingManager } from './permissions/permissions-helper';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
>>>>>>> oned/v92

@Component({
  selector: 'imx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
<<<<<<< HEAD
  public menuItems: MenuItem[];
=======
  public menuItems: EuiTopNavigationItem[];
>>>>>>> oned/v92
  public isLoggedIn = false;
  public hideMenu = false;
  public hideUserMessage = false;
  public showPageContent = true;
<<<<<<< HEAD

=======
  private routerStatus: EventType;
>>>>>>> oned/v92
  private readonly subscriptions: Subscription[] = [];

  constructor(
    private readonly authentication: AuthenticationService,
    private readonly busyService: EuiLoadingService,
    private readonly router: Router,
    private readonly menuService: MenuService,
    private readonly featureService: FeatureConfigService,
    private readonly splash: SplashService,
    sessionService: imx_SessionService,
    settings: SettingsService,
<<<<<<< HEAD
    userModelService: UserService
=======
    userModelService: OpSupportUserService,
    private dialog: MatDialog,
    private qerClient: QerApiService,
    private readonly themeService: EuiThemeService,
    private readonly errorHandler: ErrorHandler,
    private readonly translationProvider: ImxTranslationProviderService,
    private readonly translateService: TranslateService
>>>>>>> oned/v92
  ) {
    this.subscriptions.push(
      this.authentication.onSessionResponse.subscribe(async (sessionState: ISessionState) => {
        if (sessionState.hasErrorState) {
          // Needs to close here when there is an error on sessionState
          splash.close();
        } else {
<<<<<<< HEAD
          if (sessionState.IsLoggedOut) {
=======
          if (sessionState.IsLoggedOut && this.routerStatus !== EventType.NavigationEnd) {
>>>>>>> oned/v92
            this.showPageContent = false;
          }
        }

        this.isLoggedIn = sessionState.IsLoggedIn;
        if (this.isLoggedIn) {
<<<<<<< HEAD
=======
          const isUseProfileLangChecked = (await this.qerClient.v2Client.opsupport_profile_get()).UseProfileLanguage ?? false;
          // Set session culture if isUseProfileLangChecked is true, set browser culture otherwise
          if (isUseProfileLangChecked) {
            await this.translationProvider.init(sessionState.culture, sessionState.cultureFormat);
          } else {
            const browserCulture = this.translateService.getBrowserCultureLang();
            await this.translationProvider.init(browserCulture);
          }

>>>>>>> oned/v92
          // Close the splash screen that opened in app service initialisation
          // Needs to close here when running in containers (auth skipped)
          splash.close();

          await this.setupMenu();
          const conf = await sessionService.Client.opsupport_config_get();
          settings.DefaultPageSize = conf.DefaultPageSize;

          const groupInfo = await userModelService.getGroups();
<<<<<<< HEAD
          this.menuItems = this.menuService.getMenuItems([], groupInfo.map(group => group.Name), true);
=======
          this.menuItems = await this.menuService.getMenuItems(
            [],
            groupInfo.map((group) => group.Name),
            true
          );

          this.applyProfileSettings();
>>>>>>> oned/v92
        }
      })
    );

    this.subscriptions.push(
      this.authentication.onSessionResponse.subscribe(async (sessionState: ISessionState) => {
        this.isLoggedIn = sessionState.IsLoggedIn;
      })
    );

    this.setupRouter();
  }

  public async ngOnInit(): Promise<void> {
    await this.authentication.update();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

<<<<<<< HEAD
=======
  public async openSettingsDialog(): Promise<void> {
    this.dialog.open(SettingsComponent, { minWidth: '600px' });
  }

>>>>>>> oned/v92
  private setupRouter(): void {
    let overlayRef: OverlayRef;

    this.router.events.subscribe((event: RouterEvent) => {
<<<<<<< HEAD
      switch (true) {
        case event instanceof NavigationStart:
          this.hideUserMessage = true;

          if (this.isLoggedIn && event.url === '/') {
            // show the splash screen, when the user logs out!
            this.splash.init({ applicationName: 'Operations Support Web Portal' });
          }
          break;
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
          this.hideUserMessage = false;
          this.hideMenu = event.url === '/';
          this.showPageContent = true;
=======
      if (event instanceof NavigationStart) {
        this.routerStatus = event.type;
        this.hideUserMessage = true;
        if (this.isLoggedIn && event.url === '/') {
          // show the splash screen, when the user logs out!
          this.splash.init({ applicationName: 'Operations Support Web Portal' });
        }
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.hideUserMessage = false;
        this.routerStatus = event.type;
        this.hideMenu = event.url === '/';
        this.showPageContent = true;
>>>>>>> oned/v92
      }
    });
  }

  private async setupMenu(): Promise<void> {
    let featureConfig: FeatureConfig;
    const overlay = this.busyService.show();
    try {
      featureConfig = await this.featureService.getFeatureConfig();
    } finally {
      this.busyService.hide(overlay);
    }

    this.menuService.addMenuFactories(
      () => {
        return {
          id: 'OpsWeb_ROOT_Dashboard',
          sorting: '10',
          title: '#LDS#Home',
          route: 'start',
        };
      },
      (__: string[], groups: string[]) => {
        if (!groups.includes('QER_4_OperationsSupport')) {
          return null;
        }

        const menu = {
          id: 'OpsWeb_ROOT_Processes',
          sorting: '20',
          title: '#LDS#Processes',
          items: [
            {
              id: 'OpsWeb_Processes_Processes',
<<<<<<< HEAD
              title: '#LDS#Processes',
              route: 'Jobs',
            },
            {
              id: 'OpsWeb_Processes_ProcessSteps',
              title: '#LDS#Process steps',
=======
              title: '#LDS#Menu Entry Processes',
              route: 'Jobs',
            },
            {
              id: 'OpsWeb_Processes_ProcessHistory',
              title: '#LDS#Menu Entry Process history',
              route: 'JobHistory',
            },
            {
              id: 'OpsWeb_Processes_ProcessSteps',
              title: '#LDS#Menu Entry Process steps per process',
>>>>>>> oned/v92
              route: 'JobChainInformation',
            },
            {
              id: 'OpsWeb_Processes_Performance',
<<<<<<< HEAD
              title: '#LDS#Performance',
              route: 'JobPerformance',
            },
=======
              title: '#LDS#Menu Entry Performance',
              route: 'JobPerformance',
            },
            {
              id: 'OpsWeb_Objects_By_Process_ID',
              title: '#LDS#Menu Entry Processes and operations by process ID',
              route: 'ObjectByProccessId',
            },
          ],
        };
        return menu;
      },
      (__: string[], groups: string[]) => {
        if (!groups.includes('QER_4_OperationsSupport')) {
          return null;
        }

        const menu = {
          id: 'DbQueue',
          sorting: '30',
          title: '#LDS#Database',
          items: [
            {
              id: 'OpsWeb_DbQueue_DbQueue',
              title: '#LDS#Menu Entry DBQueue',
              route: 'DbQueue',
            },
>>>>>>> oned/v92
          ],
        };
        return menu;
      },
      (__: string[], groups: string[]) => {
        if (!groups.includes('QER_4_OperationsSupport')) {
          return null;
        }
        const menu = {
          id: 'OpsWeb_ROOT_Synchronization',
          title: '#LDS#Synchronization',
<<<<<<< HEAD
          sorting: '30',
          items: [
            {
              id: 'OpsWeb_Synchronization_UnresolvedReferences',
              title: '#LDS#Unresolved references',
              route: 'unresolvedRefs',
              sorting: '30-10',
=======
          sorting: '40',
          items: [
            {
              id: 'OpsWeb_Synchronization_UnresolvedReferences',
              title: '#LDS#Menu Entry Unresolved references',
              route: 'unresolvedRefs',
              sorting: '40-10',
>>>>>>> oned/v92
            },
          ],
        };

        if (isOutstandingManager(groups)) {
          menu.items.push({
            id: 'OpsWeb_Synchronization_OutstandingObjects',
            title: '#LDS#Menu Entry Outstanding objects',
            route: 'outstanding',
<<<<<<< HEAD
            sorting: '30-20',
=======
            sorting: '40-20',
>>>>>>> oned/v92
          });
        }

        menu.items.push({
          id: 'OpsWeb_Synchronization_SyncInformation',
<<<<<<< HEAD
          title: '#LDS#Synchronization',
          route: 'SyncInformation',
          sorting: '30-30',
=======
          title: '#LDS#Menu Entry Synchronization',
          route: 'SyncInformation',
          sorting: '40-30',
>>>>>>> oned/v92
        });
        return menu;
      },
      (__: string[], groups: string[]) => {
        if (!groups.includes('QER_4_OperationsSupport')) {
          return null;
        }
        const menu = {
          id: 'OpsWeb_ROOT_System',
<<<<<<< HEAD
          sorting: '40',
=======
          sorting: '50',
>>>>>>> oned/v92
          title: '#LDS#System',
          items: [
            {
              id: 'OpsWeb_System_Database',
<<<<<<< HEAD
              title: '#LDS#Database log',
=======
              title: '#LDS#Menu Entry Database log',
>>>>>>> oned/v92
              route: 'journal',
            },
            {
              id: 'OpsWeb_System_WebApplications',
<<<<<<< HEAD
              title: '#LDS#Web applications',
              route: 'WebApplications',
            },
=======
              title: '#LDS#Menu Entry Web applications',
              route: 'WebApplications',
            },
            {
              id: 'OpsWeb_System_DataChanges',
              title: '#LDS#Menu Entry Operation history',
              route: 'DataChanges',
            },
>>>>>>> oned/v92
          ],
        };

        if (featureConfig?.EnableSystemStatus) {
          menu.items.unshift({
            id: 'OpsWeb_System_SystemStatus',
<<<<<<< HEAD
            title: '#LDS#System status',
=======
            title: '#LDS#Menu Entry System status',
>>>>>>> oned/v92
            route: 'SystemStatus',
          });
        }
        return menu;
      }
    );

    return null;
  }
<<<<<<< HEAD
=======

  private async applyProfileSettings() {
    try {
      let profileSettings: ProfileSettings = await this.qerClient.client.opsupport_profile_get();
      if (profileSettings?.PreferredAppThemes) {
        this.themeService.setTheme(<EuiTheme>profileSettings.PreferredAppThemes);
      }
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
>>>>>>> oned/v92
}
