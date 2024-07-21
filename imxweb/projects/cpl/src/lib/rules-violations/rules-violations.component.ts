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
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';

import { CollectionLoadParameters, TypedEntity, ValType } from 'imx-qbm-dbts';

import {
  ClassloggerService,
  DataSourceToolbarFilter,
  DataSourceToolbarSettings,
=======
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';

import { ActivatedRoute, Params } from '@angular/router';
import { CollectionLoadParameters, EntitySchema, TypedEntity, ValType } from 'imx-qbm-dbts';

import { PortalRules } from 'imx-api-cpl';
import { ViewConfigData } from 'imx-api-qer';
import {
  BusyService,
  ClassloggerService,
  DataModelWrapper,
  DataSourceToolbarFilter,
  DataSourceToolbarSettings,
  DataSourceToolbarViewConfig,
>>>>>>> oned/v92
  DataSourceWrapper,
  DataTableComponent,
  DataTableGroupedData,
} from 'qbm';
<<<<<<< HEAD
import { Subscription } from 'rxjs';
import { RulesViolationsApproval } from './rules-violations-approval';
import { RulesViolationsActionService } from './rules-violations-action/rules-violations-action.service';
import { RulesViolationsDetailsComponent } from './rules-violations-details/rules-violations-details.component';
import { RulesViolationsService } from './rules-violations.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DataModelWrapper } from 'qbm/lib/data-source-toolbar/data-model/data-model-wrapper.interface';
import { OverlayRef } from '@angular/cdk/overlay';
=======
import { ViewConfigService } from 'qer';
import { Subscription } from 'rxjs';
import { MitigatingControlsPersonService } from './mitigating-controls-person/mitigating-controls-person.service';
import { RulesViolationsActionService } from './rules-violations-action/rules-violations-action.service';
import { RulesViolationsApproval } from './rules-violations-approval';
import { RulesViolationsDetailsComponent } from './rules-violations-details/rules-violations-details.component';
import { RulesViolationsService } from './rules-violations.service';
>>>>>>> oned/v92

/**
 * Component that shows all rules violations that the user can approve or deny.
 * Therefore, the user can also view some information about the rules violations.
 *
 * Initially only the pending rules violations are shown.
 *
 */
@Component({
  selector: 'imx-rules-violations',
  templateUrl: './rules-violations.component.html',
<<<<<<< HEAD
  styleUrls: ['./rules-violations.component.scss']
})
export class RulesViolationsComponent implements OnInit, OnDestroy {

=======
  styleUrls: ['./rules-violations.component.scss'],
})
export class RulesViolationsComponent implements OnInit, OnDestroy {
  @Input() public isMControlPerViolation: boolean;
>>>>>>> oned/v92
  public dataModelWrapper: DataModelWrapper;
  public dstWrapper: DataSourceWrapper<RulesViolationsApproval>;
  public dstSettings: DataSourceToolbarSettings;
  public selectedRulesViolations: RulesViolationsApproval[] = [];
  public groupedData: { [key: string]: DataTableGroupedData } = {};
<<<<<<< HEAD

  public infoAlertText = '#LDS#Here you can get an overview of all rule violations you are responsible for. Additionally, you can grant or deny exceptions for these rule violations.';

  @ViewChild(DataTableComponent) public table: DataTableComponent<TypedEntity>;

=======
  public entitySchema: EntitySchema;
  public busyService = new BusyService();

  @ViewChild(DataTableComponent) public table: DataTableComponent<TypedEntity>;

  private viewConfig: DataSourceToolbarViewConfig;
  private viewConfigPath = 'rules/violations';
>>>>>>> oned/v92
  private readonly subscriptions: Subscription[] = [];

  constructor(
    public readonly rulesViolationsService: RulesViolationsService,
    public readonly actionService: RulesViolationsActionService,
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly translate: TranslateService,
    private readonly logger: ClassloggerService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.subscriptions.push(this.actionService.applied.subscribe(async () => {
      this.getData();
      this.table.clearSelection();
    }));
  }

