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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationError, RouterEvent, NavigationCancel } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthenticationService, ISessionState, MenuItem, SystemInfoService, MenuService, IeWarningService, SplashService } from 'qbm';
import { PendingItemsType, ProjectConfigurationService, UserModelService } from 'qer';
import { QerProjectConfig } from 'imx-api-qer';
import { ProjectConfig } from 'imx-api-qbm';
=======
import { Component, Inject, ErrorHandler, OnDestroy, OnInit } from '@angular/core';
import { EventType, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  AuthenticationService,
  IeWarningService,
  ImxTranslationProviderService,
  ISessionState,
  MenuService,
  SplashService,
  SystemInfoService,
} from 'qbm';

import { ProjectConfigurationService, UserModelService, SettingsComponent, QerApiService } from 'qer';

import { ProfileSettings, QerProjectConfig } from 'imx-api-qer';
import { ProjectConfig } from 'imx-api-qbm';
import { MatDialog } from '@angular/material/dialog';
import { EuiLoadingService, EuiTheme, EuiThemeService, EuiTopNavigationItem } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_BASE_HREF } from '@angular/common';
import { getBaseHref, HEADLESS_BASEHREF } from './app.module';
>>>>>>> oned/v92

@Component({
  selector: 'imx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
<<<<<<< HEAD
  public menuItems: MenuItem[];
  public isLoggedIn = false;
  public hideMenu = false;
  public hideUserMessage = false;
  public pendingItems: PendingItemsType;
  public showPageContent = true;

=======
  public menuItems: EuiTopNavigationItem[];
  public isLoggedIn = false;
  public hideMenu = false;
  public hideUserMessage = false;
  public showPageContent = true;
  private routerStatus: EventType;
>>>>>>> oned/v92
  private readonly subscriptions: Subscription[] = [];

  constructor(
    private readonly authentication: AuthenticationService,
    private readonly router: Router,
    private readonly splash: SplashService,
    menuService: MenuService,
    userModelService: UserModelService,
    systemInfoService: SystemInfoService,
    ieWarningService: IeWarningService,
    projectConfig: ProjectConfigurationService,
<<<<<<< HEAD
=======
    private dialog: MatDialog,
    private qerClient: QerApiService,
    private readonly themeService: EuiThemeService,
    private readonly errorHandler: ErrorHandler,
    private readonly translationProvider: ImxTranslationProviderService,
    private readonly translateService: TranslateService,
    @Inject(APP_BASE_HREF) private baseHref: string
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
          // Close the splash screen that opened in app service initialisation
          // Needs to close here when running in containers (auth skipped)
          splash.close();

          const config: QerProjectConfig & ProjectConfig = await projectConfig.getConfig();
<<<<<<< HEAD
          this.pendingItems = await userModelService.getPendingItems();
          const groupInfo = await userModelService.getGroups();
          const systemInfo = await systemInfoService.get();
          this.menuItems = menuService.getMenuItems(systemInfo.PreProps, groupInfo.map(group => group.Name), false, config);

          ieWarningService.showIe11Banner();
        }
      })
    );

    this.subscriptions.push(userModelService.onPendingItemsChange.subscribe((pendingItems: PendingItemsType) => {
      this.pendingItems = pendingItems;
    }));

=======
          const features = (await userModelService.getFeatures()).Features;
          const systemInfo = await systemInfoService.get();
          const groups = (await userModelService.getGroups()).map((group) => group.Name || '');
          const isUseProfileLangChecked = (await this.qerClient.v2Client.portal_profile_get()).UseProfileLanguage ?? false;
          // Set session culture if isUseProfileLangChecked is true, set browser culture otherwise
          if (isUseProfileLangChecked) {
            await this.translationProvider.init(sessionState.culture, sessionState.cultureFormat);
          } else {
            const browserCulture = this.translateService.getBrowserCultureLang();
            await this.translationProvider.init(browserCulture);
          }

          this.menuItems = await menuService.getMenuItems(systemInfo.PreProps, features, true, config, groups);

          ieWarningService.showIe11Banner();

          this.applyProfileSettings();
        }
      })
    );
>>>>>>> oned/v92
    this.setupRouter();
  }

  /**
   * Returns true for routes that require different page level styling
   */
  public get isContentFullScreen(): boolean {
<<<<<<< HEAD
    return this.router.url.includes('dataexplorer');
=======
    const route = this.router.url;
    switch (true) {
      case route.includes('dataexplorer'):
      case route.includes('myresponsibilities'):
      case route.includes('newrequest'):
        // Check for all children of data explorer and new request
        return true;
      case route.endsWith('statistics'):
        // Only check for ending statistics route
        return true;
      default:
        return false;
    }
>>>>>>> oned/v92
  }

  public async ngOnInit(): Promise<void> {
    this.authentication.update();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public async goToProfile(): Promise<void> {
    this.router.navigate(['profile']);
  }

  public async goToAddressbook(): Promise<void> {
    this.router.navigate(['addressbook']);
  }

<<<<<<< HEAD
=======
  public async openSettingsDialog(): Promise<void> {
    this.dialog.open(SettingsComponent, { minWidth: '600px' });
  }

  public async goToMyProcesses(): Promise<void> {
    this.router.navigate(['userprocess']);
  }

  public get isPageHeadless(): boolean {
    return getBaseHref() === HEADLESS_BASEHREF;
  }

>>>>>>> oned/v92
  private setupRouter(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.hideUserMessage = true;
<<<<<<< HEAD
=======
        this.routerStatus = event.type;
>>>>>>> oned/v92
        if (this.isLoggedIn && event.url === '/') {
          // show the splash screen, when the user logs out!
          this.splash.init({ applicationName: 'One Identity Manager Portal' });
        }
      }

      if (event instanceof NavigationCancel) {
        this.hideUserMessage = false;
<<<<<<< HEAD
=======
        this.routerStatus = event.type;
>>>>>>> oned/v92
      }

      if (event instanceof NavigationEnd) {
        this.hideUserMessage = false;
        this.hideMenu = event.url === '/';
        this.showPageContent = true;
<<<<<<< HEAD
=======
        this.routerStatus = event.type;
>>>>>>> oned/v92
      }

      if (event instanceof NavigationError) {
        this.hideUserMessage = false;
<<<<<<< HEAD
      }
    });
  }
=======
        this.routerStatus = event.type;
      }
    });
  }

  private async applyProfileSettings() {
    try {
      let profileSettings: ProfileSettings = await this.qerClient.client.portal_profile_get();
      if (profileSettings?.PreferredAppThemes) {
        this.themeService.setTheme(<EuiTheme>profileSettings.PreferredAppThemes);
      }
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
>>>>>>> oned/v92
}
