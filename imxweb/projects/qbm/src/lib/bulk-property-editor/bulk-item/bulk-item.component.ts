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
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
=======
import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, UntypedFormGroup } from '@angular/forms';
>>>>>>> oned/v92
import { MatExpansionPanel } from '@angular/material/expansion';

import { BulkItem, BulkItemStatus } from './bulk-item';
import { BulkItemIcon } from './bulk-item-icon';
<<<<<<< HEAD
=======
import { CdrEditorComponent } from '../../cdr/cdr-editor/cdr-editor.component';
import { isEqual } from 'lodash';
import { EntityWriteDataSingle } from 'imx-qbm-dbts';
>>>>>>> oned/v92

@Component({
  selector: 'imx-bulk-item',
  templateUrl: './bulk-item.component.html',
<<<<<<< HEAD
  styleUrls: ['./bulk-item.component.scss']
})
export class BulkItemComponent implements OnInit {
  public get icon(): BulkItemIcon { return this.icons[this.bulkItem?.status]; }
=======
  styleUrls: ['./bulk-item.component.scss'],
})
export class BulkItemComponent implements OnInit {
  public get icon(): BulkItemIcon {
    return this.icons[this.bulkItem?.status];
  }
>>>>>>> oned/v92

  public iconStyle = {};

  @ViewChild('panel') public panel: MatExpansionPanel;

  @Input() public bulkItem: BulkItem;
  @Input() public expanded = false;
  @Input() public hideButtons = false;
  @Input() public isOptional = false;

  @Output() public saveItem: EventEmitter<BulkItem> = new EventEmitter();
  @Output() public skipItem: EventEmitter<BulkItem> = new EventEmitter();
  @Output() public statusUnknown: EventEmitter<BulkItem> = new EventEmitter();
  @Output() public validationStateChanged = new EventEmitter<BulkItem>();
  @Output() public controlCreated: EventEmitter<AbstractControl> = new EventEmitter();

<<<<<<< HEAD
  public readonly formGroup = new FormGroup({});

  private readonly icons: { [key: number]: BulkItemIcon } = {};
=======
  public readonly formGroup = new UntypedFormGroup({});

  public formGroupIsPending = false;
  private diffData: EntityWriteDataSingle;
  private readonly icons: { [key: number]: BulkItemIcon } = {};
  @ViewChildren(CdrEditorComponent) private cdrEditors: QueryList<CdrEditorComponent>;
>>>>>>> oned/v92

  constructor() {
    this.icons[BulkItemStatus.unknown] = {
      name: 'help',
<<<<<<< HEAD
      color: 'grey'
    };
    this.icons[BulkItemStatus.skipped] = {
      name: 'delete',
      color: 'grey'
    };
    this.icons[BulkItemStatus.saved] = {
      name: 'check',
      color: 'green'
=======
      color: 'grey',
    };
    this.icons[BulkItemStatus.skipped] = {
      name: 'delete',
      color: 'grey',
    };
    this.icons[BulkItemStatus.saved] = {
      name: 'check',
      color: 'green',
>>>>>>> oned/v92
    };
  }
  public ngOnInit(): void {
    setTimeout(() => {
      this.controlCreated.emit(this.formGroup);
      if (this.isOptional) {
        this.bulkItem.status = BulkItemStatus.saved;
      }

      this.setIconStyle();
<<<<<<< HEAD
      this.bulkItem.readonly = this.bulkItem.properties.every(p => p.isReadOnly());
      this.bulkItem.mandatory = this.bulkItem.properties.some(p => p.column.GetMetadata().GetMinLength() > 0);
=======
      this.bulkItem.readonly = this.bulkItem.properties.every((p) => p.isReadOnly());
      this.bulkItem.mandatory = this.bulkItem.properties.some((p) => p.column.GetMetadata().GetMinLength() > 0);
>>>>>>> oned/v92
    });
  }

  public save(): void {
    this.bulkItem.status = BulkItemStatus.saved;
    this.saveItem.emit(this.bulkItem);
    this.panel.close();
    this.setIconStyle();
  }

  public skip(): void {
    this.bulkItem.status = BulkItemStatus.skipped;
    this.skipItem.emit(this.bulkItem);
    this.panel.close();
    this.setIconStyle();
  }

  public open(): void {
    this.panel.open();
  }

  public closed(): void {
    this.validate();
  }

<<<<<<< HEAD
=======
  public onPendingChanged(value: boolean) {
    this.formGroupIsPending = value;    
  }

>>>>>>> oned/v92
  public onValueChanged(): void {
    this.formGroup.updateValueAndValidity();
    if (this.bulkItem.status === BulkItemStatus.saved && !this.formGroup.valid) {
      this.bulkItem.status = BulkItemStatus.unknown;
      this.statusUnknown.emit(this.bulkItem);
    }

<<<<<<< HEAD
=======
    const areEqual = isEqual(this.diffData, this.bulkItem.entity.GetEntity().GetDiffData());
    this.diffData = { ...this.bulkItem.entity.GetEntity().GetDiffData() };

    if (!areEqual) {
      this.cdrEditors.forEach((item) => {
        item.update();
      });
    }

>>>>>>> oned/v92
    this.validate();
  }

  public addControl(name: string, control: AbstractControl): void {
<<<<<<< HEAD
    setTimeout(() =>
      this.formGroup.addControl(name, control)
    );
=======
    setTimeout(() => this.formGroup.addControl(name, control));
>>>>>>> oned/v92
  }

  private validate(): void {
    this.bulkItem.valid = this.formGroup.valid;
    this.validationStateChanged.emit(this.bulkItem);
  }

  private setIconStyle(): void {
    let visible = false;
<<<<<<< HEAD
    this.bulkItem.properties.every(item => {
=======
    this.bulkItem.properties.every((item) => {
>>>>>>> oned/v92
      if (item.column.GetMetadata().GetMinLength() > 0) {
        visible = true;
        return;
      }
    });

    if (this.bulkItem.status === BulkItemStatus.skipped || this.bulkItem.status === BulkItemStatus.saved) {
      visible = true;
    }

<<<<<<< HEAD
    visible ? this.iconStyle = {visibility: 'visible'} : this.iconStyle = {visibility: 'hidden'};
=======
    visible ? (this.iconStyle = { visibility: 'visible' }) : (this.iconStyle = { visibility: 'hidden' });
>>>>>>> oned/v92
  }
}
