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

import { Component, Inject } from '@angular/core';
<<<<<<< HEAD
import { FormGroup } from '@angular/forms';
=======
import { UntypedFormGroup } from '@angular/forms';
>>>>>>> oned/v92
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IEntityColumn } from 'imx-qbm-dbts';
import { BaseCdr, ColumnDependentReference } from 'qbm';

@Component({
  selector: 'imx-mitigating-controls',
  templateUrl: './mitigating-controls.component.html',
  styleUrls: ['./mitigating-controls.component.scss']
})
export class MitigatingControlsComponent {

  public mitigatingControlCdr: ColumnDependentReference;
<<<<<<< HEAD
  public formGroup = new FormGroup({});
=======
  public formGroup = new UntypedFormGroup({});
>>>>>>> oned/v92
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: {
      column: IEntityColumn
    },
    public dialogRef: MatDialogRef<MitigatingControlsComponent>
  ) {
    this.mitigatingControlCdr = new BaseCdr(this.data.column);
  }

}
