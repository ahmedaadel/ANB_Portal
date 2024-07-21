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

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';
import { PortalServiceitemsInteractive } from 'imx-api-qer';
import { IEntity, IEntityColumn } from 'imx-qbm-dbts';

import { BaseCdr, ClassloggerService, ColumnDependentReference } from 'qbm';
=======
import {
  AbstractControl,
  FormControl,
  FormGroup,
  UntypedFormArray,
} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';
import { IEntity, IEntityColumn, TypedEntity } from 'imx-qbm-dbts';

import { BaseCdr, ClassloggerService, ColumnDependentReference, CdrFactoryService, ExtService, BusyService } from 'qbm';
>>>>>>> oned/v92
import { QerPermissionsService } from '../../admin/qer-permissions.service';
import { OwnerControlComponent } from '../../owner-control/owner-control.component';
import { ProjectConfigurationService } from '../../project-configuration/project-configuration.service';
import { ServiceItemTagsService } from '../../service-item-tags/service-item-tags.service';
import { ServiceItemsEditService } from '../../service-items-edit/service-items-edit.service';
<<<<<<< HEAD
import { UserModelService } from '../../user/user-model.service';
=======

export interface AdditionalCdrColumn {
  columnName: string;
}

/**
 * Interface for the service items form
 */
interface ServiceItemsFormGroup {
  array: UntypedFormArray;
}

export const additionalColumnsForServiceItemsKey = 'additionalCdrColumns';
>>>>>>> oned/v92

@Component({
  selector: 'imx-service-items-edit-form',
  templateUrl: './service-items-edit-form.component.html',
<<<<<<< HEAD
  styleUrls: ['./service-items-edit-form.component.scss']
})
export class ServiceItemsEditFormComponent implements OnInit, OnChanges {

  @ViewChild('ownerControl') public ownercontrol: OwnerControlComponent;
  @Input() public serviceItem: PortalServiceitemsInteractive;
  @Output() public formControlCreated = new EventEmitter<AbstractControl>();

  public readonly formGroup: FormGroup;
  public cdrList: ColumnDependentReference[] = [];
  public isInActiveFormControl = new FormControl();
  public canEditOwner: boolean;

=======
  styleUrls: ['./service-items-edit-form.component.scss'],
})
export class ServiceItemsEditFormComponent implements OnInit, OnChanges {
  @ViewChild('ownerControl') public ownercontrol: OwnerControlComponent;
  @Input() public serviceItem: TypedEntity;
  @Input() public busyService: BusyService;
  @Output() public formControlCreated = new EventEmitter<AbstractControl>();

  public readonly formGroup: FormGroup<ServiceItemsFormGroup> = new FormGroup<ServiceItemsFormGroup>({ array: new UntypedFormArray([]) });
  public cdrList: ColumnDependentReference[] = [];
  public isInActiveFormControl = new FormControl<boolean>(false);
  public canEditOwner: boolean;

  public static readonly alertExtId = 'serviceItemEditForm.alert';
  public ServiceItemsEditFormComponent = ServiceItemsEditFormComponent;

>>>>>>> oned/v92
  public productTagsInitial: string[] = [];
  public productTagsSelected: string[];
  public loadingTags: boolean;

  private editableServiceItemColumns: string[] = [];
  private inheritCategoryImagesToItems = false;
  private imageHint: string;

  constructor(
<<<<<<< HEAD
    formBuilder: FormBuilder,
    private serviceItemsEditService: ServiceItemsEditService,
    private serviceItemTagsService: ServiceItemTagsService,
    private readonly logger: ClassloggerService,
    private readonly userModelService: UserModelService,
    private readonly translate: TranslateService,
    private readonly permission: QerPermissionsService,
    private readonly projectConfig: ProjectConfigurationService
  ) {
    this.formGroup = new FormGroup({ formArray: formBuilder.array([]) });
  }

  get formArray(): FormArray {
    return this.formGroup.get('formArray') as FormArray;
  }
=======
    private serviceItemsEditService: ServiceItemsEditService,
    private serviceItemTagsService: ServiceItemTagsService,
    private readonly logger: ClassloggerService,
    private readonly ext: ExtService,
    private readonly translate: TranslateService,
    private readonly permission: QerPermissionsService,
    private readonly projectConfig: ProjectConfigurationService,
    private readonly cdrFactoryService: CdrFactoryService
  ) {}
