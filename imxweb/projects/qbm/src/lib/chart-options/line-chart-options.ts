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
import { ChartOptions, LineOptions, ChartTypes, areaSpline, area, spline, line, zoom } from 'billboard.js';
=======
import { ChartOptions, ChartTypes, GridLineOptions, area, areaSpline, line, spline } from 'billboard.js';
>>>>>>> oned/v92
import { XAxisInformation } from './x-axis-information';
import { YAxisInformation } from './y-axis-information';

export class LineChartOptions {
<<<<<<< HEAD

=======
>>>>>>> oned/v92
  /**
   * Gets or sets the visibiliy of the points
   */
  public showPoints = false;

  /**
   *  Gets or set whether the chart can be zoomed
   */
  public canZoom = true;

  /**
   * Gets or sets whether the legend should be hinden
   */
  public hideLegend = false;

  /**
   * Gets or sets an array of additional Lines, that should be shown on the chart
   * (like a threshhold or an average value)
   */
<<<<<<< HEAD
  public additionalLines: LineOptions[];
=======
  public additionalLines: GridLineOptions[];
>>>>>>> oned/v92

  /**
   * Gets or sets whether the chart should use curved or streight lines
   */
  public useCurvedLines = true;

  /**
   * Gets or sets whether the area beneath the chart should be colorized
   */
  public colorArea = true;

<<<<<<< HEAD
  public size: {width: number, height: number};
=======
  public size: { width: number; height: number };
>>>>>>> oned/v92

  /**
   * Set padding as a constant for timeseries
   */
<<<<<<< HEAD
  public padding: { left: number, right: number, unit?: string}
=======
  public padding: { top?: number; bottom?: number; left: number; right: number; unit?: string };
>>>>>>> oned/v92

  /**
   * An optional function for getting a tooltip
   */
  public tooltip: (data: any) => string; // TODO: hier müsste noch eine bessere Lösung gefunden werden

  /**
   * Gets the {@link XAxisInformation|x axis informations} for the chart
   */
  public readonly xAxisInformation: XAxisInformation;

  /**
   * Gets the {@link YAxisInformation|y axis informations} for the chart
   */
  public readonly yAxisInformation: YAxisInformation;

  public constructor(xAxisInformation: XAxisInformation, yAxisInformation: YAxisInformation) {
    this.xAxisInformation = xAxisInformation;
    this.yAxisInformation = yAxisInformation;
  }

  /**
   * Gets the Billboard.js ChartOptions defining a chart
   */
  public get options(): ChartOptions {
    const col: any[] = [];
    col.push(this.xAxisInformation.getAxisData());
<<<<<<< HEAD
    this.yAxisInformation.series.forEach(element => {
=======
    this.yAxisInformation.series.forEach((element) => {
>>>>>>> oned/v92
      col.push(element.getSerie());
    });
    return {
      size: this.size,
      data: {
        x: 'x',
        columns: col,
        names: this.yAxisInformation.getNames(),
        type: this.getType(),
<<<<<<< HEAD
        colors: this.yAxisInformation.getColors()
=======
        colors: this.yAxisInformation.getColors(),
>>>>>>> oned/v92
      },
      tooltip: {
        contents: this.tooltip,
      },
      spline: { interpolation: { type: 'monotone-x' } },
<<<<<<< HEAD
      zoom: { enabled: this.canZoom, type: 'drag'},
      point: { show: this.showPoints },
      axis: {
        x: this.xAxisInformation.getAxisConfiguration(),
        y: this.yAxisInformation.getAxisConfiguration()
      },
      legend: { hide: this.hideLegend },
      grid: {
        y: {
          lines: this.additionalLines,
        }
      },
      padding: this.padding
=======
      zoom: { enabled: this.canZoom, type: 'drag' },
      point: { show: this.showPoints },
      axis: {
        x: this.xAxisInformation.getAxisConfiguration(),
        y: this.yAxisInformation.getAxisConfiguration(),
      },
      legend: { hide: this.hideLegend, item: { onclick() {} } },
      grid: {
        y: {
          lines: this.additionalLines,
        },
      },
      padding: this.padding,
>>>>>>> oned/v92
    };
  }

  private getType(): ChartTypes {
<<<<<<< HEAD
    return this.colorArea ? (this.useCurvedLines ? areaSpline() : area()) : (this.useCurvedLines ? spline() : line());
=======
    return this.colorArea ? (this.useCurvedLines ? areaSpline() : area()) : this.useCurvedLines ? spline() : line();
>>>>>>> oned/v92
  }
}
