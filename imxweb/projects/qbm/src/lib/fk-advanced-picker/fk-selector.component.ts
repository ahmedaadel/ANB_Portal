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

import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { EuiLoadingService } from '@elemental-ui/core';
import { OverlayRef } from '@angular/cdk/overlay';
=======
>>>>>>> oned/v92

import {
  TypedEntityBuilder,
  CollectionLoadParameters,
<<<<<<< HEAD
  DisplayColumns, ValType,
=======
  DisplayColumns,
  ValType,
>>>>>>> oned/v92
  TypedEntity,
  IForeignKeyInfo,
  FilterType,
  CompareOperator,
  DbObjectKey,
  DataModelFilter,
  FilterData,
<<<<<<< HEAD
  DataModel
=======
  DataModel,
>>>>>>> oned/v92
} from 'imx-qbm-dbts';
import { ClassloggerService } from '../classlogger/classlogger.service';
import { MetadataService } from '../base/metadata.service';
import { DataSourceToolbarSettings } from '../data-source-toolbar/data-source-toolbar-settings';
import { CandidateEntity } from './candidate-entity';
import { DataTableComponent } from '../data-table/data-table.component';
import { ForeignKeyPickerData } from './foreign-key-picker-data.interface';
import { SettingsService } from '../settings/settings-service';
<<<<<<< HEAD
=======
import { ClientPropertyForTableColumns } from '../data-source-toolbar/client-property-for-table-columns';
import { BusyService } from '../base/busy.service';
>>>>>>> oned/v92

@Component({
  selector: 'imx-fk-selector',
  templateUrl: './fk-selector.component.html',
<<<<<<< HEAD
  styleUrls: ['./fk-selector.component.scss']
=======
  styleUrls: ['./fk-selector.component.scss'],
>>>>>>> oned/v92
})
export class FkSelectorComponent implements OnInit {
  public settings: DataSourceToolbarSettings;
  public selectedTable: IForeignKeyInfo;
  public selectedCandidates: TypedEntity[] = [];
  public preselectedEntities: TypedEntity[];

  public readonly DisplayColumns = DisplayColumns; // Enables use of this static class in Angular Templates.

  @ViewChild(DataTableComponent) public dataTable: DataTableComponent<TypedEntity>;
  @Input() public data: ForeignKeyPickerData;
  @Output() public elementSelected = new EventEmitter<TypedEntity>();
  @Output() public tableselected = new EventEmitter<IForeignKeyInfo>();
  @Output() public selectedCandidatesChanges = new EventEmitter();

<<<<<<< HEAD
=======
  public busyService = new BusyService();

>>>>>>> oned/v92
  private readonly builder = new TypedEntityBuilder(CandidateEntity);
  private readonly entitySchema = CandidateEntity.GetEntitySchema();
  private filters: DataModelFilter[];
  private dataModel: DataModel;

  constructor(
    public readonly metadataProvider: MetadataService,
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
    private readonly settingsService: SettingsService,
    private readonly logger: ClassloggerService) {
  }

