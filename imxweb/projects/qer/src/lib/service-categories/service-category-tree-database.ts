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
import { EuiLoadingService } from '@elemental-ui/core';

import { CollectionLoadParameters, TypedEntityCollectionData } from 'imx-qbm-dbts';
import { PortalServicecategories } from 'imx-api-qer';

import { TreeDatabase, TreeNodeResultParameter, SettingsService } from 'qbm';
import { ServiceCategoriesService } from './service-categories.service';

/** Provider of servicecategory-data for the imx-data-tree */
export class ServiceCategoryTreeDatabase extends TreeDatabase {

  constructor(
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
=======
    private readonly loadingServiceElemental: EuiLoadingService,
>>>>>>> oned/v92
    private readonly settings: SettingsService,
    private readonly serviceCategoriesProvider: ServiceCategoriesService
  ) {
    super();
    this.identifierColumnName = 'FullPath';
    this.canSearch = true;
  }

  public async getData(showLoading: boolean, parameters: CollectionLoadParameters = { ParentKey: '' })
    : Promise<TreeNodeResultParameter> {
    let entities: TreeNodeResultParameter;
    let overlayRef: OverlayRef;
    if (showLoading) {
<<<<<<< HEAD
      setTimeout(() => overlayRef = this.busyService.show());
=======
      setTimeout(() => overlayRef = this.loadingServiceElemental.show());
>>>>>>> oned/v92
    }
    try {
      const opts = {
        PageSize: this.settings.DefaultPageSize,
        StartIndex: 0,
        ...parameters,
      };

      const serviceCategories: TypedEntityCollectionData<PortalServicecategories>
        = await this.serviceCategoriesProvider.get(opts);
      entities = {
        entities: serviceCategories?.Data?.map(element => element.GetEntity()),
        canLoadMore: opts.StartIndex + opts.PageSize < serviceCategories.totalCount,
        totalCount: serviceCategories.totalCount
      };
    } finally {
      if (showLoading) {
<<<<<<< HEAD
        setTimeout(() => this.busyService.hide(overlayRef));
=======
        setTimeout(() => this.loadingServiceElemental.hide(overlayRef));
>>>>>>> oned/v92
      }
    }
    return entities;
  }
}
