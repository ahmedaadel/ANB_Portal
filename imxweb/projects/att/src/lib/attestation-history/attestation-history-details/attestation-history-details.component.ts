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

<<<<<<< HEAD
import { AfterContentInit, Component, Inject, OnDestroy } from '@angular/core';
import { EuiDownloadOptions, EuiSidesheetConfig, EuiSidesheetRef, EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { Subscription } from 'rxjs';

import { PortalAttestationCaseHistory } from 'imx-api-att';
import { AuthenticationService, BaseReadonlyCdr, ColumnDependentReference, TabControlHelper } from 'qbm';
=======
import { Component, Inject, OnDestroy } from '@angular/core';
import { EuiDownloadOptions, EuiSidesheetRef, EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { PortalAttestationCaseHistory } from 'imx-api-att';
import { AuthenticationService, BaseReadonlyCdr, ColumnDependentReference } from 'qbm';
import { DbObjectKey } from 'imx-qbm-dbts';
import { SourceDetectiveSidesheetComponent, SourceDetectiveSidesheetData, SourceDetectiveType } from 'qer';
>>>>>>> oned/v92
import { Approvers } from '../../decision/approvers.interface';
import { AttestationHistoryActionService } from '../attestation-history-action.service';
import { AttestationHistoryCase } from '../attestation-history-case';
import { AttestationCasesService } from '../../decision/attestation-cases.service';
<<<<<<< HEAD
import { AttestationSnapshotComponent } from '../../attestation-snapshot/attestation-snapshot.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'imx-attestation-history-details',
  templateUrl: './attestation-history-details.component.html',
  styleUrls: ['./attestation-history-details.component.scss']
})

export class AttestationHistoryDetailsComponent implements AfterContentInit, OnDestroy {
  public get canDecide(): boolean {
    return this.case.isPending &&
      this.approvers?.current?.find(entity => entity.Columns.UID_PersonHead.Value === this.userUid) != null;
  }

  public get allowedActionCount(): number {
    return [
      this.case.canRecallDecision,
      this.case.canWithdrawDelegation(this.userUid),
      this.reportType === 'PDF'
    ].filter(condition => condition).length;
=======
@Component({
  selector: 'imx-attestation-history-details',
  templateUrl: './attestation-history-details.component.html',
  styleUrls: ['./attestation-history-details.component.scss'],
})
export class AttestationHistoryDetailsComponent implements OnDestroy {
  public get canDecide(): boolean {
    return this.case.isPending && this.approvers?.current?.find((entity) => entity.Columns.UID_PersonHead.Value === this.userUid) != null;
  }

  public get allowedActionCount(): number {
    const actions = this.showApprovalActions
      ? [this.canDecide, this.reportType === 'PDF', this.case?.SupportsAssignmentAnalysis?.value]
      : [
          this.case.canRecallDecision,
          this.case.canWithdrawDelegation(this.userUid),
          this.reportType === 'PDF',
          this.case?.SupportsAssignmentAnalysis?.value,
        ];
    return actions.filter((condition) => condition).length;
>>>>>>> oned/v92
  }

  public userUid: string;

  public readonly case: AttestationHistoryCase;
  public readonly approvers: Approvers;
  public readonly workflowHistoryData: PortalAttestationCaseHistory[];
  public readonly parameters: ColumnDependentReference[];
  public readonly propertyInfo: ColumnDependentReference[];
  public readonly reportType: string;
  public readonly reportDownload: EuiDownloadOptions;
  public readonly showApprovalActions: boolean;
  private readonly subscriptions: Subscription[] = [];

  constructor(
<<<<<<< HEAD
    @Inject(EUI_SIDESHEET_DATA) data: {
      case: AttestationHistoryCase,
      approvers: Approvers,
      showApprovalActions: boolean
=======
    @Inject(EUI_SIDESHEET_DATA)
    data: {
      case: AttestationHistoryCase;
      approvers: Approvers;
      showApprovalActions: boolean;
>>>>>>> oned/v92
    },
    private readonly sideSheet: EuiSidesheetService,
    private readonly translate: TranslateService,
    private readonly sideSheetRef: EuiSidesheetRef,
    public readonly attestationAction: AttestationHistoryActionService,
    private readonly attestationCasesService: AttestationCasesService,
    authentication: AuthenticationService
  ) {
    this.case = data.case;
    this.approvers = data.approvers;
    this.showApprovalActions = data.showApprovalActions;

    this.workflowHistoryData = this.attestationCasesService.createHistoryTypedEntities(this.case.data).Data;
<<<<<<< HEAD
    
    this.parameters = this.case.attestationParameters.map(column => new BaseReadonlyCdr(column));
=======

    this.parameters = this.case.attestationParameters.map((column) => new BaseReadonlyCdr(column));
>>>>>>> oned/v92

    this.propertyInfo = this.case.propertyInfo;
    this.reportType = this.case.ReportType.value;
    this.reportDownload = this.attestationCasesService.getReportDownloadOptions(this.case);

    this.subscriptions.push(this.attestationAction.applied.subscribe(() => this.sideSheetRef.close()));

<<<<<<< HEAD
    this.subscriptions.push(authentication.onSessionResponse.subscribe(sessionState => this.userUid = sessionState?.UserUid));
  }

  /**
   * Resolve an issue where the mat-tab navigation arrows could appear on first load
   */
  public ngAfterContentInit(): void {
    setTimeout(() => {
      TabControlHelper.triggerResizeEvent();
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public async viewSnapshot(): Promise<void> {
    const opts: EuiSidesheetConfig = {
      title: await this.translate.get('#LDS#Heading View More Details').toPromise(),
      bodyColour: 'asher-gray',
      headerColour: 'purple',
      padding: '1em',
      width: '60%',
      icon: 'reports',
      data: {
        uidCase: this.case.key,
        date: this.case.GetEntity().GetColumn('XDateInserted').GetDisplayValue()
      },
    };
    this.sideSheet.open(AttestationSnapshotComponent, opts);
=======
    this.subscriptions.push(authentication.onSessionResponse.subscribe((sessionState) => (this.userUid = sessionState?.UserUid)));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public async viewSource() {
    const uidPerson = this.case.UID_Person.value;

    const objectKey = DbObjectKey.FromXml(this.case.ObjectKeyBase.value);

    const data: SourceDetectiveSidesheetData = {
      UID_Person: uidPerson,
      Type: SourceDetectiveType.MembershipOfSystemEntitlement,
      UID: objectKey.Keys.join(','),
      TableName: objectKey.TableName,
    };
    this.sideSheet.open(SourceDetectiveSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading View Assignment Analysis').toPromise(),
      subTitle: this.case.GetEntity().GetDisplay(),
      padding: '0px',
      width: 'max(60%,600px)',
      disableClose: false,
      testId: 'attestation-history-details-assignment-analysis',
      data,
    });
>>>>>>> oned/v92
  }
}
