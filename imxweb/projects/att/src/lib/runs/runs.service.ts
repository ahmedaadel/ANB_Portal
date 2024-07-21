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
import { EuiDownloadOptions } from '@elemental-ui/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';

import {
<<<<<<< HEAD
  ApiClientMethodFactory, AttCaseDataRead, ExtendRunInput, PortalAttestationCase, PortalAttestationRun, PortalAttestationRunApprovers
} from 'imx-api-att';
import {
  CollectionLoadParameters, CompareOperator, DataModel, EntitySchema, ExtendedTypedEntityCollection,
  FilterType, GroupInfo, MethodDefinition, TypedEntityCollectionData
} from 'imx-qbm-dbts';
=======
  AttCaseDataRead,
  ExtendRunInput,
  PortalAttestationCase,
  PortalAttestationRun,
  PortalAttestationRunApprovers,
  V2ApiClientMethodFactory,
} from 'imx-api-att';

import {
  CollectionLoadParameters,
  CompareOperator,
  DataModel,
  EntitySchema,
  ExtendedTypedEntityCollection,
  FilterType,
  GroupInfoData,
  MethodDefinition,
  TypedEntityCollectionData,
} from 'imx-qbm-dbts';

>>>>>>> oned/v92
import { AppConfigService, ElementalUiConfigService, SnackBarService } from 'qbm';
import { ApiService } from '../api.service';
import { AttestationCaseLoadParameters } from '../attestation-history/attestation-case-load-parameters.interface';
import { AttestationCasesService } from '../decision/attestation-cases.service';
import { RunsLoadParameters } from './runs-load-parameters.interface';
import { SendReminderMailComponent } from './send-reminder-mail.component';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
})
export class RunsService {
  private readonly apiClientMethodFactory = new ApiClientMethodFactory();
=======
  providedIn: 'root',
})
export class RunsService {
  private readonly apiClientMethodFactory = new V2ApiClientMethodFactory();
>>>>>>> oned/v92

  constructor(
    private readonly snackBar: SnackBarService,
    private readonly attService: ApiService,
    private readonly elementalUiConfigService: ElementalUiConfigService,
    private readonly sideSheet: EuiSidesheetService,
    private readonly translate: TranslateService,
    private readonly busyService: EuiLoadingService,
    private readonly config: AppConfigService,
    private readonly attestationApprove: AttestationCasesService
<<<<<<< HEAD
  ) { }
=======
  ) {}
>>>>>>> oned/v92

  public async getDataModel(): Promise<DataModel> {
    return this.attService.client.portal_attestation_run_datamodel_get(undefined);
  }

