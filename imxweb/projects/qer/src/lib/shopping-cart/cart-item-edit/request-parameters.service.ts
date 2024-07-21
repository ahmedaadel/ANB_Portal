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

import { Injectable } from '@angular/core';

import { EntityWriteDataColumn, ParameterData } from 'imx-qbm-dbts';
<<<<<<< HEAD
import { FkProviderItem, WriteExtTypedEntity } from 'imx-qbm-dbts';
=======
import { IFkCandidateProvider, ReadWriteExtTypedEntity } from 'imx-qbm-dbts';
>>>>>>> oned/v92
import { ParameterDataWrapper } from '../../parameter-data/parameter-data-wrapper.interface';
import { ParameterCategoryColumn } from '../../parameter-data/parameter-category-column.interface';
import { ParameterDataService } from '../../parameter-data/parameter-data.service';

type CategoryParameterWrite = { [id: string]: EntityWriteDataColumn[][] };

@Injectable({
  providedIn: 'root'
})
export class RequestParametersService {
  constructor(private readonly parameterDataService: ParameterDataService) { }

  public createInteractiveParameterCategoryColumns(
    parameterDataWrapper: ParameterDataWrapper,
<<<<<<< HEAD
    getFkProviderItems: (parameter: ParameterData) => FkProviderItem[],
    typedEntity: WriteExtTypedEntity<CategoryParameterWrite>
=======
    getFkProvider: (parameter: ParameterData) => IFkCandidateProvider,
    typedEntity: ReadWriteExtTypedEntity<{ Parameters?: { [key: string]: ParameterData[][]; } }, CategoryParameterWrite>,
    callbackOnChange?: () => void
>>>>>>> oned/v92
  ): ParameterCategoryColumn[] {
    if (parameterDataWrapper?.Parameters == null) {
      return undefined;
    }

    const parameterCategories = this.parameterDataService.createParameterCategories(parameterDataWrapper)
      .sort(category => this.showStructureParameterFirst(category.name));

    return this.parameterDataService.createInteractiveParameterCategoryColumns(
      parameterCategories,
<<<<<<< HEAD
      getFkProviderItems,
      typedEntity
=======
      getFkProvider,
      typedEntity,
      callbackOnChange
>>>>>>> oned/v92
    );
  }

  /**
   * @ignore Makes sure that the StructureParameter is shown first
   * @param value sort value
   */
  private showStructureParameterFirst(value: string): number {
    return value === 'StructureParameter' ? -1 : 1;
  }
}
