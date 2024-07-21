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

import { Component, Input, EventEmitter } from '@angular/core';

import { ShapeData } from 'imx-api-qbm';
import { ShapeClickArgs } from './hyperview-types';
import { EntityColumnData } from 'imx-qbm-dbts';

/**
 * A shape component that lists all {@link ShapeProperties|properties} of an object.
 */
@Component({
  selector: 'imx-hyperview-propertyshape',
  templateUrl: './propertyshape.component.html',
<<<<<<< HEAD
  styleUrls: ['./propertyshape.component.scss']
})
export class PropertyShapeComponent {

=======
  styleUrls: ['./propertyshape.component.scss'],
})
export class PropertyShapeComponent {
>>>>>>> oned/v92
  @Input() public shape: ShapeData;

  @Input() public selected: EventEmitter<ShapeClickArgs> = new EventEmitter();

<<<<<<< HEAD
  public click(): void {
    this.selected.emit({ objectKey: this.shape.ObjectKey });
  }

=======
>>>>>>> oned/v92
  public GetPropertyDisplayValue(property: EntityColumnData): string {
    return property.DisplayValue != null ? property.DisplayValue : property.Value;
  }
}
