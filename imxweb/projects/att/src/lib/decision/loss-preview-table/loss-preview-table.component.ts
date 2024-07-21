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

import { Component, Input, OnInit } from '@angular/core';
import { EntitlementLossDto } from 'imx-api-att';
import { LossPreview } from '../loss-preview.interface';
<<<<<<< HEAD
=======
import { AttestationCasesService } from '../attestation-cases.service';
>>>>>>> oned/v92

@Component({
  selector: 'imx-loss-preview-table',
  templateUrl: './loss-preview-table.component.html',
<<<<<<< HEAD
  styleUrls: ['./loss-preview-table.component.scss']
})
export class LossPreviewTableComponent implements OnInit {

  @Input() public lossPreview: LossPreview;
  @Input() public showTitle = false;
=======
  styleUrls: ['./loss-preview-table.component.scss'],
})
export class LossPreviewTableComponent implements OnInit {
  @Input() public lossPreview: LossPreview;
  @Input() public showTitle = false;
  public isLoading = false;
>>>>>>> oned/v92
  public lossPreviewItems: EntitlementLossDto[];
  public lossPreviewHeaders: string[];
  public lossPreviewDisplayKeys: EntitlementLossDto;

<<<<<<< HEAD
  public ngOnInit(): void {
=======
  constructor(private caseService: AttestationCasesService) {}

  public async ngOnInit(): Promise<void> {
    if (this.lossPreview.Case) {
      // If we pass in the case, then we still need to grab the loss items
      await this.loadData();
    }
>>>>>>> oned/v92
    this.lossPreviewItems = this.lossPreview.LossPreviewItems;
    this.lossPreviewHeaders = this.lossPreview.LossPreviewHeaders;
    this.lossPreviewDisplayKeys = this.lossPreview.LossPreviewDisplayKeys;
  }
<<<<<<< HEAD
=======

  public async loadData(): Promise<void> {
    this.isLoading = true;
    try {
      this.lossPreview.LossPreviewItems = await this.caseService.getLossPreviewEntities(this.lossPreview.Case);
    } finally {
      this.isLoading = false;
    }
  }
>>>>>>> oned/v92
}
