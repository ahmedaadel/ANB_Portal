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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
<<<<<<< HEAD
=======
import { MatCardModule } from '@angular/material/card';
>>>>>>> oned/v92
import { RouterModule } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

<<<<<<< HEAD
import { DataSourceToolbarModule, DataTableModule, CdrModule, EntityModule, BulkPropertyEditorModule, DateModule } from 'qbm';
import { AttestationDecisionComponent } from './attestation-decision.component';
import { AttestationCaseComponent } from './attestation-case.component';
import { AttestationActionComponent } from '../attestation-action/attestation-action.component';
import { JustificationModule } from 'qer';
=======
import { DataSourceToolbarModule, DataTableModule, CdrModule, EntityModule, BulkPropertyEditorModule, DateModule, SelectedElementsModule, HelpContextualModule } from 'qbm';
import { AttestationDecisionComponent } from './attestation-decision.component';
import { AttestationCaseComponent } from './attestation-case.component';
import { AttestationActionComponent } from '../attestation-action/attestation-action.component';
import { JustificationModule, ObjectHyperviewModule, TermsOfUseModule } from 'qer';
>>>>>>> oned/v92
import { DecisionHistoryItemComponent } from './decision-history-item/decision-history-item.component';
import { ApproversComponent } from './approvers/approvers.component';
import { EntityPropertyEditorComponent } from '../entity-property-editor/entity-property-editor.component';
import { AttestationDisplayModule } from '../attestation-display/attestation-display.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AttestationSnapshotModule } from '../attestation-snapshot/attestation-snapshot.module';
import { LossPreviewDialogComponent } from './loss-preview-dialog/loss-preview-dialog.component';
import { LossPreviewTableComponent } from './loss-preview-table/loss-preview-table.component';
import { DecisionComplianceViolationComponent } from './decision-compliance-violation/decision-compliance-violation.component';
<<<<<<< HEAD
import { MitigatingControlsComponent } from './mitigating-controls/mitigating-controls.component';
=======
import { DecisionPolicyViolationComponent } from './decision-policy-violation/decision-policy-violation.component';
import { MitigatingControlsComponent } from './mitigating-controls/mitigating-controls.component';
import { AttestationInquiriesComponent } from './attestation-inquiries/attestation-inquiries.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
>>>>>>> oned/v92
@NgModule({
  declarations: [
    AttestationCaseComponent,
    AttestationDecisionComponent,
    AttestationActionComponent,
    DecisionHistoryItemComponent,
    ApproversComponent,
    EntityPropertyEditorComponent,
    LossPreviewDialogComponent,
    LossPreviewTableComponent,
    DecisionComplianceViolationComponent,
<<<<<<< HEAD
    MitigatingControlsComponent
=======
    DecisionPolicyViolationComponent,
    MitigatingControlsComponent,
    AttestationInquiriesComponent
>>>>>>> oned/v92
  ],
  imports: [
    AttestationSnapshotModule,
    CommonModule,
    CdrModule,
    EntityModule,
    EuiCoreModule,
    EuiMaterialModule,
    JustificationModule,
    TranslateModule,
    DataSourceToolbarModule,
    DataTableModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
<<<<<<< HEAD
=======
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
>>>>>>> oned/v92
    MatTooltipModule,
    ReactiveFormsModule,
    BulkPropertyEditorModule,
    AttestationDisplayModule,
    MatExpansionModule,
<<<<<<< HEAD
    DateModule
=======
    DateModule,
    TermsOfUseModule,
    AttestationSnapshotModule,
    SelectedElementsModule,
    MatIconModule,
    HelpContextualModule,
    ObjectHyperviewModule
>>>>>>> oned/v92
  ],
  exports: [
    DecisionHistoryItemComponent,
    ApproversComponent
  ]
})
export class AttestationDecisionModule { }
