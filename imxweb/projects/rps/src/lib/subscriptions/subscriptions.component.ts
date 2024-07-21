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
import { Component, OnInit } from '@angular/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';

import { PortalSubscription } from 'imx-api-rps';
<<<<<<< HEAD
import { CollectionLoadParameters, DisplayColumns, EntitySchema, IClientProperty, ValType } from 'imx-qbm-dbts';
import { ConfirmationService, DataSourceToolbarSettings, ClientPropertyForTableColumns, SnackBarService } from 'qbm';
=======
import { CollectionLoadParameters, DisplayColumns, EntitySchema, ValType } from 'imx-qbm-dbts';
import { ConfirmationService, DataSourceToolbarSettings, ClientPropertyForTableColumns, SnackBarService, BusyService } from 'qbm';
>>>>>>> oned/v92
import { ReportSubscription } from './report-subscription/report-subscription';
import { ReportSubscriptionService } from './report-subscription/report-subscription.service';
import { ReportViewConfigComponent } from './report-view-config/report-view-config.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { SubscriptionWizardComponent } from './subscription-wizard/subscription-wizard.component';
import { SubscriptionsService } from './subscriptions.service';
<<<<<<< HEAD
=======
import { ListReportViewerSidesheetComponent } from './list-report-viewer-sidesheet/list-report-viewer-sidesheet.component';
import { ListReportViewerService } from '../list-report-viewer/list-report-viewer.service';
>>>>>>> oned/v92

