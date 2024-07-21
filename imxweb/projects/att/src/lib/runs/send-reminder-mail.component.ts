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
import { FormControl } from '@angular/forms';
=======
import { UntypedFormControl } from '@angular/forms';
>>>>>>> oned/v92
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './send-reminder-mail.component.html',
  styleUrls: ['./send-reminder-mail.component.scss']
})
export class SendReminderMailComponent implements OnDestroy {
  public showHelper = true;

<<<<<<< HEAD
  public readonly message: FormControl;
=======
  public readonly message: UntypedFormControl;
>>>>>>> oned/v92

  private readonly subscriptions: Subscription[] = [];

  constructor(@Inject(EUI_SIDESHEET_DATA) data: { message: string }, public readonly sideSheetRef: EuiSidesheetRef) {
<<<<<<< HEAD
    this.message = new FormControl(data.message);
=======
    this.message = new UntypedFormControl(data.message);
>>>>>>> oned/v92
    this.subscriptions.push(this.message.valueChanges.subscribe(value => data.message = value));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public onHelperDismissed(): void {
    this.showHelper = false;
  }
}
