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

import { EventEmitter, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataModel, DataModelViewConfig, EntitySchema, IClientProperty, ValType } from 'imx-qbm-dbts';
import { ClassloggerService } from '../classlogger/classlogger.service';
import { StorageService } from '../storage/storage.service';
import { AdditionalInfosComponent } from './additional-infos/additional-infos.component';
import { DataSourceToolbarSettings } from './data-source-toolbar-settings';
import { ClientPropertyForTableColumns } from './client-property-for-table-columns';
import _ from 'lodash';
<<<<<<< HEAD
=======
import { DSTViewConfig } from './data-source-toolbar-view-config.interface';
>>>>>>> oned/v92

export interface ShownClientPropertiesArg {
  properties: IClientProperty[];
  needsReload: boolean;
}
export class ColumnOptions {
<<<<<<< HEAD

=======
>>>>>>> oned/v92
  /**
   * A list of client properties, that will be shown in the DataTable
   */
  public shownClientProperties: ClientPropertyForTableColumns[] = [];

  /**
   * List of possible addable columns
   */
  public optionalColumns: IClientProperty[] = [];

  /**
   * A list of client properties, that should be shown in the main column
   */
  public additionalListElements: IClientProperty[] = [];

  public selectedOptionals: IClientProperty[] = [];

  /**
   * currently used view settings
   */
<<<<<<< HEAD
  public currentViewSettings: DataModelViewConfig;
=======
  public currentViewSettings: DataModelViewConfig | DSTViewConfig;
>>>>>>> oned/v92

  /**
   * Event, that emits, when the shownClientProperies Property changes
   */
  public shownColumnsSelectionChanged = new EventEmitter<ShownClientPropertiesArg>();

  /**
   * Event, that emits, when the additionalListElements Property changes
   */
  public additionalListElementsChanged = new EventEmitter<IClientProperty[]>();

