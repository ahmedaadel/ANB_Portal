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

import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
=======
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
>>>>>>> oned/v92
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { Subscription } from 'rxjs';

import { PortalItshopPatternPrivate, } from 'imx-api-qer';
import { TypedEntity } from 'imx-qbm-dbts';

import {
  BaseCdr,
  ClassloggerService,
  ColumnDependentReference,
  ConfirmationService,
  DataTableComponent,
  ErrorService,
<<<<<<< HEAD
  TabControlHelper,
=======
>>>>>>> oned/v92
} from 'qbm';
import { ItshopPatternService } from '../itshop-pattern.service';
import { ItShopPatternChangedType } from '../itshop-pattern-changed.enum';

/**
 * Component displayed in a sidesheet with a form to create a itshop pattern.
 */
@Component({
  selector: 'imx-itshop-pattern-create-sidesheet',
  templateUrl: './itshop-pattern-create-sidesheet.component.html',
  styleUrls: ['./itshop-pattern-create-sidesheet.component.scss']
})
export class ItshopPatternCreateSidesheetComponent implements OnInit, OnDestroy {

<<<<<<< HEAD
  public get formArray(): FormArray {
    return this.detailsFormGroup.get('formArray') as FormArray;
  }
  public cdrList: ColumnDependentReference[] = [];
  public readonly detailsFormGroup: FormGroup;

  public detailsInfoText: string;
=======
  public get formArray(): UntypedFormArray {
    return this.detailsFormGroup.get('formArray') as UntypedFormArray;
  }
  public cdrList: ColumnDependentReference[] = [];
  public readonly detailsFormGroup: UntypedFormGroup;
>>>>>>> oned/v92

  @ViewChild(DataTableComponent) public table: DataTableComponent<TypedEntity>;

  private closeSubscription: Subscription;
  private disposable: () => void;

  constructor(
<<<<<<< HEAD
    formBuilder: FormBuilder,
=======
    formBuilder: UntypedFormBuilder,
>>>>>>> oned/v92
    @Inject(EUI_SIDESHEET_DATA) public data: {
      pattern: PortalItshopPatternPrivate
    },
    private readonly patternService: ItshopPatternService,
    private readonly sideSheetRef: EuiSidesheetRef,
    private readonly logger: ClassloggerService,
    errorService: ErrorService,
    confirmation: ConfirmationService
  ) {
<<<<<<< HEAD
    this.detailsFormGroup = new FormGroup({ formArray: formBuilder.array([]) });
=======
    this.detailsFormGroup = new UntypedFormGroup({ formArray: formBuilder.array([]) });
>>>>>>> oned/v92

    this.closeSubscription = this.sideSheetRef.closeClicked().subscribe(async () => {
      if (await confirmation.confirm({
        Title: '#LDS#Heading Cancel Creating',
<<<<<<< HEAD
        Message: '#LDS#Are you sure you want to cancel creating the request template?'
=======
        Message: '#LDS#Are you sure you want to cancel creating the product bundle?'
>>>>>>> oned/v92
      })) {
        this.sideSheetRef.close();
      }
    });

    this.disposable = errorService.setTarget('sidesheet');
  }

  public async ngOnInit(): Promise<void> {
<<<<<<< HEAD

    /**
     * Resolve an issue where the mat-tab navigation arrows could appear on first load
     */
    setTimeout(() => {
      TabControlHelper.triggerResizeEvent();
    });

=======
>>>>>>> oned/v92
    await this.setupDetailsTab();
  }

  public ngOnDestroy(): void {
    this.disposable();
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

  public async save(): Promise<void> {
    if (this.detailsFormGroup.valid) {
      this.logger.debug(this, `Saving itshop pattern changes`);
      this.patternService.handleOpenLoader();
      try {
        await this.data.pattern.GetEntity().Commit(true);
        this.detailsFormGroup.markAsPristine();
        this.sideSheetRef.close(ItShopPatternChangedType.Saved);
      } finally {
        this.patternService.handleCloseLoader();
      }
    }
  }

  private async setupDetailsTab(): Promise<void> {

<<<<<<< HEAD
    this.detailsInfoText = '#LDS#Here you can specify the details of the new request template.';

=======
>>>>>>> oned/v92
    this.cdrList = [
      new BaseCdr(this.data.pattern.Ident_ShoppingCartPattern.Column),
      new BaseCdr(this.data.pattern.Description.Column),
    ];

  }
}