@Component({
  selector: 'imx-subscriptions',
  templateUrl: './subscriptions.component.html',
<<<<<<< HEAD
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

=======
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit {
>>>>>>> oned/v92
  public readonly entitySchema: EntitySchema;
  public readonly DisplayColumns = DisplayColumns;
  public dstSettings: DataSourceToolbarSettings;
  public canAddSubscription = false;

  private readonly displayedColumns: ClientPropertyForTableColumns[];

  private navigationState: CollectionLoadParameters = { PageSize: 25, StartIndex: 0 };

<<<<<<< HEAD
=======
  public busyService = new BusyService();

>>>>>>> oned/v92
  constructor(
    private readonly subscriptionService: SubscriptionsService,
    private readonly rpsReportService: ReportSubscriptionService,
    private readonly confirmationService: ConfirmationService,
    private readonly sideSheet: EuiSidesheetService,
    private readonly snackbar: SnackBarService,
<<<<<<< HEAD
    private readonly translator: TranslateService,
    private readonly busyService: EuiLoadingService
=======
    private readonly translate: TranslateService,
    private readonly busyServiceElemental: EuiLoadingService,
    private readonly listReportViewerService: ListReportViewerService
>>>>>>> oned/v92
  ) {
    this.entitySchema = subscriptionService.PortalSubscriptionSchema;
    this.displayedColumns = [
      this.entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
      {
<<<<<<< HEAD
        ColumnName: 'edit',
        Type: ValType.String,
        afterAdditionals: true
      },
      {
        ColumnName: 'actions',
        Type: ValType.String
      }
=======
        ColumnName: 'actions',
        Type: ValType.String,
        afterAdditionals: true,
        untranslatedDisplay: '#LDS#Actions',
      },
>>>>>>> oned/v92
    ];
  }

  public async ngOnInit(): Promise<void> {
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      this.canAddSubscription = await this.subscriptionService.hasReports();
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
    const isBusy = this.busyService.beginBusy();
    try {
      this.canAddSubscription = await this.subscriptionService.hasReports();
    } finally {
      isBusy.endBusy();
>>>>>>> oned/v92
    }
    await this.navigate();
  }

  public async onNavigationStateChanged(newState: CollectionLoadParameters): Promise<void> {
    this.navigationState = newState;
    await this.navigate();
  }

  public async onSearch(keywords: string): Promise<void> {
    this.navigationState = {
      PageSize: this.navigationState.PageSize,
      StartIndex: 0,
<<<<<<< HEAD
      search: keywords
=======
      search: keywords,
>>>>>>> oned/v92
    };
    return this.navigate();
  }

  public async sendMail(subscription: PortalSubscription, withCc: boolean): Promise<void> {
    await this.subscriptionService.sendMail(subscription.GetEntity().GetKeys()[0], withCc);
    this.snackbar.open({
<<<<<<< HEAD
      key: withCc
        ? '#LDS#The report "{0}" will be sent to all subscribers.'
        : '#LDS#The report "{0}" will be sent to you.',
      parameters: [subscription.UID_RPSReport.Column.GetDisplayValue()]
=======
      key: withCc ? '#LDS#The report "{0}" will be sent to all subscribers.' : '#LDS#The report "{0}" will be sent to you.',
      parameters: [subscription.UID_RPSReport.Column.GetDisplayValue()],
    });
  }

  public async viewReportSubscription(subscription: PortalSubscription): Promise<void> {
    let reportSub;
    const over = this.busyServiceElemental.show();
    try {
      const sub = await this.subscriptionService.getSubscriptionInteractive(subscription.GetEntity().GetKeys()[0]);
      reportSub = await this.rpsReportService.buildRpsSubscription(sub.Data[0]);
    } finally {
      this.busyServiceElemental.hide(over);
    }
    if (!reportSub) {
      return;
    }
    this.listReportViewerService.setUidReport(subscription.UID_RPSReport.value);
    const data = { dataService: this.listReportViewerService, subscription: reportSub };
    this.sideSheet.open(ListReportViewerSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading View Report').toPromise(),
      subTitle: subscription.GetEntity().GetDisplay(),
      padding: '0',
      width: 'max(550px,55%)',
      testId: 'subscription-report-viewer',
      data,
>>>>>>> oned/v92
    });
  }

  public async delete(subscription: PortalSubscription): Promise<void> {
<<<<<<< HEAD
    if (await this.confirmationService.confirm({
      Title: '#LDS#Heading Unsubscribe Report',
      Message: '#LDS#Do you want to unsubscribe from this report?',
      identifier: 'subscriptions-confirm-unsubscribe-report'
    })) {
      let overlayRef: OverlayRef;
      setTimeout(() => overlayRef = this.busyService.show());
      try {
        await this.subscriptionService.deleteSubscription(subscription.GetEntity().GetKeys()[0]);
      } finally {
        setTimeout(() => this.busyService.hide(overlayRef));
      }
      const message = {
        key: '#LDS#You have successfully unsubscribed from the report "{0}".',
        parameters: [subscription.GetEntity().GetDisplay()]
=======
    if (
      await this.confirmationService.confirm({
        Title: '#LDS#Heading Unsubscribe Report',
        Message: '#LDS#Do you want to unsubscribe from this report?',
        identifier: 'subscriptions-confirm-unsubscribe-report',
      })
    ) {
      let overlayRef: OverlayRef;
      setTimeout(() => (overlayRef = this.busyServiceElemental.show()));
      try {
        await this.subscriptionService.deleteSubscription(subscription.GetEntity().GetKeys()[0]);
      } finally {
        setTimeout(() => this.busyServiceElemental.hide(overlayRef));
      }
      const message = {
        key: '#LDS#You have successfully unsubscribed from the report "{0}".',
        parameters: [subscription.GetEntity().GetDisplay()],
>>>>>>> oned/v92
      };

      this.navigate();
      this.snackbar.open(message);
    }
  }

  public async editSubscription(subscription: PortalSubscription): Promise<void> {
    let rpsSubscription: ReportSubscription;
    let overlayRef: OverlayRef;
<<<<<<< HEAD
    setTimeout(() => overlayRef = this.busyService.show());
=======
    setTimeout(() => (overlayRef = this.busyServiceElemental.show()));
>>>>>>> oned/v92
    try {
      const sub = await this.subscriptionService.getSubscriptionInteractive(subscription.GetEntity().GetKeys()[0]);
      if (sub.Data.length > 0) {
        rpsSubscription = this.rpsReportService.buildRpsSubscription(sub.Data[0]);
      }
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      setTimeout(() => this.busyServiceElemental.hide(overlayRef));
>>>>>>> oned/v92
    }

    if (rpsSubscription) {
      const sidesheetRef = this.sideSheet.open(SubscriptionDetailsComponent, {
<<<<<<< HEAD
        title: subscription.GetEntity().GetDisplay(),
        headerColour: 'iris-blue',
        padding: '30px',
        width: '70%',
        disableClose: true,
        data: rpsSubscription
=======
        title: await this.translate.get('#LDS#Heading Edit Subscription').toPromise(),
        subTitle: subscription.GetEntity().GetDisplay(),
        testId: 'edit-subscription-sidesheet',
        padding: '0px',
        width: 'max(700px,70%)',
        disableClose: true,
        data: rpsSubscription,
>>>>>>> oned/v92
      });

      if (await sidesheetRef.afterClosed().toPromise()) {
        return this.navigate();
      }
    }
  }

  public async createSubscription(): Promise<void> {
    const sidesheetRef = this.sideSheet.open(SubscriptionWizardComponent, {
<<<<<<< HEAD
      title: await this.translator.get('#LDS#Heading Add Report Subscription').toPromise(),
      bodyColour: 'asher-gray',
      headerColour: 'iris-blue',
=======
      title: await this.translate.get('#LDS#Heading Add Report Subscription').toPromise(),
>>>>>>> oned/v92
      padding: '0px',
      width: '70%',
      disableClose: true,
      testId: 'subscriptions-create',
    });

    if (await sidesheetRef.afterClosed().toPromise()) {
      this.snackbar.open({ key: '#LDS#The subscription has been successfully created.' });

      return this.navigate();
    }
  }

  public async viewReport(): Promise<void> {
    const sidesheetRef = this.sideSheet.open(ReportViewConfigComponent, {
<<<<<<< HEAD
      title: await this.translator.get('#LDS#Heading View a Report').toPromise(),
      bodyColour: 'asher-gray',
      headerColour: 'iris-blue',
=======
      title: await this.translate.get('#LDS#Heading View a Report').toPromise(),
>>>>>>> oned/v92
      padding: '0px',
      width: '70%',
      testId: 'subscriptions-view-config',
    });

    if (await sidesheetRef.afterClosed().toPromise()) {
      this.snackbar.open({ key: '#LDS#The subscription has been successfully created.' });

      return this.navigate();
    }
  }

  private async navigate(): Promise<void> {
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {

=======
    const isBusy = this.busyService.beginBusy();
    try {
>>>>>>> oned/v92
      const subscriptions = await this.subscriptionService.getSubscriptions(this.navigationState);

      this.dstSettings = {
        displayedColumns: this.displayedColumns,
        dataSource: subscriptions,
        entitySchema: this.entitySchema,
<<<<<<< HEAD
        navigationState: this.navigationState
      };
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
        navigationState: this.navigationState,
      };
    } finally {
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }
}
