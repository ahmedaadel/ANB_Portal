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
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
<<<<<<< HEAD
import { CompareOperator, DisplayColumns, EntitySchema, FilterType, TypedEntity, IClientProperty, ValType, FilterData, DataModel } from 'imx-qbm-dbts';
=======
import {
  CompareOperator,
  DisplayColumns,
  EntitySchema,
  FilterType,
  TypedEntity,
  FilterData,
  DataModel,
  ValType,
  DbObjectKey,
} from 'imx-qbm-dbts';
>>>>>>> oned/v92
import {
  DataSourceItemStatus,
  DataSourceToolbarFilter,
  DataSourceToolbarGroupData,
  DataSourceToolbarSettings,
  DataTableComponent,
  DataTableGroupedData,
  SettingsService,
  UserMessageService,
<<<<<<< HEAD
  ClientPropertyForTableColumns
} from 'qbm';
=======
  ClientPropertyForTableColumns,
  DataSourceToolbarViewConfig,
  BusyService,
} from 'qbm';
import { AttestationHistoryFilterComponent } from './attestation-history-filter/attestation-history-filter.component';
>>>>>>> oned/v92
import { AttestationHistoryCase } from './attestation-history-case';
import { AttestationCaseLoadParameters } from './attestation-case-load-parameters.interface';
import { AttestationHistoryService } from './attestation-history.service';
import { AttestationHistoryDetailsComponent } from './attestation-history-details/attestation-history-details.component';
import { Approvers } from '../decision/approvers.interface';
import { AttestationHistoryActionService } from './attestation-history-action.service';
import { AttestationCasesService } from '../decision/attestation-cases.service';
import { createGroupData } from '../datamodel/datamodel-helper';
<<<<<<< HEAD
=======
import { SourceDetectiveSidesheetComponent, SourceDetectiveSidesheetData, SourceDetectiveType, ViewConfigService } from 'qer';
import { ViewConfigData } from 'imx-api-qer';
>>>>>>> oned/v92

@Component({
  selector: 'imx-attestation-history',
  templateUrl: './attestation-history.component.html',
<<<<<<< HEAD
  styleUrls: ['./attestation-history.component.scss']
})
export class AttestationHistoryComponent implements OnInit, OnDestroy {
  @Input() public parameters: { objecttable: string; objectuid: string; filter?: FilterData[] };
  @Input() public itemStatus: DataSourceItemStatus = { enabled: __ => true };
=======
  styleUrls: ['./attestation-history.component.scss'],
})
export class AttestationHistoryComponent implements OnInit, OnDestroy {
  @Input() public parameters: { objecttable: string; objectuid: string; filter?: FilterData[] };
  @Input() public itemStatus: DataSourceItemStatus = { enabled: (__) => true };
  @Input() public withAssignmentAnalysis: boolean = false;
  @Input() public selectable : boolean = true;

  @ViewChild('attestorFilter', { static: false }) public attestorFilter: AttestationHistoryFilterComponent;
>>>>>>> oned/v92

  public dstSettings: DataSourceToolbarSettings;
  public readonly DisplayColumns = DisplayColumns;
  public readonly entitySchema: EntitySchema;

  public groupedData: { [key: string]: DataTableGroupedData } = {};

  @Output() public selectionChanged = new EventEmitter<AttestationHistoryCase[]>();

<<<<<<< HEAD
=======
  public busyService = new BusyService();

>>>>>>> oned/v92
  private filterOptions: DataSourceToolbarFilter[] = [];
  private dataModel: DataModel;

  private navigationState: AttestationCaseLoadParameters;

  private groupData: DataSourceToolbarGroupData;
  private displayedColumns: ClientPropertyForTableColumns[];
  private readonly subscriptions: Subscription[] = [];
<<<<<<< HEAD
  @ViewChild(DataTableComponent) private readonly table: DataTableComponent<TypedEntity>;
=======

