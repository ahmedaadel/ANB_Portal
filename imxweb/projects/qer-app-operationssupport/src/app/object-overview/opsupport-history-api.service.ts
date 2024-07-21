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
import { HistoryData } from 'imx-qbm-dbts';
<<<<<<< HEAD
=======
import { HistoryComparisonData } from 'imx-api-qbm';
>>>>>>> oned/v92
import { ObjectHistoryApiService, imx_SessionService } from 'qbm';

@Injectable()
export class OpSupportHistoryApiService implements ObjectHistoryApiService {

  constructor(private readonly session: imx_SessionService) { }

  getHistoryData(table: string, uid: string): Promise<HistoryData[]> {
    return this.session.Client.opsupport_history_get(table, uid);
  }
<<<<<<< HEAD
=======

  getHistoryComparisonData(table: string, uid: string,options?: {CompareDate?: Date;}): Promise<HistoryComparisonData[]> {
    return this.session.Client.opsupport_history_comparison_get(table, uid, options);
  }
>>>>>>> oned/v92
}