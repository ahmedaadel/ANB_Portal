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

import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup } from '@angular/forms';
=======
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
>>>>>>> oned/v92
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'imx-dynamic-exclusion-dialog',
  templateUrl: './dynamic-exclusion-dialog.component.html',
  styleUrls: ['./dynamic-exclusion-dialog.component.scss']
})
export class DynamicExclusionDialogComponent implements OnInit {

<<<<<<< HEAD
  public dynamicExclusionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DynamicExclusionDialogComponent>) {}
=======
  public dynamicExclusionForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<DynamicExclusionDialogComponent>) {}
>>>>>>> oned/v92

  public ngOnInit(): void {
    this.dynamicExclusionForm = this.formBuilder.group({
      description: ['']
    });
  }

  public save(): void {
    this.dialogRef.close(this.dynamicExclusionForm.get('description').value);
  }

  public cancel(): void {
    this.dialogRef.close(undefined);
  }

}
