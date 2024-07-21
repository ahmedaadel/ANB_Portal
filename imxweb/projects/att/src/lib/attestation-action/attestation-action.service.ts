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

import { Injectable, Type } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { PortalAttestationApprove } from 'imx-api-att';
<<<<<<< HEAD
import { IEntityColumn, ValType } from 'imx-qbm-dbts';
import { SnackBarService, EntityService, ColumnDependentReference, BaseCdr, ExtService } from 'qbm';
import { JustificationService, JustificationType, PersonService, ProjectConfigurationService } from 'qer';
=======
import { CompareOperator, EntityData, FilterType, ValType } from 'imx-qbm-dbts';
import { SnackBarService, EntityService, ColumnDependentReference, BaseCdr, ExtService, BaseReadonlyCdr, CdrFactoryService } from 'qbm';
import { JustificationService, JustificationType, PersonService, UserModelService } from 'qer';
>>>>>>> oned/v92
import { AttestationCasesService } from '../decision/attestation-cases.service';
import { AttestationActionComponent } from './attestation-action.component';
import { AttestationCase } from '../decision/attestation-case';
import { AttestationWorkflowService } from './attestation-workflow.service';
import { AttestationCaseAction } from './attestation-case-action.interface';
import { ApiService } from '../api.service';
<<<<<<< HEAD