  @ViewChild(DataTableComponent) private readonly table: DataTableComponent<TypedEntity>;
  private viewConfig: DataSourceToolbarViewConfig;
  private viewConfigPath = 'attestation/case';
>>>>>>> oned/v92

  constructor(
    public readonly attestationAction: AttestationHistoryActionService,
    private readonly attestationCaseService: AttestationCasesService,
    private readonly historyService: AttestationHistoryService,
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
=======
    private viewConfigService: ViewConfigService,
    private readonly busyServiceElemental: EuiLoadingService,
>>>>>>> oned/v92
    private readonly sideSheet: EuiSidesheetService,
    private readonly translator: TranslateService,
    private readonly settingsService: SettingsService,
    private readonly messageService: UserMessageService
  ) {
    this.entitySchema = attestationCaseService.attestationCaseSchema;

<<<<<<< HEAD
    this.subscriptions.push(this.attestationAction.applied.subscribe(() => {
      this.getData();
      this.table?.clearSelection();
    }));
  }

  public async ngOnInit(): Promise<void> {
    this.displayedColumns = [
      this.entitySchema.Columns.UiText,
      this.entitySchema.Columns.AttestationState,
      {
        ColumnName: 'viewDetailsButton',
        Display: await this.translator.get('#LDS#Details').toPromise(),
        Type: ValType.String,
        afterAdditionals: true
      }
    ];
    this.navigationState = { ...this.parameters, ...{ PageSize: this.settingsService.DefaultPageSize, StartIndex: 0, OrderBy: 'ToSolveTill asc' } };

    let busyIndicator: OverlayRef;
    setTimeout(() => busyIndicator = this.busyService.show());
    try {
      this.dataModel = await this.historyService.getDataModel(
        this.parameters?.objecttable, this.parameters?.objectuid, this.parameters?.filter);
      this.filterOptions = this.dataModel.Filters;
      this.groupData = createGroupData(
        this.dataModel,
        parameters => {
          const uidpolicy = this.filterOptions.find(elem => elem.Name === 'uidpolicy')?.CurrentValue;
          const risk = this.filterOptions.find(elem => elem.Name === 'risk')?.CurrentValue;
          const state = this.filterOptions.find(elem => elem.Name === 'state')?.CurrentValue;
=======
    this.subscriptions.push(
      this.attestationAction.applied.subscribe(async () => {
        await this.getData();
        this.table?.clearSelection();
      })
    );
  }

  public async ngOnInit(): Promise<void> {
    this.displayedColumns = [this.entitySchema.Columns.UiText, this.entitySchema.Columns.AttestationState];

    if (this.withAssignmentAnalysis) {
      this.displayedColumns.push({
        ColumnName: 'actions',
        Type: ValType.String,
        afterAdditionals: true,
        untranslatedDisplay: '#LDS#View assignment analysis',
      });
    }
    this.navigationState = { ...this.parameters, ...{ PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 } };

    const isBusy = this.busyService.beginBusy();
    try {
      this.dataModel = await this.historyService.getDataModel(
        this.parameters?.objecttable,
        this.parameters?.objectuid,
        this.parameters?.filter
      );
      this.filterOptions = this.dataModel.Filters;
      this.groupData = createGroupData(
        this.dataModel,
        (parameters) => {
          const uidpolicy = this.filterOptions.find((elem) => elem.Name === 'uidpolicy')?.CurrentValue;
          const risk = this.filterOptions.find((elem) => elem.Name === 'risk')?.CurrentValue;
          const state = this.filterOptions.find((elem) => elem.Name === 'state')?.CurrentValue;
>>>>>>> oned/v92
          return this.historyService.getGroupInfo({
            ...{
              PageSize: this.navigationState.PageSize,
              StartIndex: 0,
              objecttable: this.parameters?.objecttable,
              objectuid: this.parameters?.objectuid,
              groupFilter: this.parameters?.filter,
              risk,
              state,
<<<<<<< HEAD
              uidpolicy
            },
            ...parameters
=======
              uidpolicy,
            },
            ...parameters,
>>>>>>> oned/v92
          });
        },
        []
      );
<<<<<<< HEAD
    } finally {
      setTimeout(() => {
        this.busyService.hide(busyIndicator);
      });
    }

    await this.getData();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s?.unsubscribe());
=======
      this.viewConfig = await this.viewConfigService.getInitialDSTExtension(this.dataModel, this.viewConfigPath);
      // We will check the configs for default state only on ini
      if (!this.viewConfigService.isDefaultConfigSet()) {
        // If we have no default settings, we will use the due date to sort
        this.navigationState.OrderBy = 'ToSolveTill';
      }

      await this.getData();
    } finally {
      setTimeout(() => {
        isBusy.endBusy();
      });
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s?.unsubscribe());
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
>>>>>>> oned/v92
  }

