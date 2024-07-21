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

=======
>>>>>>> oned/v92
import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnChanges, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';

import { PortalApplication } from 'imx-api-aob';
<<<<<<< HEAD
import { ClassloggerService, ConfirmationService, SnackBarService, TextContainer } from 'qbm';
=======
import { BusyService, ClassloggerService, ConfirmationService, SnackBarService, TextContainer } from 'qbm';
>>>>>>> oned/v92
import { ShopsService } from '../../shops/shops.service';
import { EntitlementsService } from '../../entitlements/entitlements.service';
import { EntitlementFilter } from '../../entitlements/entitlement-filter';
import { TypedEntity } from 'imx-qbm-dbts';
import { AccountsService } from '../../accounts/accounts.service';
import { LifecycleAction } from '../../lifecycle-actions/lifecycle-action.enum';
import { LifecycleActionComponent } from '../../lifecycle-actions/lifecycle-action.component';
import { ApplicationsService } from '../applications.service';
import { AobApiService } from '../../aob-api-client.service';
import { EditApplicationComponent } from '../edit-application/edit-application.component';
import { AccountDetails } from './account-details.interface';
import { AobPermissionsService } from '../../permissions/aob-permissions.service';
<<<<<<< HEAD
=======
import { ServiceCategoryComponent } from '../edit-application/service-category/service-category.component';
>>>>>>> oned/v92

