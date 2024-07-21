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
import { DataModel, DataModelFilterOption, GroupInfo } from 'imx-qbm-dbts';
=======
import { CollectionLoadParameters, DataModel, DataModelFilterOption, GroupInfo, GroupInfoData } from 'imx-qbm-dbts';
>>>>>>> oned/v92
import { DataSourceToolBarGroup, DataSourceToolbarGroupData } from '../data-source-toolbar-groups.interface';
import { GroupInfoLoadParameters } from './group-info-load-parameters.interface';

export function createGroupData(
  dataModel: DataModel,
<<<<<<< HEAD
  getGroupInfo: (parameters: GroupInfoLoadParameters) => Promise<GroupInfo[]>,
=======
  getGroupInfo: (parameters: GroupInfoLoadParameters) => Promise<GroupInfoData>,
>>>>>>> oned/v92
  excludedColumns?: string[]
): DataSourceToolbarGroupData {
  const groups = [];
  const groupingCategories = [];

  if (dataModel.Properties) {
<<<<<<< HEAD
    dataModel.Properties
      .filter(p => p.IsGroupable && p.Property && !excludedColumns?.includes(p.Property.ColumnName))
      .forEach(property =>
        groups.push({
          property,
          getData: async () => (await getGroupInfo({ by: property.Property.ColumnName }))
            .filter(item => item.Count > 0)
        })
      );
  }

  if (dataModel.GroupInfo?.length === 1) {
    dataModel.GroupInfo[0].Options.forEach(option =>
      groups.push(getDataSourceToolBarGroup(option, getGroupInfo))
    );
  } else {
    dataModel.GroupInfo?.forEach(property =>
      groupingCategories.push({
        property,
        groups: property.Options.map(option => getDataSourceToolBarGroup(option, getGroupInfo))
=======
    dataModel.Properties.filter((p) => p.IsGroupable && p.Property && !excludedColumns?.includes(p.Property.ColumnName)).forEach(
      (property) =>
        groups.push({
          property,
          getData: async (parameter: CollectionLoadParameters) => {
            return getGroupInfo({ ...parameter, by: property.Property.ColumnName });
          },
        })
    );
  }

  if (dataModel.GroupInfo?.length === 1) {
    dataModel.GroupInfo[0].Options.forEach((option) => groups.push(getDataSourceToolBarGroup(option, getGroupInfo)));
  } else {
    dataModel.GroupInfo?.forEach((property) =>
      groupingCategories.push({
        property,
        groups: property.Options.map((option) => getDataSourceToolBarGroup(option, getGroupInfo)),
>>>>>>> oned/v92
      })
    );
  }

  if (groups.length > 0 || groupingCategories.length > 0) {
    return { groups, groupingCategories };
  }

  return undefined;
}

function getDataSourceToolBarGroup(
  option: DataModelFilterOption,
<<<<<<< HEAD
  getGroupInfo: (parameters: GroupInfoLoadParameters) => Promise<GroupInfo[]>
): DataSourceToolBarGroup {
  return {
    property: option,
    getData: async () => (await getGroupInfo({ def: option.Value }))
      .filter(item => item.Count > 0)
      .map(item => {
        setFilterDisplay(item);
        return item;
      })
=======
  getGroupInfo: (parameters: GroupInfoLoadParameters) => Promise<GroupInfoData>
): DataSourceToolBarGroup {
  return {
    property: option,
    getData: async (param: CollectionLoadParameters) => {
      const data = await getGroupInfo({ ...param, ...{ def: option.Value } });
      data.Groups = data.Groups?.map((item) => {
        setFilterDisplay(item);
        return item;
      });
      return data;
    },
>>>>>>> oned/v92
  };
}

function setFilterDisplay(item: GroupInfo): void {
<<<<<<< HEAD
  item.Display.forEach(display =>
    item.Filters.forEach(filter => {
=======
  item.Display.forEach((display) =>
    item.Filters.forEach((filter) => {
>>>>>>> oned/v92
      if (filter.Value1 != null) {
        display.Display = display.Display.replace(`%${filter.ColumnName}%`, filter.Value1);
      }
    })
  );
}
