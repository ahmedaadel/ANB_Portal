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

import { TranslateService } from '@ngx-translate/core';

<<<<<<< HEAD
import { BaseCdr, ColumnDependentReference } from 'qbm';
import { PortalRulesViolations } from 'imx-api-cpl';
=======
import { PortalRulesViolations } from 'imx-api-cpl';
import { BaseCdr } from 'qbm';
>>>>>>> oned/v92

/**
 * Class thats extends the {@link PortalRulesViolations} with some additional properties that are needed for
 * the components in the approval context.
 */
export class RulesViolationsApproval extends PortalRulesViolations {
<<<<<<< HEAD

  /**
   * The color and the caption depending on the value of the state of a {@link PortalRulesViolations}.
   */
  public get stateBadge(): { color: 'blue' | 'orange' | 'green', caption: string } {
    return {
      color: this.stateBadgeColor,
      caption: this.stateCaption
=======
  /**
   * The color and the caption depending on the value of the state of a {@link PortalRulesViolations}.
   */
  public get stateBadge(): { color: 'blue' | 'orange' | 'green'; caption: string } {
    return {
      color: this.stateBadgeColor,
      caption: this.stateCaption,
>>>>>>> oned/v92
    };
  }

  /**
   * The property list depending on the value of the state of a {@link PortalRulesViolations}.
   */
<<<<<<< HEAD
  public readonly propertyInfo: ColumnDependentReference[];
=======
  public readonly propertyInfo: BaseCdr[];
>>>>>>> oned/v92

  private stateBadgeColor: 'blue' | 'orange' | 'green';
  private stateCaption: string;

  constructor(
    readonly baseObject: PortalRulesViolations,
    private readonly hasRiskIndex: boolean,
    private readonly translate: TranslateService
  ) {
    super(baseObject.GetEntity());

    this.propertyInfo = this.initPropertyInfo();
    this.initStateBadge();
  }

<<<<<<< HEAD
  private initPropertyInfo(): ColumnDependentReference[] {
    const properties: any =
      [
        this.UID_Person,
        this.UID_NonCompliance
      ];

    if (this.hasRiskIndex) {
      properties.push(
        this.RiskIndexCalculated,
        this.RiskIndexReduced,
      );
    }

    if (this.State.value !== 'pending') {

      properties.push(
        this.DecisionDate,
        this.UID_PersonDecisionMade,
        this.DecisionReason,
        this.UID_QERJustification
      );
    }

    if (this.State.value === 'approved') {
      properties.push(
        this.ExceptionValidUntil
      );
    }

    return properties
      .filter(property => property.value != null && property.value !== '')
      .map(property => new BaseCdr(property.Column));
=======
  private initPropertyInfo(): BaseCdr[] {
    const properties: any = [this.UID_Person, this.UID_NonCompliance];

    if (this.hasRiskIndex) {
      properties.push([this.RiskIndexCalculated, this.RiskIndexReduced]);
    }

    if (this.State.value !== 'pending') {
      properties.push(this.DecisionDate, this.UID_PersonDecisionMade, this.DecisionReason, this.UID_QERJustification);
    }

    if (this.State.value === 'approved') {
      properties.push(this.ExceptionValidUntil);
    }

    return properties.filter((property) => property.value != null && property.value !== '').map((property) => new BaseCdr(property.Column));
>>>>>>> oned/v92
  }

  private async initStateBadge(): Promise<void> {
    switch (this.State.value) {
      case 'approved':
        this.stateBadgeColor = 'green';
        this.stateCaption = await this.translate.get('#LDS#Exception granted').toPromise();
        break;
      case 'denied':
        this.stateBadgeColor = 'orange';
        this.stateCaption = await this.translate.get('#LDS#Exception denied').toPromise();
        break;
      default:
        this.stateBadgeColor = 'blue';
        this.stateCaption = await this.translate.get('#LDS#Approval decision pending').toPromise();
    }
  }
<<<<<<< HEAD

=======
>>>>>>> oned/v92
}
