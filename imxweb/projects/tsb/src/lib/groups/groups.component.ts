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
import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import {
  DataSourceToolbarSettings,
  ClassloggerService,
  DataSourceToolbarFilter,
  DataTableComponent,
  SettingsService,
  SnackBarService,
} from 'qbm';
import { IDataExplorerComponent, SourceDetectiveSidesheetComponent, SourceDetectiveSidesheetData, SourceDetectiveType } from 'qer';
import {
=======
import { OverlayRef } from '@angular/cdk/overlay';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import {
>>>>>>> oned/v92
  CollectionLoadParameters,
  IClientProperty,
  DisplayColumns,
  DbObjectKey,
  EntitySchema,
  DataModel,
  FilterData,
  ValType,
<<<<<<< HEAD
  IEntity,
  TypedEntity,
} from 'imx-qbm-dbts';
import {
  PortalTargetsystemUnsGroup,
  PortalTargetsystemUnsGroupServiceitem,
  PortalTargetsystemUnsSystem,
  EntityWriteDataBulk,
} from 'imx-api-tsb';
import { EuiSidesheetService, EuiLoadingService } from '@elemental-ui/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { GroupsService } from './groups.service';
import { GroupSidesheetComponent } from './group-sidesheet/group-sidesheet.component';
import { GetGroupsOptionalParameters, GroupSidesheetData } from './groups.models';
import { DeHelperService } from '../de-helper.service';
import { DataExplorerFiltersComponent } from '../data-filters/data-explorer-filters.component';
import { ContainerTreeDatabaseWrapper } from '../container-list/container-tree-database-wrapper';
=======
} from 'imx-qbm-dbts';
import { ViewConfigData } from 'imx-api-qer';
import {
  EntityWriteDataBulk,
  PortalTargetsystemUnsGroup,
  PortalTargetsystemUnsGroupServiceitem,
  PortalTargetsystemUnsSystem,
} from 'imx-api-tsb';
import {
  BusyService,
  ClassloggerService,
  DataSourceToolbarFilter,
  DataSourceToolbarSettings,
  DataTableComponent,
  SettingsService,
  SideNavigationComponent,
  SnackBarService,
  DataSourceToolbarViewConfig,
  HelpContextualValues,
} from 'qbm';
import { SourceDetectiveSidesheetComponent, SourceDetectiveSidesheetData, SourceDetectiveType, ViewConfigService } from 'qer';
import { Subscription } from 'rxjs';

import { ContainerTreeDatabaseWrapper } from '../container-list/container-tree-database-wrapper';
import { DeHelperService } from '../de-helper.service';
import { GroupSidesheetComponent } from './group-sidesheet/group-sidesheet.component';
import { GetGroupsOptionalParameters, GroupSidesheetData } from './groups.models';
import { GroupsService } from './groups.service';
>>>>>>> oned/v92
import { ProductOwnerSidesheetComponent } from './product-owner-sidesheet/product-owner-sidesheet.component';

