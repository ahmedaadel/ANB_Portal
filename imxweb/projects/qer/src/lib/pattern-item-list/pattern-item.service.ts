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
import { PortalItshopPatternRequestable, PortalShopServiceitems, RequestableProductForPerson } from 'imx-api-qer';
import { CollectionLoadParameters, EntityData, EntitySchema, ExtendedTypedEntityCollection, ValueStruct } from 'imx-qbm-dbts';
import { QerApiService } from '../qer-api-client.service';
import { ServiceItemsService } from '../service-items/service-items.service';
=======
import { isEqual, uniqWith } from 'lodash';
import {
  CartPatternItemDataRead,
  PortalItshopPatternItem,
  PortalItshopPatternRequestable,
  PortalShopServiceitems,
  portal_itshop_pattern_get_args,
} from 'imx-api-qer';
import {
  ApiRequestOptions,
  CollectionLoadParameters,
  CompareOperator,
  EntityData,
  EntitySchema,
  ExtendedTypedEntityCollection,
  FilterData,
  FilterType,
  ValueStruct,
} from 'imx-qbm-dbts';
import { QerApiService } from '../qer-api-client.service';
import { ServiceItemsService } from '../service-items/service-items.service';
import { RequestableProduct } from '../shopping-cart/requestable-product.interface';
>>>>>>> oned/v92

@Injectable({
  providedIn: 'root',
})
export class PatternItemService {
  constructor(
    private readonly qerClient: QerApiService,
    private readonly serviceItemsProvider: ServiceItemsService
    ) {}

  public get PortalShopPatternRequestableSchema(): EntitySchema {
    return this.qerClient.typedClient.PortalItshopPatternRequestable.GetSchema();
  }

<<<<<<< HEAD
  public async get(
    parameters: CollectionLoadParameters & {
      UID_Persons?: string;
    }
  ): Promise<ExtendedTypedEntityCollection<PortalItshopPatternRequestable, unknown>> {
    return this.qerClient.typedClient.PortalItshopPatternRequestable.Get(parameters);
  }

