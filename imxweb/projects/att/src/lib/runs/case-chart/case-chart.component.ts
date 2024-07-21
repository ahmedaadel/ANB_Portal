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
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChartOptions, pie } from 'billboard.js';
import { PortalAttestationRun } from 'imx-api-att';
=======
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { bar, Chart, ChartOptions } from 'billboard.js';
import { PortalAttestationRun } from 'imx-api-att';
import { Subscription, fromEvent } from 'rxjs';
>>>>>>> oned/v92

@Component({
  selector: 'imx-case-chart',
  templateUrl: './case-chart.component.html',
<<<<<<< HEAD
  styleUrls: ['./case-chart.component.scss']
})
export class CaseChartComponent implements OnInit {

  @Input() public run: PortalAttestationRun;

  public chartData: ChartOptions;
  constructor(
    readonly translateService: TranslateService
  ) { }
=======
  styleUrls: ['./case-chart.component.scss'],
})
export class CaseChartComponent implements OnInit, OnDestroy {
  @Input() public run: PortalAttestationRun;

  public chartData: ChartOptions;

  private chart: Chart;
  private subscriptions$: Subscription[] = [];

  @ViewChild('chartWrapper', { read: ElementRef }) public chartWrapper: ElementRef<HTMLElement>;

  constructor(readonly translateService: TranslateService) {}
>>>>>>> oned/v92

  public ngOnInit(): void {
    if (this.run != null) {
      this.chartData = this.buildSingleValueChart();
    }
<<<<<<< HEAD
  }

  private buildSingleValueChart(): ChartOptions {
    if (this.run.PendingCases.value === 0 && this.run.GrantedCases.value === 0
      && this.run.DeniedCases.value === 0 && this.run.CasesAbortedBySystem.value === 0) {
      return undefined;
    }
    return {
      size: { width: 271, height: 271 },
=======

    this.subscriptions$.push(
      fromEvent(window, 'resize').subscribe(() => {
        if (this.chart) {
          this.chart.resize({
            height: this.chartWrapper?.nativeElement.offsetHeight,
            width: this.chartWrapper?.nativeElement.offsetWidth,
          });
        }
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions$.forEach((sub) => sub.unsubscribe());
  }

  public saveChart(chart: Chart): void {
    this.chart = chart;
    this.chart.resize({
      height: this.chartWrapper?.nativeElement.offsetHeight,
      width: this.chartWrapper?.nativeElement.offsetWidth,
    });
  }

  private buildSingleValueChart(): ChartOptions {
    if (
      this.run.PendingCases.value === 0 &&
      this.run.GrantedCases.value === 0 &&
      this.run.DeniedCases.value === 0 &&
      this.run.CasesAbortedBySystem.value === 0
    ) {
      return undefined;
    }

    return {
      size: { width: 100, height: 100 },
>>>>>>> oned/v92
      data: {
        columns: [
          ['open', this.run.PendingCases.value],
          ['granted', this.run.GrantedCases.value],
          ['denied', this.run.DeniedCases.value - this.run.CasesAbortedBySystem.value],
<<<<<<< HEAD
          ['abort', this.run.CasesAbortedBySystem.value]
=======
          ['abort', this.run.CasesAbortedBySystem.value],
>>>>>>> oned/v92
        ],
        names: {
          open: this.run.PendingCases.GetMetadata().GetDisplay(),
          granted: this.run.GrantedCases.GetMetadata().GetDisplay(),
          denied: this.run.DeniedCases.GetMetadata().GetDisplay(),
<<<<<<< HEAD
          abort: this.run.CasesAbortedBySystem.GetMetadata().GetDisplay()
=======
          abort: this.run.CasesAbortedBySystem.GetMetadata().GetDisplay(),
>>>>>>> oned/v92
        },
        colors: {
          open: '#05AADB',
          granted: '#618F3E',
          denied: '#B42126',
<<<<<<< HEAD
          abort: '#F4770B'
        },
        type: pie(),
      }, pie: {
        padAngle: 0.01,
        label: {
          format: d => `${d}`,
          threshold: 0.01
        },
      }
    };
  }

=======
          abort: '#F4770B',
        },
        type: bar(),
      },
      bar: {
        width: {
          ratio: 0.5,
        },
      },
    };
  }
>>>>>>> oned/v92
}
