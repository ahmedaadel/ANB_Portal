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

import { Injectable } from '@angular/core';

import { ValueConstraint } from 'imx-qbm-dbts';
import { NumberError } from './number-error.interface';

<<<<<<< HEAD
@Injectable({
  providedIn: 'root'
=======
/**
 * A service for providing a number validation.
 */
@Injectable({
  providedIn: 'root',
>>>>>>> oned/v92
})
export class NumberValidatorService {
  private readonly regexPatternInteger = /^[-+]?\d+$/;

<<<<<<< HEAD
=======
  /**
   * Validates the value by checking two things:
   * <ol>
   * <ul>The value is a valid number.</ul>
   * <ul>The value is inside the range, given by a {@link ValueConstraint}.</ul>
   * </ol>
   * @param value The value that needs to be checked.
   * @param range The {@link ValueConstraint}, that determines the bounds.
   * @returns
   */
>>>>>>> oned/v92
  public validate(value: any, range: ValueConstraint): NumberError | null {
    if (value == null) {
      return null;
    }

    if (!this.regexPatternInteger.test(value)) {
      return { invalidInteger: true };
    }

    if (range) {
<<<<<<< HEAD
      if (range.MinValue != null && (value < range.MinValue)) {
        return { rangeMin: true };
      }

      if (range.MaxValue != null && (value > range.MaxValue)) {
=======
      if (range.MinValue != null && value < range.MinValue) {
        return { rangeMin: true };
      }

      if (range.MaxValue != null && value > range.MaxValue) {
>>>>>>> oned/v92
        return { rangeMax: true };
      }
    }

    return null;
  }
}
