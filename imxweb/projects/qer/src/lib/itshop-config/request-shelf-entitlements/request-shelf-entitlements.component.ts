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

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { MatDialog } from '@angular/material/dialog';
=======
import { EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';

>>>>>>> oned/v92
import { PortalRolesEntitlements } from 'imx-api-qer';
import { CollectionLoadParameters, DbObjectKey, DisplayColumns, EntitySchema, IClientProperty } from 'imx-qbm-dbts';
import {
  DataSourceToolbarSettings,
  DataSourceToolbarFilter,
  ClassloggerService,
  DataTableComponent,
  StorageService,
  HELPER_ALERT_KEY_PREFIX,
  SettingsService,
  MetadataService,
<<<<<<< HEAD
  DynamicMethodService
=======
  DynamicMethodService,
  BusyService,
  HELP_CONTEXTUAL,
>>>>>>> oned/v92
} from 'qbm';
import { QerApiService } from '../../qer-api-client.service';
import { RequestsEntitySelectorComponent } from '../requests-selector/requests-entity-selector.component';
import { ACTION_DISMISS, RequestsService } from '../requests.service';

export interface EntitlementCountUpdateData {
  count: number;
  recentDeleteAction: boolean;
}

<<<<<<< HEAD
const helperAlertKey = `${HELPER_ALERT_KEY_PREFIX}_requestShopShelfEntitlements`;

@Component({
  selector: 'imx-request-shelf-entitlements',
  templateUrl: './request-shelf-entitlements.component.html',
  styleUrls: ['../request-config-common.scss']
})
export class RequestShelfEntitlementsComponent implements OnInit {

  @Input() public shelfId: string;
=======
@Component({
  selector: 'imx-request-shelf-entitlements',
  templateUrl: './request-shelf-entitlements.component.html',
  styleUrls: ['../request-config-sidesheet-common.scss'],
})
export class RequestShelfEntitlementsComponent implements OnInit {
  @Input() public shelfId: string;
  @Input() public shopDisplay: string;
>>>>>>> oned/v92
  @Output() public entitlementCountUpdated = new EventEmitter<EntitlementCountUpdateData>();
  @ViewChild('dataTable', { static: false }) public dataTable: DataTableComponent<PortalRolesEntitlements>;

  public dstSettings: DataSourceToolbarSettings;
  public navigationState: CollectionLoadParameters;
  public filterOptions: DataSourceToolbarFilter[] = [];
  public selectedEntitlements: PortalRolesEntitlements[] = [];
<<<<<<< HEAD
=======
  public productContextIds = HELP_CONTEXTUAL.ConfigurationRequestsShelvesProduct;
>>>>>>> oned/v92

  private displayedColumns: IClientProperty[];

  public DisplayColumns = DisplayColumns;

  public entitySchema: EntitySchema;

  public entitlementTypes: Map<string, string> = new Map();

<<<<<<< HEAD
=======
  public busyService = new BusyService();

>>>>>>> oned/v92
  constructor(
    private readonly logger: ClassloggerService,
    public readonly requestsService: RequestsService,
    private readonly qerApiService: QerApiService,
<<<<<<< HEAD
    private readonly storageService: StorageService,
    private readonly settingsService: SettingsService,
    private readonly metadata: MetadataService,
    private readonly matDialog: MatDialog,
    private readonly dynamicMethodService: DynamicMethodService,
=======
    private readonly settingsService: SettingsService,
    private readonly metadata: MetadataService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly translate: TranslateService,
    private readonly dynamicMethodService: DynamicMethodService
>>>>>>> oned/v92
  ) {
    this.navigationState = { PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 };
    this.entitySchema = qerApiService.typedClient.PortalRolesEntitlements.GetSchema();
    this.displayedColumns = [
      this.entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
      this.entitySchema.Columns.XOrigin,
<<<<<<< HEAD
      this.entitySchema.Columns.XDateInserted
    ];

=======
      this.entitySchema.Columns.XDateInserted,
    ];
>>>>>>> oned/v92
  }

  get isMobile(): boolean {
    return document.body.offsetWidth <= 768;
  }

<<<<<<< HEAD
  get showHelperAlert(): boolean {
    return !this.storageService.isHelperAlertDismissed(helperAlertKey);
  }

=======
>>>>>>> oned/v92
  public async ngOnInit(): Promise<void> {
    await this.navigate();
  }

  public async onSearch(keywords: string): Promise<void> {
    this.logger.debug(this, `Searching for: ${keywords}`);
    this.navigationState.StartIndex = 0;
    this.navigationState.search = keywords;
    await this.navigate();
  }

  public onEntitlementSelected(selected: PortalRolesEntitlements[]): void {
    this.logger.debug(this, `Selected entitlements changed`);
    this.logger.trace(`New entitlement selections`, selected);
    this.selectedEntitlements = selected;
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

<<<<<<< HEAD
  public openEntitlementSelector(): void {
    const dialogRef = this.matDialog.open(RequestsEntitySelectorComponent, {
      width: this.isMobile ? '90vw' : '60vw',
      maxWidth: this.isMobile ? '90vw' : '80vw',
      minHeight: '60vh',
      data: {
        shelfId: this.shelfId
      }
    });
    dialogRef.afterClosed().subscribe((selectedValues: string[]) => {
=======
  public async openEntitlementSelector(): Promise<void> {
    const sidesheetRef = this.sidesheet.open(RequestsEntitySelectorComponent, {
      title: await this.translate.get('#LDS#Heading Add Products').toPromise(),
      subTitle: this.shopDisplay,
      padding: '0px',
      width: 'max(55%,550px)',
      testId: 'request-shelf-entitlements-add-products',
      data: {
        shelfId: this.shelfId,
      },
    });
    sidesheetRef.afterClosed().subscribe((selectedValues: string[]) => {
>>>>>>> oned/v92
      if (selectedValues) {
        this.processEntitlementSelections(selectedValues);
      }
    });
  }

  public async removeEntitlements(): Promise<void> {
<<<<<<< HEAD
    this.requestsService.handleOpenLoader();
=======
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92
    try {
      const promises = [];
      // TODO what if only some succeed?
      this.selectedEntitlements.forEach((ent) => {
        const entitlementKey = DbObjectKey.FromXml(ent.ObjectKeyElement.value);
<<<<<<< HEAD
        promises.push(this.dynamicMethodService.delete(this.qerApiService.apiClient,
          '/portal/shop/config/entitlements/'
          + this.shelfId + '/'
          + entitlementKey.TableName + '/'
          + entitlementKey.Keys[0],
          {}));
=======
        promises.push(
          this.dynamicMethodService.delete(
            this.qerApiService.apiClient,
            '/portal/shop/config/entitlements/' + this.shelfId + '/' + entitlementKey.TableName + '/' + entitlementKey.Keys[0],
            {}
          )
        );
>>>>>>> oned/v92
      });
      await Promise.all(promises);

      await this.navigate(true);
      // Reset table selections (removing references to now deleted members)
      this.dataTable.clearSelection();
      this.requestsService.openSnackbar('#LDS#The products have been successfully removed.', ACTION_DISMISS);
    } finally {
<<<<<<< HEAD
      this.requestsService.handleCloseLoader();
    }
  }

  public onHelperDismissed(): void {
    this.storageService.storeHelperAlertDismissal(helperAlertKey);
  }

  private async processEntitlementSelections(values: string[]): Promise<void> {
    this.requestsService.handleOpenLoader();
=======
      isBusy.endBusy();
    }
  }

  private async processEntitlementSelections(values: string[]): Promise<void> {
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92
    try {
      await this.requestsService.selectedEntitlementType.addEntitlementSelections(this.shelfId, values);
      this.requestsService.openSnackbar('#LDS#The products have been successfully added.', ACTION_DISMISS);
      await this.navigate();
    } finally {
<<<<<<< HEAD
      this.requestsService.handleCloseLoader();
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  private async navigate(recentDeleteAction: boolean = false): Promise<void> {
<<<<<<< HEAD
    this.requestsService.handleOpenLoader();
    const getParams: any = this.navigationState;

    try {
      const data = await this.qerApiService.typedClient.PortalRolesEntitlements.Get("ITShopOrg", this.shelfId, getParams);
=======
    const isBusy = this.busyService.beginBusy();
    const getParams: any = this.navigationState;

    try {
      const data = await this.qerApiService.typedClient.PortalRolesEntitlements.Get('ITShopOrg', this.shelfId, getParams);
>>>>>>> oned/v92
      // Notify caller of new count, but only when a search is not applied, and indicate if an
      // entitlement was recently deleted
      if (!this.navigationState?.search || this.navigationState?.search === '') {
        const countUpdateData: EntitlementCountUpdateData = {
          count: data.totalCount,
<<<<<<< HEAD
          recentDeleteAction
=======
          recentDeleteAction,
>>>>>>> oned/v92
        };
        this.entitlementCountUpdated.emit(countUpdateData);
      }
      this.dstSettings = {
        displayedColumns: this.displayedColumns,
        dataSource: data,
        entitySchema: this.entitySchema,
        navigationState: this.navigationState,
        filters: this.filterOptions,
      };
      this.logger.debug(this, `Head at ${data.Data.length + this.navigationState.StartIndex} of ${data.totalCount} item(s)`);

      data.Data.forEach(async (item: PortalRolesEntitlements) => {
        const objKey = DbObjectKey.FromXml(item.ObjectKeyElement.value);
        var uid = item.GetEntity().GetKeys().toString();
        var display: string;
        if (!this.entitlementTypes.has(objKey.TableName)) {
          const metadata = await this.metadata.GetTableMetadata(objKey.TableName);
          this.entitlementTypes.set(uid, metadata.DisplaySingular);
          display = metadata.DisplaySingular;
<<<<<<< HEAD
        }
        else {
=======
        } else {
>>>>>>> oned/v92
          display = this.entitlementTypes.get(objKey.TableName);
        }

        this.entitlementTypes.set(uid, display);
      });
    } finally {
<<<<<<< HEAD
      this.requestsService.handleCloseLoader();
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }
}
