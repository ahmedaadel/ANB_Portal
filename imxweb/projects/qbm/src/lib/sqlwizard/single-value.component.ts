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

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { FkProviderItem, IClientProperty, MetaTableRelationData, SqlColumnTypes, SqlTable, ValType, ValType as _valType } from 'imx-qbm-dbts';
=======
import {
  FkProviderItem,
  IClientProperty,
  MetaTableRelationData,
  SqlColumnTypes,
  SqlTable,
  ValType,
  ValType as _valType,
} from 'imx-qbm-dbts';
>>>>>>> oned/v92
import { Subscription } from 'rxjs';
import { BaseCdr } from '../cdr/base-cdr';
import { EntityService } from '../entity/entity.service';
import { SqlNodeView } from './SqlNodeView';
import { SqlWizardApiService } from './sqlwizard-api.service';
<<<<<<< HEAD
=======
import { FormControl, Validators } from '@angular/forms';
>>>>>>> oned/v92

@Component({
  selector: 'imx-sqlwizard-singlevalue',
  styleUrls: ['./sqlwizard.scss'],
<<<<<<< HEAD
  templateUrl: './single-value.component.html'
})
export class SingleValueComponent implements OnInit, OnDestroy {

=======
  templateUrl: './single-value.component.html',
})
export class SingleValueComponent implements OnInit, OnDestroy {
>>>>>>> oned/v92
  public get selectedTable() {
    return this._selectedTable;
  }

  public set selectedTable(val) {
    this._selectedTable = val;
    if (val) {
      this._fkRelation.ParentTableName = val.Name;
      this._fkRelation.ParentColumnName = val.ParentColumnName;
      this._fkProviderItem.fkTableName = val.Name;
    }
  }

  get value() {
<<<<<<< HEAD
    if (this.mode == 'array') {
      return this.expr.Data.Value[this.index];
    }
    else {
=======
    if (this.mode == 'array' && this.expr.Data.Value) {
      return this.expr.Data.Value[this.index];
    } else {
>>>>>>> oned/v92
      return this.expr.Data.Value;
    }
  }

  set value(val) {
<<<<<<< HEAD
    if (this.mode == 'array') {
      this.expr.Data.Value[this.index] = val;
    }
    else {
      this.expr.Data.Value = val;
    }
  }
=======
    if (this.mode == 'array' && this.expr.Data.Value) {
      this.expr.Data.Value[this.index] = val;
    } else {
      this.expr.Data.Value = val;
    }
  }

  get displayValue() {
    if (!this.expr.Data.DisplayValues) {
      return null;
    }
    return this.expr.Data.DisplayValues[this.mode === 'array' ? this.index : 0];
  }

  set displayValue(val) {
    if (!this.expr.Data?.DisplayValues) {
      return;
    }
    if (this.mode == 'array' && this.expr.Data.DisplayValues) {
      this.expr.Data.DisplayValues[this.index] = val;
    } else {
      this.expr.Data.DisplayValues = [val];
    }
  }

>>>>>>> oned/v92
  @Input() public expr: SqlNodeView;
  @Input() public mode: 'array' | 'single' = 'single';
  @Input() public index: number;

  @Output() public change = new EventEmitter<any>();

  public ValType = _valType;
  public ColumnType = SqlColumnTypes;
<<<<<<< HEAD

  public cdr: BaseCdr;