<<<<<<< HEAD
  public async getGroupInfo(parameters: RunsLoadParameters): Promise<GroupInfo[]> {
    return this.attService.client.portal_attestation_run_group_get({
      ...parameters,
      filter: parameters.groupFilter,
      withcount: true
=======
  public async getGroupInfo(parameters: RunsLoadParameters): Promise<GroupInfoData> {
    const { withProperties, groupFilter, search, OrderBy, ...params } = parameters;
    return this.attService.client.portal_attestation_run_group_get({
      ...params,
      filter: parameters.groupFilter,
      withcount: true,
>>>>>>> oned/v92
    });
  }

  public async extendRun(run: PortalAttestationRun, data: ExtendRunInput): Promise<any> {
    return this.attService.client.portal_attestation_run_extend_post(run.GetEntity().GetKeys()[0], data);
  }

  public async getApprovers(run: PortalAttestationRun): Promise<TypedEntityCollectionData<PortalAttestationRunApprovers>> {
    return this.attService.typedClient.PortalAttestationRunApprovers.Get(run.GetEntity().GetKeys()[0]);
  }

  public async getNumberOfPendingForLoggedInUser(parameters: AttestationCaseLoadParameters): Promise<number> {
    return this.attestationApprove.getNumberOfPending(parameters);
  }

  public async sendReminderEmail(runs: PortalAttestationRun[], approvers?: PortalAttestationRunApprovers[]): Promise<void> {
    const data = { message: undefined };
<<<<<<< HEAD
    const result = await this.sideSheet.open(
      SendReminderMailComponent,
      {
        title: await this.translate.get('#LDS#Heading Send Reminder').toPromise(),
        headerColour: 'iris-blue',
        padding: '0px',
        testId: 'attestationruns-sendReminder-sidesheet',
        width: '600px',
        data
      }
    ).afterClosed().toPromise();

    if (result) {
      let overlayRef: OverlayRef;
      setTimeout(() => overlayRef = this.busyService.show());
=======
    const result = await this.sideSheet
      .open(SendReminderMailComponent, {
        title: await this.translate.get('#LDS#Heading Send Reminder').toPromise(),
        subTitle: runs.length === 1 ? runs[0].GetEntity().GetDisplay() : '',
        padding: '0px',
        testId: 'attestationruns-sendReminder-sidesheet',
        width: '600px',
        data,
      })
      .afterClosed()
      .toPromise();

    if (result) {
      let overlayRef: OverlayRef;
      setTimeout(() => (overlayRef = this.busyService.show()));
>>>>>>> oned/v92

      let success: boolean;

      try {
        if (approvers == null) {
          approvers = [];
          for (const run of runs) {
<<<<<<< HEAD
            (await this.getApprovers(run)).Data.forEach(approver => approvers.push(approver));
=======
            (await this.getApprovers(run)).Data.forEach((approver) => approvers.push(approver));
>>>>>>> oned/v92
          }
        }

        await this.attService.client.portal_attestation_run_sendreminder_post({
<<<<<<< HEAD
          UidRuns: runs.map(item => item.GetEntity().GetKeys()[0]),
          UidPerson: approvers.map(item => item.UID_PersonHead.value),
=======
          UidRuns: runs.map((item) => item.GetEntity().GetKeys()[0]),
          UidPerson: approvers.map((item) => item.UID_PersonHead.value),
>>>>>>> oned/v92
          Message: data.message,
        });

        success = true;
      } finally {
        if (success) {
          this.snackBar.open({ key: '#LDS#The reminder mails have been sent.' });
        }

        setTimeout(() => this.busyService.hide(overlayRef));
      }
    }
  }

  public isOverdue(run: PortalAttestationRun): boolean {
    return run.DueDate.value != null && run.SecondsLeft.value < 1;
  }

  public getReportDownloadOptions(run: PortalAttestationRun): EuiDownloadOptions {
    const key = run.GetEntity().GetKeys()[0];
    return {
<<<<<<< HEAD
      ... this.elementalUiConfigService.Config.downloadOptions,
      url: this.config.BaseUrl + new MethodDefinition(
        this.apiClientMethodFactory.portal_attestation_policy_report_get(run.UID_AttestationPolicy.value, key)).path,
=======
      ...this.elementalUiConfigService.Config.downloadOptions,
      url:
        this.config.BaseUrl +
        new MethodDefinition(this.apiClientMethodFactory.portal_attestation_policy_report_get(run.UID_AttestationPolicy.value, key)).path,
>>>>>>> oned/v92
      fileName: `${run.GetEntity().GetDisplay()}.pdf`,
    };
  }

<<<<<<< HEAD
  public getCasesForRun(uidRun: string, parameter: CollectionLoadParameters):
    Promise<ExtendedTypedEntityCollection<PortalAttestationCase, AttCaseDataRead>> {
    return this.attService.typedClient.PortalAttestationCase.Get({...parameter,
      ...{filter: [{
        CompareOp: CompareOperator.Equal,
        Type: FilterType.Compare,
        ColumnName: 'UID_AttestationRun',
        Value1: uidRun
      }]}
    });
  }


=======
  public getCasesForRun(
    uidRun: string,
    parameter: CollectionLoadParameters
  ): Promise<ExtendedTypedEntityCollection<PortalAttestationCase, AttCaseDataRead>> {
    return this.attService.typedClient.PortalAttestationCase.Get({
      ...parameter,
      ...{
        filter: [
          {
            CompareOp: CompareOperator.Equal,
            Type: FilterType.Compare,
            ColumnName: 'UID_AttestationRun',
            Value1: uidRun,
          },
        ],
      },
    });
  }

>>>>>>> oned/v92
  public getSchemaForCases(): EntitySchema {
    return this.attService.typedClient.PortalAttestationCase.GetSchema();
  }

  public async getSingleRun(uidRun: string): Promise<PortalAttestationRun> {
    const elements = await this.attService.typedClient.PortalAttestationRun.Get({
<<<<<<< HEAD
      filter: [{
        CompareOp: CompareOperator.Equal,
        Type: FilterType.Compare,
        ColumnName: 'UID_AttestationRun',
        Value1: uidRun
      }]
=======
      filter: [
        {
          CompareOp: CompareOperator.Equal,
          Type: FilterType.Compare,
          ColumnName: 'UID_AttestationRun',
          Value1: uidRun,
        },
      ],
>>>>>>> oned/v92
    });

    return elements.Data[0];
  }
}
