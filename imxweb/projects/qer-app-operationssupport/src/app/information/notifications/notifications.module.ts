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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { EuiCoreModule } from '@elemental-ui/core';
import { MatButtonModule } from '@angular/material/button';

import { LdsReplaceModule, QbmModule } from 'qbm';
import { NotificationsComponent } from './notifications.component';
import { NotificationsService } from './notifications.service';
<<<<<<< HEAD
=======
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
>>>>>>> oned/v92

@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
<<<<<<< HEAD
=======
    MatProgressSpinnerModule,
>>>>>>> oned/v92
    QbmModule,
    LdsReplaceModule,
    EuiCoreModule,
    TranslateModule
  ],
  providers: [NotificationsService],
  exports: [NotificationsComponent]
})
export class NotificationsModule { }
