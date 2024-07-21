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

import { Component, OnInit } from '@angular/core';

import { DisplayColumns, EntitySchema, IClientProperty } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings, DynamicTabDataProviderDirective, MetadataService } from 'qbm';
import { RoleComplianceViolationsWrapperService } from './role-compliance-violations-wrapper';
import { RoleComplianceViolationsService } from './role-compliance-violations.service';

@Component({
  templateUrl: './role-compliance-violations.component.html',
<<<<<<< HEAD
  styleUrls: ['./role-compliance-violations.component.scss']
})
export class RoleComplianceViolationsComponent implements OnInit {

=======
  styleUrls: ['./role-compliance-violations.component.scss'],
})
export class RoleComplianceViolationsComponent implements OnInit {
>>>>>>> oned/v92
  public tablename: string;
  public uidRole: string;
  public dstSettings: DataSourceToolbarSettings;
  public readonly DisplayColumns = DisplayColumns;
  public entitySchema: EntitySchema;
  public showHelperAlert = true;
  public keyDescription: string;

  private displayedColumns: IClientProperty[] = [];
  constructor(
    dataProvider: DynamicTabDataProviderDirective,
    private readonly entityService: RoleComplianceViolationsWrapperService,
    private readonly roleComplianceViolationService: RoleComplianceViolationsService,
<<<<<<< HEAD
    private readonly metaDataService: MetadataService
=======
    private readonly metaDataService: MetadataService,
>>>>>>> oned/v92
  ) {
    this.tablename = dataProvider.data.tablename;
    this.uidRole = dataProvider.data.entity.GetKeys()[0];
    this.entitySchema = this.entityService.roleComplianceEntitySchema;
<<<<<<< HEAD
    this.displayedColumns = [
      this.entitySchema.Columns.RuleName,
      this.entitySchema.Columns.ObjectDisplay
    ];

    // tslint:disable:max-line-length
    switch ((this.tablename ?? '').toLowerCase()) {
      case 'aerole' :
        this.keyDescription = '#LDS#Here you can get an overview of all entitlements assigned to this application role that may violate a compliance rule.';
        break;
      case 'department' :
        this.keyDescription = '#LDS#Here you can get an overview of all entitlements assigned to this department that may violate a compliance rule.';
        break;
      case 'locality' :
        this.keyDescription = '#LDS#Here you can get an overview of all entitlements assigned to this location that may violate a compliance rule.';
        break;
      case 'profitcenter' :
        this.keyDescription = '#LDS#Here you can get an overview of all entitlements assigned to this cost center that may violate a compliance rule.';
        break;
      case 'eset' :
        this.keyDescription = '#LDS#Here you can get an overview of all entitlements assigned to this system role that may violate a compliance rule.';
        break;
      case 'org' :
        this.keyDescription = '#LDS#Here you can get an overview of all entitlements assigned to this business role that may violate a compliance rule.';
        break;
      default :
        this.keyDescription = '#LDS#Here you can get an overview of all entitlements assigned to this object that may violate a compliance rule.';
=======
    this.displayedColumns = [this.entitySchema.Columns.RuleName, this.entitySchema.Columns.ObjectDisplay];

    // tslint:disable:max-line-length
    switch ((this.tablename ?? '').toLowerCase()) {
      case 'aerole':
        this.keyDescription =
          '#LDS#Here you can get an overview of all entitlements assigned to this application role that may violate a compliance rule.';
        break;
      case 'department':
        this.keyDescription =
          '#LDS#Here you can get an overview of all entitlements assigned to this department that may violate a compliance rule.';
        break;
      case 'locality':
        this.keyDescription =
          '#LDS#Here you can get an overview of all entitlements assigned to this location that may violate a compliance rule.';
        break;
      case 'profitcenter':
        this.keyDescription =
          '#LDS#Here you can get an overview of all entitlements assigned to this cost center that may violate a compliance rule.';
        break;
      case 'eset':
        this.keyDescription =
          '#LDS#Here you can get an overview of all entitlements assigned to this system role that may violate a compliance rule.';
        break;
      case 'org':
        this.keyDescription =
          '#LDS#Here you can get an overview of all entitlements assigned to this business role that may violate a compliance rule.';
        break;
      default:
        this.keyDescription =
          '#LDS#Here you can get an overview of all entitlements assigned to this object that may violate a compliance rule.';
>>>>>>> oned/v92
        break;
    }
    // tslint:enable:max-line-length
  }

  public async ngOnInit(): Promise<void> {
<<<<<<< HEAD
    await this.metaDataService.update([this.tablename]);
=======
    await this.metaDataService.updateNonExisting([this.tablename]);
>>>>>>> oned/v92
    await this.getData();
  }

  public async getData(): Promise<void> {
    this.roleComplianceViolationService.handleOpenLoader();
    try {
      const data = await this.roleComplianceViolationService.getRoleComplianceViolations(this.tablename, this.uidRole);
      this.dstSettings = {
        displayedColumns: this.displayedColumns,
        dataSource: this.entityService.build(data.Violations),
        entitySchema: this.entityService.roleComplianceEntitySchema,
<<<<<<< HEAD
        navigationState: {}
=======
        navigationState: {},
>>>>>>> oned/v92
      };
    } finally {
      this.roleComplianceViolationService.handleCloseLoader();
    }
  }

  public onHelperDismissed(): void {
    this.showHelperAlert = false;
  }
}