@Injectable({
  providedIn: 'root'
=======
import { AttestationInquiry } from '../decision/attestation-inquiries/attestation-inquiry.model';

@Injectable({
  providedIn: 'root',
>>>>>>> oned/v92
})
export class AttestationActionService {
  public readonly applied = new Subject();

  constructor(
<<<<<<< HEAD
    private readonly projectConfig: ProjectConfigurationService,
=======
>>>>>>> oned/v92
    private readonly apiService: ApiService,
    private readonly justification: JustificationService,
    private readonly attestationCases: AttestationCasesService,
    private readonly sideSheet: EuiSidesheetService,
    private readonly busyService: EuiLoadingService,
    private readonly translate: TranslateService,
    private readonly snackBar: SnackBarService,
    private readonly entityService: EntityService,
    private readonly person: PersonService,
<<<<<<< HEAD
    private readonly workflow: AttestationWorkflowService,
    private readonly extService: ExtService
  ) { }

  public async directDecision(attestationCases: AttestationCase[], userUid: string): Promise<void> {
    const actionParameters = {
      reason: this.createCdrReason()
=======
    private readonly workflow: AttestationWorkflowService,    
    private readonly userService: UserModelService,
    private readonly extService: ExtService
  ) {}

  public async directDecision(attestationCases: AttestationCase[], userUid: string): Promise<void> {
    const actionParameters = {
      reason: this.createCdrReason(),
>>>>>>> oned/v92
    };

    const workflow = {
      title: '#LDS#Approval level',
      placeholder: '#LDS#Select approval level',
<<<<<<< HEAD
      data: {}
    };

    let busyIndicator: OverlayRef;
    setTimeout(() => busyIndicator = this.busyService.show());
=======
      data: {},
    };

    let busyIndicator: OverlayRef;
    setTimeout(() => (busyIndicator = this.busyService.show()));
>>>>>>> oned/v92

    try {
      for (const attestationCase of attestationCases) {
        const levelNumbers = attestationCase.getLevelNumbers(userUid);
<<<<<<< HEAD
        workflow.data[attestationCase.key] =
          (await this.workflow.get(attestationCase.key)).Data
            .filter(item => levelNumbers.includes(item.LevelNumber.value))
            .filter((item, index, array) => array.map(mapObj => mapObj.LevelNumber.value).indexOf(item.LevelNumber.value) === index)
            .map(item => item.GetEntity());
=======
        workflow.data[attestationCase.key] = (await this.workflow.get(attestationCase.key)).Data.filter((item) =>
          levelNumbers.includes(item.LevelNumber.value)
        )
          .filter((item, index, array) => array.map((mapObj) => mapObj.LevelNumber.value).indexOf(item.LevelNumber.value) === index)
          .map((item) => item.GetEntity());
>>>>>>> oned/v92
      }
    } finally {
      setTimeout(() => this.busyService.hide(busyIndicator));
    }

    return this.editAction({
      title: '#LDS#Heading Reroute Approval',
      data: { attestationCases, actionParameters, workflow },
      message: '#LDS#{0} approvals have been successfully rerouted.',
<<<<<<< HEAD
      apply: (attestationCase: AttestationCase) => this.attestationCases.directDecision(attestationCase, {
        Reason: actionParameters.reason.column.GetValue(),
        Offset: attestationCase.decisionOffset
      })
=======
      apply: (attestationCase: AttestationCase) =>
        this.attestationCases.directDecision(attestationCase, {
          Reason: actionParameters.reason.column.GetValue(),
          Offset: attestationCase.decisionOffset,
        }),
>>>>>>> oned/v92
    });
  }

  public async addAdditionalAttestor(attestationCases: PortalAttestationApprove[]): Promise<void> {
    const actionParameters = {
      reason: this.createCdrReason({ mandatory: true }),
<<<<<<< HEAD
      person: this.createCdrPerson('#LDS#Additional attestor')
=======
      person: this.createCdrPerson('#LDS#Additional attestor'),
>>>>>>> oned/v92
    };

    return this.editAction({
      title: '#LDS#Heading Add Additional Attestor',
      data: { attestationCases, actionParameters, description: '#LDS#Specify an additional attestor' },
      getMessage: () => ({
        key: '#LDS#"{1}" has been successfully added as additional attestor for {0} attestation cases.',
<<<<<<< HEAD
        parameters: [attestationCases.length, actionParameters.person.column.GetDisplayValue()]
      }),
      apply: (attestationCase: PortalAttestationApprove) => this.attestationCases.addAdditional(attestationCase, {
        Reason: actionParameters.reason.column.GetValue(),
        UidPerson: actionParameters.person.column.GetValue()
      })
=======
        parameters: [attestationCases.length, actionParameters.person.column.GetDisplayValue()],
      }),
      apply: (attestationCase: PortalAttestationApprove) =>
        this.attestationCases.addAdditional(attestationCase, {
          Reason: actionParameters.reason.column.GetValue(),
          UidPerson: actionParameters.person.column.GetValue(),
        }),
>>>>>>> oned/v92
    });
  }

  public async delegateDecision(attestationCases: PortalAttestationApprove[]): Promise<void> {
    const actionParameters = {
      reason: this.createCdrReason({ mandatory: true }),
<<<<<<< HEAD
      person: this.createCdrPerson('#LDS#Delegate to')
=======
      person: this.createCdrPerson('#LDS#Delegate to'),
>>>>>>> oned/v92
    };

    return this.editAction({
      title: '#LDS#Heading Delegate Approval',
      data: { attestationCases, actionParameters, description: '#LDS#Specify an identity who should decide instead' },
      getMessage: () => ({
        key: '#LDS#{0} approvals have been successfully delegated to "{1}".',
<<<<<<< HEAD
        parameters: [attestationCases.length, actionParameters.person.column.GetDisplayValue()]
      }),
      apply: (attestationCase: PortalAttestationApprove) => this.attestationCases.addInsteadOf(attestationCase, {
        Reason: actionParameters.reason.column.GetValue(),
        UidPerson: actionParameters.person.column.GetValue()
      })
=======
        parameters: [attestationCases.length, actionParameters.person.column.GetDisplayValue()],
      }),
      apply: (attestationCase: PortalAttestationApprove) =>
        this.attestationCases.addInsteadOf(attestationCase, {
          Reason: actionParameters.reason.column.GetValue(),
          UidPerson: actionParameters.person.column.GetValue(),
        }),
>>>>>>> oned/v92
    });
  }

  public async escalateDecisions(attestationCases: PortalAttestationApprove[]): Promise<void> {
    const actionParameters = {
<<<<<<< HEAD
      reason: this.createCdrReason({ mandatory: true })
=======
      reason: this.createCdrReason({ mandatory: true }),
>>>>>>> oned/v92
    };

    return this.editAction({
      title: '#LDS#Heading Escalate Approval',
      data: { attestationCases, actionParameters },
      getMessage: () => ({
        key: '#LDS#{0} approvals have been successfully escalated.',
<<<<<<< HEAD
        parameters: [attestationCases.length]
      }),
      apply: (attestationCase: PortalAttestationApprove) =>
        this.attestationCases.escalateDecision(attestationCase, {Reason: actionParameters.reason.column.GetValue()})
    });
  }


  public async revokeAdditional(attestationCases: PortalAttestationApprove[]): Promise<void> {
    const actionParameters = {
      reason: this.createCdrReason({ mandatory: true })
=======
        parameters: [attestationCases.length],
      }),
      apply: (attestationCase: PortalAttestationApprove) =>
        this.attestationCases.escalateDecision(attestationCase, { Reason: actionParameters.reason.column.GetValue() }),
    });
  }

  public async revokeAdditional(attestationCases: PortalAttestationApprove[]): Promise<void> {
    const actionParameters = {
      reason: this.createCdrReason({ mandatory: true }),
>>>>>>> oned/v92
    };

    return this.editAction({
      title: '#LDS#Heading Withdraw Additional Attestor',
      data: { attestationCases, actionParameters },
      message: '#LDS#The additional attestors of {0} attestation cases have been successfully withdrawn.',
<<<<<<< HEAD
      apply: (attestationCase: PortalAttestationApprove) => this.attestationCases.revokeAdditional(attestationCase, {
        Reason: actionParameters.reason.column.GetValue()
      })
=======
      apply: (attestationCase: PortalAttestationApprove) =>
        this.attestationCases.revokeAdditional(attestationCase, {
          Reason: actionParameters.reason.column.GetValue(),
        }),
>>>>>>> oned/v92
    });
  }

  public async denyDecisions(attestationCases: PortalAttestationApprove[]): Promise<void> {
    const actionParameters = {
<<<<<<< HEAD
      reason: this.createCdrReason({ mandatory: true })
=======
      reason: this.createCdrReason({ mandatory: true }),
>>>>>>> oned/v92
    };

    return this.editAction({
      title: '#LDS#Heading Reject Approval',
      data: { attestationCases, actionParameters },
      message: '#LDS#{0} approvals have been successfully rejected.',
<<<<<<< HEAD
      apply: (attestationCase: PortalAttestationApprove) => this.attestationCases.denyDecision(attestationCase, {
        Reason: actionParameters.reason.column.GetValue()
      })
=======
      apply: (attestationCase: PortalAttestationApprove) =>
        this.attestationCases.denyDecision(attestationCase, {
          Reason: actionParameters.reason.column.GetValue(),
        }),
>>>>>>> oned/v92
    });
  }

  public async checkForViolations(attestationCases: AttestationCase[]): Promise<void> {
    let isApprovable = true;
    for (const attestationCase of attestationCases) {
<<<<<<< HEAD
      const isAllAllowable = attestationCase.data.ComplianceViolations.every(item => item.IsExceptionAllowed);
=======
      const isAllAllowable = attestationCase.data.ComplianceViolations.every((item) => item.IsExceptionAllowed);
>>>>>>> oned/v92
      if (!isAllAllowable) {
        // Found a case that has an unexceptional violation, break early
        isApprovable = false;
        break;
      }
    }

    if (isApprovable) {
      return this.approve(attestationCases);
    } else {
      let message: string;
      if (attestationCases.length === 1) {
        // Special case length one
<<<<<<< HEAD
        message = '#LDS#You cannot approve this attestation case. There are rule violations for the attestation case for which no exceptions may be granted.';
      } else {
        message = '#LDS#You cannot approve these attestation cases. There are rule violations for at least one attestation case for which no exceptions may be granted.';
      }
      this.snackBar.open({key: message});
=======
        message =
          '#LDS#You cannot approve this attestation case. There are rule violations for the attestation case for which no exceptions may be granted.';
      } else {
        message =
          '#LDS#You cannot approve these attestation cases. There are rule violations for at least one attestation case for which no exceptions may be granted.';
      }
      this.snackBar.open({ key: message });
>>>>>>> oned/v92
    }
  }

  public async checkMFA(uidCases: string[]): Promise<boolean> {
    this.busyService.show();
    let workflowActionId: string;
    let mfaComponent: Type<any>;
    let response: boolean;
    try {
<<<<<<< HEAD
      workflowActionId = await this.apiService.client.portal_attestation_stepup_post({UidCases: uidCases});
=======
      workflowActionId = await this.apiService.client.portal_attestation_stepup_post({ UidCases: uidCases });
>>>>>>> oned/v92
      mfaComponent = (await this.extService.getFittingComponent('mfaComponent')).instance;
    } catch {
      throw Error('The OLG module is not configured correctly');
    } finally {
      this.busyService.hide();
<<<<<<< HEAD
    }
    response = await this.sideSheet.open(mfaComponent, {
      title: await this.translate.get('#LDS#Header Authenticate using OneLogin').toPromise(),
      padding: '0px',
      headerColour: 'iris-blue',
      bodyColour: 'asher-gray',
      testId: 'imx-attestation-approval-mfa',
      width: 'max(700px, 60%)',
      data: {
        workflowActionId
      }
    }).afterClosed().toPromise();
=======
      response = await this.sideSheet
        .open(mfaComponent, {
          title: await this.translate.get('#LDS#Heading Authenticate Using OneLogin').toPromise(),
          padding: '0px',
          testId: 'imx-attestation-approval-mfa',
          width: 'max(700px, 60%)',
          data: {
            workflowActionId,
          },
        })
        .afterClosed()
        .toPromise();
    }
