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
import { ObjectHistoryEvent } from 'imx-qbm-dbts';
import { ObjectHistoryApiService } from './object-history-api.service';
=======
import { HistoryComparisonData } from 'imx-api-qbm';
import { IStateOverviewItem, ObjectHistoryEvent } from 'imx-qbm-dbts';
import { ObjectHistoryApiService } from './object-history-api.service';
import { MetadataService } from '../base/metadata.service';
>>>>>>> oned/v92

export interface ObjectHistoryParameters {
  table: string;
  uid: string;
}

@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
=======
  providedIn: 'root',
>>>>>>> oned/v92
})
export class ObjectHistoryService {
  private dataCached: ObjectHistoryEvent[];

<<<<<<< HEAD
  constructor(private readonly apiService: ObjectHistoryApiService) {
  }

  public async get(parameters: ObjectHistoryParameters, fetchRemote: boolean = true): Promise<ObjectHistoryEvent[]> {
    if (fetchRemote || this.dataCached == null) {
      this.dataCached = (await this.apiService.getHistoryData(
        parameters.table,
        parameters.uid
      ))
        .map(x => x.Events)
=======
  constructor(
    private readonly apiService: ObjectHistoryApiService,
    private metadataService: MetadataService,
  ) {}

  public async get(parameters: ObjectHistoryParameters, fetchRemote: boolean = true): Promise<ObjectHistoryEvent[]> {
    if (fetchRemote || this.dataCached == null) {
      this.dataCached = (await this.apiService.getHistoryData(parameters.table, parameters.uid))
        .map((x) => x.Events)
>>>>>>> oned/v92
        .reduce((a, b) => a.concat(b));
    }

    return this.dataCached;
  }
<<<<<<< HEAD
=======

  public async getStateOverviewItems(table: string, uid: string): Promise<IStateOverviewItem[] | undefined> {
    let stateOverviewItems = (await this.apiService.getHistoryData(table, uid))
      .map((x) => x.StateOverviewItems)
      .reduce((a, b) => a.concat(b));
    return stateOverviewItems;
  }

  public async getHistoryComparisonData(table: string, uid: string, options?: { CompareDate?: Date }): Promise<HistoryComparisonData[]> {
    let historyComparisonData = await this.apiService.getHistoryComparisonData(table, uid, options);
    // Update tableName with translated display name
    for await (const item of historyComparisonData) {
      await this.metadataService.updateNonExisting([item.TableName]);
      item.TableName = this.metadataService.tables[item.TableName].Display;
    }
    return historyComparisonData;
  }
>>>>>>> oned/v92
}
