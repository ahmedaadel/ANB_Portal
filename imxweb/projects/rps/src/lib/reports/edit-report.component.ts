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

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';

<<<<<<< HEAD
import { ListReportDefinitionRead, PortalReports, PortalReportsEditInteractive } from 'imx-api-rps';
import { CollectionLoadParameters, DisplayColumns, ExtendedTypedEntityCollection, ValType } from 'imx-qbm-dbts';

import {
=======
import { ListReportDefinitionRead, PortalReports, PortalReportsEdit } from 'imx-api-rps';
import { CollectionLoadParameters, DisplayColumns, ExtendedTypedEntityCollection } from 'imx-qbm-dbts';

import {
  BusyService,
>>>>>>> oned/v92
  ConfirmationService,
  DataSourceToolbarSettings,
  DataSourceWrapper,
  DataTableComponent,
  SnackBarService,
<<<<<<< HEAD
=======
  HelpContextualComponent,
  HelpContextualService,
  HELP_CONTEXTUAL
>>>>>>> oned/v92
} from 'qbm';
import { Subscription } from 'rxjs';
import { EditReportSidesheetComponent } from './edit-report-sidesheet/edit-report-sidesheet.component';
import { EditReportService } from './edit-report.service';
<<<<<<< HEAD

@Component({
  selector: 'imx-edit-report',
=======
import { QerPermissionsService } from 'qer';
import { RpsPermissionsService } from '../admin/rps-permissions.service';

@Component({
>>>>>>> oned/v92
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss'],
})
export class EditReportComponent implements OnInit, OnDestroy {
<<<<<<< HEAD
  public readonly dstWrapper: DataSourceWrapper<PortalReports>;
=======
  public readonly DisplayColumns = DisplayColumns;
  public dstWrapper: DataSourceWrapper<PortalReports>;
>>>>>>> oned/v92
  @ViewChild('dataTable') private reportsTable: DataTableComponent<any>;
  public dstSettings: DataSourceToolbarSettings;
  public selectedReports: PortalReports[] = [];

<<<<<<< HEAD
=======
  public busyService = new BusyService();
  public entitySchema = this.reportService.reportSchema;

>>>>>>> oned/v92
  private readonly subscriptions: Subscription[] = [];

  constructor(
    private readonly reportService: EditReportService,
    private readonly busy: EuiLoadingService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly translate: TranslateService,
    private readonly confirmationService: ConfirmationService,
<<<<<<< HEAD
    private readonly snackBarService: SnackBarService
  ) {
    const entitySchema = this.reportService.reportSchema;
    this.dstWrapper = new DataSourceWrapper(
      (state) => this.reportService.getReportsOwnedByUser(state),
      [
        entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
        {
          ColumnName: 'actions',
          Type: ValType.String,
          afterAdditionals: true,
        },
      ],
      entitySchema
    );
  }

  public async ngOnInit(): Promise<void> {
=======
    private readonly rpsPermissionService: RpsPermissionsService,
    private readonly snackBarService: SnackBarService,
    private readonly helpContextualService: HelpContextualService
  ) {}

  public async ngOnInit(): Promise<void> {
    const isRpsAdmin = await this.rpsPermissionService.isRpsAdmin();
    this.dstWrapper = new DataSourceWrapper(
      (state) => (isRpsAdmin ? this.reportService.getAllReports(state) : this.reportService.getReportsOwnedByUser(state)),
      [this.entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME]],
      this.entitySchema
    );

>>>>>>> oned/v92
    await this.getData();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public async getData(parameter?: CollectionLoadParameters): Promise<void> {
<<<<<<< HEAD
    const overlay = this.busy.show();
=======
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92
    try {
      const parameters = {
        ...parameter,
      };
      this.dstSettings = await this.dstWrapper.getDstSettings(parameters);
    } finally {
<<<<<<< HEAD
      this.busy.hide(overlay);
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  public onSelectionChanged(items: PortalReports[]): void {
    this.selectedReports = items;
  }

  public async createNew(): Promise<void> {
    const overlay = this.busy.show();
    let report;
    try {
      report = await this.reportService.createNew();
    } finally {
      this.busy.hide(overlay);
    }

    if (report) {
<<<<<<< HEAD
      await this.openSidesheet(report, true, false);
=======
      await this.openSidesheet(report, true,false);
>>>>>>> oned/v92
    }
  }

  public async viewDetails(selectedReport: PortalReports): Promise<void> {
    const overlay = this.busy.show();
    let report;
    try {
      report = await this.reportService.getReport(selectedReport.GetEntity().GetKeys()[0]);
    } finally {
      this.busy.hide(overlay);
    }

<<<<<<< HEAD
    if (report) {
      await this.openSidesheet(report, false, selectedReport.IsOob.value);
=======

    if (report) {
      await this.openSidesheet(report, false,selectedReport.IsOob.value);
>>>>>>> oned/v92
    }
  }

  private async openSidesheet(
<<<<<<< HEAD
    report: ExtendedTypedEntityCollection<PortalReportsEditInteractive, ListReportDefinitionRead>,
    isNew: boolean,
    isReadonly: boolean
  ): Promise<void> {
    const result = await this.sidesheet
      .open(EditReportSidesheetComponent, {
        title: await this.translate.get(isNew ? '#LDS#Heading Create Report' : '#LDS#Heading Edit Report').toPromise(),
=======
    report: ExtendedTypedEntityCollection<PortalReportsEdit, ListReportDefinitionRead>,
    isNew: boolean,
    isReadonly: boolean
  ): Promise<void> {
    this.helpContextualService.setHelpContextId(isNew ? HELP_CONTEXTUAL.ReportsCreate : HELP_CONTEXTUAL.ReportsEdit);
    const result = await this.sidesheet
      .open(EditReportSidesheetComponent, {
        title: await this.translate.get(isNew ? '#LDS#Heading Create Report' : '#LDS#Heading Edit Report').toPromise(),
        subTitle: isNew ? '' : report.Data[0].GetEntity().GetDisplay(),
>>>>>>> oned/v92
        panelClass: 'imx-sidesheet',
        disableClose: true,
        padding: '0',
        width: 'max(768px, 80%)',
        testId: isNew ? 'report-create-sidesheet' : 'report-details-sidesheet',
        data: {
          report,
          isNew,
<<<<<<< HEAD
          isReadonly,
        },
=======
          isReadonly
        },
        headerComponent: HelpContextualComponent
>>>>>>> oned/v92
      })
      .afterClosed()
      .toPromise();

    if (result) {
      this.getData();
    }
  }

  public canDeleteSelected(): boolean {
    return this.selectedReports.length > 0 && this.selectedReports.filter((i) => i.GetEntity().GetColumn('IsOob').GetValue()).length == 0;
  }

  public async deleteSelected(): Promise<void> {
    if (
      await this.confirmationService.confirm({
        Title: '#LDS#Heading Delete Reports',
        Message: '#LDS#Are you sure you want to delete the selected reports?',
        identifier: 'report-confirm-delete',
      })
    ) {
      const overlay = this.busy.show();
      try {
        for (var report of this.selectedReports) {
          await this.reportService.deleteReport(report);
        }

        this.snackBarService.open({ key: '#LDS#The reports have been successfully deleted.' }, '#LDS#Close');
        this.reportsTable.clearSelection();
        await this.getData();
      } finally {
        this.busy.hide(overlay);
      }
    }
  }
}
