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
import { CollectionLoadParameters, DataModel, DataModelFilterOption, DataModelGroupInfo, DataModelProperty, GroupInfo } from 'imx-qbm-dbts';
=======
import {
  CollectionLoadParameters,
  DataModel,
  DataModelFilterOption,
  DataModelGroupInfo,
  DataModelProperty,
  GroupInfoData,
} from 'imx-qbm-dbts';
>>>>>>> oned/v92
import { DataSourceToolbarGroupData } from 'qbm';

export function createGroupData(
  dataModel: DataModel,
<<<<<<< HEAD
  getGroupInfo: (parameters: { by?: string, def?: string } & CollectionLoadParameters) => Promise<GroupInfo[]>,
  disableGroupingFor: string[]

=======
  getGroupInfo: (parameters: { by?: string; def?: string } & CollectionLoadParameters) => Promise<GroupInfoData>,
  disableGroupingFor: string[]
>>>>>>> oned/v92
): DataSourceToolbarGroupData {
  const groups = [];
  const groupingCategories = [];

  if (dataModel.Properties) {
<<<<<<< HEAD
    for (const property of dataModel.Properties.filter
      (p => p.IsGroupable && disableGroupingFor.every(elem => elem !== p.Property?.ColumnName))) {
      groups.push({
        property,
        getData: async parameters => (await getGroupInfo({ ...{ by: property.Property.ColumnName }, ...parameters }))
          .filter(item => item.Count > 0)
=======
    for (const property of dataModel.Properties.filter(
      (p) => p.IsGroupable && disableGroupingFor.every((elem) => elem !== p.Property?.ColumnName)
    )) {
      groups.push({
        property,
        getData: async (parameters) => await getGroupInfo({ ...{ by: property.Property.ColumnName }, ...parameters }),
>>>>>>> oned/v92
      });
    }
  }

<<<<<<< HEAD
  const getGroupInfoGroups = (options: DataModelFilterOption[]) => options.map(property => ({
    property: property as (DataModelProperty & DataModelGroupInfo),
    getData: async parameters => (await getGroupInfo({ ...{ def: property.Value }, ...parameters }))
      .filter(item => item.Count > 0)
      .map(item => {
        item.Display.forEach(display =>
          item.Filters.forEach(filter => {
            if (filter.Value1 != null) {
              display.Display = display.Display.replace(`%${filter.ColumnName}%`, filter.Value1);
            }
          })
        );
        return item;
      })
  }));

  if (dataModel.GroupInfo?.length === 1) {
    getGroupInfoGroups(dataModel.GroupInfo[0].Options).forEach(
      group => groups.push(group)
    );
  } else {
    dataModel.GroupInfo?.forEach(dataModelGroupInfo =>
      groupingCategories.push({
        property: dataModelGroupInfo,
        groups: getGroupInfoGroups(dataModelGroupInfo.Options)
=======
  const getGroupInfoGroups = (options: DataModelFilterOption[]) =>
    options.map((property) => ({
      property: property as DataModelProperty & DataModelGroupInfo,
      getData: async (parameters) => {
        const original = await getGroupInfo({ ...{ def: property.Value }, ...parameters });
        const groupDisplay = original.Groups.map((item) => {
          item.Display.forEach((display) =>
            item.Filters.forEach((filter) => {
              if (filter.Value1 != null) {
                display.Display = display.Display.replace(`%${filter.ColumnName}%`, filter.Value1);
              }
            })
          );
          return item;
        });
        return { Groups: groupDisplay, TotalCount: original.TotalCount };
      },
    }));

  if (dataModel.GroupInfo?.length === 1) {
    getGroupInfoGroups(dataModel.GroupInfo[0].Options).forEach((group) => groups.push(group));
  } else {
    dataModel.GroupInfo?.forEach((dataModelGroupInfo) =>
      groupingCategories.push({
        property: dataModelGroupInfo,
        groups: getGroupInfoGroups(dataModelGroupInfo.Options),
>>>>>>> oned/v92
      })
    );
  }

  if (groups.length > 0 || groupingCategories.length > 0) {
    return { groups, groupingCategories };
  }

  return undefined;
}
