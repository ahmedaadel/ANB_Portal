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

import { PwoData } from 'imx-api-qer';
import { IEntity, IEntityColumn, ParameterData, WriteExtTypedEntity } from 'imx-qbm-dbts';
<<<<<<< HEAD
=======
import { AuthenticationService } from 'qbm';
>>>>>>> oned/v92
import { Approval } from '../itshopapprove/approval';
import { ExtendedCollectionData } from '../parameter-data/extended-collection-data.interface';
import { ParameterDataService } from '../parameter-data/parameter-data.service';
import { ItshopService } from './itshop.service';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
})
export class ItshopRequestService {
  constructor(
    private readonly parameterDataService: ParameterDataService,
    private readonly itshopService: ItshopService
  ) { }
=======
  providedIn: 'root',
})
export class ItshopRequestService {
  private currentUser: string;
  constructor(
    private readonly parameterDataService: ParameterDataService,
    private readonly itshopService: ItshopService,
    authentication: AuthenticationService
  ) {
    authentication.onSessionResponse.subscribe((session) => (this.currentUser = session.UserUid));
  }
>>>>>>> oned/v92

  public createParameterColumns(entity: IEntity, parameters: ParameterData[]): IEntityColumn[] {
    return this.parameterDataService.createParameterColumns(
      entity,
      parameters,
<<<<<<< HEAD
      loadParameters => this.itshopService.getRequestParameterCandidates(loadParameters),
      treeParameters => this.itshopService.getRequestParameterFilterTree(treeParameters)
=======
      (loadParameters) => this.itshopService.getRequestParameterCandidates(loadParameters),
      (treeParameters) => this.itshopService.getRequestParameterFilterTree(treeParameters)
>>>>>>> oned/v92
    );
  }

  public isChiefApproval: boolean = false;
<<<<<<< HEAD
  
=======

>>>>>>> oned/v92
  public createRequestApprovalItem(
    typedEntity: WriteExtTypedEntity<any>,
    extendedCollectionData: ExtendedCollectionData<PwoData>
  ): Approval {
    const entity = typedEntity.GetEntity();

    const extendedDataWrapper = this.parameterDataService.createExtendedDataWrapper(
      entity,
      extendedCollectionData,
<<<<<<< HEAD
      loadParameters => this.itshopService.getRequestParameterCandidates(loadParameters),
      treeParameters => this.itshopService.getRequestParameterFilterTree(treeParameters)
=======
      (loadParameters) => this.itshopService.getRequestParameterCandidates(loadParameters),
      (treeParameters) => this.itshopService.getRequestParameterFilterTree(treeParameters)
>>>>>>> oned/v92
    );

    return new Approval({
      entity,
<<<<<<< HEAD
=======
      uidCurrentUser: this.currentUser,
>>>>>>> oned/v92
      isChiefApproval: this.itshopService.isChiefApproval,
      pwoData: extendedDataWrapper.data,
      parameterColumns: extendedDataWrapper.parameterWrapper.columns,
      commit: async () => {
        typedEntity.extendedData = extendedDataWrapper.parameterWrapper.getEntityWriteDataColumns();
        try {
          await entity.Commit(true);
        } catch (error) {
          await entity.DiscardChanges();
          typedEntity.extendedData = undefined;
          throw error;
        }
<<<<<<< HEAD
      }
=======
      },
>>>>>>> oned/v92
    });
  }
}
