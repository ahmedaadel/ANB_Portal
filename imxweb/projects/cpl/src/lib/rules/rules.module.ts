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
<<<<<<< HEAD

import { RulesComponent } from './rules.component';
import { CdrModule, DataSourceToolbarModule, DataTableModule } from 'qbm';
import { RulesSidesheetComponent } from './rules-sidesheet/rules-sidesheet.component';
import { MatCardModule } from '@angular/material/card';
import { EuiCoreModule } from '@elemental-ui/core';


=======
import { MatCardModule } from '@angular/material/card';
import { EuiCoreModule } from '@elemental-ui/core';
import { MatTabsModule } from '@angular/material/tabs';

import { CdrModule, DataSourceToolbarModule, DataTableModule, HelpContextualModule, ExtModule } from 'qbm';
import { StatisticsModule, ObjectHyperviewModule } from 'qer';
import { RulesComponent } from './rules.component';
import { RulesSidesheetComponent } from './rules-sidesheet/rules-sidesheet.component';
import { MitigatingControlsRulesComponent } from './mitigating-controls-rules/mitigating-controls-rules.component';
import { ViolationsPerRuleComponent } from './rules-sidesheet/violations-per-rule/violations-per-rule.component';
import { RulesViolationsModule } from '../rules-violations/rules-violations.module';
>>>>>>> oned/v92

@NgModule({
  declarations: [
    RulesComponent,
<<<<<<< HEAD
    RulesSidesheetComponent
=======
    RulesSidesheetComponent,
    MitigatingControlsRulesComponent,
    ViolationsPerRuleComponent,
>>>>>>> oned/v92
  ],
  imports: [
    CommonModule,
    EuiCoreModule,
    TranslateModule,
    CdrModule,
    DataTableModule,
    DataSourceToolbarModule,
    MatButtonModule,
<<<<<<< HEAD
    MatCardModule
  ]
})
export class RulesModule { }
=======
    MatCardModule,
    MatTabsModule,
    StatisticsModule,
    ObjectHyperviewModule,
    HelpContextualModule,
    ExtModule,
    RulesViolationsModule
  ],
})
export class RulesModule {}
>>>>>>> oned/v92
