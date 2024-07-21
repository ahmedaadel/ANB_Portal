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

import {
<<<<<<< HEAD
=======
  ApiRequestOptions,
>>>>>>> oned/v92
  CollectionLoadParameters, DataModel, DisplayColumns, EntitySchema, ExtendedTypedEntityCollection, IClientProperty, TypedEntity
} from 'imx-qbm-dbts';
import { DataModelWrapper } from './data-model/data-model-wrapper.interface';
import { createGroupData } from './data-model/data-model-helper';
import { DataSourceToolbarFilter } from './data-source-toolbar-filters.interface';
import { DataSourceToolbarGroupData } from './data-source-toolbar-groups.interface';
import { DataSourceToolbarSettings } from './data-source-toolbar-settings';
import { ClientPropertyForTableColumns } from './client-property-for-table-columns';

export class DataSourceWrapper<TEntity extends TypedEntity = TypedEntity, TExtendedData = any> {
  public readonly propertyDisplay: IClientProperty;

  public extendedData: TExtendedData;

  private parameters: CollectionLoadParameters;
  private readonly filterOptions: DataSourceToolbarFilter[];
  private dataModel: DataModel;
  private readonly groupData: DataSourceToolbarGroupData;

  constructor(
<<<<<<< HEAD
    private readonly getData: (parameters: CollectionLoadParameters) => Promise<ExtendedTypedEntityCollection<TEntity, TExtendedData>>,
=======
    private readonly getData: (parameters: CollectionLoadParameters, requestOpts?: ApiRequestOptions) => Promise<ExtendedTypedEntityCollection<TEntity, TExtendedData>>,
>>>>>>> oned/v92
    private readonly displayedColumns: ClientPropertyForTableColumns[],
    private readonly entitySchema: EntitySchema,
    dataModelWrapper?: DataModelWrapper,
    private readonly identifier?: string
  ) {
    this.propertyDisplay = this.entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME];

    if (dataModelWrapper) {
      this.dataModel = dataModelWrapper.dataModel;
      this.filterOptions = dataModelWrapper.dataModel.Filters;
      this.groupData = this.createGroupData(dataModelWrapper);
    }
  }

<<<<<<< HEAD
  public async getDstSettings(parameters?: CollectionLoadParameters): Promise<DataSourceToolbarSettings> {
=======
  public async getDstSettings(parameters?: CollectionLoadParameters, requestOpts?: ApiRequestOptions ): Promise<DataSourceToolbarSettings> {
>>>>>>> oned/v92
    this.parameters = {
      ...this.parameters,
      ...parameters
    };

<<<<<<< HEAD
    const dataSource = await this.getData(this.parameters);
=======
    const dataSource = await this.getData(this.parameters, requestOpts);
>>>>>>> oned/v92

    this.extendedData = dataSource?.extendedData;

    if (dataSource) {
      return {
        dataSource,
        displayedColumns: this.displayedColumns,
        entitySchema: this.entitySchema,
        navigationState: this.parameters,
        filters: this.filterOptions,
        groupData: this.groupData,
<<<<<<< HEAD
        dataModel: this.dataModel,
        identifierForSessionStore: this.identifier
=======
        dataModel: this.dataModel
>>>>>>> oned/v92
      };
    }

    return undefined;
  }

<<<<<<< HEAD
  public async getGroupDstSettings(parameters: CollectionLoadParameters): Promise<DataSourceToolbarSettings> {
    return {
      displayedColumns: this.displayedColumns,
      dataSource: await this.getData(parameters),
=======
  public async getGroupDstSettings(parameters: CollectionLoadParameters, requestOpts?: ApiRequestOptions): Promise<DataSourceToolbarSettings> {
    return {
      displayedColumns: this.displayedColumns,
      dataModel: this.dataModel,
      dataSource: await this.getData(parameters, requestOpts),
>>>>>>> oned/v92
      entitySchema: this.entitySchema,
      navigationState: parameters
    };
  }

  private createGroupData(dataModelWrapper: DataModelWrapper): DataSourceToolbarGroupData {
    return createGroupData(
      dataModelWrapper.dataModel,
      parameters => dataModelWrapper.getGroupInfo({
        ...parameters,
        ...this.getGroupingFilterOptionParameters(dataModelWrapper.groupingFilterOptions),
<<<<<<< HEAD
        ...{
          StartIndex: 0,
          PageSize: this.parameters?.PageSize
        },
=======
>>>>>>> oned/v92
      }),
      dataModelWrapper.groupingExcludedColumns
    );
  }

  private getGroupingFilterOptionParameters(groupingFilterOptions: string[]): { [parameterName: string]: string } {
    const parameters = {};

    groupingFilterOptions?.forEach(filterOptionName =>
      parameters[filterOptionName] = this.filterOptions.find(item => item.Name === filterOptionName)?.CurrentValue
    );

    return parameters;
  }
}
