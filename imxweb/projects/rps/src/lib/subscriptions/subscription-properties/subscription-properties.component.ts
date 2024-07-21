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

import { Component, Input, OnChanges, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormArray, FormControl, FormGroup } from '@angular/forms';
=======
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
>>>>>>> oned/v92

import { IClientProperty } from 'imx-qbm-dbts';
import { ColumnDependentReference } from 'qbm';
import { ReportSubscription } from '../report-subscription/report-subscription';

@Component({
  selector: 'imx-subscription-properties',
  templateUrl: './subscription-properties.component.html',
  styleUrls: ['./subscription-properties.component.scss']
})
export class SubscriptionPropertiesComponent implements OnInit, OnChanges {

  public cdrList: ColumnDependentReference[] = [];
  public parameterCdrList: ColumnDependentReference[] = [];
<<<<<<< HEAD
  public readonly subscriptionPropertiesFormArray = new FormArray([]);
  public readonly subscriptionParameterFormArray = new FormArray([]);
=======
  public readonly subscriptionPropertiesFormArray = new UntypedFormArray([]);
  public readonly subscriptionParameterFormArray = new UntypedFormArray([]);
>>>>>>> oned/v92

  public withSeparateParameterList: boolean;

  @Input() public subscription: ReportSubscription;
<<<<<<< HEAD
  @Input() public formGroup: FormGroup;
=======
  @Input() public formGroup: UntypedFormGroup;
>>>>>>> oned/v92
  @Input() public withTitles = true;
  @Input() public displayedColumns: IClientProperty[] = [];

  public ngOnInit(): void {
    if (this.formGroup) {
      this.formGroup.addControl('subscriptionProperties', this.subscriptionPropertiesFormArray);
      this.formGroup.addControl('subscriptionParameter', this.subscriptionParameterFormArray);
    }
  }

  public ngOnChanges(): void {

    this.subscriptionPropertiesFormArray.clear();
    this.cdrList = this.subscription == null ? [] : this.subscription.getCdrs(this.displayedColumns);

    this.subscriptionParameterFormArray.clear();
    this.parameterCdrList = this.subscription == null ? [] : this.subscription.getParameterCdr();

    this.withSeparateParameterList = this.withTitles || this.parameterCdrList.length > 0;
  }

  public valueHasChanged(name: any): void {
    if (this.subscription.columnsWithParameterReload.indexOf(name) !== -1) {
      this.subscriptionParameterFormArray.clear();
      this.parameterCdrList = this.subscription.getParameterCdr();
    }
  }

<<<<<<< HEAD
  public addFormControl(array: FormArray, control: FormControl): void {
=======
  public addFormControl(array: UntypedFormArray, control: UntypedFormControl): void {
>>>>>>> oned/v92
    setTimeout(() => {
      array.push(control);
    });
  }
}
