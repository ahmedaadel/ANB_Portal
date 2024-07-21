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

import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AbstractControl, FormGroup } from '@angular/forms';
=======
import { AbstractControl, UntypedFormGroup } from '@angular/forms';
>>>>>>> oned/v92
import { IEntity } from 'imx-qbm-dbts';
import { BaseCdr, BaseReadonlyCdr, ColumnDependentReference } from 'qbm';
import { Approval } from '../../approval';
import { WorkflowActionEdit } from '../workflow-action-edit.interface';
<<<<<<< HEAD
=======
import { DecisionStepSevice } from '../../decision-step.service';
>>>>>>> oned/v92

/**
 * @ignore since this is only an internal component.
 *
 * Component for making a decision for a single request.
 * There is an alternative component for the case of a decision for multiple requests as well: {@link WorkflowMultiActionComponent}.
 */
@Component({
  selector: 'imx-workflow-single-action',
  templateUrl: './workflow-single-action.component.html',
<<<<<<< HEAD
  styleUrls: ['./workflow-single-action.component.scss']
})
export class WorkflowSingleActionComponent implements OnInit {

=======
  styleUrls: ['./workflow-single-action.component.scss'],
})
export class WorkflowSingleActionComponent implements OnInit {
>>>>>>> oned/v92
  /**
   * @ignore since this is only an internal component.
   *
   * Data coming from the service about the request.
   */
  @Input() public data: WorkflowActionEdit;

  /**
   * @ignore since this is only an internal component.
   *
   * The form group to which the necessary form fields will be added.
   */
<<<<<<< HEAD
  @Input() public formGroup: FormGroup;
=======
  @Input() public formGroup: UntypedFormGroup;
>>>>>>> oned/v92

  /**
   * @ignore since this is only public because of databinding to the template
   *
   * The references depending on the columns of the request that are displayed/edited during the decision.
   *
   */
  public readonly columns: ColumnDependentReference[] = [];

  /**
   * @ignore since this is only public because of databinding to the template
<<<<<<< HEAD
=======
   * the display value of the current step
   */
  public currentStepCdr: ColumnDependentReference;

  /**
   * @ignore since this is only public because of databinding to the template
>>>>>>> oned/v92
   *
   * The references depending on the parameter of the request that are displayed/edited during the decision.
   *
   */
  public readonly requestParameterColumns: ColumnDependentReference[] = [];

  /**
   * @ignore since this is only public because of databinding to the template
   *
   * The single request taken from {@link data}
   */
  public request: Approval;

<<<<<<< HEAD
=======
  constructor(private stepService: DecisionStepSevice) {}
>>>>>>> oned/v92

  /**
   * @ignore since this is only an internal component
   *
   * Sets up the {@link columns} to be displayed/edited during OnInit lifecycle hook.
   */
  public ngOnInit(): void {
    this.request = this.data.requests[0];

<<<<<<< HEAD
=======
    this.columns.push(new BaseReadonlyCdr(this.request.OrderState.Column));

>>>>>>> oned/v92
    if (this.data.actionParameters.uidPerson) {
      this.columns.push(this.data.actionParameters.uidPerson);
    }

    if (this.data.showValidDate?.validFrom) {
      this.columns.push(new BaseCdr(this.request.ValidFrom.Column));
    }

    if (this.data.showValidDate?.validUntil) {
      this.columns.push(new BaseCdr(this.request.ValidUntil.Column));
    }

    if (this.request.parameterColumns) {
<<<<<<< HEAD
      this.request.parameterColumns.forEach(pCol => 
        this.requestParameterColumns.push(this.data.approve ? new BaseCdr(pCol) : new BaseReadonlyCdr(pCol)));
    }
=======
      this.request.parameterColumns.forEach((pCol) =>
        this.requestParameterColumns.push(this.data.approve ? new BaseCdr(pCol) : new BaseReadonlyCdr(pCol))
      );
    }

    this.currentStepCdr = this.stepService.getCurrentStepCdr(this.request, this.request.pwoData, '#LDS#Current approval step');
>>>>>>> oned/v92
  }

  /**
   * @ignore since this is only public because of databinding to the template
   *
   * Handles the event emitted when a cdr editor created a new form control.
   *
   * @param name The name of the form control
   * @param control The form control
   */
  public onFormControlCreated(name: string, control: AbstractControl): void {
    // use setTimeout to make addControl asynchronous in order to avoid "NG0100: Expression has changed after it was checked"
<<<<<<< HEAD
    setTimeout(() =>
      this.formGroup.addControl(name, control)
    );
=======
    setTimeout(() => this.formGroup.addControl(name, control));
>>>>>>> oned/v92
  }

  /**
   * @ignore since this is only public because of databinding to the template
   *
   * Handles the event emitted when a different approval level has been set for
   * 'reroute' decision (direct decision).
   *
   * @param entity The new approval level
   */
  public onChangeDirectDecisionTarget(entity: IEntity): void {
    if (this.request.updateDirectDecisionTarget) {
      this.request.updateDirectDecisionTarget(entity);
    }
  }
<<<<<<< HEAD


=======
>>>>>>> oned/v92
}