  /**
   * Indicates whether there are optional columns or not
   */
  public get hasOptionalColumns(): boolean {
    return this.currentViewSettings && this.optionalColumns?.length > 0;
  }

<<<<<<< HEAD
  public get additionalColumns(): IClientProperty[] {
    return this.currentViewSettings?.AdditionalTableColumns?.map(elem =>
      ColumnOptions.getClientProperty(ColumnOptions.findKey(elem, this.entitySchema), this.dataModel, this.entitySchema)) ?? [];
=======
  // Additional columns are set to null if we are using a config so that we can still edit the columns
  public get additionalColumns(): IClientProperty[] {
    return (
      this.currentViewSettings?.AdditionalTableColumns?.map((elem) =>
        ColumnOptions.getClientProperty(ColumnOptions.findKey(elem, this.entitySchema), this.dataModel, this.entitySchema)
      ) ?? []
    );
  }

  // We are default if we have not injected a viewconfig
  public get isDefaultConfig(): boolean {
    return !this.viewConfig;
>>>>>>> oned/v92
  }

  // private services
  private store: StorageService;
  private dialog: MatDialog;
  private logger: ClassloggerService;

  // getter for settings
<<<<<<< HEAD
  private get dataModel(): DataModel { return this.settings.dataModel; }
  private entitySchema: EntitySchema;
  private get displayedColumns(): IClientProperty[] { return this.settings.displayedColumns; }

  private originalEntitySchema;

  constructor(
    public settings: DataSourceToolbarSettings,
    injector: Injector
  ) {
    this.currentViewSettings = this.dataModel.Configurations?.
      find(elem => elem.Id === this.dataModel.DefaultConfigId);

    if (this.currentViewSettings) {
      // Clean up settings, if there are null or empty columnsnames attached
      if (this.currentViewSettings.AdditionalListColumns
        && this.currentViewSettings.AdditionalListColumns.some(elem => elem == null || elem === '')) {
        (this.currentViewSettings.AdditionalListColumns as any) =
          this.currentViewSettings.AdditionalListColumns.filter(elem => elem != null && elem !== '');
      }

      if (this.currentViewSettings.AdditionalTableColumns
        && this.currentViewSettings.AdditionalTableColumns.some(elem => elem == null || elem === '')) {
        (this.currentViewSettings.AdditionalTableColumns as any) =
          this.currentViewSettings.AdditionalTableColumns.filter(elem => elem != null && elem !== '');
=======
  private get dataModel(): DataModel {
    return this.settings.dataModel;
  }
  private entitySchema: EntitySchema;
  private get displayedColumns(): IClientProperty[] {
    return this.settings.displayedColumns;
  }

  private originalEntitySchema;

  constructor(public settings: DataSourceToolbarSettings, injector: Injector, public viewConfig?: DSTViewConfig) {
    // Use the injected viewConfig if available
    this.currentViewSettings = viewConfig ?? this.dataModel.Configurations?.find((elem) => elem.Id === this.dataModel.DefaultConfigId);

    if (this.currentViewSettings) {
      // Clean up settings, if there are null or empty columnsnames attached
      if (
        this.currentViewSettings.AdditionalListColumns &&
        this.currentViewSettings.AdditionalListColumns.some((elem) => elem == null || elem === '')
      ) {
        (this.currentViewSettings.AdditionalListColumns as any) = this.currentViewSettings.AdditionalListColumns.filter(
          (elem) => elem != null && elem !== ''
        );
      }

      if (
        this.currentViewSettings.AdditionalTableColumns &&
        this.currentViewSettings.AdditionalTableColumns.some((elem) => elem == null || elem === '')
      ) {
        (this.currentViewSettings.AdditionalTableColumns as any) = this.currentViewSettings.AdditionalTableColumns.filter(
          (elem) => elem != null && elem !== ''
        );
>>>>>>> oned/v92
      }
    }

    // initializing of services
    this.store = injector.get(StorageService);
    this.dialog = injector.get(MatDialog);
    this.logger = injector.get(ClassloggerService);
    this.entitySchema = _.cloneDeep(this.settings.entitySchema);
    this.originalEntitySchema = _.cloneDeep(this.entitySchema);
  }

  public getPropertiesForNavigation(): string[] {
<<<<<<< HEAD
    const additional = this.additionalColumns;
    return this.shownClientProperties.filter(elem =>
      this.displayedColumns.findIndex(disp => disp.ColumnName === elem.ColumnName) === -1 &&
      additional.findIndex(disp => disp.ColumnName === elem.ColumnName) === -1
    ).map(elem => elem.ColumnName);
=======
    return this.shownClientProperties
      .filter((elem) => this.displayedColumns.findIndex((disp) => disp.ColumnName === elem.ColumnName) === -1)
      .map((elem) => elem.ColumnName);
>>>>>>> oned/v92
  }

  /**
   *  Shows a dialog for adding/removing optional columns
   */
  public async updateAdditional(): Promise<void> {
<<<<<<< HEAD
    const additional = this.additionalColumns;
    const displayedColumns = [
      ...this.displayedColumns,
      ...additional];
    this.logger.trace(this, 'unchangeable columns', displayedColumns);
    const result: { all: IClientProperty[], optionals: IClientProperty[] }
      = await this.dialog.open(AdditionalInfosComponent, {
=======
    // Don't force additional columns to be unselectable unless it was the default
    const additional = this.isDefaultConfig ? this.additionalColumns : [];
    const displayedColumns = [...this.displayedColumns, ...additional];
    this.logger.trace(this, 'unchangeable columns', displayedColumns);
    const result: { all: IClientProperty[]; optionals: IClientProperty[] } = await this.dialog
      .open(AdditionalInfosComponent, {
>>>>>>> oned/v92
        width: 'min(1200px,70%)',
        autoFocus: false,
        height: 'min(700px,70%)',
        data: {
          dataModel: this.dataModel,
          entitySchema: this.entitySchema,
          displayedColumns,
          additionalPropertyNames: this.optionalColumns,
<<<<<<< HEAD
          preselectedProperties: [...this.shownClientProperties]
        },
        panelClass: 'imx-toolbar-dialog'
      }).afterClosed().toPromise();
    if (result) {
      if (JSON.stringify(this.shownClientProperties) === JSON.stringify(result.all)) { return; }

      this.shownClientProperties = result.all;

      const needsReload = result.optionals.length > this.selectedOptionals.length
        || result.optionals.some(res => this.selectedOptionals.find(sel => sel.ColumnName === res.ColumnName) == null);
=======
          additionalColumns: this.additionalColumns,
          preselectedProperties: [...this.shownClientProperties],
        },
        panelClass: 'imx-toolbar-dialog',
      })
      .afterClosed()
      .toPromise();
    if (result) {
      if (JSON.stringify(this.shownClientProperties) === JSON.stringify(result.all)) {
        return;
      }

      this.shownClientProperties = result.all;

      const needsReload =
        result.optionals.length > this.selectedOptionals.length ||
        result.optionals.some((res) => this.selectedOptionals.find((sel) => sel.ColumnName === res.ColumnName) == null);
>>>>>>> oned/v92
      this.selectedOptionals = result.optionals;
      this.logger.trace(this, 'new displayed columns', result.all, 'new optional columns', result.optionals, 'needs reload', needsReload);

      this.shownColumnsSelectionChanged.emit({ properties: this.shownClientProperties, needsReload });
<<<<<<< HEAD

      if (this.settings.identifierForSessionStore) {
        this.store.storeProperties('columns-' + this.settings.identifierForSessionStore,
          this.shownClientProperties.map(elem => elem.ColumnName));
        this.store.storeProperties('columns-additional-' + this.settings.identifierForSessionStore,
          this.currentViewSettings?.AdditionalTableColumns ?? []);
        this.logger.trace(this, `properties stored under ${'columns-' + this.settings.identifierForSessionStore}:`
          , this.shownClientProperties.map(elem => elem.ColumnName));
      }
=======
>>>>>>> oned/v92
    }
  }

  /**
   * resets the view by removing all optional columns and restoring the initial order
   */
  public resetView(): void {
<<<<<<< HEAD
    if (this.currentViewSettings == null) { return; }
=======
    if (this.currentViewSettings == null) {
      return;
    }

    // We will reset by grabbing the default Id
    this.currentViewSettings = this.dataModel.Configurations?.find((elem) => elem.Id === 'Default');
>>>>>>> oned/v92

    const addition = this.additionalColumns;
    this.selectedOptionals = [];

    this.shownClientProperties = [...this.displayedColumns];
<<<<<<< HEAD
    const index = this.shownClientProperties.findIndex(elem => elem.afterAdditionals);
    this.shownClientProperties.splice(index === -1 ? this.shownClientProperties.length : index, 0, ...addition);


    this.shownColumnsSelectionChanged.emit({ properties: this.shownClientProperties, needsReload: false });
    this.logger.trace(this, 'shown client properties resetted to', this.shownClientProperties);

    if (this.settings.identifierForSessionStore) {
      this.store.removeKeys(
        'columns-additional-' + this.settings.identifierForSessionStore,
        'columns-' + this.settings.identifierForSessionStore
      );
    }
=======
    const index = this.shownClientProperties.findIndex((elem) => elem.afterAdditionals);
    this.shownClientProperties.splice(index === -1 ? this.shownClientProperties.length : index, 0, ...addition);

    this.shownColumnsSelectionChanged.emit({ properties: this.shownClientProperties, needsReload: false });
    this.logger.trace(this, 'shown client properties resetted to', this.shownClientProperties);
>>>>>>> oned/v92
  }

  /**
   * updates the entity schema by adding optional columns
   * @returns the updated entity schema
   */
  public updateEntitySchema(): EntitySchema {
    this.entitySchema = _.cloneDeep(this.originalEntitySchema);
    const elements = this.getPropertiesForNavigation();

    if (this.currentViewSettings?.AdditionalTableColumns) {
      elements.push(...this.currentViewSettings.AdditionalTableColumns);
    }
    if (this.currentViewSettings?.AdditionalListColumns) {
      elements.push(...this.currentViewSettings.AdditionalListColumns);
    }

    if (elements.length > 0) {
      this.logger.trace(this, 'properties, that have to be updated', elements);
      // hack for adding the new columns to to entitySchema
<<<<<<< HEAD
      elements.forEach(element => {
=======
      elements.forEach((element) => {
>>>>>>> oned/v92
        const key = ColumnOptions.findKey(element, this.entitySchema);
        (this.entitySchema.Columns[key] as any) = ColumnOptions.getClientProperty(key, this.dataModel, this.entitySchema);
      });
    }

    this.logger.trace(this, 'new entitySchema', this.entitySchema);
    return this.entitySchema;
  }

  /**
   * inits the the optional columns, the shown client properties and the additional information for the display columns
   */
  public initColumnsAndAdditionalInformation(): void {
    this.initOptionalColumns();

    if (this.shownClientProperties.length === 0) {
      this.initShownClientProperties();
    }

<<<<<<< HEAD
    this.loadShownClientPropertiesFromStore();

=======
>>>>>>> oned/v92
    this.initAdditionalListElements();

    this.shownColumnsSelectionChanged.emit({ properties: this.shownClientProperties, needsReload: true });
  }

  private initOptionalColumns(): void {
<<<<<<< HEAD
    const optional = this.dataModel.Properties?.filter(elem => elem.IsAdditionalColumn).map(elem => elem.Property);

    this.optionalColumns = optional?.filter((value, index, categoryArray) =>
      this.isAdditional(value.ColumnName)
      && categoryArray.indexOf(value) === index);

=======
    const optional = this.dataModel.Properties?.filter((elem) => elem.IsAdditionalColumn).map((elem) => elem.Property);

    // Check if this isAdditional or if its already in the additionalColumns, both are needed to not lose the option from config selection
    this.optionalColumns = optional?.filter((value, index, categoryArray) => {
      const isAdditional =
        this.isAdditional(value.ColumnName) ||
        this.additionalColumns.find((ele) => ele.ColumnName.toLocaleLowerCase() == value.ColumnName.toLocaleLowerCase()) != null;
      const indexMatch = categoryArray.indexOf(value) === index;
      return isAdditional && indexMatch;
    });
>>>>>>> oned/v92

    this.logger.trace(this, 'optional columns', this.optionalColumns);
  }

  private initShownClientProperties(): void {
<<<<<<< HEAD
    const current = this.currentViewSettings?.AdditionalTableColumns?.
      map(elem => ColumnOptions.getClientProperty(elem, this.dataModel)) ?? [];
    this.shownClientProperties = [...this.displayedColumns];
    const index = this.shownClientProperties.findIndex(elem => elem.afterAdditionals);
=======
    const current =
      this.currentViewSettings?.AdditionalTableColumns?.filter((element) =>
        this.displayedColumns.every((elem) => elem.ColumnName !== element)
      ).map((elem) => ColumnOptions.getClientProperty(elem, this.dataModel)) ?? [];
    this.shownClientProperties = [...this.displayedColumns];
    const index = this.shownClientProperties.findIndex((elem) => elem.afterAdditionals);
>>>>>>> oned/v92
    this.shownClientProperties.splice(index === -1 ? this.shownClientProperties.length : index, 0, ...current, ...this.selectedOptionals);

    this.logger.trace(this, 'shown client properties initialized with', this.shownClientProperties);
  }

<<<<<<< HEAD
  private loadShownClientPropertiesFromStore(): void {
    if (!this.settings.identifierForSessionStore) {
      return;
    }

    const columns = this.store.getProperties('columns-' + this.settings.identifierForSessionStore);
    const addColumns = this.store.getProperties('columns-additional-' + this.settings.identifierForSessionStore);
    const showsAdditionals =
      (this.currentViewSettings?.AdditionalTableColumns ?? []).length === addColumns.length &&
      (this.currentViewSettings?.AdditionalTableColumns ?? []).every(add => addColumns.includes(add));

    if (columns?.length > 0 && showsAdditionals) {
      this.shownClientProperties = columns.map(column =>
        ColumnOptions.getClientProperty(column, this.dataModel, this.entitySchema));

      this.selectedOptionals = this.shownClientProperties.filter(elem => this.isAdditional(elem.ColumnName));

      this.shownColumnsSelectionChanged.emit({ properties: this.shownClientProperties, needsReload: true });
      this.logger.trace(this, 'columns loaded from store', this.shownClientProperties);
    } else {
      this.store.removeKeys(
        'columns-additional-' + this.settings.identifierForSessionStore,
        'columns-' + this.settings.identifierForSessionStore
      );
    }
  }

  private initAdditionalListElements(): void {
    const lists = this.currentViewSettings?.AdditionalListColumns;
    if (lists?.length > 0) {
      this.additionalListElements = lists.map(elem =>
        ColumnOptions.getClientProperty(ColumnOptions.findKey(elem, this.entitySchema), this.dataModel, this.entitySchema));
=======
  private initAdditionalListElements(): void {
    const lists = this.currentViewSettings?.AdditionalListColumns;
    if (lists?.length > 0) {
      this.additionalListElements = lists.map((elem) =>
        ColumnOptions.getClientProperty(ColumnOptions.findKey(elem, this.entitySchema), this.dataModel, this.entitySchema)
      );
>>>>>>> oned/v92
      this.additionalListElementsChanged.emit(this.additionalListElements);
      this.logger.trace(this, 'additional list elements from viewSettings', this.additionalListElements);
    }
  }

  private isAdditional(key: string): boolean {
<<<<<<< HEAD
    return this.displayedColumns.find(elem => elem.ColumnName.toLocaleLowerCase() === key.toLocaleLowerCase()) == null
      &&
      this.currentViewSettings?.AdditionalListColumns?.find(elem => elem.toLocaleLowerCase() === key.toLocaleLowerCase()) == null
      &&
      this.currentViewSettings?.AdditionalTableColumns?.find(elem => elem.toLocaleLowerCase() === key.toLocaleLowerCase()) == null
=======
    return (
      this.displayedColumns.find((elem) => elem.ColumnName.toLocaleLowerCase() === key.toLocaleLowerCase()) == null &&
      this.currentViewSettings?.AdditionalListColumns?.find((elem) => elem.toLocaleLowerCase() === key.toLocaleLowerCase()) == null &&
      this.currentViewSettings?.AdditionalTableColumns?.find((elem) => elem.toLocaleLowerCase() === key.toLocaleLowerCase()) == null
    );
>>>>>>> oned/v92
  }

  public static getClientProperty(name: string, dataModel: DataModel, entitySchema?: EntitySchema): IClientProperty {
    let property: IClientProperty;
    if (entitySchema) {
      const key = ColumnOptions.findKey(name, entitySchema);
      property = key != null ? entitySchema.Columns[key] : null;
    }
    if (property == null) {
<<<<<<< HEAD
      property = dataModel?.Properties?.
        find(elem => elem?.Property?.ColumnName?.toLocaleLowerCase() === name?.toLocaleLowerCase())?.Property;
=======
      property = dataModel?.Properties?.find(
        (elem) => elem?.Property?.ColumnName?.toLocaleLowerCase() === name?.toLocaleLowerCase()
      )?.Property;
>>>>>>> oned/v92
    }
    if (property == null) {
      property = { ColumnName: name, Type: ValType.String };
    }
    return property;
  }

<<<<<<< HEAD
  private static findKey(key: string, schema: EntitySchema): string {
    const keyVariant = Object.keys(schema.Columns).find(elem => elem.toLocaleLowerCase() === key.toLocaleLowerCase());
=======
  public static findKey(key: string, schema: EntitySchema): string {
    const keyVariant = Object.keys(schema.Columns).find((elem) => elem.toLocaleLowerCase() === key.toLocaleLowerCase());
>>>>>>> oned/v92
    return keyVariant ?? key;
  }
}
