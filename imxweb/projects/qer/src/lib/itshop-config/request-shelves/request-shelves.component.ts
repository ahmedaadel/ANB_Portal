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

import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
<<<<<<< HEAD
import { PortalShopConfigStructure } from 'imx-api-qer';
import { CollectionLoadParameters, IClientProperty, DisplayColumns, EntitySchema } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings, DataSourceToolbarFilter, ClassloggerService, StorageService, HELPER_ALERT_KEY_PREFIX, SettingsService } from 'qbm';
import { RequestsService } from '../requests.service';
import { CREATE_SHELF_TOKEN } from './request-shelf-token';

const helperAlertKey = `${HELPER_ALERT_KEY_PREFIX}_requestShopShelves`;

@Component({
  selector: 'imx-request-shelves',
  templateUrl: './request-shelves.component.html',
  styleUrls: ['../request-config-common.scss']
})
export class RequestShelvesComponent implements OnInit {

=======

import { PortalShopConfigStructure } from 'imx-api-qer';
import { CollectionLoadParameters, IClientProperty, DisplayColumns, EntitySchema } from 'imx-qbm-dbts';
import {
  DataSourceToolbarSettings,
  DataSourceToolbarFilter,
  ClassloggerService,
  HELPER_ALERT_KEY_PREFIX,
  SettingsService,
  BusyService,
  HelpContextualComponent,
  HelpContextualService,
  HELP_CONTEXTUAL
} from 'qbm';
import { RequestsService } from '../requests.service';
import { CREATE_SHELF_TOKEN } from './request-shelf-token';

@Component({
  selector: 'imx-request-shelves',
  templateUrl: './request-shelves.component.html',
  styleUrls: ['../request-config-sidesheet-common.scss'],
})
export class RequestShelvesComponent implements OnInit {
>>>>>>> oned/v92
  @Input() public requestConfigId: string;
  @Output() public shelfCountUpdated = new EventEmitter<number>();

  public readonly entitySchemaShopStructure: EntitySchema;
  public readonly DisplayColumns = DisplayColumns;
  public dstSettings: DataSourceToolbarSettings;
  public navigationState: CollectionLoadParameters;
  public filterOptions: DataSourceToolbarFilter[] = [];
<<<<<<< HEAD
=======
  public busyService= new BusyService();
  public shelvesContextIds = HELP_CONTEXTUAL.ConfigurationRequestsShelves;
>>>>>>> oned/v92

  private displayedColumns: IClientProperty[] = [];

  constructor(
    @Inject(CREATE_SHELF_TOKEN) private shelfComponent: ComponentType<any>,
    private readonly sideSheet: EuiSidesheetService,
    private readonly logger: ClassloggerService,
    private readonly translate: TranslateService,
    public readonly requestsService: RequestsService,
    private readonly settingsService: SettingsService,
<<<<<<< HEAD
    private readonly storageService: StorageService
=======
    private readonly helpContextualService: HelpContextualService
>>>>>>> oned/v92
  ) {
    this.navigationState = { PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 };
    this.entitySchemaShopStructure = requestsService.shopStructureSchema;
  }

<<<<<<< HEAD
  get showHelperAlert(): boolean {
    return !this.storageService.isHelperAlertDismissed(helperAlertKey);
  }

  public async ngOnInit(): Promise<void> {
    this.displayedColumns = [
      this.entitySchemaShopStructure.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
      this.entitySchemaShopStructure.Columns.UID_OrgAttestator
=======
  public async ngOnInit(): Promise<void> {
    this.displayedColumns = [
      this.entitySchemaShopStructure.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
      this.entitySchemaShopStructure.Columns.UID_OrgAttestator,
>>>>>>> oned/v92
    ];

    await this.navigate();
  }

  public async onSearch(keywords: string): Promise<void> {
    this.logger.debug(this, `Searching for: ${keywords}`);
    this.navigationState.StartIndex = 0;
    this.navigationState.search = keywords;
    await this.navigate();
  }

  public async onRequestShelfChanged(requestConfig: PortalShopConfigStructure): Promise<void> {
    this.logger.debug(this, `Selected request shelf changed`);
    this.logger.trace(`New request shelf selected`, requestConfig);
    this.viewRequestShelf(requestConfig);
  }

  /**
   * Occurs when the navigation state has changed - e.g. users clicks on the next page button.
   *
   */
  public async onNavigationStateChanged(newState?: CollectionLoadParameters): Promise<void> {
    if (newState) {
      this.navigationState = newState;
    }
    await this.navigate();
  }

  public createRequestConfigShelf(): void {
    const newRequestShelf = this.requestsService.createRequestConfigEntity();
    newRequestShelf.ITShopInfo.value = 'BO';
    newRequestShelf.UID_ParentITShopOrg.value = this.requestConfigId;
    this.viewRequestShelf(newRequestShelf, true);
  }

<<<<<<< HEAD
  public onHelperDismissed(): void {
    this.storageService.storeHelperAlertDismissal(helperAlertKey);
  }

  private async viewRequestShelf(requestConfig: PortalShopConfigStructure, isNew: boolean = false): Promise<void> {
    const header = await this.translate.get(isNew ? '#LDS#Heading Create Shelf' : '#LDS#Heading Edit Shelf').toPromise();

    const sidesheetRef = this.sideSheet.open(this.shelfComponent, {
      title: header,
      headerColour: 'iris-tint',
      padding: '0px',
      width: '55%',
      data: {
        requestConfig,
        isNew
      }
    });
    // After the sidesheet closes, reload the current data to refresh any changes that might have been made
    sidesheetRef.afterClosed().subscribe(() => this.navigate());

  }

  private async navigate(): Promise<void> {
    this.requestsService.handleOpenLoader();
=======
  private async viewRequestShelf(requestConfig: PortalShopConfigStructure, isNew: boolean = false): Promise<void> {
    const header = await this.translate.get(isNew ? '#LDS#Heading Create Shelf' : '#LDS#Heading Edit Shelf').toPromise();
    if(isNew){
      this.helpContextualService.setHelpContextId(HELP_CONTEXTUAL.ConfigurationRequestsShelvesCreate);
    }
    const result = await this.sideSheet
      .open(this.shelfComponent, {
        title: header,
        subTitle: isNew ? '' : requestConfig.GetEntity().GetDisplay(),
        padding: '0px',
        disableClose: true,
        width: '55%',
        testId: isNew ? 'request-shelves-create-shelf-sidesheet' : 'request-shelves-edit-shelf-sidesheet',
        data: {
          requestConfig,
          isNew,
        },
        headerComponent: isNew ? HelpContextualComponent : undefined
      })
      .afterClosed()
      .toPromise();
    if (result) {
      this.navigate();
    }
  }

  private async navigate(): Promise<void> {
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92
    const getParams: any = this.navigationState;

    try {
      const data = await this.requestsService.getShopStructures(getParams, this.requestConfigId);
      // Notify caller of new count, but only when a search is not applied
      if (!this.navigationState?.search || this.navigationState?.search === '') {
        this.shelfCountUpdated.emit(data.totalCount);
      }
      this.dstSettings = {
        displayedColumns: this.displayedColumns,
        dataSource: data,
        entitySchema: this.entitySchemaShopStructure,
        navigationState: this.navigationState,
        filters: this.filterOptions,
      };
      this.logger.debug(this, `Head at ${data.Data.length + this.navigationState.StartIndex} of ${data.totalCount} item(s)`);
    } finally {
<<<<<<< HEAD
      this.requestsService.handleCloseLoader();
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }
}
