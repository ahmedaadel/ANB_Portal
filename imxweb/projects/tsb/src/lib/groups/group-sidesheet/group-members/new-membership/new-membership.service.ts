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
import { Injectable } from '@angular/core';
import { EuiLoadingService } from '@elemental-ui/core';

import { RequestableProductForPerson } from 'imx-api-qer';
import { PortalTargetsystemUnsGroupServiceitem } from 'imx-api-tsb';
import { IForeignKeyInfo, TypedEntity, ValueStruct } from 'imx-qbm-dbts';
import { ShelfService, QerApiService, UserModelService } from 'qer';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
})
export class NewMembershipService {

=======
  providedIn: 'root',
})
export class NewMembershipService {
>>>>>>> oned/v92
  constructor(
    private readonly itShop: ShelfService,
    private readonly qerClient: QerApiService,
    private readonly busyService: EuiLoadingService,
    private readonly userService: UserModelService
<<<<<<< HEAD
  ) { }

  public async requestMembership(members: ValueStruct<string>[], product: PortalTargetsystemUnsGroupServiceitem): Promise<boolean> {
    const items = this.getServiceItemsForPersons(product, members);
    await this.itShop.setShops(items);

    if (items.every(elem => elem.UidITShopOrg == null || elem.UidITShopOrg === '')) {
=======
  ) {}

  public async requestMembership(members: ValueStruct<string>[], product: PortalTargetsystemUnsGroupServiceitem): Promise<boolean> {
    let items = this.getServiceItemsForPersons(product, members);
    await this.itShop.setShops(items);

    if (items.every((elem) => elem.UidITShopOrg == null || elem.UidITShopOrg === '')) {
>>>>>>> oned/v92
      return false;
    }

    let busyIndicator: OverlayRef;
    setTimeout(() => (busyIndicator = this.busyService.show()));

    try {
<<<<<<< HEAD
      await Promise.all( items.filter(elem => elem.UidITShopOrg != null && elem.UidITShopOrg !== '').map(item => {
        const entity = this.qerClient.typedClient.PortalCartitem.createEntity();
        entity.UID_ITShopOrg.value = item.UidITShopOrg;
        entity.UID_PersonOrdered.value = item.UidPerson;
        return this.qerClient.typedClient.PortalCartitem.Post(entity);
      }));
      
      await this.userService.reloadPendingItems();

=======
      items = items.filter((elem) => elem.UidITShopOrg != null && elem.UidITShopOrg !== '');

      for (const item of items) {
        const entity = this.qerClient.typedClient.PortalCartitem.createEntity();
        entity.UID_ITShopOrg.value = item.UidITShopOrg;
        entity.UID_PersonOrdered.value = item.UidPerson;
        await this.qerClient.typedClient.PortalCartitem.Post(entity);
      }
      await this.userService.reloadPendingItems();
>>>>>>> oned/v92
    } finally {
      setTimeout(() => {
        this.busyService.hide(busyIndicator);
      });
    }
    return true;
  }

  public getFKRelation(): readonly IForeignKeyInfo[] {
    return this.qerClient.typedClient.PortalCartitem.createEntity().UID_PersonOrdered.GetMetadata().GetFkRelations();
  }

  public async unsubscribeMembership(item: TypedEntity): Promise<void> {
<<<<<<< HEAD
    await this.qerClient.client.portal_itshop_unsubscribe_post({UidPwo: [item.GetEntity().GetColumn('UID_PersonWantsOrg').GetValue()]});
=======
    await this.qerClient.client.portal_itshop_unsubscribe_post({ UidPwo: [item.GetEntity().GetColumn('UID_PersonWantsOrg').GetValue()] });
>>>>>>> oned/v92
  }

  private getServiceItemsForPersons(
    serviceItem: PortalTargetsystemUnsGroupServiceitem,
<<<<<<< HEAD
    recipients: ValueStruct<string>[],
  ): RequestableProductForPerson[] {
    return recipients.map(recipient => ({
      UidPerson: recipient.DataValue,
      UidAccProduct: serviceItem.GetEntity().GetKeys()[0],
      Display: serviceItem.GetEntity().GetDisplay(),
      DisplayRecipient: recipient.DisplayValue
    })
    ).reduce((a, b) => a.concat(b), []);
=======
    recipients: ValueStruct<string>[]
  ): RequestableProductForPerson[] {
    return recipients
      .map((recipient) => ({
        UidPerson: recipient.DataValue,
        UidAccProduct: serviceItem.GetEntity().GetKeys()[0],
        Display: serviceItem.GetEntity().GetDisplay(),
        DisplayRecipient: recipient.DisplayValue,
      }))
      .reduce((a, b) => a.concat(b), []);
>>>>>>> oned/v92
  }
}
