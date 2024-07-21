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
import { EuiLoadingService } from '@elemental-ui/core';
import { OverlayRef } from '@angular/cdk/overlay';

import { ImxDataSource, imx_SessionService } from 'qbm';
import { EntityCollectionData, EntityData, EntitySchema, ExtendedTypedEntityCollection } from 'imx-qbm-dbts';
import { OpsupportQueueTree, ReactivateJobMode } from 'imx-api-qbm';
import { QueueJobsService } from '../jobs/queue-jobs.service';

@Injectable()
export class QueueTreeService extends ImxDataSource<OpsupportQueueTree> {

  public startUid: string;

  public items: OpsupportQueueTree[];
=======

import { CdrFactoryService, ImxDataSource, imx_SessionService } from 'qbm';
import { EntityCollectionData, EntityData, EntitySchema, ExtendedTypedEntityCollection, IEntityColumn, TypedEntity, TypedEntityCollectionData } from 'imx-qbm-dbts';
import { HistoryOperationsData, OpsupportQueueJobaffects, ReactivateJobMode } from 'imx-api-qbm';
import { QueueJobsService } from '../jobs/queue-jobs.service';

@Injectable()
export class QueueTreeService extends ImxDataSource<TypedEntity> {

  public startUid: string;

  public items: TypedEntity[];
  public load: (startId: string) => Promise<TypedEntityCollectionData<TypedEntity>>
>>>>>>> oned/v92

  constructor(
    private session: imx_SessionService,
    private jobService: QueueJobsService,
<<<<<<< HEAD
    private busyService: EuiLoadingService) {
=======
  ) {
>>>>>>> oned/v92
    super();
  }

  public get QueueTreeEntitySchema(): EntitySchema {
    return this.session.TypedClient.OpsupportQueueTree.GetSchema();
  }

  public itemsProvider = async () => {
<<<<<<< HEAD
    let result: ExtendedTypedEntityCollection<OpsupportQueueTree, unknown>;
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());

    try {
      result = await this.session.TypedClient.OpsupportQueueTree.Get({ uidtree: this.startUid });
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
    return this.data = this.items = result?.Data;
  }

  public childItemsProvider = (item: OpsupportQueueTree) => {

    const child1 = this.items ? this.items.find(el => el.UID_Job.value === item.UID_JobError.value) : null;
    const child2 = this.items ? this.items.find(el => el.UID_Job.value === item.UID_JobSuccess.value) : null;
=======
    let result: ExtendedTypedEntityCollection<TypedEntity, unknown>;

    result = await this.load(this.startUid);//await this.session.TypedClient.OpsupportQueueTree.Get({ uidtree: this.startUid });
    return this.data = this.items = result?.Data;
  }

