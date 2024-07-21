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
import { Component, Inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from "@elemental-ui/core";
import { ManualChangeOperation, ManualChangeOperationData, OpsupportUciChangedetail } from "imx-api-uci";
import { ExtendedTypedEntityCollection, IEntityColumn, LocalEntityColumn } from "imx-qbm-dbts";
import { ImxTranslationProviderService, MessageDialogComponent, MessageDialogResult } from "qbm";
import { UciApiService } from "../uci-api-client.service";

@Component({
  templateUrl: './change-sidesheet.component.html',
  styleUrls: ['./change-sidesheet.component.scss']
})
export class ChangeSidesheetComponent {

  constructor(
    @Inject(EUI_SIDESHEET_DATA) change: ExtendedTypedEntityCollection<OpsupportUciChangedetail, ManualChangeOperationData>,
    private translator: ImxTranslationProviderService,
    private readonly uciApi: UciApiService,
    private readonly sidesheetRef: EuiSidesheetRef,
    private dialogService: MatDialog) {
=======
import { Component, Inject } from '@angular/core';

import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';

import { ManualChangeOperation, ManualChangeOperationData, OpsupportUciChangedetail } from 'imx-api-uci';
import { ExtendedTypedEntityCollection, IEntityColumn, LocalEntityColumn } from 'imx-qbm-dbts';
import { ConfirmationService } from 'qbm';

import { UciApiService } from '../uci-api-client.service';

@Component({
  templateUrl: './change-sidesheet.component.html',
  styleUrls: ['./change-sidesheet.component.scss'],
})
export class ChangeSidesheetComponent {
  public changeDetail: OpsupportUciChangedetail[] = [];
  public manualChangeData: ManualChangeOperation[][] = [];
  public changeProperties: IEntityColumn[][] = [];

  constructor(
    @Inject(EUI_SIDESHEET_DATA) change: ExtendedTypedEntityCollection<OpsupportUciChangedetail, ManualChangeOperationData>,
    private readonly uciApi: UciApiService,
    private readonly sidesheetRef: EuiSidesheetRef,    
    private readonly confirmation: ConfirmationService
    ) {

>>>>>>> oned/v92
    this.changeDetail = change.Data;
    this.manualChangeData = change.extendedData.Operations;

    // build entity columns from extended data
<<<<<<< HEAD
    this.changeProperties = this.manualChangeData.map(d => {
      return d.map(c => {

        const prop = new LocalEntityColumn(c.Property, null, null, {
          Value: c.DiffValue
=======
    this.changeProperties = this.manualChangeData.map((d) => {
      return d.map((c) => {
        const prop = new LocalEntityColumn(c.Property, null, null, {
          Value: c.DiffValue,
>>>>>>> oned/v92
        });

        return prop;
      });
    });
  }

<<<<<<< HEAD
  public changeDetail: OpsupportUciChangedetail[] = [];
  public manualChangeData: ManualChangeOperation[][] = [];
  public changeProperties: IEntityColumn[][] = [];

  public async MarkAsDone(detail: OpsupportUciChangedetail): Promise<void> {
    const dialogRef = this.dialogService.open(MessageDialogComponent, {
      data: {
        ShowCancel: true,
        ShowOk: true,
        Title: await this.translator.Translate("#LDS#Confirm").toPromise(),
        Message: await this.translator.Translate("#LDS#Confirm that you have made the requested change on the target system.").toPromise()
      }, panelClass: 'imx-messageDialog'
    });

    const result = await dialogRef.afterClosed().toPromise();
    if (result === MessageDialogResult.OkResult) {
      await this.Save(detail, true);
=======
  public async markAsDone(detail: OpsupportUciChangedetail): Promise<void> {
    if (await this.confirmation.confirm({
      Title: '#LDS#Heading Mark As Successful',
      Message: '#LDS#The provisioning process will be marked as successful. Are you sure you have made the requested change in the cloud application?'
    })) {
      await this.save(detail, true);
>>>>>>> oned/v92
    };

  }

<<<<<<< HEAD
  private async Save(detail: OpsupportUciChangedetail, success: boolean) {
    await this.uciApi.client.opsupport_uci_changes_post(detail.GetEntity().GetKeys()[0], { Success: success });
    this.sidesheetRef.close(true /* reload */);
  }

  public async MarkAsError(detail: OpsupportUciChangedetail): Promise<void> {
    const dialogRef = this.dialogService.open(MessageDialogComponent, {
      data: {
        ShowCancel: true,
        ShowOk: true,
        Title: await this.translator.Translate("#LDS#Confirm").toPromise(),
        Message: await this.translator.Translate("#LDS#Confirm that the requested change cannot be made on the target system.").toPromise()
      }, panelClass: 'imx-messageDialog'
    });

    const result = await dialogRef.afterClosed().toPromise();
    if (result === MessageDialogResult.OkResult) {
      await this.Save(detail, false);
    };
  }

  CanMarkAsDone(detail: OpsupportUciChangedetail): boolean {
    return detail.IsProcessed.value == 0;
  }

}
=======
  public async markAsError(detail: OpsupportUciChangedetail): Promise<void> {
    if (await this.confirmation.confirm({
      Title: '#LDS#Heading Mark As Failed',
      Message: '#LDS#The provisioning process will be marked as failed. Are you sure you cannot make the requested change in the cloud application?'
    })) {
      await this.save(detail, false);
    };
  }

  public canMarkAsDone(detail: OpsupportUciChangedetail): boolean {
    return detail.IsProcessed.value === 0;
  }

  private async save(detail: OpsupportUciChangedetail, success: boolean): Promise<void> {
    await this.uciApi.client.opsupport_uci_changes_post(detail.GetEntity().GetKeys()[0], { Success: success });
    this.sidesheetRef.close(true /* reload */);
  }
}
>>>>>>> oned/v92
