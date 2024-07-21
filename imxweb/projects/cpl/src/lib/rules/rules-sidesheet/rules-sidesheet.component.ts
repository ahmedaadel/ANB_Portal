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
import { Component, Inject } from '@angular/core';
import { EuiDownloadOptions, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
=======
import { Component, Inject, OnDestroy } from '@angular/core';
import { EuiDownloadOptions, EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { Subscription } from 'rxjs';
>>>>>>> oned/v92

import { PortalRules } from 'imx-api-cpl';
import { DisplayColumns } from 'imx-qbm-dbts';
import { BaseReadonlyCdr, ColumnDependentReference, ElementalUiConfigService } from 'qbm';
<<<<<<< HEAD
=======
import { RulesMitigatingControls } from '../mitigating-controls-rules/rules-mitigating-controls';
>>>>>>> oned/v92
import { RulesService } from '../rules.service';

@Component({
  selector: 'imx-rules-sidesheet',
  templateUrl: './rules-sidesheet.component.html',
<<<<<<< HEAD
  styleUrls: ['./rules-sidesheet.component.scss']
})
export class RulesSidesheetComponent {

  public reportDownload: EuiDownloadOptions;
  public cdrList: ColumnDependentReference[];
  constructor(
    @Inject(EUI_SIDESHEET_DATA) public data: {
      selectedRule: PortalRules,
      hasRiskIndex: boolean
    },
    private readonly rulesProvider: RulesService,
    elementalUiConfigService: ElementalUiConfigService,
  ) {
=======
  styleUrls: ['./rules-sidesheet.component.scss'],
})
export class RulesSidesheetComponent implements OnDestroy {
  public reportDownload: EuiDownloadOptions;
  public cdrList: ColumnDependentReference[];
  public uidNonCompliance: string;
  public uidCompliance: string;

  public subscriptions$: Subscription[] = [];

  constructor(
    @Inject(EUI_SIDESHEET_DATA)
    public data: {
      selectedRule: PortalRules;
      isMControlPerViolation: boolean;
      hasRiskIndex: boolean;
      mControls: RulesMitigatingControls[];
      canEdit: boolean;
    },
    public sidesheetRef: EuiSidesheetRef,
    private readonly rulesProvider: RulesService,
    elementalUiConfigService: ElementalUiConfigService
  ) {
    this.uidNonCompliance = data.selectedRule.GetEntity().GetColumn('UID_NonCompliance').GetValue();
    this.uidCompliance = data.selectedRule.GetEntity().GetKeys().join(',');
>>>>>>> oned/v92
    this.cdrList = [
      new BaseReadonlyCdr(this.data.selectedRule.GetEntity().GetColumn(DisplayColumns.DISPLAY_PROPERTYNAME)),
      new BaseReadonlyCdr(this.data.selectedRule.Description.Column),
      new BaseReadonlyCdr(this.data.selectedRule.RuleNumber.Column),
      data.hasRiskIndex ? new BaseReadonlyCdr(this.data.selectedRule.RiskIndex.Column) : null,
<<<<<<< HEAD
      data.hasRiskIndex && this.data.selectedRule.RiskIndex.value !== this.data.selectedRule.RiskIndexReduced.value ?
        new BaseReadonlyCdr(this.data.selectedRule.RiskIndexReduced.Column) : null,
      new BaseReadonlyCdr(this.data.selectedRule.IsInActive.Column),
      new BaseReadonlyCdr(this.data.selectedRule.CountOpen.Column),
      new BaseReadonlyCdr(this.data.selectedRule.CountClosed.Column)
    ].filter(elem => elem != null);

    this.reportDownload = {
      ...elementalUiConfigService.Config.downloadOptions,
      url: this.rulesProvider.ruleReport(data.selectedRule.GetEntity().GetKeys()[0]),
    };
  }
=======
      data.hasRiskIndex && this.data.selectedRule.RiskIndex.value !== this.data.selectedRule.RiskIndexReduced.value
        ? new BaseReadonlyCdr(this.data.selectedRule.RiskIndexReduced.Column)
        : null,
      new BaseReadonlyCdr(this.data.selectedRule.IsInActive.Column),
      new BaseReadonlyCdr(this.data.selectedRule.CountOpen.Column),
      new BaseReadonlyCdr(this.data.selectedRule.CountClosed.Column),
    ].filter((elem) => elem != null);

    this.reportDownload = {
      ...elementalUiConfigService.Config.downloadOptions,
      url: this.rulesProvider.ruleReport(this.uidCompliance),
    };
  }

  public get objectType(): string {
    return this.data.selectedRule.GetEntity().TypeName;
  }

  public get objectUid(): string {
    return this.data.selectedRule.GetEntity().GetKeys().join(',');
  }

  public ngOnDestroy(): void {
    this.subscriptions$.map((sub) => sub.unsubscribe());
  }
>>>>>>> oned/v92
}
