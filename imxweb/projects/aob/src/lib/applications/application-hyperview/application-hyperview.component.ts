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

import { Component, Input, OnChanges } from '@angular/core';
<<<<<<< HEAD
import { OverlayRef } from '@angular/cdk/overlay';
import { EuiLoadingService } from '@elemental-ui/core';

import { ClassloggerService } from 'qbm';
=======


import { BusyService, ClassloggerService } from 'qbm';
>>>>>>> oned/v92
import { ShapeData } from 'imx-api-qer';
import { ApplicationHyperviewService } from './application-hyperview.service';

@Component({
  selector: 'imx-application-hyperview',
  templateUrl: './application-hyperview.component.html',
<<<<<<< HEAD
  styleUrls: ['./application-hyperview.component.scss']
=======
  styleUrls: ['./application-hyperview.component.scss'],
>>>>>>> oned/v92
})
export class ApplicationHyperviewComponent implements OnChanges {
  public shapes: ShapeData[];

  @Input() public uidApplication: string;

<<<<<<< HEAD
  constructor(private classlogger: ClassloggerService,
              private readonly busyService: EuiLoadingService,
              private hyperviewprovider: ApplicationHyperviewService) { }

  public async ngOnChanges(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
=======
  public busyService = new BusyService();
  public isLoading = false;

  constructor(private classlogger: ClassloggerService, private hyperviewprovider: ApplicationHyperviewService) {
    this.busyService.busyStateChanged.subscribe((elem) => (this.isLoading = elem));
  }

  public async ngOnChanges(): Promise<void> {
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92
    try {
      this.shapes = await this.hyperviewprovider.get(this.uidApplication);
      if (this.shapes) {
        this.classlogger.debug(this, 'hyperview loaded');
        this.classlogger.trace(this, this.shapes);
      } else {
        this.classlogger.error(this, 'ShapeData[] is undefined');
      }
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }


=======
      isBusy.endBusy();
    }
  }
>>>>>>> oned/v92
}
