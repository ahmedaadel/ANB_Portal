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
import { Component, OnInit } from '@angular/core';
import { EuiDownloadOptions } from '@elemental-ui/core';

import { ElementalUiConfigService } from 'qbm';
import { AccountsReportsService } from '../accounts/accounts-reports.service';
=======
import { Component, Injector, OnInit } from '@angular/core';
import { EuiDownloadDirective, EuiDownloadOptions } from '@elemental-ui/core';

import { ElementalUiConfigService } from 'qbm';
import { QerPermissionsService } from 'qer';
import { AccountsReportsService } from '../accounts/accounts-reports.service';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';
>>>>>>> oned/v92

@Component({
  selector: 'imx-report-button-ext',
  templateUrl: './report-button-ext.component.html',
  styleUrls: ['./report-button-ext.component.scss']
})
export class ReportButtonExtComponent implements OnInit {
  public downloadOptions: EuiDownloadOptions;

  public referrer: string;
<<<<<<< HEAD

  constructor(
    private readonly elementalUiConfigService: ElementalUiConfigService,
    private readonly service: AccountsReportsService
  ) { }

  public ngOnInit(): void {
=======
  public isAvailable: boolean;

  constructor(
    private readonly elementalUiConfigService: ElementalUiConfigService,
    private readonly service: AccountsReportsService,
    private readonly http: HttpClient,
    private readonly injector: Injector,
    private readonly overlay: Overlay,

  ) { }

  public async ngOnInit(): Promise<void> {
>>>>>>> oned/v92
    const url = this.service.accountsOwnedByManagedReport(30, this.referrer);

    this.downloadOptions = {
      ...this.elementalUiConfigService.Config.downloadOptions,
      url
    };
  }
<<<<<<< HEAD
=======

  public viewReport():void{
    const directive = new EuiDownloadDirective(null, this.http, this.overlay, this.injector);
    directive.downloadOptions = {
      ...this.downloadOptions,
      disableElement: false,
    };
    directive.onClick();
  }
>>>>>>> oned/v92
}
