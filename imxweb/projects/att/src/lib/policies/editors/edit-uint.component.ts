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

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { FormControl, Validators } from '@angular/forms';
=======
import { UntypedFormControl, Validators } from '@angular/forms';
>>>>>>> oned/v92
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { FilterChangedArgument } from './filter-changed-argument.interface';
import { FilterElementModel } from './filter-element-model';

@Component({
  templateUrl: './edit-uint.component.html',
  selector: 'imx-edit-uint'
})
export class EditUintComponent implements OnInit, OnDestroy {

<<<<<<< HEAD
  public control: FormControl;
=======
  public control: UntypedFormControl;
>>>>>>> oned/v92
  @Input() public filterElementModel: FilterElementModel;
  @Input() public identifier: string;
  @Input() public testId = '';

  @Output() public valueChanged = new EventEmitter<FilterChangedArgument>();

  private valueChangedSubscription: Subscription;

  constructor(private readonly translateService: TranslateService) {
<<<<<<< HEAD
    this.control = new FormControl(undefined, { updateOn: 'blur', validators: Validators.min(0) });
=======
    this.control = new UntypedFormControl(undefined, { updateOn: 'blur', validators: Validators.min(0) });
>>>>>>> oned/v92
  }

  public ngOnInit(): void {
    if (this.filterElementModel) {
      this.control.patchValue(this.filterElementModel.parameterValue);
    }

    this.valueChangedSubscription = this.control.valueChanges.subscribe(() =>
      this.valueChanged.emit({
        ParameterValue: this.control.value,
        displays: [this.control.value.toLocaleString(this.translateService.currentLang)]
      })
    );
  }

  public ngOnDestroy(): void {
    if (this.valueChangedSubscription) {
      this.valueChangedSubscription.unsubscribe();
    }
  }
}