@Component({
  selector: 'imx-data-explorer-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
<<<<<<< HEAD
export class DataExplorerGroupsComponent implements OnInit, OnDestroy, IDataExplorerComponent {
=======
export class DataExplorerGroupsComponent implements OnInit, OnDestroy, SideNavigationComponent {
>>>>>>> oned/v92
  @Input() public unsAccountIdFilter: string;
  @Input() public sidesheetWidth = '65%';
  @Input() public applyIssuesFilter = false;
  @Input() public issuesFilterMode: string;
  @Input() public targetSystemData?: PortalTargetsystemUnsSystem[];
  @Input() public isAdmin: boolean;
  @Input() public uidPerson = '';
<<<<<<< HEAD

  @ViewChild('dataExplorerFilters', { static: false }) public dataExplorerFilters: DataExplorerFiltersComponent;
=======
  @Input() public usedInSidesheet = false;
  @Input() public contextId: HelpContextualValues;

>>>>>>> oned/v92
  @ViewChild('dataTable', { static: false }) public dataTable: DataTableComponent<PortalTargetsystemUnsGroup>;
  /**
   * Settings needed by the DataSourceToolbarComponent
   */

  public dstSettings: DataSourceToolbarSettings;
  /**
   * Page size, start index, search and filtering options etc.
   */
  public navigationState: CollectionLoadParameters;
  public filterOptions: DataSourceToolbarFilter[] = [];
  public treeDbWrapper: ContainerTreeDatabaseWrapper;
<<<<<<< HEAD
  public requestableBulkUpdateCtrl = new FormControl(true);
=======
  public requestableBulkUpdateCtrl = new UntypedFormControl(true);
>>>>>>> oned/v92
  public entitySchemaUnsGroup: EntitySchema;
  public readonly DisplayColumns = DisplayColumns;
  public selectedGroupsForUpdate: PortalTargetsystemUnsGroup[] = [];
  public data: any;

<<<<<<< HEAD
=======
  public busyService = new BusyService();
  private viewConfigPath: string;
  private viewConfig: DataSourceToolbarViewConfig;

>>>>>>> oned/v92
  public readonly itemStatus = {
    enabled: (item: PortalTargetsystemUnsGroup): boolean => {
      return item.UID_AccProduct?.value !== '';
    },
  };

  private displayedColumns: IClientProperty[] = [];
  private authorityDataDeleted$: Subscription;

  private dataModel: DataModel;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly sideSheet: EuiSidesheetService,
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
    private readonly logger: ClassloggerService,
    private readonly groupsService: GroupsService,
    private readonly dataHelper: DeHelperService,
    private readonly translate: TranslateService,
    private readonly snackbar: SnackBarService,
    private readonly settingsService: SettingsService
=======
    private readonly busyServiceElemental: EuiLoadingService,
    private readonly logger: ClassloggerService,
    private readonly groupsService: GroupsService,
    private viewConfigService: ViewConfigService,
    private readonly dataHelper: DeHelperService,
    private readonly translate: TranslateService,
    private readonly snackbar: SnackBarService,
    settingsService: SettingsService
>>>>>>> oned/v92
  ) {
    this.isAdmin = this.route.snapshot?.url[0]?.path === 'admin';
    this.navigationState = { PageSize: settingsService.DefaultPageSize, StartIndex: 0 };
    this.entitySchemaUnsGroup = this.groupsService.unsGroupsSchema(this.isAdmin);
    this.authorityDataDeleted$ = this.dataHelper.authorityDataDeleted.subscribe(() => this.navigate());
<<<<<<< HEAD
    this.treeDbWrapper = new ContainerTreeDatabaseWrapper(busyService, dataHelper);
=======
    this.treeDbWrapper = new ContainerTreeDatabaseWrapper(this.busyService, dataHelper);
>>>>>>> oned/v92
  }

  public async ngOnInit(): Promise<void> {
    this.entitySchemaUnsGroup = this.groupsService.unsGroupsSchema(this.isAdmin);

    this.displayedColumns = [
      this.entitySchemaUnsGroup.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
      this.entitySchemaUnsGroup.Columns.Requestable,
    ];

    if (this.entitySchemaUnsGroup.Columns.XMarkedForDeletion) {
      this.displayedColumns.push(this.entitySchemaUnsGroup.Columns.XMarkedForDeletion);
    }

    if (this.unsAccountIdFilter) {
      this.displayedColumns.push({ ColumnName: 'action', Type: ValType.String });
    }

<<<<<<< HEAD
    let overlayRef: OverlayRef;

    try {
      setTimeout(() => (overlayRef = this.busyService.show()));
      this.filterOptions = await this.groupsService.getFilterOptions(this.isAdmin);

      this.dataModel = await this.groupsService.getDataModel(this.isAdmin);
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
    const isBusy = this.busyService.beginBusy();

    try {
      this.filterOptions = await this.groupsService.getFilterOptions(this.isAdmin);

      this.dataModel = await this.groupsService.getDataModel(this.isAdmin);
      this.viewConfigPath = this.isAdmin || this.unsAccountIdFilter ? 'targetsystem/uns/group' : 'resp/unsgroup';
      this.viewConfig = await this.viewConfigService.getInitialDSTExtension(this.dataModel, this.viewConfigPath);
    } finally {
      isBusy.endBusy();
>>>>>>> oned/v92
    }
    if (this.applyIssuesFilter && !this.issuesFilterMode) {
      const ownerFilter = this.filterOptions.find((f) => {
        return f.Name === 'withowner';
      });

      if (ownerFilter) {
        ownerFilter.InitialValue = '0';
      }
    }

    if (this.applyIssuesFilter && this.issuesFilterMode === 'requestable') {
      const requestableFliter = this.filterOptions.find((f) => {
        return f.Name === 'published';
      });

      if (requestableFliter) {
        requestableFliter.InitialValue = '0';
      }
    }
    await this.navigate();
  }

  public ngOnDestroy(): void {
    if (this.authorityDataDeleted$) {
      this.authorityDataDeleted$.unsubscribe();
    }
  }

<<<<<<< HEAD
=======
  public async updateConfig(config: ViewConfigData): Promise<void> {
    await this.viewConfigService.putViewConfig(config);
    this.viewConfig = await this.viewConfigService.getDSTExtensionChanges(this.viewConfigPath);
    this.dstSettings.viewConfig = this.viewConfig;
  }

  public async deleteConfigById(id: string): Promise<void> {
    await this.viewConfigService.deleteViewConfig(id);
    this.viewConfig = await this.viewConfigService.getDSTExtensionChanges(this.viewConfigPath);
    this.dstSettings.viewConfig = this.viewConfig;
  }

  public get itemsAreNotRequestable(): boolean {
    return this.selectedGroupsForUpdate.every((elem) => !elem.Requestable.value);
  }

  public get itemsAreRequestable(): boolean {
    return this.selectedGroupsForUpdate.every((elem) => elem.Requestable.value);
  }

>>>>>>> oned/v92
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

  public async onGroupChanged(group: PortalTargetsystemUnsGroup): Promise<void> {
    if (this.unsAccountIdFilter) {
      return;
    }

    this.logger.debug(this, `Selected group changed`);
    this.logger.trace(this, `New group selected`, group);

    let data: GroupSidesheetData;
    let busy: OverlayRef;
<<<<<<< HEAD

    try {
      setTimeout(() => (busy = this.busyService.show()));
=======
    const isBusy = this.busyService.beginBusy();

    try {
>>>>>>> oned/v92
      const objKey = DbObjectKey.FromXml(group.XObjectKey.value);

      const uidAccProduct = group.UID_AccProduct.value;

      data = {
        uidAccProduct,
        unsGroupDbObjectKey: objKey,
        group: await this.groupsService.getGroupDetailsInteractive(objKey, 'UID_AccProduct'),
        groupServiceItem: await this.groupsService.getGroupServiceItem(uidAccProduct),
        isAdmin: this.isAdmin,
      };
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(busy));
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }

    this.viewGroup(data);
  }

  /**
   * Occurs when user triggers search.
   *
   * @param keywords Search keywords.
   */
  public async onSearch(keywords: string): Promise<void> {
    this.logger.debug(this, `Searching for: ${keywords}`);
    this.navigationState.StartIndex = 0;
    this.navigationState.search = keywords;
    await this.navigate();
  }

  public async filterByTree(filters: FilterData[]): Promise<void> {
    this.navigationState.filter = filters;
<<<<<<< HEAD
=======
    this.navigationState.StartIndex = 0;
>>>>>>> oned/v92
    return this.navigate();
  }

  public onGroupSelected(selected: PortalTargetsystemUnsGroup[]): void {
    this.selectedGroupsForUpdate = selected;
  }

  public async viewSource(event: Event, item: PortalTargetsystemUnsGroup): Promise<void> {
    event.stopPropagation();

    const uidPerson = this.uidPerson;
    const objKey = DbObjectKey.FromXml(item.XObjectKey.value);

    const data: SourceDetectiveSidesheetData = {
      UID_Person: uidPerson,
      Type: SourceDetectiveType.MembershipOfSystemEntitlement,
      UID: objKey.Keys[0],
      TableName: objKey.TableName,
    };
    this.sideSheet.open(SourceDetectiveSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading View Assignment Analysis').toPromise(),
<<<<<<< HEAD
      headerColour: 'orange',
      bodyColour: 'asher-gray',
=======
      subTitle: item.GetEntity().GetDisplay(),
>>>>>>> oned/v92
      padding: '0px',
      width: 'max(600px, 60%)',
      disableClose: false,
      testId: 'system-entitlement-role-membership-details',
      data,
    });
  }

<<<<<<< HEAD
  public async bulkUpdateSelected(): Promise<void> {
=======
  public async bulkUpdateSelected(request: boolean): Promise<void> {
>>>>>>> oned/v92
    const updateData: EntityWriteDataBulk = {
      Keys: [],
      Data: [
        {
          Name: PortalTargetsystemUnsGroupServiceitem.GetEntitySchema().Columns.IsInActive.ColumnName,
          // Inverse value as actual property is 'Not available'
<<<<<<< HEAD
          Value: !this.requestableBulkUpdateCtrl.value,
=======
          Value: !request,
>>>>>>> oned/v92
        },
      ],
    };
    return this.updateSelectedGroups(updateData);
  }

  public async bulkUpdateOwner(): Promise<void> {
    const selectedOwner = await this.sideSheet
      .open(ProductOwnerSidesheetComponent, {
        title: await this.translate.get('#LDS#Heading Assign Product Owner').toPromise(),
<<<<<<< HEAD
        headerColour: 'green',
        padding: '0px',
        width: `max(650px, ${this.sidesheetWidth})`,
        icon: 'usergroup',
=======
        subTitle: this.selectedGroupsForUpdate.length === 1 ? this.selectedGroupsForUpdate[0].GetEntity().GetDisplay() : '',
        padding: '0px',
        width: `max(650px, ${this.sidesheetWidth})`,
        icon: 'usergroup',
        testId: 'system-entitlements-assign-product-owner',
>>>>>>> oned/v92
        data: await this.groupsService.getGroupServiceItem(this.selectedGroupsForUpdate[0].UID_AccProduct.value),
      })
      .afterClosed()
      .toPromise();

    if (selectedOwner) {
      return this.updateOwnerForSelectedGroups(selectedOwner);
    }
  }

  private async updateOwnerForSelectedGroups(selectedOwner: { uidPerson?: string; uidRole?: string }): Promise<void> {
    let confirmMessage = '';
    let busy: OverlayRef;
    try {
<<<<<<< HEAD
      setTimeout(() => (busy = this.busyService.show()));
=======
      setTimeout(() => (busy = this.busyServiceElemental.show()));
>>>>>>> oned/v92
      confirmMessage = await this.groupsService.updateMultipleOwner(
        this.selectedGroupsForUpdate.map((elem) => elem.UID_AccProduct.value),
        selectedOwner
      );
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(busy));
=======
      setTimeout(() => this.busyServiceElemental.hide(busy));
>>>>>>> oned/v92
    }

    if (confirmMessage) {
      this.snackbar.open({ key: confirmMessage });
    }
    return this.navigate();
  }

  private async updateSelectedGroups(updateData: EntityWriteDataBulk): Promise<void> {
    this.selectedGroupsForUpdate.forEach((group: PortalTargetsystemUnsGroup) => {
      const serviceItemUid = group?.UID_AccProduct.value;
      if (serviceItemUid?.length) {
        updateData.Keys.push([serviceItemUid]);
      }
    });
    let busy: OverlayRef;

    try {
<<<<<<< HEAD
      setTimeout(() => (busy = this.busyService.show()));
=======
      setTimeout(() => (busy = this.busyServiceElemental.show()));
>>>>>>> oned/v92
      await this.groupsService.bulkUpdateGroupServiceItems(updateData);
      await this.navigate();
      this.dataTable.clearSelection();
      this.requestableBulkUpdateCtrl.setValue(true, { emitEvent: false });
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(busy));
=======
      setTimeout(() => this.busyServiceElemental.hide(busy));
>>>>>>> oned/v92
    }
  }

  private async navigate(): Promise<void> {
<<<<<<< HEAD
    let busy: OverlayRef;
    const getParams: GetGroupsOptionalParameters = this.navigationState;

    try {
      setTimeout(() => (busy = this.busyService.show()));
      if (this.unsAccountIdFilter) {
        getParams.uid_unsaccount = this.unsAccountIdFilter;
      }
      const tsUid = this.dataExplorerFilters.selectedTargetSystemUid;
      const cUid = this.dataExplorerFilters.selectedContainerUid;
      getParams.system = tsUid ? tsUid : undefined;
      getParams.container = cUid ? cUid : undefined;
=======
    const isBusy = this.busyService.beginBusy();

    const getParams: GetGroupsOptionalParameters = this.navigationState;

    try {
      if (this.unsAccountIdFilter) {
        getParams.uid_unsaccount = this.unsAccountIdFilter;
      }
>>>>>>> oned/v92

      const data =
        this.isAdmin || this.unsAccountIdFilter // Wenn wir filtern, muss auch der Admin-Endpoint genutzt werden
          ? await this.groupsService.getGroups(getParams)
          : await this.groupsService.getGroupsResp(getParams);

<<<<<<< HEAD
=======
      const exportMethod =
        this.isAdmin || this.unsAccountIdFilter
          ? this.groupsService.exportGroups(getParams)
          : this.groupsService.exportGroupsResp(getParams);
      exportMethod.initialColumns = this.displayedColumns.map((col) => col.ColumnName);

>>>>>>> oned/v92
      this.dstSettings = {
        displayedColumns: this.displayedColumns,
        dataSource: data,
        entitySchema: this.entitySchemaUnsGroup,
        navigationState: this.navigationState,
        filters: this.filterOptions,
        filterTree: {
          filterMethode: async (parentkey) => {
            return this.groupsService.getFilterTree({
              parentkey,
              container: getParams.container,
              system: getParams.system,
              uid_unsaccount: getParams.uid_unsaccount,
            });
          },
          multiSelect: false,
        },
        dataModel: this.dataModel,
<<<<<<< HEAD
        identifierForSessionStore: 'groups-main-grid' + (this.isAdmin ? 'admin' : 'resp'),
      };
      this.logger.debug(this, `Head at ${data.Data.length + this.navigationState.StartIndex} of ${data.totalCount} item(s)`);
    } finally {
      setTimeout(() => this.busyService.hide(busy));
=======
        viewConfig: this.viewConfig,
        exportMethod,
      };
      this.logger.debug(this, `Head at ${data.Data.length + this.navigationState.StartIndex} of ${data.totalCount} item(s)`);
    } finally {
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  private async viewGroup(data: GroupSidesheetData): Promise<void> {
    const sidesheetRef = this.sideSheet.open(GroupSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading Edit System Entitlement').toPromise(),
<<<<<<< HEAD
      headerColour: 'green',
=======
      subTitle: data.group.GetEntity().GetDisplay(),
>>>>>>> oned/v92
      padding: '0px',
      width: `max(650px, ${this.sidesheetWidth})`,
      icon: 'usergroup',
      data,
<<<<<<< HEAD
=======
      testId: 'edit-system-entitlement-sidesheet',
>>>>>>> oned/v92
      disableClose: true,
    });
    // After the sidesheet closes, reload the current data to refresh any changes that might have been made
    sidesheetRef.afterClosed().subscribe(() => this.navigate());
  }
}
