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

import { PortalJustifications } from 'imx-api-qer';
import {
  CollectionLoadParameters,
  CompareOperator,
  EntityCollectionData,
  FilterType,
  FkProviderItem,
  IClientProperty,
  MetaTableRelationData,
<<<<<<< HEAD
  ValType
=======
  ValType,
>>>>>>> oned/v92
} from 'imx-qbm-dbts';
import { ImxTranslationProviderService } from 'qbm';
import { BaseCdr, EntityService } from 'qbm';
import { QerApiService } from '../qer-api-client.service';
import { JustificationType } from './justification-type.enum';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
=======
  providedIn: 'root',
>>>>>>> oned/v92
})
export class JustificationService {
  private readonly parentColumnName = 'UID_QERJustification';

  constructor(
    private readonly apiService: QerApiService,
    private readonly entityService: EntityService,
    private readonly translate: ImxTranslationProviderService
<<<<<<< HEAD
  ) { }

  public async get(uid: string): Promise<PortalJustifications> {
    const collection = await this.apiService.typedClient.PortalJustifications.Get({
      filter: [{
        ColumnName: this.parentColumnName,
        Type: FilterType.Compare,
        CompareOp: CompareOperator.Like,
        Value1: uid
      }]
=======
  ) {}

  public async get(uid: string): Promise<PortalJustifications> {
    const collection = await this.apiService.typedClient.PortalJustifications.Get({
      filter: [
        {
          ColumnName: this.parentColumnName,
          Type: FilterType.Compare,
          CompareOp: CompareOperator.Like,
          Value1: uid,
        },
      ],
>>>>>>> oned/v92
    });
    return collection && collection.Data && collection.Data.length > 0 ? collection.Data[0] : undefined;
  }

<<<<<<< HEAD
  public async createCdr(justificationType: JustificationType, reasonType?: number): Promise<BaseCdr> {
=======
  public async createCdr(justificationType: JustificationType): Promise<BaseCdr> {
>>>>>>> oned/v92
    if ((await this.getByType(justificationType))?.TotalCount === 0) {
      return undefined;
    }

    const property = this.createProperty();
<<<<<<< HEAD
    property.MinLen = reasonType === 1 ? 1 : 0;

    const fkProviderItem = this.createFkProviderItem(property.FkRelation, justificationType);

    const column = this.entityService.createLocalEntityColumn(property, [fkProviderItem]);

    return new BaseCdr(column, '#LDS#Reason for your decision');
=======
    const fkProviderItem = this.createFkProviderItem(property.FkRelation, justificationType);
    const column = this.entityService.createLocalEntityColumn(property, [fkProviderItem]);
    const cdr = new BaseCdr(column, '#LDS#Reason for your decision');
    return cdr;
>>>>>>> oned/v92
  }

  private createProperty(): IClientProperty {
    const fkRelation = {
      ChildColumnName: 'Justification',
      ParentTableName: 'QERJustification',
      ParentColumnName: this.parentColumnName,
<<<<<<< HEAD
      IsMemberRelation: false
=======
      IsMemberRelation: false,
>>>>>>> oned/v92
    };
    return {
      ColumnName: fkRelation.ChildColumnName,
      Type: ValType.String,
      Display: this.translate.GetTranslation({
<<<<<<< HEAD
        Key: 'Standard reason', UidColumn: 'QBM-D666A28FA9F3402BB17F80C68530E4CB'
      }),
      FkRelation: fkRelation
=======
        Key: 'Standard reason',
        UidColumn: 'QBM-D666A28FA9F3402BB17F80C68530E4CB',
      }),
      FkRelation: fkRelation,
>>>>>>> oned/v92
    };
  }

  private createFkProviderItem(fkRelation: MetaTableRelationData, justificationType: JustificationType): FkProviderItem {
    return {
      columnName: fkRelation.ChildColumnName,
      fkTableName: fkRelation.ParentTableName,
<<<<<<< HEAD
      parameterNames: [
        'OrderBy',
        'StartIndex',
        'PageSize',
        'filter',
        'search'
      ],
      load: async (_, parameters = {}) => this.getByType(justificationType, parameters),
      getDataModel: async () => ({}),
      getFilterTree: async () => ({})
=======
      parameterNames: ['OrderBy', 'StartIndex', 'PageSize', 'filter', 'search'],
      load: async (_, parameters = {}) => this.getByType(justificationType, parameters),
      getDataModel: async () => ({}),
      getFilterTree: async () => ({}),
>>>>>>> oned/v92
    };
  }

  private async getByType(justificationType: JustificationType, parameters: CollectionLoadParameters = {}): Promise<EntityCollectionData> {
    const collection = await this.apiService.client.portal_justifications_get(parameters);

    // tslint:disable-next-line:no-bitwise
<<<<<<< HEAD
    const entities = collection.Entities.filter(entityData => (entityData.Columns.JustificationType.Value & justificationType) > 0);
=======
    const entities = collection.Entities.filter((entityData) => (entityData.Columns.JustificationType.Value & justificationType) > 0);
>>>>>>> oned/v92

    return {
      TotalCount: entities.length,
      IsLimitReached: collection.IsLimitReached,
      Entities: entities,
<<<<<<< HEAD
      TableName: collection.TableName
=======
      TableName: collection.TableName,
>>>>>>> oned/v92
    };
  }
}