>>>>>>> oned/v92
    return response;
  }

  public async approve(attestationCases: AttestationCaseAction[]): Promise<void> {
<<<<<<< HEAD
    // Check for itshop stepup and if any cases have mfa required
    const itShopConfig = (await this.projectConfig.getConfig()).ITShopConfig;
    const uidCases: string[] = [];
    const anyMFACases = attestationCases.map((attestationCase) => {
      const attCase = attestationCase.typedEntity as PortalAttestationApprove;
      uidCases.push(attestationCase.key);
      return attCase?.IsApproveRequiresMfa.value;
    }).some(isMfa => isMfa);
    if (itShopConfig.StepUpAuthenticationProvider !== 'NoAuth' && anyMFACases) {
=======
    // Check is any case has an MFA property, open sidesheet if so
    const uidCases: string[] = [];
    const anyMFACases = attestationCases
      .map((attestationCase) => {
        const attCase = attestationCase.typedEntity as PortalAttestationApprove;
        uidCases.push(attestationCase.key);
        return attCase?.IsApproveRequiresMfa.value;
      })
      .some((isMfa) => isMfa);
    if (anyMFACases) {
>>>>>>> oned/v92
      const isMFA = await this.checkMFA(uidCases);
      if (!isMFA) {
        return;
      }
    }
    return this.makeDecisions(attestationCases, true);
  }

  public async deny(attestationCases: AttestationCaseAction[]): Promise<void> {
    // TODO later: preview effects of auto-remove before making negative decision (ATT_AttestationCase_PreviewAutoRemove)
    return this.makeDecisions(attestationCases, false);
  }

<<<<<<< HEAD
  public createCdrReason(metadata: { display?: string, mandatory?: boolean } = {}): ColumnDependentReference {
=======
  public async answerQuestion(attestationCase: AttestationCase): Promise<void> {
    const actionParameters = {
      reason: this.createCdrReason({ display: '#LDS#Reply', mandatory: true }),
    };

    const pwo = this.getCaseData(attestationCase);
    const additionalInfo = [
      new BaseReadonlyCdr(
        this.entityService.createLocalEntityColumn(
          { Type: ValType.Date, ColumnName: 'DateHead', Display: AttestationInquiry.queryDate },
          undefined,
          pwo.Columns.DateHead
        )
      ),
      new BaseReadonlyCdr(
        this.entityService.createLocalEntityColumn(
          { Type: ValType.String, ColumnName: 'ReasonHead', Display: AttestationInquiry.queryCaption },
          undefined,
          pwo.Columns.ReasonHead
        )
      ),
      new BaseReadonlyCdr(
        this.entityService.createLocalEntityColumn(
          { Type: ValType.String, ColumnName: 'DisplayPersonHead', Display: AttestationInquiry.headCaption },
          undefined,
          pwo.Columns.DisplayPersonHead
        )
      ),
    ];

    return this.editAction({
      title: '#LDS#Heading Reply to Inquiry',
      message: '#LDS#The reply to the inquiry has been successfully sent.',
      data: {
        actionParameters,
        additionalInfo,
        attestationCases: [attestationCase],
        description: '#LDS#Here you can reply to the inquiry.',
      },
      apply: (singleAttestationCase: PortalAttestationApprove) =>
        this.attestationCases.answerQuestion(singleAttestationCase, actionParameters.reason.column.GetValue()),
    });
  }

  public getCaseData(pwo: AttestationCase): EntityData {
    const questionHistory = pwo.data.WorkflowHistory.Entities.filter(
      (entityData) => entityData.Columns.DecisionLevel.Value === pwo.DecisionLevel.value
    ).sort((item1, item2) => this.ascendingDate(item1.Columns.XDateInserted?.Value, item2.Columns.XDateInserted?.Value));
    return questionHistory[0];
  }

  public async recallInquiry(attestationCases: PortalAttestationApprove[]): Promise<void> {
    const actionParameters = {
      reason: this.createCdrReason(),
    };

    return this.editAction({
      title: '#LDS#Heading Withdraw Inquiry',
      message: '#LDS#The inquiry has been successfully withdrawn.',
      data: {
        actionParameters,
        attestationCases,
      },
      apply: (request: PortalAttestationApprove) =>
        this.attestationCases.recallInquiry(request, { Reason: actionParameters.reason.column.GetValue() }),
    });
  }

  public async resetReservation(attestationCases: PortalAttestationApprove[]): Promise<void> {
    const actionParameters = {
      reason: this.createCdrReason(),
    };

    return this.editAction({
      title: '#LDS#Heading Cancel Reservation',
      message: '#LDS#The reservation has been successfully canceled.',
      data: {
        actionParameters,
        attestationCases,
      },
      apply: (request: PortalAttestationApprove) =>
        this.attestationCases.resetReservation(request, { Reason: actionParameters.reason.column.GetValue() }),
    });
  }

  public async sendInquiry(attestationCases: PortalAttestationApprove[], uidPerson: string): Promise<void> {
    const actionParameters = {
      reason: this.createCdrText(),
      person: this.createCdrQuestioneer(uidPerson),
    };

    return this.editAction({
      title: '#LDS#Heading Send Inquiry',
      message: '#LDS#The inquiry has been successfully sent.',
      data: {
        actionParameters,
        attestationCases,
      },
      apply: (request: PortalAttestationApprove) =>
        this.attestationCases.askForHelp(request, {
          UidPerson: actionParameters.person.column.GetValue(),
          Text: actionParameters.reason.column.GetValue(),
        }),
    });
  }

  public createCdrReason(metadata: { display?: string; mandatory?: boolean } = {}): ColumnDependentReference {
>>>>>>> oned/v92
    return new BaseCdr(
      this.entityService.createLocalEntityColumn({
        ColumnName: 'ReasonHead',
        Type: ValType.Text,
        IsMultiLine: true,
<<<<<<< HEAD
        MinLen: metadata.mandatory ? 1 : 0
=======
        MinLen:metadata.mandatory ? 1 : 0
>>>>>>> oned/v92
      }),
      metadata.display || '#LDS#Reason for your decision'
    );
  }

<<<<<<< HEAD
=======
  private ascendingDate(value1: Date, value2: Date): number {
    if (value1 < value2) {
      return 1;
    }

    if (value1 > value2) {
      return -1;
    }

    return 0;
  }

  private createCdrText(): BaseCdr {
    const column = this.entityService.createLocalEntityColumn({
      ColumnName: 'Querytext',
      Type: ValType.Text,
      IsMultiLine: true,
      MinLen: 1,
    });

    return new BaseCdr(column, '#LDS#Inquiry');
  }

  private createCdrQuestioneer(uidPerson: string): BaseCdr {
    const fkRelation = {
      ChildColumnName: 'UID_PersonRelated',
      ParentTableName: 'Person',
      ParentColumnName: 'UID_Person',
      IsMemberRelation: false,
    };

    const column = this.entityService.createLocalEntityColumn(
      {
        ColumnName: fkRelation.ChildColumnName,
        Type: ValType.String,
        FkRelation: fkRelation,
        MinLen: 1,
      },
      [
        this.person.createFkProviderItem(fkRelation, [
          { ColumnName: 'UID_Person', CompareOp: CompareOperator.NotEqual, Type: FilterType.Compare, Value1: uidPerson },
        ]),
      ]
    );

    return new BaseCdr(column, '#LDS#Recipient of the inquiry');
  }

>>>>>>> oned/v92
  private async makeDecisions(attestationCases: AttestationCaseAction[], approve: boolean): Promise<void> {
    let justification: ColumnDependentReference;

    let busyIndicator: OverlayRef;
<<<<<<< HEAD
    setTimeout(() => busyIndicator = this.busyService.show());

    try {
      justification = await this.justification.createCdr(
        approve ? JustificationType.approveAttestation : JustificationType.denyAttestation
=======
    setTimeout(() => (busyIndicator = this.busyService.show()));

    const maxReasonType = Math.max(
      ...attestationCases.map((elem) =>
        CdrFactoryService.tryGetColumn(elem.typedEntity.GetEntity(), approve ? 'ApproveReasonType' : 'DenyReasonType')?.GetValue()
      )
    );

    try {
      justification = await this.justification.createCdr(
        approve ? JustificationType.approveAttestation : JustificationType.denyAttestation,
>>>>>>> oned/v92
      );
    } finally {
      setTimeout(() => this.busyService.hide(busyIndicator));
    }

    const actionParameters = {
      justification,
<<<<<<< HEAD
      reason: this.createCdrReason({ display: justification ? '#LDS#Additional comments about your decision' : undefined })
=======
      reason: this.createCdrReason({
        display: justification ? '#LDS#Additional comments about your decision' : undefined,
      }),
>>>>>>> oned/v92
    };

    return this.editAction({
      title: approve ? '#LDS#Heading Approve Attestation Case' : '#LDS#Heading Deny Attestation Case',
<<<<<<< HEAD
      headerColour: approve ? 'aspen-green' : 'corbin-orange',
      data: { attestationCases, actionParameters, approve },
      message: approve ? '#LDS#{0} attestation cases have been successfully approved.'
=======
      data: { attestationCases, actionParameters, approve, maxReasonType },
      message: approve
        ? '#LDS#{0} attestation cases have been successfully approved.'
>>>>>>> oned/v92
        : '#LDS#{0} attestation cases have been successfully denied.',
      apply: async (attestationCase: AttestationCase) => {
        if (approve) {
          await attestationCase.commit(false /* avoid expensive reload */);
        }
        return this.attestationCases.makeDecision(attestationCase, {
          Reason: actionParameters.reason.column.GetValue(),
          UidJustification: actionParameters.justification?.column?.GetValue(),
<<<<<<< HEAD
          Decision: approve
        });
      }
=======
          Decision: approve,
        });
      },
>>>>>>> oned/v92
    });
  }

  private async editAction(config: any): Promise<void> {
<<<<<<< HEAD
    const result = await this.sideSheet.open(AttestationActionComponent, {
      title: await this.translate.get(config.title).toPromise(),
      headerColour: config.headerColour ?? 'iris-blue',
      panelClass: 'imx-sideSheet',
      padding: '0',
      width: '600px',
      testId: 'attestation-action-sideSheet',
      data: config.data
    }).afterClosed().toPromise();

    if (result) {
      let busyIndicator: OverlayRef;
      setTimeout(() => busyIndicator = this.busyService.show());
=======
    const result = await this.sideSheet
      .open(AttestationActionComponent, {
        title: await this.translate.get(config.title).toPromise(),
        subTitle: config.data.attestationCases.length === 1 ? config.data.attestationCases[0].GetEntity().GetDisplay() : '',
        padding: '0px',
        width: 'max(40%,600px)',
        testId: 'attestation-action-sideSheet',
        data: config.data,
      })
      .afterClosed()
      .toPromise();

    if (result) {
      let busyIndicator: OverlayRef;
      setTimeout(() => (busyIndicator = this.busyService.show()));
>>>>>>> oned/v92

      let success: boolean;
      try {
        for (const attestationCase of config.data.attestationCases) {
          await config.apply(attestationCase);
        }
        success = true;
<<<<<<< HEAD
=======
        await this.userService.reloadPendingItems();
>>>>>>> oned/v92
      } finally {
        setTimeout(() => this.busyService.hide(busyIndicator));
      }

      if (success) {
<<<<<<< HEAD
        this.snackBar.open(config.getMessage ?
          config.getMessage() :
          { key: config.message, parameters: [config.data.attestationCases.length] }
=======
        this.snackBar.open(
          config.getMessage ? config.getMessage() : { key: config.message, parameters: [config.data.attestationCases.length] }
>>>>>>> oned/v92
        );
        this.applied.next();
      }
    } else {
      this.snackBar.open({ key: '#LDS#You have canceled the action.' });
    }
  }

  private createCdrPerson(display?: string): ColumnDependentReference {
    const fkRelation = {
      ChildColumnName: 'UID_PersonRelated',
      ParentTableName: 'Person',
      ParentColumnName: 'UID_Person',
<<<<<<< HEAD
      IsMemberRelation: false
=======
      IsMemberRelation: false,
>>>>>>> oned/v92
    };

    return new BaseCdr(
      this.entityService.createLocalEntityColumn(
        {
          ColumnName: fkRelation.ChildColumnName,
          Type: ValType.String,
          FkRelation: fkRelation,
<<<<<<< HEAD
          IsValidColumnForFiltering: true,
          MinLen: 1
=======
          MinLen: 1,
>>>>>>> oned/v92
        },
        [this.person.createFkProviderItem(fkRelation)]
      ),
      display || '#LDS#Identity'
    );
  }
}
