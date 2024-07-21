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
import { MatButtonModule} from '@angular/material/button';
import { EuiCoreModule } from '@elemental-ui/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

<<<<<<< HEAD
import { DataSourceToolbarModule, DataTableModule, CdrModule  } from 'qbm';
=======
import { DataSourceToolbarModule, DataTableModule, CdrModule, SelectedElementsModule, HelpContextualModule  } from 'qbm';
>>>>>>> oned/v92
import { AttestationHistoryComponent } from './attestation-history.component';
import { AttestationHistoryService } from './attestation-history.service';
import { AttestationHistoryDetailsComponent } from './attestation-history-details/attestation-history-details.component';
import { AttestationDecisionModule } from '../decision/attestation-decision.module';
import { AttestationHistoryWrapperComponent } from './attestation-history-wrapper.component';
import { AttestationDisplayModule } from '../attestation-display/attestation-display.module';
import { AttestationSnapshotModule } from '../attestation-snapshot/attestation-snapshot.module';
<<<<<<< HEAD
=======
import {AttestationHistoryFilterComponent} from './attestation-history-filter/attestation-history-filter.component';
import { MatIconModule } from '@angular/material/icon';
import { MyAttestationCasesComponent } from './my-attestation-cases/my-attestation-cases.component';
>>>>>>> oned/v92

@NgModule({
  declarations: [
    AttestationHistoryComponent,
    AttestationHistoryDetailsComponent,
<<<<<<< HEAD
    AttestationHistoryWrapperComponent
=======
    AttestationHistoryWrapperComponent,
    AttestationHistoryFilterComponent,
    MyAttestationCasesComponent,
>>>>>>> oned/v92
  ],
  exports: [AttestationHistoryComponent],
  imports: [
    AttestationSnapshotModule,
    CommonModule,
    CdrModule,
    DataSourceToolbarModule,
    DataTableModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
<<<<<<< HEAD
    TranslateModule,
    EuiCoreModule,
    AttestationDecisionModule,
    AttestationDisplayModule
  ],
  providers: [
    AttestationHistoryService
  ]
})
export class AttestationHistoryModule { }
=======
    MatIconModule,
    TranslateModule,
    EuiCoreModule,
    AttestationDecisionModule,
    AttestationDisplayModule,
    AttestationSnapshotModule,
    SelectedElementsModule,
    HelpContextualModule,
  ],
  providers: [AttestationHistoryService],
})
export class AttestationHistoryModule {}
>>>>>>> oned/v92
