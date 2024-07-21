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
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ApplicationHyperviewComponent } from './application-hyperview.component';
<<<<<<< HEAD
import { HyperViewModule} from 'qbm';
=======
import { HyperViewModule, BusyIndicatorModule } from 'qbm';
>>>>>>> oned/v92
import { ApplicationHyperviewService} from './application-hyperview.service';
import { EuiCoreModule } from '@elemental-ui/core';

@NgModule({
  declarations: [ApplicationHyperviewComponent],
<<<<<<< HEAD
  imports: [
    CommonModule,
    HyperViewModule,
    TranslateModule,
    MatDialogModule,
    MatButtonModule,
    EuiCoreModule
  ],
  providers: [ApplicationHyperviewService],
  exports: [ApplicationHyperviewComponent]
})
export class ApplicationHyperviewModule { }
=======
  imports: [CommonModule, HyperViewModule, TranslateModule, MatDialogModule, MatButtonModule, EuiCoreModule, BusyIndicatorModule],
  providers: [ApplicationHyperviewService],
  exports: [ApplicationHyperviewComponent],
})
export class ApplicationHyperviewModule {}
>>>>>>> oned/v92