  public async getServiceItemEntities(patternRequestable: PortalItshopPatternRequestable): Promise<EntityData[]> {
    return (await this.qerClient.v2Client.portal_itshop_pattern_get(patternRequestable.UID_ShoppingCartPattern.value)).Entities;
=======
  public get PortalItshopPatternItemSchema(): EntitySchema {
    return this.qerClient.typedClient.PortalItshopPatternItem.GetSchema();
  }

  public async get(
    parameters: CollectionLoadParameters & {
      UID_Persons?: string;
    },
    requestOpts?: ApiRequestOptions
  ): Promise<ExtendedTypedEntityCollection<PortalItshopPatternRequestable, unknown>> {
    return this.qerClient.typedClient.PortalItshopPatternRequestable.Get(parameters, requestOpts);
  }

  public async getServiceItemEntities(
    patternRequestable: PortalItshopPatternRequestable,
    options: portal_itshop_pattern_get_args = {},
    requestOpts?: ApiRequestOptions
  ): Promise<EntityData[]> {
    return (await this.qerClient.v2Client.portal_itshop_pattern_get(patternRequestable.UID_ShoppingCartPattern.value, options, requestOpts))
      .Entities;
>>>>>>> oned/v92
  }

  public async getServiceItems(patternRequestable: PortalItshopPatternRequestable): Promise<PortalShopServiceitems[]> {
    const serviceItemsEntites = await this.getServiceItemEntities(patternRequestable);
    const serviceItems = await Promise.all(
      serviceItemsEntites.map((entity) => this.serviceItemsProvider.getServiceItem(entity.Columns.UID_AccProduct.Value, true))
    );
    return serviceItems.filter((item) => item !== null);
  }

<<<<<<< HEAD
  public async getPatternItemsForPersons(
    patternRequestables: PortalItshopPatternRequestable[],
    recipients: ValueStruct<string>[],
    uidITShopOrg?: string
  ): Promise<RequestableProductForPerson[]> {
    const serviceItemEntities = await Promise.all(
      patternRequestables.map(async (patternRequestable) => this.getServiceItemEntities(patternRequestable))
    );
    const serviceItemsEntitesFlat = serviceItemEntities.reduce((a, b) => a.concat(b), []);
    return serviceItemsEntitesFlat
=======
  public async getPatternItemList(
    patternRequestable: PortalItshopPatternRequestable,
    parameters: CollectionLoadParameters & {
      UID_Persons?: string;
    } = {},
    requestOpts?: ApiRequestOptions,
    getAllItems?: boolean,
  ): Promise<ExtendedTypedEntityCollection<PortalItshopPatternItem, CartPatternItemDataRead>> {

    var shoppingCartPatternFilter = {
      ColumnName: 'UID_ShoppingCartPattern',
      Type: FilterType.Compare,
      CompareOp: CompareOperator.Equal,
      Value1: patternRequestable.UID_ShoppingCartPattern.value,
    }
    
    const index = this.findFilterIndex(parameters.filter, 'UID_ShoppingCartPattern');
    if (index >= 0) {
      parameters.filter[index] = shoppingCartPatternFilter;
    } else {
      if(!parameters.filter){
        parameters.filter = [];
      }
      parameters.filter.push(shoppingCartPatternFilter);
    }

    let params = parameters;

    if (getAllItems) {
      let getAllItemsParams: CollectionLoadParameters = {
        ...params,
        ...{
          PageSize: -1
        },
      }; 
      const totalCount = (await this.qerClient.typedClient.PortalItshopPatternItem.Get(getAllItemsParams, requestOpts)).totalCount;
      params = {
        ...params,
        ...{
          PageSize: totalCount
        },
      }; 
    }
    return await this.qerClient.typedClient.PortalItshopPatternItem.Get(params, requestOpts);
  }

  public async getPatternItemsForPersons(
    patternRequestables: PortalItshopPatternRequestable[],
    recipients: ValueStruct<string>[],
    uidITShopOrg?: string,
    onlySelected?: boolean
  ): Promise<RequestableProduct[]> {
    const serviceItemEntities = await Promise.all(
      patternRequestables.map(async (patternRequestable) => this.getServiceItemEntities(patternRequestable))
    );
    // make flat list without duplicates
    const serviceItemsEntitesFlat = uniqWith(serviceItemEntities.reduce((a, b) => a.concat(b), []), isEqual);
    let allItems: RequestableProduct[];
    allItems = serviceItemsEntitesFlat
>>>>>>> oned/v92
      .map((serviceItem) =>
        recipients.map((recipient) => ({
          UidPerson: recipient.DataValue,
          UidITShopOrg: uidITShopOrg,
<<<<<<< HEAD
          UidAccProduct: serviceItem.Columns.UID_AccProduct.Value,
=======
          UidAccProduct: serviceItem?.Columns?.UID_AccProduct.Value,
>>>>>>> oned/v92
          Display: serviceItem.Display,
          DisplayRecipient: recipient.DisplayValue,
        }))
      )
      .reduce((a, b) => a.concat(b), []);
<<<<<<< HEAD
=======

    let selectedItems: RequestableProduct[] = [];
    if (onlySelected) {
      const selectedItemsWithDuplicates = allItems.filter((itemAll) => {
        return patternRequestables.some((item) => {
          const isSelected = itemAll.UidAccProduct === item.GetEntity().GetColumn('UID_AccProduct').GetValue();
          // store the pattern item uid to load saved request params 
          itemAll.UidPatternItem = item.GetEntity().GetKeys()[0];
          return isSelected;
        });
      });
      selectedItems = uniqWith(selectedItemsWithDuplicates, isEqual);
    }

    return onlySelected ? selectedItems : allItems;
  }

  
  /**
   * @ignore Used internally
   * Attempts to find an existing filter matching the given column name.
   * Returns the index or -1 if no match was found
   */
  private findFilterIndex(filter: FilterData[], filterName: string): number {
    let index: number;
    if (!filter) {
      return -1;
    }

    return filter.map(f => f.ColumnName).indexOf(filterName);
>>>>>>> oned/v92
  }
}