>>>>>>> oned/v92

  get getSelectedUidPerson(): string {
    return this.ownercontrol?.uidPersonSelected;
  }

  get key(): string {
    return this.serviceItem.GetEntity().GetKeys().join(',');
  }

  public async ngOnInit(): Promise<void> {
<<<<<<< HEAD
    this.canEditOwner = await this.permission.isShopAdmin();    
    this.imageHint = await this.translate
      .get('#LDS#If you do not specify an image, the image of the assigned service category will be used.')
      .toPromise()
=======
    this.canEditOwner = await this.permission.isShopAdmin();
    this.imageHint = await this.translate
      .get('#LDS#If you do not specify an image, the image of the assigned service category will be used.')
      .toPromise();
>>>>>>> oned/v92
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.serviceItem) {
      this.setup();
    }
  }

  public onImageValueChanged(control: AbstractControl, cdr: BaseCdr): void {
    this.updateImageHint(cdr);
  }

  public onFormControlCreated(control: AbstractControl, cdr?: BaseCdr): void {
<<<<<<< HEAD
    this.formArray.push(control);
=======
    this.formGroup.controls.array.push(control);
>>>>>>> oned/v92
    this.formControlCreated.emit(control);

    if (cdr) {
      this.updateImageHint(cdr);
    }
  }

