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
import { Component, OnInit, ViewChild } from '@angular/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
=======
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EuiSidesheetService } from '@elemental-ui/core';
>>>>>>> oned/v92
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

<<<<<<< HEAD
import { CollectionLoadParameters, DataModel, DisplayColumns, TypedEntity, ValType } from 'imx-qbm-dbts';
import { DataSourceToolbarFilter, DataSourceToolbarGroupData, DataSourceToolbarSettings, DataTableComponent, DataTableGroupedData, ClientPropertyForTableColumns } from 'qbm';
import { createGroupData } from 'qbm';
import { PolicyViolation } from './policy-violation';
import { PolicyViolationsSidesheetComponent } from './policy-violations-sidesheet/policy-violations-sidesheet.component';
import { PolicyViolationsService } from './policy-violations.service';
=======
import { CollectionLoadParameters, DataModel, DisplayColumns, EntitySchema, TypedEntity, ValType } from 'imx-qbm-dbts';
import {
  DataSourceToolbarFilter,
  DataSourceToolbarGroupData,
  DataSourceToolbarSettings,
  DataTableComponent,
  DataTableGroupedData,
  ClientPropertyForTableColumns,
  createGroupData,
  DataSourceToolbarViewConfig,
  BusyService,
} from 'qbm';
import { PolicyViolation } from './policy-violation';
import { PolicyViolationsSidesheetComponent } from './policy-violations-sidesheet/policy-violations-sidesheet.component';
import { PolicyViolationsService } from './policy-violations.service';
import { ViewConfigService } from 'qer';
import { ViewConfigData } from 'imx-api-qer';
import { PortalPolicies } from 'imx-api-pol';
>>>>>>> oned/v92

@Component({
  selector: 'imx-policy-violations',
  templateUrl: './policy-violations.component.html',
<<<<<<< HEAD
  styleUrls: ['./policy-violations.component.scss']
})
export class PolicyViolationsComponent implements OnInit {
=======
  styleUrls: ['./policy-violations.component.scss'],
})
export class PolicyViolationsComponent implements OnInit {
  @Input() public selectedCompanyPolicy: PortalPolicies;
  @Input() isMControlPerViolation: boolean;
>>>>>>> oned/v92

  public DisplayColumns = DisplayColumns;
  public selectedViolations: PolicyViolation[] = [];
  public dstSettings: DataSourceToolbarSettings;
  public approveOnly: boolean;
  public groupedData: { [key: string]: DataTableGroupedData } = {};
<<<<<<< HEAD
=======
  public busyService = new BusyService();
  public entitySchema: EntitySchema;
>>>>>>> oned/v92

  @ViewChild(DataTableComponent) public table: DataTableComponent<TypedEntity>;

  private filterOptions: DataSourceToolbarFilter[] = [];
  private groupData: DataSourceToolbarGroupData;
  private dataModel: DataModel;
  private navigationState: CollectionLoadParameters;
  private displayedColumns: ClientPropertyForTableColumns[] = [];
  private readonly subscriptions: Subscription[] = [];
<<<<<<< HEAD

