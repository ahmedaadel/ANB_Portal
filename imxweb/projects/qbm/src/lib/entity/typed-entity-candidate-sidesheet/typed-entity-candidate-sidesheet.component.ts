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

import { Component, Inject, OnInit } from '@angular/core';
import { EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
<<<<<<< HEAD
import {
  DataModelFilterOption,
  DbObjectKey,
  DisplayColumns,
  EntitySchema,
  IClientProperty,
  IEntityColumn,
  TypedEntity
} from 'imx-qbm-dbts';
import { MetadataService } from '../../base/metadata.service';
=======
import { DataModelFilterOption, DbObjectKey, DisplayColumns, EntitySchema, IClientProperty, TypedEntity } from 'imx-qbm-dbts';
import { MetadataService } from '../../base/metadata.service';
import { CdrFactoryService } from '../../cdr/cdr-factory.service';
>>>>>>> oned/v92
import { DataSourceToolbarFilter } from '../../data-source-toolbar/data-source-toolbar-filters.interface';
import { DataSourceToolbarSettings } from '../../data-source-toolbar/data-source-toolbar-settings';
import { CandidateEntity } from '../../fk-advanced-picker/candidate-entity';
import { TypedEntityCandidateSidesheetParameter } from './typed-entity-candidate-sidesheet-parameter.interface';
import { TypedEntityTableFilter } from './typed-entity-table-filter.interface';

@Component({
  templateUrl: './typed-entity-candidate-sidesheet.component.html',
<<<<<<< HEAD
  styleUrls: ['./typed-entity-candidate-sidesheet.component.scss']
})
export class TypedEntityCandidateSidesheetComponent implements OnInit {

=======
  styleUrls: ['./typed-entity-candidate-sidesheet.component.scss'],
})
export class TypedEntityCandidateSidesheetComponent implements OnInit {
>>>>>>> oned/v92
  public readonly DisplayColumns = DisplayColumns; // Enables use of this static class in Angular Templates.
  public dstSettings: DataSourceToolbarSettings;
  public readonly entitySchemaCandidates: EntitySchema;
  private navigationState: TypedEntityTableFilter = { StartIndex: 0, PageSize: 20 };

  private readonly displayedColumns: IClientProperty[];

  private readonly sortedEntities: TypedEntity[];
  private searchedEntities: TypedEntity[];

<<<<<<< HEAD
  private filters: DataSourceToolbarFilter[]
=======
  private filters: DataSourceToolbarFilter[];
>>>>>>> oned/v92

  constructor(
    @Inject(EUI_SIDESHEET_DATA) public readonly data: TypedEntityCandidateSidesheetParameter,
    private translate: TranslateService,
<<<<<<< HEAD
    private metaData: MetadataService
  ) {

    this.entitySchemaCandidates = CandidateEntity.GetEntitySchema();
    this.displayedColumns = [
      this.entitySchemaCandidates.Columns[DisplayColumns.DISPLAY_PROPERTYNAME]
    ];
    this.sortedEntities = data.entities?.sort(
      (a, b) => a.GetEntity().GetDisplay().localeCompare(b.GetEntity().GetDisplay()));

=======
    private metaData: MetadataService,
  ) {
    this.entitySchemaCandidates = CandidateEntity.GetEntitySchema();
    this.displayedColumns = [this.entitySchemaCandidates.Columns[DisplayColumns.DISPLAY_PROPERTYNAME]];
    this.sortedEntities = data.entities?.sort((a, b) => a.GetEntity().GetDisplay().localeCompare(b.GetEntity().GetDisplay()));
>>>>>>> oned/v92
  }

