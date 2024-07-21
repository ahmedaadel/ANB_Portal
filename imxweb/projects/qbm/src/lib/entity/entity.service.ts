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

<<<<<<< HEAD
import { EntityColumnData, FkProviderItem, IClientProperty, IEntityColumn, LocalEntityColumn } from 'imx-qbm-dbts';
=======
import { EntityColumnData, IClientProperty, FkCandidateProvider, FkProviderItem, IEntityColumn, LocalEntityColumn } from 'imx-qbm-dbts';
>>>>>>> oned/v92
import { ImxTranslationProviderService } from '../translation/imx-translation-provider.service';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  constructor(private readonly translator: ImxTranslationProviderService) { }

  public createLocalEntityColumn(
    property: IClientProperty,
    fkProviderItems?: FkProviderItem[],
    data: EntityColumnData = {},
    putValueDelegate: (oldValue: any, newValue: any) => Promise<void> = () => Promise.resolve()
  ): IEntityColumn {
<<<<<<< HEAD
    return new LocalEntityColumn(property, this.translator, fkProviderItems, data, ((z, x, y) => putValueDelegate(x, y)));
=======

    var fkProvider = fkProviderItems ? new FkCandidateProvider(fkProviderItems) : undefined;
    return new LocalEntityColumn(property, this.translator, fkProvider, data, ((z, x, y) => putValueDelegate(x, y)));
>>>>>>> oned/v92
  }
}
