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

import { Pipe, PipeTransform, Injectable } from '@angular/core';
<<<<<<< HEAD
import { TranslateService } from '@ngx-translate/core';
=======
import { ImxTranslationProviderService } from '../translation/imx-translation-provider.service';
>>>>>>> oned/v92

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'localizedDate',
})
export class LocalizedDatePipe implements PipeTransform {

  private readonly currentCulture: string;

  constructor(
<<<<<<< HEAD
    private readonly translateService: TranslateService,
  ) {
    this.currentCulture = this.translateService.currentLang;
=======
    private readonly translationProviderService: ImxTranslationProviderService,
  ) {
    this.currentCulture = this.translationProviderService.CultureFormat;
>>>>>>> oned/v92
  }

  public transform(value: string | Date): string {
    if (typeof value === 'string') {
      if (!value || value.length === 0) {
        return value;
      }
      const timestamp = Date.parse(value);
      if (isNaN(timestamp)) {
        return value;
      }
    }
    return new Date(value).toLocaleString(this.currentCulture);

  }
}
