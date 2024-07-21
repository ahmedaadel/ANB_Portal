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
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { EuiCoreModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';

import { BulkPropertyEditorModule, CdrModule, DataSourceToolbarModule, DataTableModule } from 'qbm';
import { JustificationModule } from 'qer';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MitigatingControlsComponent } from './mitigating-controls/mitigating-controls.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BulkPropertyEditorModule, CdrModule, DataSourceToolbarModule, DataTableModule, HelpContextualModule, SelectedElementsModule } from 'qbm';
import { JustificationModule, ObjectHyperviewModule, StatisticsModule } from 'qer';
>>>>>>> oned/v92
import { PolicyViolationsComponent } from './policy-violations.component';
import { PolicyViolationsActionComponent } from './policy-violations-action/policy-violations-action.component';
import { PolicyViolationsActionMultiActionComponent } from './policy-violations-action/policy-violations-action-multi-action/policy-violations-action-multi-action.component';
import { PolicyViolationsActionSingleActionComponent } from './policy-violations-action/policy-violations-action-single-action/policy-violations-action-single-action.component';
import { PolicyViolationsSidesheetComponent } from './policy-violations-sidesheet/policy-violations-sidesheet.component';

<<<<<<< HEAD
=======

>>>>>>> oned/v92
@NgModule({
  declarations: [
    PolicyViolationsComponent,
    PolicyViolationsActionComponent,
    PolicyViolationsActionMultiActionComponent,
    PolicyViolationsActionSingleActionComponent,
<<<<<<< HEAD
    PolicyViolationsSidesheetComponent
  ],
  imports: [
    EuiCoreModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
=======
    PolicyViolationsSidesheetComponent,
    MitigatingControlsComponent
  ],
  imports: [
    EuiCoreModule,
    EuiMaterialModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTooltipModule,
>>>>>>> oned/v92
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    BulkPropertyEditorModule,
    CdrModule,
<<<<<<< HEAD
    JustificationModule,
    DataTableModule,
    DataSourceToolbarModule
=======
    FormsModule,
    JustificationModule,
    DataTableModule,
    DataSourceToolbarModule,
    SelectedElementsModule,
    StatisticsModule,
    HelpContextualModule,
    ObjectHyperviewModule
>>>>>>> oned/v92
  ],
  exports: [PolicyViolationsComponent]
})
export class PolicyViolationsModule { }
