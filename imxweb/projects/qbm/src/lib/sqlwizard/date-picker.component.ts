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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateDiffUnit } from 'imx-qbm-dbts';
import { SqlNodeView } from './SqlNodeView';
import { DateDiffOption, SqlWizardService } from './sqlwizard.service';
=======
import { DateDiffUnit } from 'imx-qbm-dbts';
import { SqlNodeView } from './SqlNodeView';
import { DateDiffOption, SqlWizardService } from './sqlwizard.service';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
>>>>>>> oned/v92

@Component({
  templateUrl: './date-picker.component.html',
  styleUrls: ['./sqlwizard.scss'],
<<<<<<< HEAD
  selector: 'imx-sqlwizard-datepicker'
})
export class DatePickerComponent implements OnInit {
  public absoluteError = false;


  get diffUnit(): DateDiffUnit {
    return this.diffValue.TimeUnit;
  }

  set diffUnit(d: DateDiffUnit) {
    this.diffValue.TimeUnit = d;
  }
  get relative(): boolean {
    return this._relative;
  }
  set relative(val: boolean) {
    this._relative = val;
    this.expr.Data.Value = val ? this.diffValue : null;
  }

  @Input() public expr: SqlNodeView;
  @Output() changes = new EventEmitter<any>();

  public diffValue: {
    Difference?: number,
    TimeUnit?: DateDiffUnit
=======
  selector: 'imx-sqlwizard-datepicker',
})
export class DatePickerComponent implements OnInit {
  @Input() public expr: SqlNodeView;
  @Output() public change = new EventEmitter<any>();

  public diffValue: {
    Difference?: number;
    TimeUnit?: DateDiffUnit;
>>>>>>> oned/v92
  } = {};

  public diffUnits: DateDiffOption[];

<<<<<<< HEAD
  private _relative = false;

=======
  private datepickerValidator: ValidatorFn = (form: FormGroup) => {
    if (form.get('relative').value) {
      if (
        !(!!form.get('timeUnit')?.value || form.get('timeUnit')?.value === 0) ||
        !form.get('difference').value ||
        Number(form.get('difference').value) < 1
      ) {
        return { datepickerError: true };
      }
    }
    return null;
  };

  public form = new FormGroup(
    {
      relative: new FormControl<boolean>(null),
      difference: new FormControl<number>(null),
      timeUnit: new FormControl<DateDiffOption>(null),
      datepicker: new FormControl<Date>(null),
    },
    [this.datepickerValidator]
  );
>>>>>>> oned/v92
  constructor(svc: SqlWizardService) {
    this.diffUnits = svc.getDateDiffUnits();
  }

  public ngOnInit(): void {
<<<<<<< HEAD
    if (this.expr.Data.Value && this.expr.Data.Value.TimeUnit) {
      this._relative = true;
      this.diffValue = this.expr.Data.Value;
    }
  }

  public emitChanges(): void {
    this.changes.emit();
  }

  public onAbsoluteChange(date: MatDatepickerInputEvent<Date>): void {
    this.absoluteError = !date.value ? true : false;
    if (!this.absoluteError) {
      this.emitChanges();
    }
=======
    if (this.expr.Data.Value && this.expr.Data.Value.Difference) {
      this.form.controls.relative.setValue(true);
      this.form.controls.difference.setValue(this.expr.Data.Value.Difference);
      this.form.controls.timeUnit.setValue(this.expr.Data.Value.TimeUnit);
    } else {
      this.form.controls.relative.setValue(false);
      this.form.controls.datepicker.setValue(this.expr.Data.Value);
    }
    this.emitChanges();
  }

  public emitChanges(): void {
    if (
      (this.form.controls.relative.value && this.form?.errors?.datepickerError) ||
      (!this.form.controls.relative.value && (this.form.controls.datepicker.invalid || !this.form.controls.datepicker.value))
    ) {
      this.expr.Data.Value = {};
    } else if (this.form.controls.relative.value) {
      this.expr.Data.Value = {
        Difference: this.form.controls.difference.value,
        TimeUnit: this.form.controls.timeUnit.value,
      };
    } else {
      this.expr.Data.Value = this.form.controls.datepicker.value;
    }
    this.change.emit();
  }

  public get isRelative(): boolean {
    return this.form.controls.relative.value;
>>>>>>> oned/v92
  }
}
