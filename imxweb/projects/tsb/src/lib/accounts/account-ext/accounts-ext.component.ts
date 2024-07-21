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
import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { EuiLoadingService } from '@elemental-ui/core';

import { CollectionLoadParameters, DisplayColumns, EntitySchema, IClientProperty } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings, DynamicTabDataProviderDirective, SettingsService } from 'qbm';
=======
import { Component, Input, OnInit } from '@angular/core';

import { CollectionLoadParameters, DisplayColumns, EntitySchema, IClientProperty } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings, DynamicTabDataProviderDirective, SettingsService, BusyService } from 'qbm';
>>>>>>> oned/v92
import { AccountsExtService } from './account-ext.service';

@Component({
  templateUrl: './accounts-ext.component.html',
<<<<<<< HEAD
  styleUrls: [
    '../accounts.component.scss',
    './accounts-ext.component.scss'],
})
export class AccountsExtComponent implements OnInit {

=======
  styleUrls: ['../accounts.component.scss', './accounts-ext.component.scss'],
})
export class AccountsExtComponent implements OnInit {
>>>>>>> oned/v92
  @Input() public referrer: {
    objecttable?: string;
    objectuid?: string;
    tablename?: string;
  };

  public dstSettings: DataSourceToolbarSettings;
  public readonly DisplayColumns = DisplayColumns;

  public entitySchemaAccount: EntitySchema;
<<<<<<< HEAD
=======
  public busyService = new BusyService();
>>>>>>> oned/v92

  private displayColumns: IClientProperty[] = [];
  private navigationState: CollectionLoadParameters;

  constructor(
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
=======
>>>>>>> oned/v92
    private readonly settingService: SettingsService,
    private readonly accountsService: AccountsExtService,
    dataProvider: DynamicTabDataProviderDirective
  ) {
    this.referrer = dataProvider?.data;
    this.navigationState = { PageSize: this.settingService.DefaultPageSize };
    this.entitySchemaAccount = accountsService.portalPersonAccountsSchema;
<<<<<<< HEAD
    this.displayColumns = [
      this.entitySchemaAccount.Columns.AccountName,
      this.entitySchemaAccount.Columns.UID_DPRNameSpace,
      this.entitySchemaAccount.Columns.UID_UNSRoot
=======
    /** if you like to add columns, please check {@link DataExplorerAccountsComponent | Accounts Component} as well */
    this.displayColumns = [
      this.entitySchemaAccount.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
      this.entitySchemaAccount.Columns.UID_UNSRoot,
      this.entitySchemaAccount.Columns.AccountDisabled,
      this.entitySchemaAccount.Columns.XMarkedForDeletion,
>>>>>>> oned/v92
    ];
  }

  public async ngOnInit(): Promise<void> {
    return this.getData();
  }

  public async onNavigationStateChanged(newState?: CollectionLoadParameters): Promise<void> {
    if (newState) {
      this.navigationState = newState;
    }
    await this.getData();
  }

  public async onSearch(keywords: string): Promise<void> {
    this.navigationState.StartIndex = 0;
    this.navigationState.search = keywords;
    await this.getData();
  }

  private async getData(): Promise<void> {
<<<<<<< HEAD

    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      const groupsPerIdentity = await this.accountsService.getAccounts(this.referrer.objectuid);
=======
    const isBusy = this.busyService.beginBusy();
    try {
      const groupsPerIdentity = await this.accountsService.getAccounts(this.referrer.objectuid, this.navigationState);
>>>>>>> oned/v92
      this.dstSettings = {
        displayedColumns: this.displayColumns,
        dataSource: groupsPerIdentity,
        entitySchema: this.entitySchemaAccount,
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
