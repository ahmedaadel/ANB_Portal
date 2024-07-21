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
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { ValueStruct } from 'imx-qbm-dbts';
import { ColumnDependentReference } from 'qbm';
import { JustificationService } from '../justification.service';

@Component({
  selector: 'imx-decision-reason',
  templateUrl: './decision-reason.component.html',
  styleUrls: ['./decision-reason.component.scss']
})
export class DecisionReasonComponent implements AfterViewInit {
  @Input() public reasonStandard: ColumnDependentReference;
  @Input() public reasonFreetext: ColumnDependentReference;
=======
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup} from '@angular/forms';
import _ from 'lodash';

import { ValueStruct } from 'imx-qbm-dbts';
import { BaseCdr } from 'qbm';
import { JustificationService } from '../justification.service';

interface ReasonFormGroup {
  standard?: FormControl<ValueStruct<string>>;
  freetext?: FormControl<string>;
}
@Component({
  selector: 'imx-decision-reason',
  templateUrl: './decision-reason.component.html',
  styleUrls: ['./decision-reason.component.scss'],
})
export class DecisionReasonComponent implements OnInit, AfterViewInit {
  @Input() public reasonStandard: BaseCdr;
  @Input() public reasonFreetext: BaseCdr;
>>>>>>> oned/v92
  @Input() public maxReasonType: number;

  @Output() public controlCreated = new EventEmitter<AbstractControl>();

<<<<<<< HEAD
  private readonly formGroup = new FormGroup({});
  private readonly reasonFreetextControl: { name: string, control?: AbstractControl } = { name: 'freetext' };

  constructor(private readonly justificationService: JustificationService) { }
=======
  private readonly formGroup = new FormGroup<ReasonFormGroup>({});

  constructor(private readonly justificationService: JustificationService, private readonly changeDetector: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.reasonStandard?.updateMinLength((this.maxReasonType ?? 0) === 1 ? 1 : 0);
    this.reasonFreetext?.updateMinLength((this.maxReasonType ?? 0) === 0 ? 0 : 1);
  }
>>>>>>> oned/v92

  public ngAfterViewInit(): void {
    this.controlCreated.emit(this.formGroup);
  }

<<<<<<< HEAD
  public addReasonStandard(control: AbstractControl): void {
    setTimeout(() => this.formGroup.addControl('standard', control));
  }

  public addReasonFreetext(control?: AbstractControl): void {
    if (this.reasonFreetextControl.control == null) {
      this.reasonFreetextControl.control = control;
    }
    setTimeout(() => this.formGroup.addControl(this.reasonFreetextControl.name, this.reasonFreetextControl.control));
  }

  public async checkReason(value: ValueStruct<string>): Promise<void> {
    const justification = await this.justificationService.get(value.DataValue);

    this.formGroup.removeControl(this.reasonFreetextControl.name);
    this.reasonFreetext.minLength = Math.max((justification && justification.RequiresText.value ? 1 : 0),
      (this.maxReasonType ?? 0) < 2 ? 0 : 1);

    this.addReasonFreetext();
=======
  public addReasonStandard(control?: AbstractControl): void {
    setTimeout(() => this.formGroup.setControl('standard', control as FormControl<ValueStruct<string>>));
  }

  public addReasonFreetext(control?: AbstractControl): void {
    setTimeout(() => this.formGroup.setControl('freetext', control as FormControl<string>));
  }

  public async updateMinLength() {
    switch (this.maxReasonType) {
      case 0: { // nothing is mandatory, unless the justification requires a free text
        const justification = this.formGroup.controls.standard?.value?.DataValue
          ? await this.justificationService.get(this.formGroup.controls.standard?.value?.DataValue)
          : undefined;
        this.reasonFreetext?.updateMinLength(Math.max(justification && justification.RequiresText.value ? 1 : 0));
        this.changeDetector.detectChanges();
        return;
      }
      case 1:{ // at least one reason (standard or free) is mandatory
        const justificationRequired = this.formGroup.controls.freetext?.value.length === 0;

        const justification = this.formGroup.controls.standard?.value?.DataValue
          ? await this.justificationService.get(this.formGroup.controls.standard?.value.DataValue)
          : undefined;
        const freetextRequired =
          (justification == null && this.formGroup.controls.freetext?.value.length === 0) || !!justification?.RequiresText?.value;

        this.reasonStandard?.updateMinLength(justificationRequired ? 1 : 0);
        this.reasonFreetext?.updateMinLength(freetextRequired ? 1 : 0);
        this.changeDetector.detectChanges();
        return ;
      }
      default: return;
    }
>>>>>>> oned/v92
  }
}
