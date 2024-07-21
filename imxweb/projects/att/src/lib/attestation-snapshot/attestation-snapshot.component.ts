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
import { Component, Inject, OnInit } from "@angular/core";
import { EUI_SIDESHEET_DATA } from "@elemental-ui/core";
import { AttestationSnapshotData } from "imx-api-att";
import { ApiService } from "../api.service";

@Component({
  templateUrl: './attestation-snapshot.component.html',
  styleUrls: ['./attestation-snapshot.component.scss']
})
export class AttestationSnapshotComponent implements OnInit {

  constructor(@Inject(EUI_SIDESHEET_DATA) private data: {
    uidCase: string,
    date: string
  },
    private readonly attApi: ApiService) {
  }

  public snapshot: AttestationSnapshotData;

  public async ngOnInit(): Promise<void> {
    this.snapshot = await this.attApi.client.portal_attestation_snapshot_get(this.data.uidCase);
  }

  public LdsHelperText = '#LDS#The following data was saved on {0} and should be reviewed.';

  public get attestationDate() { return this.data.date; }
}
=======
import { Component, Input, OnInit } from '@angular/core';
import { EuiLoadingService } from '@elemental-ui/core';

import { AttestationSnapshotData } from 'imx-api-att';
import { ApiService } from '../api.service';

@Component({
  templateUrl: './attestation-snapshot.component.html',
  selector: 'imx-attestation-snapshot',
  styleUrls: ['./attestation-snapshot.component.scss'],
})
export class AttestationSnapshotComponent implements OnInit {
  public snapshot: AttestationSnapshotData;

  @Input() public uidCase: string;
  @Input() public date :string;
  constructor(
    private readonly attApi: ApiService,
    private readonly busy: EuiLoadingService
  ) {}

  public async ngOnInit(): Promise<void> {
    const overlay = this.busy.show();
    try {
      this.snapshot = await this.attApi.client.portal_attestation_snapshot_get(this.uidCase);
      this.sortObjectsByDisplay();
    } finally {
      this.busy.hide(overlay);
    }
  }

  public get attestationDate(): string {
    return this.date;
  }

  /**
   * Ordering Objects array by Display (if Displays are equal, then by TableDisplay) in ascending order
   */
  private sortObjectsByDisplay(): void {
    this.snapshot.Objects.sort((obj1, obj2) => {
      const display1 = obj1.Data.Display;
      const display2 = obj2.Data.Display;
      const tableDisplay1 = obj1.TableDisplay;
      const tableDisplay2 = obj2.TableDisplay;

      if (display1 === display2) return tableDisplay1 < tableDisplay2 ? -1 : 1;

      return display1 < display2 ? -1 : 1;
    });
  }
}
>>>>>>> oned/v92
