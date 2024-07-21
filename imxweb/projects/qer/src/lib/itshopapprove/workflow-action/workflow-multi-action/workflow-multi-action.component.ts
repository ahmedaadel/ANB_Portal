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
import { FormGroup } from '@angular/forms';
import { BaseCdr, BaseReadonlyCdr, BulkItem, BulkItemStatus } from 'qbm';
=======
import { UntypedFormGroup } from '@angular/forms';
import { BaseCdr, BaseReadonlyCdr, BulkItem, BulkItemStatus } from 'qbm';
import { DecisionStepSevice } from '../../decision-step.service';
>>>>>>> oned/v92
import { WorkflowActionEdit } from '../workflow-action-edit.interface';

/**
 * @ignore since this is only an internal component.
 *
 * Component for making a decision for a multiple requests.
 * There is an alternative component for the case of a decision for a single requests as well: {@link WorkflowSingleActionComponent}.
 */
@Component({
  selector: 'imx-workflow-multi-action',
  templateUrl: './workflow-multi-action.component.html',
<<<<<<< HEAD
  styleUrls: ['./workflow-multi-action.component.scss']
})
export class WorkflowMultiActionComponent implements OnInit {

=======
  styleUrls: ['./workflow-multi-action.component.scss'],
})
export class WorkflowMultiActionComponent implements OnInit {
>>>>>>> oned/v92
  /**
   * @ignore since this is only an internal component.
   *
   * Data coming from the service about the requests.
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
   * The bulk items generated for the requests.
   * Each bulk item contains the columns to be displayed/edited for the request
   * according to the decision action chosen.
   *
   */
  public requests: BulkItem[];

<<<<<<< HEAD
=======
  constructor(private readonly stepService: DecisionStepSevice) {}

>>>>>>> oned/v92
  /**
   * @ignore since this is only an internal component
   *
   * Sets up during OnInit lifecycle hook the bulk items and their {@link columns} to be displayed/edited for the requests.
   */
  public ngOnInit(): void {
<<<<<<< HEAD
    this.requests = this.data.requests.map(item => {
=======
    this.requests = this.data.requests.map((item) => {
>>>>>>> oned/v92
      const bulkItem: BulkItem = {
        entity: item,
        additionalInfo: item.OrderState.Column.GetDisplayValue(),
        properties: [],
<<<<<<< HEAD
        status: BulkItemStatus.valid
=======
        status: BulkItemStatus.valid,
>>>>>>> oned/v92
      };

      if (this.data.showValidDate) {
        if (this.data.showValidDate.validFrom) {
          bulkItem.properties.push(new BaseReadonlyCdr(item.ValidFrom.Column));
        }
        if (this.data.showValidDate.validUntil) {
          bulkItem.properties.push(new BaseReadonlyCdr(item.ValidUntil.Column));
        }
      }

<<<<<<< HEAD
      item.parameterColumns.forEach(column =>
=======
      const step = this.stepService.getCurrentStepCdr(item, item.pwoData, '#LDS#Current approval step');
      if (step != null) {
        bulkItem.properties.unshift(step);
      }

      item.parameterColumns.forEach((column) =>
>>>>>>> oned/v92
        bulkItem.properties.push(this.data.approve ? new BaseCdr(column) : new BaseReadonlyCdr(column))
      );

      if (this.data.workflow) {
<<<<<<< HEAD
        bulkItem.customSelectProperties = [{
          title: this.data.workflow.title,
          placeholder: this.data.workflow.placeholder,
          entities: this.data.workflow.data[item.key],
          selectionChange: entity => {
            if (item.updateDirectDecisionTarget) {
              item.updateDirectDecisionTarget(entity);
            }
          }
        }];
=======
        bulkItem.customSelectProperties = [
          {
            title: this.data.workflow.title,
            placeholder: this.data.workflow.placeholder,
            entities: this.data.workflow.data[item.key],
            selectionChange: (entity) => {
              if (item.updateDirectDecisionTarget) {
                item.updateDirectDecisionTarget(entity);
              }
            },
          },
        ];
>>>>>>> oned/v92
      }

      return bulkItem;
    });
  }

  /**
   * @ignore since this is only public because of databinding to the template
   *
   * Handles the validationStateChanged event emitted by an bulk item editor.
   * Recalculates the validity of the bulk item.
   *
   * @param bulkItem The bulk item that has changed state
   */
  public validateItem(bulkItem: BulkItem): void {
    bulkItem.status = bulkItem.valid ? BulkItemStatus.valid : BulkItemStatus.unknown;
  }
<<<<<<< HEAD

=======
>>>>>>> oned/v92
}