  public async ngOnInit(): Promise<void> {
    const entitySchema = this.rulesViolationsService.rulesViolationsApproveSchema;

    this.dataModelWrapper = {
      dataModel: await this.rulesViolationsService.getDataModel(),
      getGroupInfo: parameters => this.rulesViolationsService.getGroupInfo(parameters),
      groupingFilterOptions: ['state']
    };

    this.dstWrapper = new DataSourceWrapper(
      state => this.rulesViolationsService.getRulesViolationsApprove(state),
      [
        entitySchema.Columns.UID_Person,
        entitySchema.Columns.UID_NonCompliance,
        entitySchema.Columns.State,
        {
          ColumnName: 'decision',
          Type: ValType.String,
          afterAdditionals: true
        },
        {
          ColumnName: 'actions',
          Type: ValType.String
        }
      ],
      entitySchema,
      this.dataModelWrapper
    );

    this.subscriptions.push(this.activatedRoute.queryParams.subscribe(params => this.updateFiltersFromRouteParams(params)));

=======
    public readonly viewConfigService: ViewConfigService,
    public readonly mControlsProvider: MitigatingControlsPersonService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly translate: TranslateService,
    private readonly logger: ClassloggerService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly elementalBusyService: EuiLoadingService
  ) {
    this.subscriptions.push(
      this.actionService.applied.subscribe(async () => {
        this.getData();
        this.table.clearSelection();
      })
    );
  }

  public async ngOnInit(): Promise<void> {
    const isBusy = this.busyService.beginBusy();
    try {
      const entitySchema = this.rulesViolationsService.rulesViolationsApproveSchema;
      this.entitySchema = entitySchema;
      // If this wasn't already set, then we need to get it from the config
      this.isMControlPerViolation ??= (await this.rulesViolationsService.featureConfig()).MitigatingControlsPerViolation;

      this.dataModelWrapper = {
        dataModel: await this.rulesViolationsService.getDataModel(),
        getGroupInfo: (parameters) => this.rulesViolationsService.getGroupInfo(parameters),
        groupingFilterOptions: ['state'],
      };
      this.viewConfig = await this.viewConfigService.getInitialDSTExtension(this.dataModelWrapper.dataModel, this.viewConfigPath);

      this.dstWrapper = new DataSourceWrapper(
        (state) => this.rulesViolationsService.getRulesViolationsApprove(state),
        [
          entitySchema.Columns.UID_Person,
          entitySchema.Columns.UID_NonCompliance,
          entitySchema.Columns.State,
          entitySchema.Columns.RiskIndexCalculated,
          entitySchema.Columns.RiskIndexReduced,
          {
            ColumnName: 'decision',
            Type: ValType.String,
            afterAdditionals: true,
            untranslatedDisplay: '#LDS#Approval decision',
          },
        ],
        entitySchema,
        this.dataModelWrapper
      );

      this.subscriptions.push(this.activatedRoute.queryParams.subscribe((params) => this.updateFiltersFromRouteParams(params)));
    } finally {
      isBusy.endBusy();
    }
>>>>>>> oned/v92
    await this.getData();
  }