  private _selectedTable: SqlTable;
  private _fkRelation: MetaTableRelationData = {
    IsMemberRelation: false
=======
  public cdr: BaseCdr;
  public doubleFormControl = new FormControl(null, Validators.pattern(/^[+-]?\d+(\.\d+)?$/));
  public integerFormControl = new FormControl(null, Validators.pattern(/^[+-]?\d+$/));

  private _selectedTable: SqlTable;
  private _fkRelation: MetaTableRelationData = {
    IsMemberRelation: false,
>>>>>>> oned/v92
  };
  private _fkProviderItem: FkProviderItem = {
    columnName: 'dummycolumn',
    fkTableName: 'not_set',
<<<<<<< HEAD
    parameterNames: [
      'OrderBy',
      'StartIndex',
      'PageSize',
      'filter',
      'search'
    ],
=======
    parameterNames: ['OrderBy', 'StartIndex', 'PageSize', 'filter', 'search'],
>>>>>>> oned/v92
    load: async (_, parameters = {}) => this.sqlWizardApi.getCandidates(this._fkRelation.ParentTableName, parameters),
    getFilterTree: async () => ({ Elements: [] }),
    getDataModel: async () => ({}),
  };

<<<<<<< HEAD
  constructor(private readonly entityService: EntityService,
    private readonly sqlWizardApi: SqlWizardApiService) { }

  private subscriptions: Subscription[] = [];

  public ngOnInit(): void {
    this.subscriptions.push(this.expr.columnChanged.subscribe(_ => {
      this.buildCdr();
    }));

    this.buildCdr();
=======
  private subscriptions: Subscription[] = [];

  constructor(private readonly entityService: EntityService, private readonly sqlWizardApi: SqlWizardApiService) {}

  public ngOnInit(): void {
    this.subscriptions.push(
      this.expr.columnChanged.subscribe((_) => {
        this.buildCdr();
      })
    );

    this.buildCdr();
    this.onFormValueChanges();
  }

  public ngOnDestroy(): void {
    for (var s of this.subscriptions) s.unsubscribe();
>>>>>>> oned/v92
  }

  public emitChanges(): void {
    this.change.emit();
  }

  private buildCdr() {
<<<<<<< HEAD

    const tables = this.expr.Property.SelectionTables;
    if (tables && tables.length > 0) {
      this.selectedTable = tables[0];
    }
    else {
=======
    const tables = this.expr.Property.SelectionTables;
    if (tables && tables.length > 0) {
      this.selectedTable = tables[0];
    } else {
>>>>>>> oned/v92
      this.selectedTable = null;
    }

    const property: IClientProperty = {
      ColumnName: 'dummycolumn',
      Type: ValType.String,
<<<<<<< HEAD
      FkRelation: this._fkRelation
    };

    // Handle display for array and single values, if null do nothing
    const displayValue = this.expr.Data.DisplayValues ? ( this.mode === 'single' ? this.expr.Data.DisplayValues[0] : this.expr.Data.DisplayValues[this.index]) : null;

    const column = this.entityService.createLocalEntityColumn(property, [this._fkProviderItem], {
      Value: this.value,
      DisplayValue: displayValue
    });

    // when the CDR value changes, write back to the SQL wizard data structure
    column.ColumnChanged.subscribe(() => {
      this.value = column.GetValue();
      this.emitChanges();
=======
      FkRelation: this._fkRelation,
    };

    if (this.expr.Property.Type === ValType.Bool && this.expr.Data.Value === undefined ) this.value = false;

    const column = this.entityService.createLocalEntityColumn(property, [this._fkProviderItem], {
      Value: this.value,
      DisplayValue: this.displayValue,
    });
    if (this.expr.Property.Type === ValType.Double) {
      this.doubleFormControl.setValue(column.GetValue());
    }
    if (this.expr.Property.Type === ValType.Int) {
      this.integerFormControl.setValue(column.GetValue());
    }

    // when the CDR value changes, write back to the SQL wizard data structure
    column.ColumnChanged.subscribe(() => {
      setTimeout(() => {
        this.displayValue = column.GetDisplayValue();
        this.value = column.GetValue();
        this.emitChanges();
      }, 0);
>>>>>>> oned/v92
    });
    this.cdr = new BaseCdr(column, '#LDS#Value');
  }

<<<<<<< HEAD
  public ngOnDestroy(): void {
    for (var s of this.subscriptions)
      s.unsubscribe();
  }
}
=======
  private onFormValueChanges(): void {
    this.subscriptions.push(
      this.doubleFormControl.valueChanges.subscribe((value) => {
        if (!this.doubleFormControl.hasError('pattern')) {
          this.value = value;
          this.emitChanges();
        } else {
          this.value = {};
        }
      })
    );
    this.subscriptions.push(
      this.integerFormControl.valueChanges.subscribe((value) => {
        if (!this.integerFormControl.hasError('pattern')) {
          this.value = value;
          this.emitChanges();
        } else {
          this.value = {};
        }
      })
    );
  }
}

>>>>>>> oned/v92
