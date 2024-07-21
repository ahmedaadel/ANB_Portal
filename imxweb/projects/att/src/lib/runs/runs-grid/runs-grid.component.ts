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
import { Component, Input, OnInit } from '@angular/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';

<<<<<<< HEAD
import { CollectionLoadParameters, CompareOperator, DataModel, FilterData, FilterType, ValType } from 'imx-qbm-dbts';
import { PortalAttestationRun, RunStatisticsConfig } from 'imx-api-att';
import { DataSourceToolbarFilter, DataSourceToolbarGroupData, DataSourceToolbarSettings, DataTableGroupedData, SettingsService } from 'qbm';
=======
import { CollectionLoadParameters, CompareOperator, DataModel, EntityCollectionData, EntitySchema, FilterData, FilterType, MethodDefinition, MethodDescriptor } from 'imx-qbm-dbts';
import { PortalAttestationRun, RunStatisticsConfig, V2ApiClientMethodFactory } from 'imx-api-att';
import { DataSourceToolbarExportMethod, DataSourceToolbarFilter, DataSourceToolbarGroupData, DataSourceToolbarSettings, DataSourceToolbarViewConfig, DataTableGroupedData, SettingsService } from 'qbm';
>>>>>>> oned/v92
import { ApiService } from '../../api.service';
import { createGroupData } from '../../datamodel/datamodel-helper';
import { RunSidesheetComponent } from '../run-sidesheet.component';
import { RunsService } from '../runs.service';
import { PermissionsService } from '../../admin/permissions.service';
<<<<<<< HEAD
=======
import { ViewConfigData } from 'imx-api-qer';
import { ViewConfigService } from 'qer';
>>>>>>> oned/v92

@Component({
  selector: 'imx-runs-grid',
  templateUrl: './runs-grid.component.html',
  styleUrls: ['./runs-grid.component.scss']
})
export class RunsGridComponent implements OnInit {

  /**
   * Settings needed by the DataSourceToolbarComponent
   */
  public dstSettings: DataSourceToolbarSettings;
  public readonly categoryBadgeColor = {
    Bad: 'red',
    Mediocre: 'orange',
    Good: 'white'
  };

<<<<<<< HEAD
  @Input() public uidAttestationPolicy;

  public groupedData: { [key: string]: DataTableGroupedData } = {};
  public attestationRunConfig: RunStatisticsConfig;
=======
  public entitySchema: EntitySchema;
  @Input() public uidAttestationPolicy;

  public groupedData: { [key: string]: DataTableGroupedData } = {};
  public attestationRunConfig: RunStatisticsConfig | undefined;
>>>>>>> oned/v92

  public canSeeAttestationPolicies: boolean;
  public hasPendingAttestations: boolean;
  public progressCalcThreshold: number;

  private runs: PortalAttestationRun[];

<<<<<<< HEAD
  private filterOptions: DataSourceToolbarFilter[] = [];
=======
  private filterOptions: DataSourceToolbarFilter[] | undefined = [];
>>>>>>> oned/v92
  private groupData: DataSourceToolbarGroupData;
  /**
   * Page size, start index, search and filtering options etc.
   */
  private navigationState: CollectionLoadParameters;
<<<<<<< HEAD
  private readonly orderBy = { OrderBy: 'PolicyProcessed desc' };

  private filter: { filter: FilterData[] };
  private dataModel: DataModel;

  constructor(
    private runsService: RunsService,
=======
  private readonly orderBy = 'PolicyProcessed desc';

  private filter: { filter: FilterData[] };
  private dataModel: DataModel;
  private viewConfig: DataSourceToolbarViewConfig;
  private viewConfigPath = 'attestation/run';

  constructor(
    private runsService: RunsService,
    private viewConfigService: ViewConfigService,
>>>>>>> oned/v92
    private busyService: EuiLoadingService,
    private sideSheet: EuiSidesheetService,
    private readonly attService: ApiService,
    private readonly settingsService: SettingsService,
    private readonly permissions: PermissionsService,
    private translate: TranslateService
<<<<<<< HEAD
  ) { }
=======
  ) {
   this.entitySchema = this.attService.typedClient.PortalAttestationRun.GetSchema();

  }
>>>>>>> oned/v92