  constructor(
    private readonly busyService: EuiLoadingService,
    public policyViolationsService: PolicyViolationsService,
=======
  private viewConfig: DataSourceToolbarViewConfig;
  private viewConfigPath = 'policies/violations';

  constructor(
    public policyViolationsService: PolicyViolationsService,
    private viewConfigService: ViewConfigService,
>>>>>>> oned/v92
    private readonly sidesheet: EuiSidesheetService,
    private readonly translate: TranslateService,
    private readonly actRoute: ActivatedRoute
  ) {
<<<<<<< HEAD

    this.approveOnly = actRoute.snapshot.url[actRoute.snapshot.url.length - 1].path === 'approve';

    this.navigationState = {};

    this.subscriptions.push(this.policyViolationsService.applied.subscribe(async () => {
      this.getData();
      this.table.clearSelection();
    }));
  }

  public async ngOnInit(): Promise<void> {
    const entitySchema = this.policyViolationsService.policyViolationsSchema;
    this.displayedColumns = [
      entitySchema?.Columns.UID_QERPolicy,
      entitySchema?.Columns.ObjectKey,
      entitySchema?.Columns.State,
      {
        ColumnName: 'actions',
        Type: ValType.String,
        afterAdditionals: true
      }
    ];

    let busyIndicator: OverlayRef;
    setTimeout(() => (busyIndicator = this.busyService.show()));

    try {
      this.dataModel = await this.policyViolationsService.getPolicyViolationsDataModel();
      this.filterOptions = this.dataModel.Filters;

      this.subscriptions.push(this.actRoute.queryParams.subscribe(params => this.updateFiltersFromRouteParams(params)));

      if (this.approveOnly) {
        this.tryApplyFilter('state', 'pending');
      }
=======
    this.entitySchema = this.policyViolationsService.policyViolationsSchema;

    this.navigationState = {};

    this.subscriptions.push(
      this.policyViolationsService.applied.subscribe(async () => {
        this.getData();
        this.table.clearSelection();
      })
    );
  }

  public async ngOnInit(): Promise<void> {
    if (!this.selectedCompanyPolicy)
      this.approveOnly = this.actRoute.snapshot.url[this.actRoute.snapshot.url.length - 1].path === 'approve';
    this.displayedColumns = [
      ...(!this.selectedCompanyPolicy ? [this.entitySchema?.Columns.UID_QERPolicy] : []),
      this.entitySchema?.Columns.ObjectKey,
      this.entitySchema?.Columns.State,
      ...(!this.selectedCompanyPolicy
        ? [
            {
              ColumnName: 'actions',
              Type: ValType.String,
              afterAdditionals: true,
              untranslatedDisplay: '#LDS#Approval decision',
            },
          ]
        : []),
    ];

    const isBusy = this.busyService.beginBusy();

    try {
      this.dataModel = await this.policyViolationsService.getPolicyViolationsDataModel();
      this.viewConfig = await this.viewConfigService.getInitialDSTExtension(this.dataModel, this.viewConfigPath);
      this.filterOptions = this.dataModel.Filters;

      // If this wasn't already set, then we need to get it from the config
      this.isMControlPerViolation ??= (await this.policyViolationsService.getConfig()).MitigatingControlsPerViolation;

      this.subscriptions.push(this.actRoute.queryParams.subscribe((params) => this.updateFiltersFromRouteParams(params)));

>>>>>>> oned/v92
      this.groupData = createGroupData(
        this.dataModel,
        (parameters) =>
          this.policyViolationsService.getGroupInfo({
            ...{
              PageSize: this.navigationState.PageSize,
              StartIndex: 0,
            },
            ...parameters,
          }),
        []
      );
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(busyIndicator));
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
    return this.getData();
  }

<<<<<<< HEAD
  public async viewDetails(selectedRulesViolation: PolicyViolation): Promise<void> {
    const result = await this.sidesheet.open(PolicyViolationsSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading View Policy Violation Details').toPromise(),
      headerColour: 'iris-blue',
      bodyColour: 'asher-gray',
      panelClass: 'imx-sidesheet',
      padding: '0',
      width: '600px',
      testId: 'rules-violations-details-sidesheet',
      data: selectedRulesViolation,
    }).afterClosed().toPromise();
=======
  public async viewDetails(selectedPolicyViolation: PolicyViolation): Promise<void> {
    const result = await this.sidesheet
      .open(PolicyViolationsSidesheetComponent, {
        title: await this.translate.get('#LDS#Heading View Policy Violation Details').toPromise(),
        subTitle: selectedPolicyViolation.GetEntity().GetDisplay(),
        panelClass: 'imx-sidesheet',
        padding: '0',
        width: '600px',
        testId: 'policy-violations-details-sidesheet',
        data: {
          policyViolation: selectedPolicyViolation,
          isMControlPerViolation: this.isMControlPerViolation,
          isReadOnly: !!this.selectedCompanyPolicy,
        },
      })
      .afterClosed()
      .toPromise();
>>>>>>> oned/v92

    if (result) {
      this.getData();
    }
  }

  public onSelectionChanged(cases: PolicyViolation[]): void {
    this.selectedViolations = cases;
  }

  public async search(search: string): Promise<void> {
    return this.getData({ ...this.navigationState, ...{ search } });
  }

<<<<<<< HEAD
  public async onGroupingChange(groupKey: string): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));

