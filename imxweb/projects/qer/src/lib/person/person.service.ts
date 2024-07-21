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

import { EntityService } from 'qbm';
import {
  TypedEntityCollectionData,
  CollectionLoadParameters,
  MetaTableRelationData,
  FkProviderItem,
  IEntityColumn,
  ValType,
  FilterData,
  DataModel,
<<<<<<< HEAD
  GroupInfo,
  EntitySchema
=======
  GroupInfoData,
  EntitySchema,
>>>>>>> oned/v92
} from 'imx-qbm-dbts';
import { PortalPersonAll, PortalPersonMasterdata, PortalPersonUid } from 'imx-api-qer';
import { QerApiService } from '../qer-api-client.service';
import { PersonAllLoadParameters } from './person-all-load-parameters.interface';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
=======
  providedIn: 'root',
>>>>>>> oned/v92
})
export class PersonService {
  public get schemaPersonUid(): EntitySchema {
    return this.qerClient.typedClient.PortalPersonUid.GetSchema();
  }

  public get schemaPersonAll(): EntitySchema {
    return this.qerClient.typedClient.PortalPersonAll.GetSchema();
  }

<<<<<<< HEAD
  constructor(private readonly qerClient: QerApiService, private readonly entityService: EntityService) { }
=======
  constructor(private readonly qerClient: QerApiService, private readonly entityService: EntityService) {}
>>>>>>> oned/v92

  public async getMasterdataInteractive(uid: string): Promise<TypedEntityCollectionData<PortalPersonMasterdata>> {
    return this.qerClient.typedClient.PortalPersonMasterdataInteractive.Get_byid(uid);
  }

  public async getMasterdata(parameters: CollectionLoadParameters = {}): Promise<TypedEntityCollectionData<PortalPersonMasterdata>> {
    return this.qerClient.typedClient.PortalPersonMasterdata.Get(parameters);
  }

  public async get(uid: string, parameters: CollectionLoadParameters = {}): Promise<TypedEntityCollectionData<PortalPersonUid>> {
    return this.qerClient.typedClient.PortalPersonUid.Get(uid, parameters);
  }

  public async getAll(parameters: CollectionLoadParameters = {}): Promise<TypedEntityCollectionData<PortalPersonAll>> {
    return this.qerClient.typedClient.PortalPersonAll.Get(parameters);
  }

  public async getDataModel(filter?: FilterData[]): Promise<DataModel> {
    return this.qerClient.client.portal_person_all_datamodel_get({ filter: filter });
  }

<<<<<<< HEAD
  public async getGroupInfo(parameters: PersonAllLoadParameters = {}): Promise<GroupInfo[]> {
    return this.qerClient.v2Client.portal_person_all_group_get({
      ...parameters,
      withcount: true
=======
  public getGroupInfo(parameters: PersonAllLoadParameters = {}): Promise<GroupInfoData> {
    const { withProperties, OrderBy, search, ...params } = parameters;
    return this.qerClient.v2Client.portal_person_all_group_get({
      ...params,
      withcount: true,
>>>>>>> oned/v92
    });
  }

  public createColumnCandidatesPerson(): IEntityColumn {
    const fkRelation = {
      ChildColumnName: 'UID_Person',
      IsMemberRelation: false,
      ParentTableName: 'Person',
<<<<<<< HEAD
      ParentColumnName: 'UID_Person'
=======
      ParentColumnName: 'UID_Person',
>>>>>>> oned/v92
    };

    return this.entityService.createLocalEntityColumn(
      {
        ColumnName: fkRelation.ChildColumnName,
        Type: ValType.String,
        MinLen: 1,
<<<<<<< HEAD
        FkRelation: fkRelation
=======
        FkRelation: fkRelation,
>>>>>>> oned/v92
      },
      [this.createFkProviderItem(fkRelation)]
    );
  }

<<<<<<< HEAD
  public createFkProviderItem(fkRelation: MetaTableRelationData): FkProviderItem {
    return {
      columnName: fkRelation.ChildColumnName,
      fkTableName: fkRelation.ParentTableName,
      parameterNames: [
        'OrderBy',
        'StartIndex',
        'PageSize',
        'filter',
        'withProperties',
        'search',
      ],
      load: async (_, parameters: CollectionLoadParameters = {}) =>
        this.qerClient.v2Client.portal_person_active_get(parameters),
      getDataModel: async () => ({}),
      getFilterTree: async () => ({Elements: []})
=======
  public createFkProviderItem(fkRelation: MetaTableRelationData, filter?: FilterData[]): FkProviderItem {
    return {
      columnName: fkRelation.ChildColumnName,
      fkTableName: fkRelation.ParentTableName,
      parameterNames: ['OrderBy', 'StartIndex', 'PageSize', 'filter', 'withProperties', 'search'],
      load: async (_, parameters: CollectionLoadParameters = {}) =>
        this.qerClient.v2Client.portal_person_active_get({ ...parameters, filter }),
      getDataModel: async () => ({}),
      getFilterTree: async () => ({ Elements: [] }),
>>>>>>> oned/v92
    };
  }
}