  public childItemsProvider = (item: TypedEntity) => {

    const child1 = this.items ? this.items.find(el => this.getColumn(el, 'UID_Job').GetValue() === this.getColumn(item, 'UID_JobError').GetValue()) : null;
    const child2 = this.items ? this.items.find(el => this.getColumn(el, 'UID_Job').GetValue() === this.getColumn(item, 'UID_JobSuccess').GetValue()) : null;
>>>>>>> oned/v92

    const res = [];
    if (child1) { res.push(child1); }
    if (child2) { res.push(child2); }

    return Promise.resolve(res);
  }

<<<<<<< HEAD
  public hasChildrenProvider = (data: OpsupportQueueTree) => {
    return (data.UID_JobError.value != null && data.UID_JobError.value !== '')
      || (data.UID_JobSuccess.value != null && data.UID_JobSuccess.value !== '');
=======
  public hasChildrenProvider = (data: TypedEntity) => {
    return (this.getColumn(data, 'UID_JobError').GetValue() != null && this.getColumn(data, 'UID_JobError').GetValue() !== '')
      || (this.getColumn(data, 'UID_JobSuccess').GetValue() != null && this.getColumn(data, 'UID_JobSuccess').GetValue() !== '');
  }

  public async GetAffectedObjects(uidJob: string): Promise<OpsupportQueueJobaffects[]> {
    return (await this.session.TypedClient.OpsupportQueueJobaffects.Get(uidJob)).Data;
  }

  public GetChangeOperations(processId: string): Promise<HistoryOperationsData> {
    return this.session.Client.opsupport_changeoperations_process_get(processId);
>>>>>>> oned/v92
  }

  public GetTotalSteps(): number {
    let count = 1;
    this.items.forEach(el => {
<<<<<<< HEAD
      if (el.UID_JobError.value !== '') {
        count++;
      }
      if (el.UID_JobSuccess.value !== '') {
=======
      if (this.getColumn(el, 'UID_JobError').GetValue() !== '') {
        count++;
      }
      if (this.getColumn(el, 'UID_JobSuccess').GetValue() !== '') {
>>>>>>> oned/v92
        count++;
      }
    });
    return count;
  }

  public GetCompleteSteps(): number {
<<<<<<< HEAD
    const root = this.items.find(el => el.IsRootJob.value);
    return this.GetCompleteSubSteps(root.UID_Job.value);
=======
    const root = this.items.find(el => this.getColumn(el, 'IsRootJob').GetValue());
    return this.GetCompleteSubSteps(this.getColumn(root, 'UID_Job').GetValue());
>>>>>>> oned/v92
  }

  public RemoveEmpty(ent: EntityData[]): EntityData[] {
    const ret: EntityData[] = [];
    ent.forEach(el => {
      if (el !== null) {
        ret.push(el);
      }
    });
    return ret;
  }

  public CanBeReactivated(): boolean {
    if (!this.items) { return false; }
    return this.getFrozenItem() !== undefined;
  }

  public async Reactivate(mode: ReactivateJobMode): Promise<EntityCollectionData> {
    const frozen = this.getFrozenItem();
    if (frozen) {
<<<<<<< HEAD
      return this.jobService.Retry(mode, [frozen.UID_Job.value]);
=======
      return this.jobService.Retry(mode, [this.getColumn(frozen, 'UID_Job').GetValue()]);
>>>>>>> oned/v92
    }
    return Promise.resolve(null);
  }

  private GetCompleteSubSteps(uidJob: string): number {

    if (uidJob === '') { return 0; }
<<<<<<< HEAD
    const current = this.items.find(el => el.UID_Job.value === uidJob);

    const count = current && current.Ready2EXE.value === 'FINISHED' ? 1 : 0;

    return count + this.GetCompleteSubSteps(current.UID_JobSuccess.value) + this.GetCompleteSubSteps(current.UID_JobError.value);
  }

  public getFrozenItem(): OpsupportQueueTree {
    return this.items.find(el => el.Ready2EXE.value.toUpperCase() === 'FROZEN' ||
      el.Ready2EXE.value.toUpperCase() === 'OVERLIMIT');
=======
    const current = this.items.find(el => this.getColumn(el, 'UID_Job').GetValue() === uidJob);

    const count = current && (this.getColumn(current, 'Ready2EXE')?.GetValue() ?? 'FINISHED') === 'FINISHED' ? 1 : 0;

    return count + this.GetCompleteSubSteps(this.getColumn(current, 'UID_JobSuccess').GetValue()) + this.GetCompleteSubSteps(this.getColumn(current, 'UID_JobError').GetValue());
  }

  public getFrozenItem(): TypedEntity {
    return this.items.find(el => this.getColumn(el, 'Ready2EXE')?.GetValue()?.toUpperCase() === 'FROZEN' ||
      this.getColumn(el, 'Ready2EXE')?.GetValue()?.toUpperCase() === 'OVERLIMIT');
  }

  private getColumn(entity: TypedEntity, name: string): IEntityColumn {
    return CdrFactoryService.tryGetColumn(entity.GetEntity(), name);
>>>>>>> oned/v92
  }
}
