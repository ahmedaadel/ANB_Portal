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

import { Component, Inject, OnDestroy } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup } from '@angular/forms';
=======
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
>>>>>>> oned/v92
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { Subscription } from 'rxjs';

import { ColumnDependentReference } from 'qbm';

@Component({
  selector: 'imx-run-extend',
  templateUrl: './run-extend.component.html',
  styleUrls: ['./run-extend.component.scss']
})
export class RunExtendComponent implements OnDestroy {
  public showHelper = true;

<<<<<<< HEAD
  public readonly form = new FormGroup({});
  public readonly tomorrow: Date;
  public readonly date: FormControl;
=======
  public readonly form = new UntypedFormGroup({});
  public readonly tomorrow: Date;
  public readonly date: UntypedFormControl;
>>>>>>> oned/v92
  public readonly reason: ColumnDependentReference;

  private readonly subscriptions: Subscription[] = [];

  constructor(
    @Inject(EUI_SIDESHEET_DATA) readonly data: { ProlongateUntil: Date, reason: ColumnDependentReference },
    public readonly sideSheetRef: EuiSidesheetRef
  ) {
    this.tomorrow = new Date();
    this.tomorrow.setDate((new Date()).getDate() + 1);
<<<<<<< HEAD
    this.date = new FormControl(data.ProlongateUntil, { updateOn: 'blur' });
=======
    this.date = new UntypedFormControl(data.ProlongateUntil, { updateOn: 'blur' });
>>>>>>> oned/v92
    this.date.valueChanges.subscribe(value => data.ProlongateUntil = value);
    this.addControl('date', this.date);
    this.reason = data.reason;
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public onHelperDismissed(): void {
    this.showHelper = false;
  }

<<<<<<< HEAD
  public addControl(name: string, control: FormControl): void {
=======
  public addControl(name: string, control: UntypedFormControl): void {
>>>>>>> oned/v92
    setTimeout(() =>
      this.form.addControl(name, control)
    );
  }
}
