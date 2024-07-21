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
import { EUI_SIDESHEET_DATA, EuiSidesheetRef } from '@elemental-ui/core';
import { PolicyViolationsAction } from './policy-violations-action.interface';

/**
 * Component displayed in a sidesheet to make a decision for one or more policy violations.
 *
 * Uses two alternate views
 * <ul>
 * <li>a) a simple view for a single policy violation</li>
 * <li>b) a complex view using bulk items for multiple policy violations.</li>
 * </ul>
 *
 * Therefore this component is not meant to be used directly but rather be called
 * from a service that does the pre-calculation and opens this component in a
 * sidesheet passing the pre-calculated values.
 *
 */
@Component({
  templateUrl: './policy-violations-action.component.html',
  styleUrls: ['./policy-violations-action.component.scss']
})
export class PolicyViolationsActionComponent {
  /**
   * The form group to which the created form controls will be added.
   */
<<<<<<< HEAD
  public readonly formGroup = new FormGroup({});
=======
  public readonly formGroup = new UntypedFormGroup({});
>>>>>>> oned/v92

  /**
   * Creates a new PolicyViolationsActionComponent
   * @param data The pre-calculated data object.
   * @param sideSheetRef A reference to the sidesheet containing this component.
   */
  constructor(
    @Inject(EUI_SIDESHEET_DATA) public readonly data: PolicyViolationsAction,
    public readonly sideSheetRef: EuiSidesheetRef
  ) {
  }
}
