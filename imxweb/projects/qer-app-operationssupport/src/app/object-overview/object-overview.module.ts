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
import { EuiCoreModule } from '@elemental-ui/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import {
  DataSourceToolbarModule,
  DataTableModule,
<<<<<<< HEAD
  HyperViewModule,
=======
>>>>>>> oned/v92
  ObjectHistoryModule,
  ObjectHistoryApiService,
  QbmModule,
} from 'qbm';
<<<<<<< HEAD
import { OpsModule } from 'qer';
import { ObjectOverviewComponent } from './object-overview.component';
import { ObjectOverviewService } from './object-overview.service';
import { OpSupportHistoryApiService } from './opsupport-history-api.service';
=======
import { ObjectHyperviewModule, ObjectHyperviewService, OpsModule } from 'qer';
import { ObjectOverviewComponent } from './object-overview.component';
import { ObjectOverviewService } from './object-overview.service';
import { OpSupportHistoryApiService } from './opsupport-history-api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OpsHyperviewService } from '../hyperview/ops-hyperview.service';
>>>>>>> oned/v92


@NgModule({
  declarations: [
    ObjectOverviewComponent,
  ],
  imports: [
    CommonModule,
    ObjectHistoryModule,
<<<<<<< HEAD
    HyperViewModule,
=======
>>>>>>> oned/v92
    DataTableModule,
    DataSourceToolbarModule,
    EuiCoreModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
<<<<<<< HEAD
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
=======
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    ObjectHyperviewModule,
>>>>>>> oned/v92
    TranslateModule,
    MatTableModule,
    MatPaginatorModule,
    OpsModule,
    QbmModule
  ],
  providers: [
    {
      provide: ObjectHistoryApiService,
      useClass: OpSupportHistoryApiService
<<<<<<< HEAD
    },
=======
    },    
    {
      provide: ObjectHyperviewService,
      useClass: OpsHyperviewService
    }, 
>>>>>>> oned/v92
    ObjectOverviewService
  ]
})
export class ObjectOverviewModule { }