  public async ngOnInit(): Promise<void> {
    this.filter = {
      filter: this.uidAttestationPolicy == null ? [] : [{
        CompareOp: CompareOperator.Equal,
        Type: FilterType.Compare,
        ColumnName: 'UID_AttestationPolicy',
        Value1: this.uidAttestationPolicy
      }]
    };
<<<<<<< HEAD
    this.navigationState = { ...{ PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 }, ...this.orderBy, ...this.filter };
=======
    this.navigationState = { ...{ PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 }, ...this.filter };
>>>>>>> oned/v92
    const config = await this.attService.client.portal_attestation_config_get();
    this.attestationRunConfig = config.AttestationRunConfig;
    this.progressCalcThreshold = config.ProgressCalculationThreshold;
    this.canSeeAttestationPolicies = await this.permissions.canSeeAttestationPolicies();

    let busyIndicator: OverlayRef;
    setTimeout(() => busyIndicator = this.busyService.show());
    try {
      this.dataModel = await this.runsService.getDataModel();
<<<<<<< HEAD
=======
      this.viewConfig = await this.viewConfigService.getInitialDSTExtension(this.dataModel, this.viewConfigPath);
      // We will check the configs for default state only on init
      if (!this.viewConfigService.isDefaultConfigSet()) {
        // If we have no default settings, we have a default
        this.navigationState.OrderBy = this.orderBy;
      }
>>>>>>> oned/v92
      this.filterOptions = this.dataModel.Filters;
      this.groupData = createGroupData(
        this.dataModel,
        parameters => this.runsService.getGroupInfo({ ...{ PageSize: this.navigationState.PageSize, StartIndex: 0 }, ...parameters }),
        this.uidAttestationPolicy == null ? [] : ['UID_AttestationPolicy']
      );
    } finally {
      setTimeout(() => {
        this.busyService.hide(busyIndicator);
      });
    }

    await this.getData();
  }

<<<<<<< HEAD
  public async getData(newState?: CollectionLoadParameters): Promise<void> {
    if (newState) {
      this.navigationState = { ...newState, ...this.orderBy, ...this.filter };
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

  public async getData(newState?: CollectionLoadParameters): Promise<void> {
    if (newState) {
      const filter = this.filter.filter.concat(newState.filter ?? []);
      this.navigationState = { ...newState, filter };
>>>>>>> oned/v92
    }

    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());

<<<<<<< HEAD
    const entitySchema = this.attService.typedClient.PortalAttestationRun.GetSchema();

=======
>>>>>>> oned/v92
    try {
      const data = await this.attService.typedClient.PortalAttestationRun.Get(this.navigationState);
      this.runs = data.Data;
      this.dstSettings = {
        displayedColumns: [
<<<<<<< HEAD
          entitySchema.Columns.UID_AttestationPolicy,
          entitySchema.Columns.RunCategory,
          entitySchema.Columns.PolicyProcessed,
          entitySchema.Columns.DueDate,
          entitySchema.Columns.PendingCases,
          entitySchema.Columns.ClosedCases,
          entitySchema.Columns.Progress,
          {
            ColumnName: 'details',
            Type: ValType.String,
            afterAdditionals: true
          }
        ],
        dataSource: data,
        entitySchema,
=======
          this.entitySchema.Columns.UID_AttestationPolicy,
          this.entitySchema.Columns.RunCategory,
          this.entitySchema.Columns.PolicyProcessed,
          this.entitySchema.Columns.DueDate,
          this.entitySchema.Columns.PendingCases,
          this.entitySchema.Columns.ClosedCases,
          this.entitySchema.Columns.Progress
        ],
        dataSource: data,
        entitySchema:this.entitySchema,
>>>>>>> oned/v92
        navigationState: this.navigationState,
        filters: this.filterOptions,
        dataModel: this.dataModel,
        groupData: this.groupData,
<<<<<<< HEAD
        identifierForSessionStore: 'runs-grid'
=======
        viewConfig: this.viewConfig,
        exportMethod: this.getExportMethod(),
>>>>>>> oned/v92
      };

      this.hasPendingAttestations = this.runs?.some(run => run.PendingCases.value > 0);
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }

<<<<<<< HEAD
=======
  public getExportMethod(): DataSourceToolbarExportMethod {
    const factory = new V2ApiClientMethodFactory();
    return {
      getMethod: (withProperties: string, PageSize?: number) => {
        let method: MethodDescriptor<EntityCollectionData>;
        if (PageSize) {
          method = factory.portal_attestation_run_get({...this.navigationState, withProperties, PageSize, StartIndex: 0});
        } else {
          method = factory.portal_attestation_run_get({...this.navigationState, withProperties});
        }
        return new MethodDefinition(method);
      }
    }
  }

>>>>>>> oned/v92
  public async onSearch(keywords: string): Promise<void> {
    return this.getData({
      PageSize: this.navigationState.PageSize,
      StartIndex: 0,
      search: keywords
    });
  }

  public async onRunChanged(run: PortalAttestationRun): Promise<void> {
    await this.sideSheet.open(RunSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading View Attestation Run Details').toPromise(),
<<<<<<< HEAD
      headerColour: 'iris-blue',
      bodyColour: 'asher-gray',
      padding: '0px',
      width: 'max(768px, 60%)',
=======
      subTitle: run.GetEntity().GetDisplay(),
      padding: '0px',
      width: 'max(768px, 60%)',
      testId: 'runs-grid-view-attestation-run-details',
>>>>>>> oned/v92
      data: {
        run: await this.runsService.getSingleRun(run.GetEntity().GetKeys()[0]),
        attestationRunConfig: this.attestationRunConfig,
        canSeeAttestationPolicies: this.canSeeAttestationPolicies,
        threshold: this.progressCalcThreshold,
        completed: this.isCompleted(run)
      }
    }).afterClosed().toPromise();
    await this.getData();
  }

  public async onGroupingChange(groupKey: string): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));

    try {
      const groupedData = this.groupedData[groupKey];
      groupedData.data = await this.attService.typedClient.PortalAttestationRun.Get(groupedData.navigationState);
      groupedData.settings = {
        displayedColumns: this.dstSettings.displayedColumns,
<<<<<<< HEAD
=======
        dataModel: this.dstSettings.dataModel,
>>>>>>> oned/v92
        dataSource: groupedData.data,
        entitySchema: this.dstSettings.entitySchema,
        navigationState: groupedData.navigationState
      };
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }

  public async sendReminderEmail(): Promise<void> {
    return this.runsService.sendReminderEmail(this.runs);
  }

  public isCompleted(run: PortalAttestationRun): boolean {
    return (run.ClosedCases.value + run.PendingCases.value) > 0 && run.PendingCases.value === 0;
  }
}