@Component({
  selector: 'imx-application-details',
  templateUrl: './application-details.component.html',
<<<<<<< HEAD
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnChanges, OnInit {
  /**
   * The AobApplication
=======
  styleUrls: ['./application-details.component.scss'],
})
export class ApplicationDetailsComponent implements OnChanges, OnInit {
  /**
   * The {@link PortalApplication | AobApplication}
>>>>>>> oned/v92
   */
  @Input() public application: PortalApplication;

  @ViewChild('multiValueControl', { static: true }) public chartDialog: TemplateRef<any>;

  @ViewChild(MatMenuTrigger) public menuTrigger: MatMenuTrigger;

  public hasAssignedEntitlements: boolean;
  public hasPublishedEntitlements = false;
  public canBeDeleted = false;
  public hasOwner: boolean;
  public accountsInformation: AccountDetails;

  public assignedShops: TypedEntity[] = [];

  public readonly shopsDisplay: string;
  public readonly accountsDisplay: string;

<<<<<<< HEAD
  constructor(
    private entitlementsProvider: EntitlementsService,
    public readonly shopsProvider: ShopsService,
    private readonly busyService: EuiLoadingService,
=======
  public busyService = new BusyService();
  public isLoading;

  constructor(
    private entitlementsProvider: EntitlementsService,
    public readonly shopsProvider: ShopsService,
    private readonly euiBusyService: EuiLoadingService,
>>>>>>> oned/v92
    private readonly logger: ClassloggerService,
    public readonly accountsProvider: AccountsService,
    private readonly dialog: MatDialog,
    private readonly applicationprovider: ApplicationsService,
    private readonly snackbar: SnackBarService,
    private readonly platform: Platform,
    private readonly aobApiService: AobApiService,
    private readonly translateService: TranslateService,
    private readonly confirmation: ConfirmationService,
    private readonly sidesheetService: EuiSidesheetService,
    private readonly permissions: AobPermissionsService
  ) {
    this.shopsDisplay = this.aobApiService.typedClient.PortalShops.GetSchema().Display;
    this.accountsDisplay = this.aobApiService.typedClient.PortalApplicationusesaccount.GetSchema().Display;
<<<<<<< HEAD
  }

  public ngOnInit(): void {
    this.accountsInformation =
    {
      count: 0,
      first: null,
      uidApplication: this.application.UID_AOBApplication.value
=======
    this.busyService.busyStateChanged.subscribe((elem) => (this.isLoading = elem));
  }

  public ngOnInit(): void {
    this.accountsInformation = {
      count: 0,
      first: null,
      uidApplication: this.application.UID_AOBApplication.value,
>>>>>>> oned/v92
    };
  }

  public async ngOnChanges(): Promise<void> {
    return this.reloadData();
  }

<<<<<<< HEAD
  public async deleteApplication(): Promise<void> {
    if (await this.confirmation.confirm({
      Title: '#LDS#Heading Delete Application',
      Message: '#LDS#Are you sure you want to delete the application?'
    })) {
      let overlayRef: OverlayRef;
      setTimeout(() => overlayRef = this.busyService.show());
      try {
        await this.applicationprovider.deleteApplication(this.application.UID_AOBApplication.value);
      } finally {
        setTimeout(() => this.busyService.hide(overlayRef));
=======
  /**
   * Deletes the displayed application, after confirming the process by the user
   */
  public async deleteApplication(): Promise<void> {
    if (
      await this.confirmation.confirm({
        Title: '#LDS#Heading Delete Application',
        Message: '#LDS#Are you sure you want to delete the application?',
      })
    ) {
      let overlayRef: OverlayRef;
      setTimeout(() => ((overlayRef = this.euiBusyService.show())));
      try {
        await this.applicationprovider.deleteApplication(this.application.UID_AOBApplication.value);
      } finally {
        setTimeout(() => this.euiBusyService.hide(overlayRef));
>>>>>>> oned/v92
      }
    }
  }

<<<<<<< HEAD
  public async editApplication(): Promise<void> {
    await this.sidesheetService.open(EditApplicationComponent, {
      title: await this.translateService.get('#LDS#Heading Edit Application').toPromise(),
      bodyColour: 'asher-gray',
      headerColour: 'iris-blue',
      width: '768px',
      data: this.application,
      testId: 'edit-application',
      disableClose: true,
    }).afterClosed().toPromise();
=======
  /**
   * Edits the information of the associated application
   */
  public async editApplication(): Promise<void> {
    await this.sidesheetService
      .open(EditApplicationComponent, {
        title: await this.translateService.get('#LDS#Heading Edit Application').toPromise(),
        subTitle: this.application.GetEntity().GetDisplay(),
        width: '768px',
        padding: '0',
        data: this.application,
        testId: 'edit-application',
        disableClose: true,
      })
      .afterClosed()
      .toPromise();
>>>>>>> oned/v92
    this.applicationprovider.applicationRefresh.next(true);
    this.application = await this.applicationprovider.reload(this.application.UID_AOBApplication.value);
    this.reloadData();
  }

<<<<<<< HEAD
=======
  /**
   * Opens a dialog for publishing the application
   * @ignore @param _ unused mouse event
   */
>>>>>>> oned/v92
  public async publishApplication(_: MouseEvent): Promise<void> {
    if (await this.updateShops()) {
      const dialogConfig = {
        data: {
          action: LifecycleAction.Publish,
<<<<<<< HEAD
          elements: [this.application], shops: this.assignedShops, type: 'AobApplication'
        },
        height: this.platform.TRIDENT ? '550px' : 'auto'
      };
      const dialogRef = this.dialog.open(LifecycleActionComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(async publishData => {
        if (publishData) {
          this.logger.debug(this,
            `Publishing application) ${publishData.date && publishData.publishFuture ? `on ${publishData.date}` : 'now'}`);

          if (await this.applicationprovider.publish(this.application, publishData)) {
            let publishMessage: TextContainer = {
              key: '#LDS#The application was successfully published. It takes a moment for the changes to take effect.'
=======
          elements: [this.application],
          shops: this.assignedShops,
          type: 'AobApplication',
        },
        height: this.platform.TRIDENT ? '550px' : 'auto',
      };
      const dialogRef = this.dialog.open(LifecycleActionComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(async (publishData) => {
        if (publishData) {
          this.logger.debug(
            this,
            `Publishing application) ${publishData.date && publishData.publishFuture ? `on ${publishData.date}` : 'now'}`
          );

          if (await this.applicationprovider.publish(this.application, publishData)) {
            let publishMessage: TextContainer = {
              key: '#LDS#The application was successfully published. It takes a moment for the changes to take effect.',
>>>>>>> oned/v92
            };
            if (publishData.publishFuture && publishData.date) {
              const browserCulture = this.translateService.currentLang;
              publishMessage = {
                key: '#LDS#The application will be published on {0} at {1} (your local time).',
<<<<<<< HEAD
                parameters: [
                  publishData.date.toLocaleDateString(browserCulture),
                  publishData.date.toLocaleTimeString(browserCulture)
                ]
=======
                parameters: [publishData.date.toLocaleDateString(browserCulture), publishData.date.toLocaleTimeString(browserCulture)],
>>>>>>> oned/v92
              };
            }
            this.snackbar.open(publishMessage, '#LDS#Close');
          } else {
            this.logger.error(this, 'Attempt to publish the application failed');
          }
        } else {
          this.logger.debug(this, 'dialog Cancel');
        }
      });
    }
  }

<<<<<<< HEAD
  public unpublishApplication(_: MouseEvent): void {
    const dialogConfig = {
      data: { action: LifecycleAction.Unpublish, elements: [this.application], type: 'AobApplication' }, width: '800px', height: '500px'
    };
    const dialogRef = this.dialog.open(LifecycleActionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(async result => {
=======
  /**
   * Opens a dialog for unpublishing the application
   * @ignore @param _ unused mouse event
   */
  public unpublishApplication(_: MouseEvent): void {
    const dialogConfig = {
      data: { action: LifecycleAction.Unpublish, elements: [this.application], type: 'AobApplication' },
      width: '800px',
      height: '500px',
    };
    const dialogRef = this.dialog.open(LifecycleActionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(async (result) => {
>>>>>>> oned/v92
      if (result) {
        this.logger.debug(this, 'Unpublish application...');

        if (await this.applicationprovider.unpublish(this.application)) {
<<<<<<< HEAD
          this.snackbar.open({ key: '#LDS#The application was successfully unpublished. It takes a moment for the changes to take effect.' }, '#LDS#Close');
=======
          this.snackbar.open(
            { key: '#LDS#The application was successfully unpublished. It takes a moment for the changes to take effect.' },
            '#LDS#Close'
          );
>>>>>>> oned/v92
        } else {
          this.logger.error(this, 'Attempt to unpublish the  application failed');
        }
      } else {
        this.logger.debug(this, 'dialog Cancel');
      }
    });
  }

  /**
   * Checks if the specified  {@link PortalApplication|application} can be publish.
   */
  public get isPublishable(): boolean {
    return this.application != null && this.application.ActivationDate.GetMetadata().CanEdit() && !this.published();
  }

  /**
   * Checks if the specified  {@link PortalApplication|application} can be unnpublish.
   */
  public get isUnpublishable(): boolean {
    return this.application != null && this.application.IsInActive.GetMetadata().CanEdit() && !this.notPublished();
  }

  // TODO 222863: Use the same filter as for entitlements:

  public notPublished(): boolean {
<<<<<<< HEAD
    return this.application.IsInActive && this.application.IsInActive.value &&
      !this.application.ActivationDate.value;
  }

  public willPublish(): boolean {
    return this.application.IsInActive && this.application.IsInActive.value &&
      this.application.ActivationDate.value != null;
=======
    return this.application.IsInActive && this.application.IsInActive.value && !this.application.ActivationDate.value;
  }

  public willPublish(): boolean {
    return this.application.IsInActive && this.application.IsInActive.value && this.application.ActivationDate.value != null;
>>>>>>> oned/v92
  }

  public published(): boolean {
    return !this.application.IsInActive.value;
  }

  /**
   * Opens/Closes the menu programmatically and stopps propagation of the event.
   * Otherwise the tile would be selected/deselcted as a sideeffect.
   * @ignore Used internally in components template.
   */
  public menuClicked(event: MouseEvent): void {
    this.menuTrigger.toggleMenu();
    event.stopImmediatePropagation();
  }

<<<<<<< HEAD
  public showMore(elements: TypedEntity[], title: string, iconText?: string): void {
    const content = { parts: elements.map(part => part.GetEntity().GetDisplay()), caption: title, icon: iconText };
=======
  /**
   *
   * @param elements Opens a dialog, that shows additional elements (because in the beginning there are only 3 elements displayed)
   * @param title A title for the dialog
   * @param iconText name of a cadence icon, that should be used
   */
  public showMore(elements: TypedEntity[], title: string, iconText?: string): void {
    const content = { parts: elements.map((part) => part.GetEntity().GetDisplay()), caption: title, icon: iconText };
>>>>>>> oned/v92

    this.dialog.open(this.chartDialog, { data: content, width: '600px', height: '400px' });
  }

<<<<<<< HEAD
  public async showMoreAccounts(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      const elements = await this.accountsProvider.getAssigned(this.application.UID_AOBApplication.value,
        { PageSize: this.accountsInformation.count });
      this.showMore(elements, this.accountsDisplay);
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }

  private async reloadData(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
=======
  /**
   * Shows a dialog, that displays additionals accounts (because in the beginning there are only 3 elements displayed)
   */
  public async showMoreAccounts(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => ((overlayRef = this.euiBusyService.show())));
    try {
      const elements = await this.accountsProvider.getAssigned(this.application.UID_AOBApplication.value, {
        PageSize: this.accountsInformation.count,
      });
      this.showMore(elements, this.accountsDisplay);
    } finally {
      setTimeout(() => this.euiBusyService.hide(overlayRef));
    }
  }

  public async editServiceCategories(): Promise<void> {
    await this.sidesheetService
      .open(ServiceCategoryComponent, {
        title: await this.translateService.get('#LDS#Heading Edit Service Categories').toPromise(),
        subTitle: this.application.GetEntity().GetDisplay(),
        width: 'max(700px,70%)',
        padding: '0',
        data: this.application,
        testId: 'edit-application-servicecategory'
      })
      .afterClosed()
      .toPromise();
  }

  private async reloadData(): Promise<void> {
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92
    try {
      if (this.application.AuthenticationRoot.value) {
        this.application.AuthenticationRootHelper.value = this.application.AuthenticationRoot.value;
      }

      this.hasOwner = this.application.UID_PersonHead.value != null && this.application.UID_PersonHead.value !== '';
      await this.updateShops();

      const accountInfo = await this.accountsProvider.getFirstAndCount(this.application.UID_AOBApplication.value);
      this.accountsInformation = {
        ...this.accountsInformation,
<<<<<<< HEAD
        ...{ count: accountInfo.count, first: accountInfo.first }
=======
        ...{ count: accountInfo.count, first: accountInfo.first },
        ...{ count: accountInfo.count, first: accountInfo.first },
>>>>>>> oned/v92
      };

      const applicationEntitlements = await this.entitlementsProvider.getEntitlementsForApplication(this.application);
      if (applicationEntitlements) {
        const entitlementFilter = new EntitlementFilter();
        this.hasPublishedEntitlements = applicationEntitlements.Data.filter(entitlementFilter.published).length > 0;
        this.hasAssignedEntitlements = applicationEntitlements.Data.length > 0;
        const publishedAndWillBePublished = applicationEntitlements.Data.filter(
<<<<<<< HEAD
          elem => entitlementFilter.published(elem)
            || entitlementFilter.willPublish(elem));
        this.canBeDeleted = await this.permissions.isAobApplicationAdmin() && publishedAndWillBePublished.length === 0;
=======
          (elem) => entitlementFilter.published(elem) || entitlementFilter.willPublish(elem)
        );
        this.canBeDeleted = (await this.permissions.isAobApplicationAdmin()) && publishedAndWillBePublished.length === 0;
>>>>>>> oned/v92
      } else {
        this.logger.error(this, 'TypedEntityCollectionData<PortalEntitlement> is undefined');
      }
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  private async updateShops(): Promise<boolean> {
    const appInShop = await this.shopsProvider.getApplicationInShop(this.application.UID_AOBApplication.value);
    if (appInShop == null) {
      this.logger.error(this, 'TypedEntityCollectionData<AobApplicationinshop> is undefined');
      return false;
    }
    this.assignedShops = appInShop.Data;
    return true;
  }
}