  public async onSearch(search: string): Promise<void> {
    return this.getData({ search });
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
      let filter = groupedData.navigationState?.filter;
<<<<<<< HEAD
      if(this.parameters?.filter){
        filter =[...(groupedData.navigationState?.filter ?? []),...(this.parameters?.filter ??[])].filter (elem=> elem != null);
      }
      const navigationState = {...groupedData.navigationState, filter}
      groupedData.data = await this.historyService.getAttestations(navigationState);
      groupedData.settings = {
        displayedColumns: this.dstSettings.displayedColumns,
        dataSource: groupedData.data,
        entitySchema: this.dstSettings.entitySchema,
        navigationState: groupedData.navigationState
      };
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      if (this.parameters?.filter) {
        filter = [...(groupedData.navigationState?.filter ?? []), ...(this.parameters?.filter ?? [])].filter((elem) => elem != null);
      }
      const navigationState = { ...groupedData.navigationState, filter };
      groupedData.data = await this.historyService.getAttestations(navigationState);
      groupedData.settings = {
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

  public async getData(newState?: AttestationCaseLoadParameters): Promise<void> {
<<<<<<< HEAD
    const navigationState = {
      ...(this.dstSettings?.navigationState ?? this.navigationState),
      ...newState
    };

    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));
    try {
      const data = await this.historyService.getAttestations(navigationState);
=======
    this.navigationState = {
      ...(this.dstSettings?.navigationState ?? this.navigationState),
      uid_persondecision: this.attestorFilter?.selectedUid,
      ...newState,
    };

    const isBusy = this.busyService.beginBusy();

    try {
      const data = await this.historyService.getAttestations(this.navigationState);
      const exportMethod = this.historyService.exportAttestation(this.navigationState);
      exportMethod.initialColumns = this.displayedColumns.map((col) => col.ColumnName);
>>>>>>> oned/v92
      if (data) {
        this.dstSettings = {
          dataSource: {
            totalCount: data.totalCount,
<<<<<<< HEAD
            Data: data.Data ? data.Data : undefined
=======
            Data: data.Data ? data.Data : undefined,
>>>>>>> oned/v92
          },
          filters: this.filterOptions,
          groupData: this.groupData,
          displayedColumns: this.displayedColumns,
          entitySchema: this.entitySchema,
<<<<<<< HEAD
          navigationState,
          dataModel: this.dataModel,
          identifierForSessionStore: 'attestation-history'
=======
          navigationState: this.navigationState,
          dataModel: this.dataModel,
          viewConfig: this.viewConfig,
          exportMethod,
>>>>>>> oned/v92
        };
      } else {
        this.dstSettings = undefined;
      }
    } finally {
<<<<<<< HEAD
      setTimeout(() => {
        this.busyService.hide(overlayRef);
      });
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  public async viewDetails(attestationCase: AttestationHistoryCase): Promise<void> {
    let attestationCaseWithPolicy: AttestationHistoryCase;
    let approvers: Approvers;

    let busyIndicator: OverlayRef;
<<<<<<< HEAD
    setTimeout(() => busyIndicator = this.busyService.show());

    try {
      attestationCaseWithPolicy = (await this.historyService.getAttestations({
        ...{ StartIndex: 0, PageSize: 1 },
        ...{
          objecttable: this.parameters?.objecttable,
          objectuid: this.parameters?.objectuid
        },
        uidpolicy: attestationCase.UID_AttestationPolicy.value,
        filter: [{
          ColumnName: 'UID_AttestationCase',
          Type: FilterType.Compare,
          CompareOp: CompareOperator.Equal,
          Value1: attestationCase.GetEntity().GetKeys()[0]
        }]
      })).Data[0];
=======
    setTimeout(() => (busyIndicator = this.busyServiceElemental.show()));

    try {
      attestationCaseWithPolicy = (
        await this.historyService.getAttestations({
          ...{ StartIndex: 0, PageSize: 1 },
          ...{
            objecttable: this.parameters?.objecttable,
            objectuid: this.parameters?.objectuid,
          },
          uidpolicy: attestationCase.UID_AttestationPolicy.value,
          filter: [
            {
              ColumnName: 'UID_AttestationCase',
              Type: FilterType.Compare,
              CompareOp: CompareOperator.Equal,
              Value1: attestationCase.GetEntity().GetKeys()[0],
            },
          ],
        })
      ).Data[0];
>>>>>>> oned/v92

      if (attestationCaseWithPolicy && !['approved', 'denied'].includes(attestationCaseWithPolicy.AttestationState.value)) {
        approvers = await this.attestationCaseService.getApprovers(attestationCaseWithPolicy);
      }
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(busyIndicator));
=======
      setTimeout(() => this.busyServiceElemental.hide(busyIndicator));
>>>>>>> oned/v92
    }

    if (attestationCaseWithPolicy) {
      this.sideSheet.open(AttestationHistoryDetailsComponent, {
        title: await this.translator.get('#LDS#Heading View Attestation Case Details').toPromise(),
<<<<<<< HEAD
        headerColour: 'iris-blue',
        panelClass: 'imx-sidesheet',
=======
        subTitle: attestationCaseWithPolicy.GetEntity().GetDisplay(),
>>>>>>> oned/v92
        padding: '0',
        width: '600px',
        testId: 'attestation-history-case-sidesheet',
        data: {
          case: attestationCaseWithPolicy,
          approvers,
<<<<<<< HEAD
          showApprovalActions: this.parameters != null
        }
      });
    } else {
      this.messageService.subject.next({
        text: '#LDS#You cannot edit the item because the item does not exist. Please reload the page.'
      });
    }
  }
=======
          showApprovalActions: this.parameters != null,
        },
      });
    } else {
      this.messageService.subject.next({
        text: '#LDS#You cannot edit the item because the item does not exist. Please reload the page.',
      });
    }
  }

  public async viewAssignmentAnalysis(event: Event, attestationCase: AttestationHistoryCase): Promise<void> {

    event.stopPropagation();
    const uidPerson = attestationCase.UID_Person.value;

    const objectKey = DbObjectKey.FromXml(attestationCase.ObjectKeyBase.value);

    const data: SourceDetectiveSidesheetData = {
      UID_Person: uidPerson,
      Type: SourceDetectiveType.MembershipOfSystemEntitlement,
      UID: objectKey.Keys.join(','),
      TableName: objectKey.TableName,
    };
    this.sideSheet.open(SourceDetectiveSidesheetComponent, {
      title: await this.translator.get('#LDS#Heading View Assignment Analysis').toPromise(),
      subTitle: attestationCase.GetEntity().GetDisplay(),
      padding: '0px',
      width: 'max(50%,500px)',
      disableClose: false,
      testId: 'attestation-history-details-assignment-analysis',
      data,
    });
  }
>>>>>>> oned/v92
}