  public ngOnDestroy(): void {
<<<<<<< HEAD
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public async getData(parameter?: CollectionLoadParameters): Promise<void> {
    this.rulesViolationsService.handleOpenLoader();
    try {
      this.dstSettings = await this.dstWrapper.getDstSettings(parameter);
    } finally {
      this.rulesViolationsService.handleCloseLoader();
=======
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

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

  public async getData(parameter?: CollectionLoadParameters): Promise<void> {
    const isBusy = this.busyService.beginBusy();
    try {
      this.dstSettings = await this.dstWrapper.getDstSettings(parameter);
      this.dstSettings.exportMethod = this.rulesViolationsService.exportRulesViolations(parameter);
      this.dstSettings.viewConfig = this.viewConfig;
    } finally {
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  public onSelectionChanged(items: RulesViolationsApproval[]): void {
    this.logger.trace(this, 'selection changed', items);
    this.selectedRulesViolations = items;
  }

  /**
   * Opens the {@link RulesViolationsDetailsComponent} sidesheet thats shows some informations of the selected rules violation.
   * @param selectedRulesViolation the selected {@link RulesViolationsApproval}
   */
  public async viewDetails(selectedRulesViolation: RulesViolationsApproval): Promise<void> {
<<<<<<< HEAD
    const result = await this.sidesheet.open(RulesViolationsDetailsComponent, {
      title: await this.translate.get('#LDS#Heading View Rule Violation Details').toPromise(),
      headerColour: 'iris-blue',
      bodyColour: 'asher-gray',
      panelClass: 'imx-sidesheet',
      padding: '0',
      width: '600px',
      testId: 'rules-violations-details-sidesheet',
      data: selectedRulesViolation,
    }).afterClosed().toPromise();
=======
    let complianceRule: PortalRules;
    this.elementalBusyService.show();

    try {
      complianceRule = await this.rulesViolationsService.getComplianceRuleByUId(selectedRulesViolation);
    } finally {
      this.elementalBusyService.hide();
    }
    if (!complianceRule) {
      return;
    }
    // TODO: Make API for mit conts
    const result = await this.sidesheet
      .open(RulesViolationsDetailsComponent, {
        title: await this.translate.get('#LDS#Heading View Rule Violation Details').toPromise(),
        subTitle: selectedRulesViolation.GetEntity().GetDisplay(),
        padding: '0px',
        panelClass: 'imx-sidesheet',
        disableClose: this.isMControlPerViolation,
        width: 'max(1200px, 80%)',
        testId: 'rules-violations-details-sidesheet',
        data: {
          selectedRulesViolation,
          isMControlPerViolation: this.isMControlPerViolation,
          complianceRule,
        },
      })
      .afterClosed()
      .toPromise();
>>>>>>> oned/v92

    if (result) {
      this.getData();
    }
  }

  public async onGroupingChange(groupKey: string): Promise<void> {
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));
=======
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92

    try {
      const groupedData = this.groupedData[groupKey];
      groupedData.data = await this.rulesViolationsService.getRulesViolationsApprove(groupedData.navigationState);
      groupedData.settings = {
<<<<<<< HEAD
         displayedColumns: this.dstSettings.displayedColumns,
         dataSource: groupedData.data,
         entitySchema: this.dstSettings.entitySchema,
         navigationState: groupedData.navigationState,
      };
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
        displayedColumns: this.dstSettings.displayedColumns,
        dataModel: this.dstSettings.dataModel,
        dataSource: groupedData.data,
        entitySchema: this.dstSettings.entitySchema,
        navigationState: groupedData.navigationState,
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
      // If we have a default config, we won't set our filters
      return;
    }
>>>>>>> oned/v92
    let foundMatchingParam = false;
    for (const [key, value] of Object.entries(params)) {
      if (this.tryApplyFilter(key, value)) {
        foundMatchingParam = true;
      }
    }

<<<<<<< HEAD
    if (! foundMatchingParam) {
=======
    if (!foundMatchingParam) {
>>>>>>> oned/v92
      this.applyDefaultFiltering();
    }
  }

<<<<<<< HEAD
  private applyDefaultFiltering(): void{
=======
  private applyDefaultFiltering(): void {
>>>>>>> oned/v92
    this.tryApplyFilter('state', 'pending');
  }

  private tryApplyFilter(name: string, value: string): boolean {
<<<<<<< HEAD
    const index = this.dataModelWrapper.dataModel.Filters.findIndex(elem => elem.Name.toLowerCase() === name.toLowerCase());
=======
    const index = this.dataModelWrapper.dataModel.Filters.findIndex((elem) => elem.Name.toLowerCase() === name.toLowerCase());
>>>>>>> oned/v92

    if (index > -1) {
      const filter = this.dataModelWrapper.dataModel.Filters[index] as DataSourceToolbarFilter;
      if (filter) {
        filter.InitialValue = value;
        filter.CurrentValue = value;
        return true;
      }
    }

    return false;
  }
<<<<<<< HEAD

=======
>>>>>>> oned/v92
}