  public async ngOnInit(): Promise<void> {
    let over: OverlayRef;

    setTimeout(() => over = this.busyService.show());
    if (this.data.fkRelations && this.data.fkRelations.length > 0) {
      this.logger.trace(this, 'Pre-select the first candidate table');
      this.selectedTable = this.data.fkRelations.find(fkr => fkr.TableName === this.data.selectedTableName) || this.data.fkRelations[0];
=======
    private readonly settingsService: SettingsService,
    private readonly logger: ClassloggerService,
  ) {}

  public async ngOnInit(): Promise<void> {
    const isBusy = this.busyService.beginBusy();

    if (this.data.fkRelations && this.data.fkRelations.length > 0) {
      this.logger.trace(this, 'Pre-select the first candidate table');
      this.selectedTable = this.data.fkRelations.find((fkr) => fkr.TableName === this.data.selectedTableName) || this.data.fkRelations[0];
>>>>>>> oned/v92
      this.dataModel = await this.selectedTable.GetDataModel();
      this.filters = this.dataModel.Filters;
    }

    if (this.data.fkRelations && this.data.fkRelations.length > 0) {
<<<<<<< HEAD
      await this.metadataProvider.update(this.data.fkRelations.map(fkr => fkr.TableName));
=======
      await this.metadataProvider.updateNonExisting(this.data.fkRelations.map((fkr) => fkr.TableName));
>>>>>>> oned/v92
    }
    await this.loadTableData();
    await this.getPreselectedEntities();
    if (this.preselectedEntities) {
      this.selectedCandidates = this.preselectedEntities;
    }
    this.logger.debug(this, 'Pre selected elements', this.selectedCandidates.length);
<<<<<<< HEAD
    setTimeout(() => this.busyService.hide(over));
=======

    isBusy.endBusy();
>>>>>>> oned/v92
  }

  public search(keywords: string): void {
    this.logger.debug(this, 'Search - keywords', keywords);
    this.loadTableData({ search: keywords });
  }

  public amIDisabled(item: TypedEntity): boolean {
<<<<<<< HEAD
    return this.data.disabledIds?.find( x => x === item.GetEntity().GetKeys()[0]) ? true : false;
=======
    return this.data.disabledIds?.find((x) => x === item.GetEntity().GetKeys()[0]) ? true : false;
  }

  /**
   * @ignore
   */
  public setSelectedClass(item: TypedEntity): any {
    if (this.data.isMultiValue || this.selectedCandidates.length === 0) {
      return;
    }

    return this.selectedCandidates[0] === item ? { 'imx-selected-row': true } : {};
>>>>>>> oned/v92
  }

  /**
   * @ignore
   */
  public selectionChanged(selection: TypedEntity[]): void {
    this.logger.debug(this, 'Selected elements', selection.length);
    // TODO (TFS 806235): save selected object to MRU list
    this.selectedCandidates = selection;
    this.selectedCandidatesChanges.emit();
  }

  /**
   * @ignore
   */
  public selectObject(typedEntity: TypedEntity): void {
    this.selectionChanged([typedEntity]);
    this.elementSelected.emit(typedEntity);
  }

  /**
   * @ignore
   */
  public clearSelection(): void {
    this.dataTable.clearSelection();
  }

  /**
   * @ignore
   */
  public async tableChanged(): Promise<void> {
    await this.loadTableData({ StartIndex: 0, filter: undefined });
    this.tableselected.emit(this.selectedTable);
  }

  public async filterByTree(filters: FilterData[]): Promise<void> {
    return this.loadTableData({ StartIndex: 0, filter: filters });
  }

  /**
   * @ignore
   * updates the data source
   * @param newState the state of the data source
   */
  public async loadTableData(newState?: CollectionLoadParameters): Promise<void> {
    if (this.selectedTable) {
<<<<<<< HEAD
      setTimeout(() => this.busyService.show());

      try {
        let navigationState = this.settings && this.settings.navigationState ?
          this.settings.navigationState :
          { PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 };
=======
      const isBusy = this.busyService.beginBusy();
      try {
        let navigationState =
          this.settings && this.settings.navigationState
            ? this.settings.navigationState
            : { PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 };
>>>>>>> oned/v92

        if (newState) {
          navigationState = { ...navigationState, ...newState };
        }

        this.logger.debug(this, 'LoadTableData - loading with navigationState', navigationState);
<<<<<<< HEAD
        const displayedColumns = [
          DisplayColumns.DISPLAY_PROPERTY
        ];
=======
        const displayedColumns: ClientPropertyForTableColumns[] = [];
>>>>>>> oned/v92

        if (!this.data.isMultiValue) {
          displayedColumns.push({
            Type: ValType.String,
<<<<<<< HEAD
            ColumnName: 'Actions'
          });
        }

        this.settings = {
          dataSource: this.builder.buildReadWriteEntities(
            await this.selectedTable.Get(navigationState),
            this.entitySchema
          ),
=======
            ColumnName: 'Select',
            untranslatedDisplay: '#LDS#Selection',
          });
        }

        displayedColumns.push(DisplayColumns.DISPLAY_PROPERTY);

        this.settings = {
          dataSource: this.builder.buildReadWriteEntities(await this.selectedTable.Get(navigationState), this.entitySchema),
>>>>>>> oned/v92
          displayedColumns,
          entitySchema: this.entitySchema,
          filters: this.filters,
          dataModel: this.dataModel,
          navigationState,
          filterTree: {
            multiSelect: true,
<<<<<<< HEAD
            filterMethode: async (parentKey) => this.selectedTable.GetFilterTree(parentKey)
          }
        };
      } finally {
        setTimeout(() => this.busyService.hide());
=======
            filterMethode: async (parentKey) => this.selectedTable.GetFilterTree(parentKey),
          },
        };
      } finally {
        isBusy.endBusy();
>>>>>>> oned/v92
      }
    }
  }

  /**
   * @ignore
   * Gets the list of preselected entities.
   */
  private async getPreselectedEntities(): Promise<void> {
    if (this.data.fkRelations && this.data.fkRelations.length > 0 && this.data.idList && this.data.idList.length > 0) {
<<<<<<< HEAD
      let over: OverlayRef;
      setTimeout(() => over = this.busyService.show());

=======
      const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92
      try {
        const preselectedTemp: TypedEntity[] = [];
        this.preselectedEntities = null;

        this.logger.debug(this, 'Getting preselected entities');

        for (const key of this.data.idList) {
          let table: IForeignKeyInfo;
          if (this.data.fkRelations.length > 1) {
            const tableName = DbObjectKey.FromXml(key).TableName;
<<<<<<< HEAD
            table = this.data.fkRelations.find(fkr => fkr.TableName === tableName);
=======
            table = this.data.fkRelations.find((fkr) => fkr.TableName === tableName);
>>>>>>> oned/v92
          }

          table = table || this.data.fkRelations[0];

          const navigationState: CollectionLoadParameters = {
            filter: [
              {
                ColumnName: table.ColumnName,
                Type: FilterType.Compare,
                CompareOp: CompareOperator.Equal,
<<<<<<< HEAD
                Value1: key
              }
            ]
          };
          this.logger.debug(this, 'Getting preselected entity with navigation state', navigationState);

          const result = this.builder.buildReadWriteEntities(
            await table.Get(navigationState),
            this.entitySchema
          );
=======
                Value1: key,
              },
            ],
          };
          this.logger.debug(this, 'Getting preselected entity with navigation state', navigationState);

          const result = this.builder.buildReadWriteEntities(await table.Get(navigationState), this.entitySchema);
>>>>>>> oned/v92

          if (result.Data.length) {
            preselectedTemp.push(result.Data[0]);
          }
        }

        this.preselectedEntities = preselectedTemp;
        this.logger.debug(this, `Retrieved ${this.preselectedEntities.length} preselected entities`);
      } finally {
<<<<<<< HEAD
        setTimeout(() => this.busyService.hide(over));
=======
        isBusy.endBusy();
>>>>>>> oned/v92
      }
    }
  }
}
<<<<<<< HEAD

=======
>>>>>>> oned/v92
