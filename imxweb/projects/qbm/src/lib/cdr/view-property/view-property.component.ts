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

import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ValType } from 'imx-qbm-dbts';
import { EntityColumnContainer } from '../entity-column-container';
<<<<<<< HEAD
=======
import { ImxTranslationProviderService } from '../../translation/imx-translation-provider.service';
>>>>>>> oned/v92

@Component({
  selector: 'imx-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss'],
})
export class ViewPropertyComponent {
  @Input() public columnContainer: EntityColumnContainer;
  @Input() public defaultValue: string;

<<<<<<< HEAD
  constructor(private translate: TranslateService) {}
=======
  constructor(private translationProviderService: ImxTranslationProviderService) {}
>>>>>>> oned/v92

  public get displayedValue(): string {
    if (this.columnContainer?.type === ValType.Date) {
      if (this.columnContainer?.value == null) {
        return this.defaultValue;
      }
      const date: Date = new Date(this.columnContainer.value);
<<<<<<< HEAD
      return date.getDate() ? date.toLocaleString(this.translate.currentLang) : this.defaultValue;
=======
      return date.getDate() ? date.toLocaleString(this.translationProviderService.CultureFormat) : this.defaultValue;
>>>>>>> oned/v92
    }
    return this.columnContainer?.displayValue || this.columnContainer?.value || this.defaultValue;
  }
}
