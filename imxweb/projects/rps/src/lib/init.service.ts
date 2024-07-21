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
import { Router, Route } from '@angular/router';
import { DynamicMethodService, ExtService, TabItem } from 'qbm';
import { RequestableEntitlementType, RequestableEntitlementTypeService } from 'qer';
<<<<<<< HEAD
import { ReportButtonParameter } from './report-button/report-button-parameter';
import { ReportButtonComponent } from './report-button/report-button.component';
import { RpsApiService } from './rps-api-client.service';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

=======
import { ReportButtonComponent } from './report-button/report-button.component';
import { RpsApiService } from './rps-api-client.service';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { StatisticReportButtonComponent } from './statistic-report-button/statistic-report-button.component';
>>>>>>> oned/v92

@Injectable({ providedIn: 'root' })
export class InitService {
  constructor(
    private readonly router: Router,
    private readonly entlTypeService: RequestableEntitlementTypeService,
    private readonly apiService: RpsApiService,
    private readonly dynamicMethodService: DynamicMethodService,
    private readonly extService: ExtService
<<<<<<< HEAD
  ) {
  }
=======
  ) {}
>>>>>>> oned/v92

  public onInit(routes: Route[]): void {
    this.addRoutes(routes);
    this.extService.register('profile', {
      instance: SubscriptionsComponent,
      inputData: {
        id: 'subscriptions',
        label: '#LDS#Heading Report Subscriptions',
<<<<<<< HEAD
        checkVisibility: async _ => true
      },
      SortOrder: 0
    } as TabItem);

    const inputData: ReportButtonParameter = {
      uidReport: 'CPL-77d3c04ac2084a968433ef7daf7e56ff',
        caption: '#LDS#Download report on rule violations by identities who report directly to you',
        preprop: ['COMPLIANCE'],
        groups: ['VI_4_ALLMANAGER']
    };
    this.extService.register('identityReports', {
      instance: ReportButtonComponent,
      inputData
    });

    this.entlTypeService.Register(async () => [
      new RequestableEntitlementType('RPSReport',
        this.apiService.apiClient,
        'UID_RPSReport',
        this.dynamicMethodService)
=======
        checkVisibility: async (_) => true,
      },
      SortOrder: 0,
    } as TabItem);

    this.extService.register('identityReportsManager', {
      instance: ReportButtonComponent,
      inputData: {
        uidReport: 'CPL-77d3c04ac2084a968433ef7daf7e56ff',
          caption: '#LDS#Download report on rule violations by identities you are directly responsible for',
          preprop: ['COMPLIANCE'],
          features: ['Portal_UI_PersonManager']
      }
    });

    this.extService.register('statisticButton', {
      instance: StatisticReportButtonComponent
    });
    
    // FIXME Add auditor and fix report button component
    this.extService.register('identityReports', {
      instance: ReportButtonComponent,
      inputData: {
        uidReport: 'TSB-C1848795DA424F46B2ACC101888361B1',
          caption: '#LDS#Compare identities',
          preprop: undefined,
          features: ['Portal_UI_PersonAdmin','Portal_UI_PersonManager'],
          groups: ['VI_4_AUDITING_AUDITOR']
      }
    });
    this.extService.register('identityReportsManager', {
      instance: ReportButtonComponent,
      inputData: {
        uidReport: 'TSB-0D509AC9C160394693CEF814A9CE1FD0',
          caption: '#LDS#Compare identities who report directly to you',
          preprop: undefined,
          features: ['Portal_UI_PersonAdmin','Portal_UI_PersonManager']
      }
    });
    this.extService.register('identityReportsManager', {
      instance: ReportButtonComponent,
      inputData: {
        uidReport: 'TSB-1BDEF479FF239A47BCA4EBEFC899C006',
          caption: '#LDS#Compare identities who report to you (directly and indirectly)',
          preprop: undefined,
          features: ['Portal_UI_PersonAdmin','Portal_UI_PersonManager']
      }
    });

    this.entlTypeService.Register(async () => [
      new RequestableEntitlementType('RPSReport', this.apiService.apiClient, 'UID_RPSReport', this.dynamicMethodService),
>>>>>>> oned/v92
    ]);
  }

  private addRoutes(routes: Route[]): void {
    const config = this.router.config;
<<<<<<< HEAD
    routes.forEach(route => {
=======
    routes.forEach((route) => {
>>>>>>> oned/v92
      config.unshift(route);
    });
    this.router.resetConfig(config);
  }
}
