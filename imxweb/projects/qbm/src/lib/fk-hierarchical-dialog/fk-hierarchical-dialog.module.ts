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
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { FkHierarchicalDialogComponent } from './fk-hierarchical-dialog.component';
import { ConfirmationModule } from '../confirmation/confirmation.module';
import { DataTreeWrapperModule } from '../data-tree-wrapper/data-tree-wrapper.module';
<<<<<<< HEAD
=======
    
import {SelectedElementsModule} from '../selected-elements/selected-elements.module';
import { EuiCoreModule } from '@elemental-ui/core';
>>>>>>> oned/v92

@NgModule({

  declarations: [FkHierarchicalDialogComponent],
  imports: [
<<<<<<< HEAD
=======
    EuiCoreModule,
>>>>>>> oned/v92
    CommonModule,
    FormsModule,
    TranslateModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    DataTreeWrapperModule,
<<<<<<< HEAD
    ConfirmationModule
=======
    ConfirmationModule,
    SelectedElementsModule
>>>>>>> oned/v92
  ],
  exports: [FkHierarchicalDialogComponent]

})
export class FkHierarchicalDialogModule { }
