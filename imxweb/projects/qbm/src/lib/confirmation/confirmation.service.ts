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
import { Injectable } from '@angular/core';
=======
import { Injectable, NgZone } from '@angular/core';
>>>>>>> oned/v92
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { MessageDialogResult } from '../message-dialog/message-dialog-result.enum';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { MessageParameter } from '../message-dialog/message-parameter.interface';

<<<<<<< HEAD
=======
import { LdsReplacePipe } from '../lds-replace/lds-replace.pipe';

>>>>>>> oned/v92
@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
<<<<<<< HEAD
  constructor(private readonly dialogService: MatDialog, private readonly translate: TranslateService) { }
=======
  constructor(
    private readonly dialogService: MatDialog,
    private readonly translate: TranslateService,
    private readonly pipe: LdsReplacePipe,
    private readonly zone: NgZone,
  ) {}
>>>>>>> oned/v92

  public async confirmLeaveWithUnsavedChanges(title?: string, message?: string, disableClose?: boolean): Promise<boolean> {
    const dialogRef = this.dialogService.open(MessageDialogComponent, {
      data: {
        ShowYesNo: true,
        Title: await this.translate.get(title || '#LDS#Heading Cancel Editing').toPromise(),
        Message: await this.translate
          .get(message || '#LDS#You have unsaved changes. Are you sure you want to cancel editing and discard your changes?')
          .toPromise(),
      },
      panelClass: 'imx-messageDialog',
<<<<<<< HEAD
      disableClose: disableClose
    });
    return (await dialogRef.beforeClosed().toPromise()) === MessageDialogResult.YesResult ? true : false;
  }

  public async confirm(data: MessageParameter): Promise<boolean> {
    const dialogRef = this.dialogService.open(MessageDialogComponent, {
      data: {
        ShowYesNo: true,
        Title: await this.translate.get(data.Title).toPromise(),
        Message: await this.translate.get(data.Message).toPromise(),
        identifier: data.identifier
      },
      panelClass: 'imx-messageDialog',
    });
    return (await dialogRef.afterClosed().toPromise()) === MessageDialogResult.YesResult ? true : false;
=======
      disableClose: disableClose,
    });
    return (await dialogRef.beforeClosed().toPromise()) === MessageDialogResult.YesResult;
  }

  public async confirm(data: MessageParameter): Promise<boolean> {
    let message = data?.Message ? await this.translate.get(data.Message).toPromise() : '';
    message = data.Parameter ? this.pipe.transform(message, ...data.Parameter) : message;
    const title = data?.Title ? await this.translate.get(data.Title).toPromise() : '';
    let dialogRef;

    this.zone.run(() => {
      dialogRef = this.dialogService.open(MessageDialogComponent, {
        data: {
          Title: title,
          Message: message,
          ShowYesNo: true,
        },
        panelClass: 'imx-messageDialog',
      });
    });

    return (await dialogRef.afterClosed().toPromise()) === MessageDialogResult.YesResult;
  }

  public async confirmGeneral(data: MessageParameter): Promise<boolean> {
    const message = data?.Message ? await this.translate.get(data.Message).toPromise() : '';
    const dialogRef = this.dialogService.open(MessageDialogComponent, {
      data: {
        Title: data?.Title ? await this.translate.get(data.Title).toPromise() : '',
        Message: data.Parameter ? this.pipe.transform(message, ...data.Parameter) : message,
        ShowOk: data?.ShowOk ? true : false,
        ShowYesNo: data?.ShowYesNo ? true : false,
        ShowCancel: data?.ShowCancel ? true : false,
        identifier: data?.identifier,
      },
      panelClass: 'imx-messageDialog',
    });
    return (await dialogRef.afterClosed().toPromise()) === MessageDialogResult.YesResult;
>>>>>>> oned/v92
  }

  // Damit es bis "Pull Request 38432: 299557-imxweb-confirmdialogs-with-yes-no-buttons" funktioniert
  public async confirmDelete(title?: string, message?: string): Promise<boolean> {
    return this.confirm({
      Title: title || '#LDS#Heading Delete Object',
<<<<<<< HEAD
      Message: message || '#LDS#Are you sure you want to delete the object?'
    });
  }
}

=======
      Message: message || '#LDS#Are you sure you want to delete the object?',
    });
  }
}
>>>>>>> oned/v92
