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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
<<<<<<< HEAD
=======
import { MatTabsModule } from '@angular/material/tabs';
>>>>>>> oned/v92

import {
  BulkPropertyEditorModule,
  CdrModule,
  ClassloggerService,
  DataSourceToolbarModule,
  DataTableModule,
  DateModule,
  EntityModule,
  LdsReplaceModule,
  MenuItem,
  MenuService,
<<<<<<< HEAD
  RouteGuardService
=======
  BusyIndicatorModule,
  RouteGuardService,
  SelectedElementsModule,
  HelpContextualModule,
  HELP_CONTEXTUAL
>>>>>>> oned/v92
} from 'qbm';

import { ApprovalsComponent } from './approvals.component';
import { ApprovalsTableComponent } from './approvals-table.component';
import { ApprovalsService } from './approvals.service';
import { ApprovalsSidesheetComponent } from './approvals-sidesheet/approvals-sidesheet.component';
import { QueryPersonComponent } from './workflow-actions/query-person.component';
import { WorkflowActionComponent } from './workflow-action/workflow-action.component';
import { ItshopModule } from '../itshop/itshop.module';
import { RequestHistoryModule } from '../request-history/request-history.module';
import { RequestsFeatureGuardService } from '../requests-feature-guard.service';
import { JustificationModule } from '../justification/justification.module';
import { WorkflowMultiActionComponent } from './workflow-action/workflow-multi-action/workflow-multi-action.component';
import { WorkflowSingleActionComponent } from './workflow-action/workflow-single-action/workflow-single-action.component';
import { RecommendationSidesheetComponent } from './recommendation-sidesheet/recommendation-sidesheet.component';
<<<<<<< HEAD
=======
import { ApprovalHistoryComponent } from './workflow-action/approval-history/approval-history.component';
import { HistoryFilterComponent } from './workflow-action/approval-history/history-filter/history-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InquiriesComponent } from './inquiries/inquiries.component'
>>>>>>> oned/v92

const routes: Routes = [
  {
    path: 'itshop/approvals',
    component: ApprovalsComponent,
    canActivate: [RouteGuardService, RequestsFeatureGuardService],
    resolve: [RouteGuardService]
  },
];

@NgModule({
  declarations: [
    ApprovalsComponent,
    ApprovalsTableComponent,
    ApprovalsSidesheetComponent,
    QueryPersonComponent,
    WorkflowActionComponent,
    WorkflowMultiActionComponent,
    WorkflowSingleActionComponent,
<<<<<<< HEAD
    RecommendationSidesheetComponent
  ],
  imports: [
    BulkPropertyEditorModule,
=======
    RecommendationSidesheetComponent,
    InquiriesComponent,
    ApprovalHistoryComponent,
    HistoryFilterComponent
  ],
  imports: [
    BulkPropertyEditorModule,
    BusyIndicatorModule,
    MatCheckboxModule,
    MatTabsModule,
>>>>>>> oned/v92
    CdrModule,
    CommonModule,
    DataSourceToolbarModule,
    DataTableModule,
    DateModule,
    EntityModule,
    EuiCoreModule,
    EuiMaterialModule,
    FormsModule,
    ItshopModule,
    JustificationModule,
    LdsReplaceModule,
    ReactiveFormsModule,
    RequestHistoryModule,
    RouterModule.forChild(routes),
<<<<<<< HEAD
    TranslateModule
=======
    TranslateModule,
    SelectedElementsModule,
    HelpContextualModule,
>>>>>>> oned/v92
  ],
  providers: [
    ApprovalsService
  ],
<<<<<<< HEAD
=======
  exports: [
    RecommendationSidesheetComponent
  ]
>>>>>>> oned/v92
})
export class ApprovalsModule {
  constructor(
    private readonly menuService: MenuService,
    logger: ClassloggerService
  ) {
    logger.info(this, '▶️ ApprovalsModule loaded');
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories(
<<<<<<< HEAD
      (preProps: string[], groups: string[]) => {
=======
      (preProps: string[], features: string[]) => {
>>>>>>> oned/v92

        const items: MenuItem[] = [];

        if (preProps.includes('ITSHOP')) {
          items.push(
            {
              id: 'QER_Request_PendingRequests',
              navigationCommands: {
                commands: ['itshop', 'approvals']
              },
              title: '#LDS#Menu Entry Pending requests',
              sorting: '10-30',
            },
          );
        }

        if (items.length === 0) {
          return null;
        }
        return {
          id: 'ROOT_Request',
          title: '#LDS#Requests',
          sorting: '10',
          items
        };
      },
    );
  }
}
