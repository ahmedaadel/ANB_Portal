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
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
=======
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EuiCoreModule } from '@elemental-ui/core';
>>>>>>> oned/v92
import { TranslateModule } from '@ngx-translate/core';

import { EntitlementEditComponent } from './entitlement-edit.component';
import { CdrModule } from 'qbm';
import { ServiceItemTagsModule } from 'qer';

@NgModule({
  declarations: [
    EntitlementEditComponent
  ],
  exports: [
    EntitlementEditComponent
  ],
  imports: [
    CdrModule,
    CommonModule,
<<<<<<< HEAD
    FormsModule,
    MatButtonModule,
=======
    EuiCoreModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
>>>>>>> oned/v92
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ServiceItemTagsModule,
    TranslateModule
  ]
})
export class EntitlementEditModule { }
