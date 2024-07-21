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
import { Component, Input } from '@angular/core';

import { RequestHistoryLoadParameters } from './request-history-load-parameters.interface';
=======
import { Component, OnInit } from '@angular/core';
import { QerPermissionsService } from  '../admin/qer-permissions.service';
import { HELP_CONTEXTUAL, HelpContextualValues } from 'qbm';
>>>>>>> oned/v92

@Component({
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.scss']
})
<<<<<<< HEAD
export class RequestHistoryComponent {
  public filter: RequestHistoryLoadParameters = {};

  @Input() public auditMode = false;

  @Input() public form: 'Approver' | 'Request' = 'Request';

  public recallDecision(): void {
    /* TODO
    this.dialogService.open(RecallDecisionComponent, {
        data: { // TODO }
    });
    */
=======
export class RequestHistoryComponent implements OnInit {

  public auditMode = false;
  contextId: HelpContextualValues;

  constructor(
    private readonly qerPermissionService: QerPermissionsService,
  ) {}

  public async ngOnInit(): Promise<void> {
    this.auditMode = await this.qerPermissionService.isShopStatistics();
    if(this.auditMode){
      this.contextId = HELP_CONTEXTUAL.RequestHistoryAuditor;
    }else{
      this.contextId = HELP_CONTEXTUAL.RequestHistory;
    }
    
>>>>>>> oned/v92
  }
}
