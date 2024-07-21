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
import { Component, ViewEncapsulation, Inject, OnDestroy } from '@angular/core';
import { EUI_SIDESHEET_DATA, EuiSidesheetRef } from '@elemental-ui/core';
import { Subscription } from 'rxjs';

import { ITShopConfig, PortalItshopApproveHistory } from 'imx-api-qer';
=======
import { Component, ViewEncapsulation, Inject, OnDestroy, OnInit } from '@angular/core';
import { EUI_SIDESHEET_DATA, EuiSidesheetRef } from '@elemental-ui/core';
import { Subscription } from 'rxjs';

import { ITShopConfig } from 'imx-api-qer';
>>>>>>> oned/v92
import { AuthenticationService } from 'qbm';
import { Approval } from '../approval';
import { WorkflowActionService } from '../workflow-action/workflow-action.service';
import { ItshopService } from '../../itshop/itshop.service';
<<<<<<< HEAD
=======
import { QerPermissionsService } from '../../admin/qer-permissions.service';
>>>>>>> oned/v92

@Component({
  selector: 'imx-approvals-sidesheet',
  templateUrl: './approvals-sidesheet.component.html',
  styleUrls: ['./approvals-sidesheet.component.scss'],
<<<<<<< HEAD
  encapsulation: ViewEncapsulation.None,
})
export class ApprovalsSidesheetComponent implements OnDestroy {
  public readonly hasPeerGroupAnalysis: boolean;

  public currentUserId: string;
=======
})
export class ApprovalsSidesheetComponent implements OnDestroy, OnInit {
  public readonly hasPeerGroupAnalysis: boolean;

  public currentUserId: string;
  public isChiefApprover:boolean;
>>>>>>> oned/v92

  private readonly subscriptions: Subscription[] = [];

  constructor(
    @Inject(EUI_SIDESHEET_DATA)
    public readonly data: {
      pwo: Approval;
      itShopConfig: ITShopConfig;
<<<<<<< HEAD
=======
      fromInquiry: boolean;
>>>>>>> oned/v92
    },
    public readonly actionService: WorkflowActionService,
    private readonly sideSheetRef: EuiSidesheetRef,
    itshop: ItshopService,
<<<<<<< HEAD
    authentication: AuthenticationService
=======
    authentication: AuthenticationService,
    private readonly permission: QerPermissionsService
>>>>>>> oned/v92
  ) {
    this.subscriptions.push(this.actionService.applied.subscribe(() => this.sideSheetRef.close()));
    this.subscriptions.push(authentication.onSessionResponse.subscribe((state) => (this.currentUserId = state.UserUid)));

    if (this.data.pwo.pwoData?.WorkflowHistory) {
      const history = itshop.createTypedHistory(this.data.pwo.pwoData);
      this.hasPeerGroupAnalysis = history.some((item) =>
        ['EXWithPeerGroupAnalysis', 'Peer group analysis'].includes(item.Ident_PWODecisionStep.value)
      );
    }
  }
<<<<<<< HEAD
=======
  public async  ngOnInit(): Promise<void> {
    this.isChiefApprover = await this.permission.isCancelPwO();
  }
>>>>>>> oned/v92

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public async acceptTermsOfUse(): Promise<void> {
    /* TODO #241926
    lock DoApprove as long as MustApproveTermsOfUse is true for a PWOToDecide

    QER_ITShop_AcceptTermsOfUse({
        HeaderText: '#LDS#You must accept the terms of use before proceeding.',
        AccProductFilter: this.SelectedRequest.UID_AccProduct.value,
        OnTermsOfUseAccepted: () => {
            this.session.Client.termsofuse_accept_post(bla);
            // TODO later: trigger reload of decision history for this request
            this.router.navigate(["form:Approvals"], {});
        }
    });
    */
  }

  public canDenyApproval(): boolean {
    return this.data.pwo.canDenyApproval(this.currentUserId);
  }

<<<<<<< HEAD
  public askForHelp(): void {
    // TODO later
    // this.dialog.open(QueryPersonComponent);
  }

=======
>>>>>>> oned/v92
  public showEntireRequest(): void {
    /* TODO later
    RedirectFormModule({ "ScriptItemUID": "RedirectForm1", "ID": "VI_ITShop_PWOOverviewForShoppingCartOrder" }, () => {
        VirtualTableMapping({ "ScriptItemUID": "VirtualTableMapping7", "VirtualTable": "PersonWantsOrg", "DataTable": "PWOToDecide" });
    });
    */
  }

  public modifyPriority(): void {
    // TODO later
  }
}