  public async ngOnInit(): Promise<void> {
    this.searchedEntities = [...this.sortedEntities];
    if (this.data.tables && this.data.tables.length > 1) {
<<<<<<< HEAD
      this.metaData.update(this.data.tables);
    }
    this.filters = this.data.tables && this.data.tables.length > 1 ? [{
      Name: 'table',
      Description: await this.translate.get('#LDS#Type').toPromise(),
      Options: this.getOptionsForFilter()
    }] : [];
    this.navigate(this.navigationState);

=======
      this.metaData.updateNonExisting(this.data.tables);
    }
    this.filters =
      this.data.tables && this.data.tables.length > 1
        ? [
            {
              Name: 'table',
              Description: await this.translate.get('#LDS#Type').toPromise(),
              Options: this.getOptionsForFilter(),
            },
          ]
        : [];
    this.navigate(this.navigationState);
>>>>>>> oned/v92
  }

  public search(key: string): void {
    if (key === '') {
      this.searchedEntities = [...this.sortedEntities];
    } else {
<<<<<<< HEAD
      this.searchedEntities = this.sortedEntities.filter(elem =>
        elem.GetEntity().GetDisplay().toLocaleLowerCase().includes(key.toLocaleLowerCase()));
=======
      this.searchedEntities = this.sortedEntities.filter((elem) =>
        elem.GetEntity().GetDisplay().toLocaleLowerCase().includes(key.toLocaleLowerCase()),
      );
>>>>>>> oned/v92
    }
    this.navigate({ StartIndex: 0, search: key });
  }

  public navigate(source: TypedEntityTableFilter): void {
    this.navigationState = { ...this.navigationState, ...source };
    const possible = source.table
<<<<<<< HEAD
      ? this.searchedEntities.filter(elem => this.tryGetColumn(elem, 'XObjectKey')?.GetValue()?.includes(source.table))
=======
      ? this.searchedEntities.filter(
          (elem) => CdrFactoryService.tryGetColumn(elem.GetEntity(), 'XObjectKey')?.GetValue()?.includes(source.table),
        )
>>>>>>> oned/v92
      : this.searchedEntities;

    const data = possible.slice(this.navigationState.StartIndex, this.navigationState.StartIndex + this.navigationState.PageSize);
    this.dstSettings = {
      displayedColumns: this.displayedColumns,
      dataSource: {
        Data: data,
<<<<<<< HEAD
        totalCount: possible.length
      },
      filters: this.filters,
      entitySchema: this.entitySchemaCandidates,
      navigationState: this.navigationState
=======
        totalCount: possible.length,
      },
      filters: this.filters,
      entitySchema: this.entitySchemaCandidates,
      navigationState: this.navigationState,
>>>>>>> oned/v92
    };
  }

  public getTable(entity: TypedEntity): string {
<<<<<<< HEAD
    if (!this.data.tables || this.data.tables.length <= 1) { return ''; }
    const column = this.tryGetColumn(entity, 'XObjectKey');
=======
    if (!this.data.tables || this.data.tables.length <= 1) {
      return '';
    }
    const column = CdrFactoryService.tryGetColumn(entity.GetEntity(), 'XObjectKey');
>>>>>>> oned/v92
    if (!column) {
      return '';
    }
    const tableName = DbObjectKey.FromXml(column.GetValue()).TableName;
    return this.metaData.tables[tableName]?.DisplaySingular;
  }

<<<<<<< HEAD

  private tryGetColumn(entity: TypedEntity, name: string): IEntityColumn {
    try {
      return entity.GetEntity().GetColumn(name);
    } catch {
      return undefined;
    }
  }

  private getOptionsForFilter(): DataModelFilterOption[] {
    return this.data.tables
      .map(elem => ({ Value: elem, Display: this.metaData.tables[elem]?.DisplaySingular }))
      .filter(elem =>
        this.data.entities.some(entity => this.tryGetColumn(entity, 'XObjectKey')?.GetValue().includes(elem.Value)
        ));
=======
  private getOptionsForFilter(): DataModelFilterOption[] {
    return this.data.tables
      .map((elem) => ({ Value: elem, Display: this.metaData.tables[elem]?.DisplaySingular }))
      .filter((elem) =>
        this.data.entities.some(
          (entity) => CdrFactoryService.tryGetColumn(entity.GetEntity(), 'XObjectKey')?.GetValue().includes(elem.Value),
        ),
      );
>>>>>>> oned/v92
  }
}