<<<<<<< HEAD

  public onRequestableToggleChanged(checkboxChange: MatSlideToggleChange): void {
    // Invert the toggle value to match with the inverted state of the column 'IsInActive'
    const value = !checkboxChange?.checked;
    if (this.serviceItem.IsInActive.GetMetadata().CanEdit()) {
      this.serviceItem.IsInActive.value = value;
=======
  public async onRequestableToggleChanged(checkboxChange: MatSlideToggleChange): Promise<void> {
    // Invert the toggle value to match with the inverted state of the column 'IsInActive'
    const value = !checkboxChange?.checked;
    if (this.getColumn('IsInActive')?.GetMetadata().CanEdit()) {
      await this.getColumn('IsInActive').PutValue(value);
>>>>>>> oned/v92
    }
  }

  public canEditProperty(property: string): boolean {
    return this.editableServiceItemColumns?.includes(property);
  }

<<<<<<< HEAD
=======
  public getColumn(name: string): IEntityColumn {
    return CdrFactoryService.tryGetColumn(this.serviceItem.GetEntity(), name);
  }

>>>>>>> oned/v92
  public async saveTags(): Promise<void> {
    const changeSet = this.getTagsChangeSet();
    return this.serviceItemTagsService.updateTags(this.key, changeSet.add, changeSet.remove);
  }

<<<<<<< HEAD
  private getTagsChangeSet(): { add: string[], remove: string[] } {
=======
  private getTagsChangeSet(): { add: string[]; remove: string[] } {
>>>>>>> oned/v92
    this.logger.trace(this, 'save tags initial', this.productTagsInitial);
    this.logger.trace(this, 'save tags selected', this.productTagsSelected);

    return {
<<<<<<< HEAD
      add: this.productTagsSelected.filter(elem => this.productTagsInitial.indexOf(elem) < 0),
      remove: this.productTagsInitial.filter(elem => this.productTagsSelected.indexOf(elem) < 0)
=======
      add: this.productTagsSelected.filter((elem) => this.productTagsInitial.indexOf(elem) < 0),
      remove: this.productTagsInitial.filter((elem) => this.productTagsSelected.indexOf(elem) < 0),
>>>>>>> oned/v92
    };
  }

  private async setup(): Promise<void> {
<<<<<<< HEAD
    this.serviceItemsEditService.handleOpenLoader();
    try {
=======
    let isBusy: { endBusy: () => void };
    if (this.busyService) {
      isBusy = this.busyService.beginBusy();
    } else {
      this.serviceItemsEditService.handleOpenLoader();
    }
    try {
      this.formGroup.controls.array.clear();
      this.formGroup.markAsPristine();
>>>>>>> oned/v92
      const projectConfig = await this.projectConfig.getConfig();
      this.inheritCategoryImagesToItems = projectConfig.ITShopConfig?.InheritCategoryImagesToItems;
      this.editableServiceItemColumns = projectConfig.OwnershipConfig?.EditableFields?.AccProduct;
      const showTermsOfUseCdr = await this.serviceItemsEditService.hasTermsOfUseCancdidates();
      const showProductParamCategory = await this.serviceItemsEditService.hasAccproductparamcategoryCandidates();
      const showFunctionalArea = await this.serviceItemsEditService.hasFunctionalAreaCandidates();
<<<<<<< HEAD
      this.createCdrList(
        this.serviceItem.GetEntity(),
        showTermsOfUseCdr,
        showFunctionalArea,
        showProductParamCategory
      );
    } finally {
      this.serviceItemsEditService.handleCloseLoader();
=======
      await this.createCdrList(this.serviceItem.GetEntity(), showTermsOfUseCdr, showFunctionalArea, showProductParamCategory);
    } finally {
      if (isBusy) {
        isBusy.endBusy();
      } else {
        this.serviceItemsEditService.handleCloseLoader();
      }
>>>>>>> oned/v92
    }

    if (this.editableServiceItemColumns.includes('IsInActive')) {
      // Handle the requestable (IsInActive column) outside the context of a CDR editor so the UI can invert the meaning to make
      // more sense to the user
      // This should be inversed on the api data response at some point, but until then we handle it in the UI
<<<<<<< HEAD
      this.isInActiveFormControl.setValue(!this.serviceItem.IsInActive.value);
=======
      this.isInActiveFormControl.setValue(!this.getColumn('IsInActive')?.GetValue());
>>>>>>> oned/v92
      this.onFormControlCreated(this.isInActiveFormControl);
    }

    await this.initTags();
  }

<<<<<<< HEAD
  private createCdrList(
=======
  private async createCdrList(
>>>>>>> oned/v92
    entity: IEntity,
    showTermsOfUseCdr: boolean,
    showFunctionalArea: boolean,
    showProductParamCategory: boolean
<<<<<<< HEAD
  ): void {
    this.editableServiceItemColumns
      .filter(name => !['IsInActive', 'UID_OrgRuler'].includes(name))
      .filter(name => name !== 'UID_QERTermsOfUse' || showTermsOfUseCdr)
      .filter(name => name !== 'UID_FunctionalArea' || showFunctionalArea)
      .filter(name => name !== 'UID_AccProductParamCategory' || showProductParamCategory)
      .map(columnName => {
        const column = this.tryGetColumn(entity, columnName);
        if (column != null) {
          this.cdrList.push(new BaseCdr(column));
        }
      });
=======
  ): Promise<void> {
    this.cdrList = [];
    const isToHideFromITShopText = await this.translate.get('#LDS#Hide in product selection').toPromise();
    this.editableServiceItemColumns
      .filter((name) => !['IsInActive', 'UID_OrgRuler'].includes(name))
      .filter((name) => name !== 'UID_QERTermsOfUse' || showTermsOfUseCdr)
      .filter((name) => name !== 'UID_FunctionalArea' || showFunctionalArea)
      .filter((name) => name !== 'UID_AccProductParamCategory' || showProductParamCategory)
      .map((columnName) => {
        let cdr: ColumnDependentReference;
        // Special case the text texts
        if (columnName === 'IsToHideFromITShop') {
          cdr = this.cdrFactoryService.buildCdr(entity, columnName, false, isToHideFromITShopText);
        } else {
          cdr = this.cdrFactoryService.buildCdr(entity, columnName);
        }
        if (cdr != null) {
          this.cdrList.push(cdr);
        }
      });

    const extensions = this.ext.Registry[additionalColumnsForServiceItemsKey] ?? [];
    for (const ext of extensions) {
      const additionalColumn = ext.inputData as AdditionalCdrColumn;
      const columnName = additionalColumn.columnName;
      const cdr = this.cdrFactoryService.buildCdr(entity, columnName);
      if (cdr != null) {
        this.cdrList.push(cdr);
      }
    }
>>>>>>> oned/v92
  }

  private updateImageHint(cdr: BaseCdr): BaseCdr {
    const column = cdr.column;
<<<<<<< HEAD
    cdr.hint = this.inheritCategoryImagesToItems && column.GetValue().length === 0
      ? this.imageHint
      : '';
    return cdr;
  }

  private tryGetColumn(entity: IEntity, name: string): IEntityColumn {
    try {
      return entity.GetColumn(name);
    } catch {
      return undefined;
    }
  }

  private async initTags(): Promise<void> {
    this.loadingTags = true;

    this.productTagsInitial = (await this.serviceItemTagsService.getTags(this.key))
      .Data.map(elem => elem.Ident_DialogTag.value);
=======
    cdr.hint = this.inheritCategoryImagesToItems && column.GetValue().length === 0 ? this.imageHint : '';
    return cdr;
  }

  private async initTags(): Promise<void> {
    this.loadingTags = true;

    this.productTagsInitial = (await this.serviceItemTagsService.getTags(this.key)).Data.map((elem) => elem.Ident_DialogTag.value);
>>>>>>> oned/v92
    this.productTagsSelected = this.productTagsInitial.slice();

    this.loadingTags = false;
  }
<<<<<<< HEAD

=======
>>>>>>> oned/v92
}
