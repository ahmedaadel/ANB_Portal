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

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { Globals } from 'imx-qbm-dbts';
import {
  AppConfigService,
  imx_SessionService,
  CdrRegistryService,
  ImxTranslationProviderService,
  ClassloggerService,
  AuthenticationService,
  PluginLoaderService,
<<<<<<< HEAD
  SplashService
} from 'qbm';
import { environment } from '../environments/environment';
import { TypedClient } from 'imx-api-qbm';
=======
  SplashService,
  SystemInfoService
} from 'qbm';
import {
  NotificationStreamService
} from 'qer';
import { environment } from '../environments/environment';
import { TypedClient } from 'imx-api-qbm';
import { PortalDocConfigurationService } from './portal-doc-configuration.service';
>>>>>>> oned/v92

import * as QBM from 'qbm';
import * as QER from 'qer';

declare var SystemJS: any;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    public readonly registry: CdrRegistryService,
    private readonly logger: ClassloggerService,
    private readonly config: AppConfigService,
<<<<<<< HEAD
=======
    private readonly systemInfoService: SystemInfoService,
>>>>>>> oned/v92
    private readonly translateService: TranslateService,
    private readonly session: imx_SessionService,
    private readonly translationProvider: ImxTranslationProviderService,
    private readonly title: Title,
    private readonly pluginLoader: PluginLoaderService,
    private readonly authentication: AuthenticationService,
<<<<<<< HEAD
    private readonly splash: SplashService,
=======
    private readonly notificationService: NotificationStreamService,
    private readonly splash: SplashService,
    private readonly docSvc: PortalDocConfigurationService,
>>>>>>> oned/v92
  ) { }

  public async init(): Promise<void> {
    this.showSplash();
    await this.config.init(environment.clientUrl);

    this.translateService.addLangs(this.config.Config.Translation.Langs);
    const browserCulture = this.translateService.getBrowserCultureLang();
    this.logger.debug(this, `Set ${browserCulture} as default language`);
    this.translateService.setDefaultLang(browserCulture);
    await this.translateService.use(browserCulture).toPromise();

    this.translateService.onLangChange.subscribe(() => {
      this.setTitle();
    });

    this.setTitle();

<<<<<<< HEAD
    this.authentication.onSessionResponse.subscribe(sessionState => this.translationProvider.init(sessionState?.culture));

    this.session.TypedClient = new TypedClient(this.config.v2client, this.translationProvider);

=======
    this.authentication.onSessionResponse.subscribe(sessionState => {
      if(sessionState && sessionState.IsLoggedIn) {
        // when the user logs in, start listening to notifications
        this.notificationService.openStream();
      }
    });

    this.session.TypedClient = new TypedClient(this.config.v2client, this.translationProvider);

    this.docSvc.setupPaths();

>>>>>>> oned/v92
    SystemJS.set('qbm', SystemJS.newModule(QBM));
    SystemJS.set('qer', SystemJS.newModule(QER));

    await this.pluginLoader.loadModules(environment.appName);
  }

  private async setTitle(): Promise<void> {
<<<<<<< HEAD
    const imxConfig = await this.config.getImxConfig();
    const name = imxConfig.ProductName || Globals.QIM_ProductNameFull;
    this.config.Config.Title = await this.translateService.get('#LDS#Web Portal').toPromise();
=======
    const imxConfig = await this.systemInfoService.getImxConfig();
    const name = imxConfig.ProductName || Globals.QIM_ProductNameFull;
    this.config.Config.Title = await this.translateService.get('#LDS#Heading Web Portal').toPromise();
>>>>>>> oned/v92
    const title = `${name} ${this.config.Config.Title}`;
    this.title.setTitle(title);

    await this.updateSplash(title);
  }

  public static init(app: AppService): () => Promise<any> {
    return () =>
      new Promise<any>(async (resolve: any) => {
        await app.init();
        resolve();
      });
  }

  private showSplash(): void {
    // open splash screen with fix values
    this.splash.init({ applicationName: 'One Identity Manager Portal' });
  }

  private async updateSplash(title: string): Promise<void> {
    // update the splash screen and use translated texts and the title from the imxconfig
    const loadingMsg = await this.translateService.get('#LDS#Loading...').toPromise();
    this.splash.update({ applicationName: title, message: loadingMsg });
  }

}
