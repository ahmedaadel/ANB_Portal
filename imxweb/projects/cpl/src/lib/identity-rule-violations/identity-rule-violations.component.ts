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

import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { PortalPersonRolemembershipsNoncompliance } from 'imx-api-cpl';

<<<<<<< HEAD
import { CollectionLoadParameters, DisplayColumns, EntitySchema, IClientProperty, TypedEntity, ValType } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings, DynamicTabDataProviderDirective, ClientPropertyForTableColumns, MetadataService, SettingsService } from 'qbm';
=======
import { CollectionLoadParameters, DisplayColumns, EntitySchema, ValType } from 'imx-qbm-dbts';
import {
  DataSourceToolbarSettings,
  DynamicTabDataProviderDirective,
  ClientPropertyForTableColumns,
  MetadataService,
  SettingsService,
} from 'qbm';
>>>>>>> oned/v92
import { IdentityRuleViolationsMitigationControlComponent } from './identity-rule-violations-mitigation-control/identity-rule-violations-mitigation-control.component';
import { IdentityRuleViolationService } from './identity-rule-violations.service';

@Component({
  templateUrl: './identity-rule-violations.component.html',
<<<<<<< HEAD
  styleUrls: ['./identity-rule-violations.component.scss']
})
export class IdentityRuleViolationsComponent implements OnInit {

=======
  styleUrls: ['./identity-rule-violations.component.scss'],
})
export class IdentityRuleViolationsComponent implements OnInit {
>>>>>>> oned/v92
  public dstSettings: DataSourceToolbarSettings;
  public readonly DisplayColumns = DisplayColumns;
  public displayedColumns: ClientPropertyForTableColumns[];
  public caption: string;
  public entitySchema: EntitySchema;

<<<<<<< HEAD
  private referrer: { objectuid: string; objecttable: string; };
=======
  private referrer: { objectuid: string; objecttable: string };
>>>>>>> oned/v92
  private navigationState: CollectionLoadParameters;

  constructor(
    private readonly busyService: EuiLoadingService,
    private readonly metadataService: MetadataService,
    private readonly roleMembershipsService: IdentityRuleViolationService,
    private readonly settingService: SettingsService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly translate: TranslateService,
<<<<<<< HEAD
    dataProvider: DynamicTabDataProviderDirective
  ) {

=======
    dataProvider: DynamicTabDataProviderDirective,
  ) {
>>>>>>> oned/v92
    this.referrer = dataProvider.data;
    this.entitySchema = this.roleMembershipsService.nonComplianceSchema;

    this.navigationState = { PageSize: this.settingService.DefaultPageSize };
    this.displayedColumns = [
<<<<<<< HEAD
      this.entitySchema.Columns.XOrigin,
      this.entitySchema.Columns.XDateInserted
=======
      this.entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
      this.entitySchema.Columns.XOrigin,
      this.entitySchema.Columns.XDateInserted,
      { ColumnName: 'actions', Type: ValType.String, afterAdditionals: true, untranslatedDisplay: '#LDS#Actions' },
>>>>>>> oned/v92
    ];
  }

  public async ngOnInit(): Promise<void> {
    const overlay = this.busyService.show();
    try {
<<<<<<< HEAD
      await this.metadataService.update([this.referrer.objecttable]);
=======
      await this.metadataService.updateNonExisting([this.referrer.objecttable]);
>>>>>>> oned/v92
    } finally {
      this.busyService.hide(overlay);
    }
    this.caption = this.metadataService.tables[this.referrer.objecttable].Display;

    return this.getData();
  }

<<<<<<< HEAD

  public async onShowDetails(entity: PortalPersonRolemembershipsNoncompliance): Promise<void> {

=======
  public async onShowDetails(entity: PortalPersonRolemembershipsNoncompliance): Promise<void> {
>>>>>>> oned/v92
    const uidPerson = this.referrer.objectuid;
    const con = await this.roleMembershipsService.featureConfig();

    const data = {
      getData: async (param: CollectionLoadParameters) => {
        return con.MitigatingControlsPerViolation
          ? this.roleMembershipsService.getPersonMitigatingcontrols(entity.UID_NonCompliance.value, uidPerson, param)
          : this.roleMembershipsService.getRulesMitigatingcontrols(entity.UID_NonCompliance.value, param);
      },
      entitySchema: con.MitigatingControlsPerViolation
        ? this.roleMembershipsService.portalPersonMitigatingcontrols
        : this.roleMembershipsService.portalRulesMitigatingcontrols,
      displayedColumns: con.MitigatingControlsPerViolation
        ? [
<<<<<<< HEAD
          this.roleMembershipsService.portalPersonMitigatingcontrols.Columns.UID_MitigatingControl,
          this.roleMembershipsService.portalPersonMitigatingcontrols.Columns.UID_PersonWantsOrg,
          this.roleMembershipsService.portalPersonMitigatingcontrols.Columns.IsInActive
        ]
        : [
          this.roleMembershipsService.portalRulesMitigatingcontrols.Columns.UID_MitigatingControl]
    };
    this.sidesheet.open(IdentityRuleViolationsMitigationControlComponent, {
      title: await this.translate.get('#LDS#Heading View Mitigating Controls').toPromise(),
      headerColour: 'orange',
      bodyColour: 'asher-gray',
=======
            this.roleMembershipsService.portalPersonMitigatingcontrols.Columns.UID_MitigatingControl,
            this.roleMembershipsService.portalPersonMitigatingcontrols.Columns.UID_PersonWantsOrg,
            this.roleMembershipsService.portalPersonMitigatingcontrols.Columns.IsInActive,
          ]
        : [this.roleMembershipsService.portalRulesMitigatingcontrols.Columns.UID_MitigatingControl],
    };
    this.sidesheet.open(IdentityRuleViolationsMitigationControlComponent, {
      title: await this.translate.get('#LDS#Heading View Mitigating Controls').toPromise(),
      subTitle: entity.GetEntity().GetDisplay(),
>>>>>>> oned/v92
      padding: '0px',
      width: 'max(600px,60%)',
      disableClose: false,
      testId: 'identity-rule-violation-mitigating-sidesheet',
      data,
    });
  }

  public async onNavigationStateChanged(newState?: CollectionLoadParameters): Promise<void> {
    if (newState) {
      this.navigationState = newState;
    }
    await this.getData();
  }

  public async onSearch(keywords: string): Promise<void> {
    this.navigationState.StartIndex = 0;
    this.navigationState.search = keywords;
    await this.getData();
  }

  private async getData(): Promise<void> {
    let overlayRef: OverlayRef;
<<<<<<< HEAD
    setTimeout(() => overlayRef = this.busyService.show());
    try {

      const dataSource = await this.roleMembershipsService.getNonCompliance(
        this.referrer.objectuid,
        this.navigationState);

      const displayedColumns = this.displayedColumns;
      displayedColumns.unshift(this.entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME]);
      displayedColumns.push({ ColumnName: 'actions', Type: ValType.String, afterAdditionals: true });

      this.dstSettings = {
        displayedColumns,
        dataSource,
        entitySchema: this.entitySchema,
        navigationState: this.navigationState
=======
    setTimeout(() => (overlayRef = this.busyService.show()));
    try {
      const dataSource = await this.roleMembershipsService.getNonCompliance(this.referrer.objectuid, this.navigationState);

      this.dstSettings = {
        displayedColumns: this.displayedColumns,
        dataSource,
        entitySchema: this.entitySchema,
        navigationState: this.navigationState,
>>>>>>> oned/v92
      };
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }
<<<<<<< HEAD


=======
>>>>>>> oned/v92
}
