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
import { DataModelFilterOption, DataModelGroupInfo, GroupInfo, IClientProperty } from 'imx-qbm-dbts';
=======
import { CollectionLoadParameters, DataModelFilterOption, DataModelGroupInfo, GroupInfoData, IClientProperty } from 'imx-qbm-dbts';
>>>>>>> oned/v92

export interface DataSourceToolbarGroupData {
  /**
   * The list of available grouping categories
   */
  groupingCategories?: DataSourceToolBarGroupingCategory[];

  /**
   * The list of available grouping data
   */
  groups?: DataSourceToolBarGroup[];

  /**
   * The currently selected group
   */
  currentGrouping?: {
    display: string;
<<<<<<< HEAD
    getData: () => Promise<GroupInfo[]>;
=======
    getData: (parameter?: CollectionLoadParameters) => Promise<GroupInfoData>;
    navigationState?: CollectionLoadParameters;
>>>>>>> oned/v92
  };
}

export interface DataSourceToolBarGroup {
<<<<<<< HEAD

=======
>>>>>>> oned/v92
  /**
   * A groupable property
   */
  property: { Property?: IClientProperty } & DataModelGroupInfo & DataModelFilterOption;

  /**
   * Callback for getting the corresponding GroupInfo data for the property
   */
<<<<<<< HEAD
  getData: () => Promise<GroupInfo[]>;
=======
  getData: (parameter?: CollectionLoadParameters) => Promise<GroupInfoData>;

  /**
   * The navigation state used, when loading the group elements for a grouping type
   */
  navigationState?: CollectionLoadParameters;
>>>>>>> oned/v92
}

/**
 * Grouping category with nested groupings
 */
export interface DataSourceToolBarGroupingCategory {
  /**
   * Category info
   */
  property: DataModelGroupInfo;

  /**
   * The list of available grouping data
   */
  groups: DataSourceToolBarGroup[];
}
