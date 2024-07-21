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

<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
=======
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
>>>>>>> oned/v92
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

import {
  CdrModule,
  DataSourceToolbarModule,
  DataTableModule,
<<<<<<< HEAD
  MenuItem,
  MenuService,
  OrderedListModule,
=======
  HelpContextualModule,
  MenuItem,
  MenuService,
  OrderedListModule,
  SelectedElementsModule,
>>>>>>> oned/v92
  SqlWizardApiService,
  SqlWizardModule
} from 'qbm';
import { EditReportComponent } from './edit-report.component';
import { EditReportSidesheetComponent } from './edit-report-sidesheet/edit-report-sidesheet.component';
import { EditReportSqlWizardService } from './editreport-sqlwizard.service';
<<<<<<< HEAD
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
=======
import { RpsPermissionsService } from '../admin/rps-permissions.service';
>>>>>>> oned/v92

@NgModule({
  declarations: [
    EditReportComponent,
    EditReportSidesheetComponent
  ],
  providers: [
    {
      // This does not work for some reason!
      provide: SqlWizardApiService,
      useClass: EditReportSqlWizardService
<<<<<<< HEAD
    }
=======
    },
    RpsPermissionsService
>>>>>>> oned/v92
  ],
  imports: [
    CdrModule,
    CommonModule,
    DataSourceToolbarModule,
    DataTableModule,
    DragDropModule,
    EuiCoreModule,
    EuiMaterialModule,
    FormsModule,
    MatCardModule,
    OrderedListModule,
    ReactiveFormsModule,
    TranslateModule,
    SqlWizardModule,
<<<<<<< HEAD
=======
    SelectedElementsModule,
    HelpContextualModule,
>>>>>>> oned/v92
  ]
})
export class EditReportModule {

  constructor(
    private readonly menuService: MenuService,
  ) {
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories(
<<<<<<< HEAD
      (preProps: string[], groups: string[]) => {
=======
      (preProps: string[], features: string[]) => {
>>>>>>> oned/v92

        const items: MenuItem[] = [];

        if (preProps.includes('REPORT_SUBSCRIPTION')) {
          items.push(
            {
              id: 'RPS_Reports',
              navigationCommands: {
                commands: ['reports']
              },
              title: '#LDS#Menu Entry Reports',
<<<<<<< HEAD
              sorting: '50-70',
=======
              sorting: '60-70',
>>>>>>> oned/v92
            },
          );
        }

        if (items.length === 0) {
          return null;
        }
        return {
          id: 'ROOT_Setup',
          title: '#LDS#Setup',
<<<<<<< HEAD
          sorting: '50',
=======
          sorting: '60',
>>>>>>> oned/v92
          items
        };
      },
    );
  }



}