    try {
      const groupedData = this.groupedData[groupKey];
      groupedData.data = await this.policyViolationsService.get(groupedData.navigationState);
      groupedData.settings = {
        displayedColumns: this.dstSettings.displayedColumns,
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

  public async onGroupingChange(groupKey: string): Promise<void> {
    const isBusy = this.busyService.beginBusy();
    try {
      const groupedData = this.groupedData[groupKey];
      groupedData.data = await this.policyViolationsService.get(this.approveOnly, groupedData.navigationState);
      groupedData.settings = {
        displayedColumns: this.dstSettings.displayedColumns,
        dataModel: this.dstSettings.dataModel,
>>>>>>> oned/v92
        dataSource: groupedData.data,
        entitySchema: this.dstSettings.entitySchema,
        navigationState: groupedData.navigationState,
      };
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  public async getData(newState?: CollectionLoadParameters): Promise<void> {
    if (newState) {
<<<<<<< HEAD
      this.navigationState = { ...newState, ...{ OrderBy: 'XDateInserted' } };
    }

    let busyIndicator: OverlayRef;
    setTimeout(() => (busyIndicator = this.busyService.show()));

    try {
      const dataSource = await this.policyViolationsService.get(this.navigationState);
      const entitySchema = this.policyViolationsService.policyViolationsSchema;
      this.dstSettings = {
        dataSource,
        entitySchema,
=======
      this.navigationState = newState;
    }

    const isBusy = this.busyService.beginBusy();

    try {
      if (this.selectedCompanyPolicy) {
        const selectedCompanyPolicyKey = this.selectedCompanyPolicy.GetEntity().GetKeys()[0];
        this.navigationState.uid_qerpolicy = selectedCompanyPolicyKey;
        this.filterOptions = this.filterOptions.filter((filter) => filter.Name !== 'uid_qerpolicy');
      }
      const dataSource = await this.policyViolationsService.get(this.approveOnly, this.navigationState);
      const exportMethod = this.policyViolationsService.exportPolicyViolations(this.navigationState);
      exportMethod.initialColumns = this.displayedColumns.map((col) => col.ColumnName);
      this.dstSettings = {
        dataSource,
        entitySchema: this.entitySchema,
>>>>>>> oned/v92
        navigationState: this.navigationState,
        filters: this.filterOptions,
        dataModel: this.dataModel,
        groupData: this.groupData,
<<<<<<< HEAD
        displayedColumns: this.displayedColumns,
      };
    } finally {
      setTimeout(() => this.busyService.hide(busyIndicator));
=======
        viewConfig: this.viewConfig,
        exportMethod,
        displayedColumns: this.displayedColumns,
      };
    } finally {
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  private updateFiltersFromRouteParams(params: Params): void {
<<<<<<< HEAD
=======
    if (this.viewConfigService.isDefaultConfigSet()) {
      // If there is a default config, we will not use our defaults
      return;
    }

    this.navigationState.OrderBy = 'DecisionDate';

>>>>>>> oned/v92
    let foundMatchingParam = false;
    for (const [key, value] of Object.entries(params)) {
      if (this.tryApplyFilter(key, value)) {
        foundMatchingParam = true;
      }
    }
  }

  private tryApplyFilter(name: string, value: string): boolean {
<<<<<<< HEAD
    const index = this.dataModel.Filters.findIndex(elem => elem.Name.toLowerCase() === name.toLowerCase());
=======
    const index = this.dataModel.Filters.findIndex((elem) => elem.Name.toLowerCase() === name.toLowerCase());
>>>>>>> oned/v92

    if (index > -1) {
      const filter = this.dataModel.Filters[index] as DataSourceToolbarFilter;
      if (filter) {
        filter.InitialValue = value;
        filter.CurrentValue = value;
        this.navigationState[name] = value;
        return true;
      }
    }

    return false;
  }
}
