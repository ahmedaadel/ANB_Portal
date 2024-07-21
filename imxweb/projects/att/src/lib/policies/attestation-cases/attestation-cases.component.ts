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
import { Component, Inject, OnInit } from '@angular/core';
import { EuiLoadingService, EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
<<<<<<< HEAD

import { PortalAttestationFilterMatchingobjects } from 'imx-api-att';
import { CollectionLoadParameters, IClientProperty, DisplayColumns, ValType, EntitySchema, DataModel } from 'imx-qbm-dbts';
import { ClassloggerService, ConfirmationService, DataSourceToolbarSettings, SettingsService, SnackBarService } from 'qbm';
import { PolicyService } from '../policy.service';
import { AttestationCasesComponentParameter } from './attestation-cases-component-parameter.interface';
=======
import { TranslateService } from '@ngx-translate/core';

import { PortalAttestationFilterMatchingobjects } from 'imx-api-att';
import { CollectionLoadParameters, DisplayColumns, ValType, EntitySchema } from 'imx-qbm-dbts';
import {
  BusyService,
  ClassloggerService,
  ClientPropertyForTableColumns,
  ConfirmationService,
  DataSourceToolbarSettings,
  LdsReplacePipe,
  SettingsService,
  SnackBarService,
} from 'qbm';
import { PolicyService } from '../policy.service';
import { AttestationCasesComponentParameter } from './attestation-cases-component-parameter.interface';
import { AttestationCasesTreeDatabaseService } from './attestation-cases-tree-database.service';
>>>>>>> oned/v92

@Component({
  templateUrl: './attestation-cases.component.html',
  styleUrls: ['./attestation-cases.component.scss'],
})
export class AttestationCasesComponent implements OnInit {
  public dstSettings: DataSourceToolbarSettings;
  public readonly entitySchemaPolicy: EntitySchema;
  public DisplayColumns = DisplayColumns;
  public isAdmin: boolean;
  public deactivatedChecked = false;

  public selectedItems: PortalAttestationFilterMatchingobjects[] = [];
<<<<<<< HEAD

  private navigationState: CollectionLoadParameters;
  private displayedColumns: IClientProperty[];
  private dataModel: DataModel;
  private threshold = -1;
=======
  public treeDatabase: AttestationCasesTreeDatabaseService;
  public entitySchema = PortalAttestationFilterMatchingobjects.GetEntitySchema();

  private navigationState: CollectionLoadParameters;
  private displayedColumns: ClientPropertyForTableColumns[];
  private threshold = -1;
  public hierarchical: boolean;
  private busyService = new BusyService();
>>>>>>> oned/v92

  constructor(
    public readonly sidesheetRef: EuiSidesheetRef,
    @Inject(EUI_SIDESHEET_DATA) public readonly data: AttestationCasesComponentParameter,
    private readonly policyService: PolicyService,
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
    private readonly snackbar: SnackBarService,
    private readonly confirmationService: ConfirmationService,
    settingsService: SettingsService,
    private readonly logger: ClassloggerService
=======
    private readonly busyServiceEui: EuiLoadingService,
    private readonly snackbar: SnackBarService,
    private readonly confirmationService: ConfirmationService,
    private readonly settingsService: SettingsService,
    private readonly translate: TranslateService,
    private readonly ldsReplace: LdsReplacePipe,
    private readonly logger: ClassloggerService,
>>>>>>> oned/v92
  ) {
    this.navigationState = { PageSize: settingsService.DefaultPageSize, StartIndex: 0, ParentKey: '' };
    this.entitySchemaPolicy = policyService.AttestationMatchingObjectsSchema;
    this.displayedColumns = [this.entitySchemaPolicy.Columns[DisplayColumns.DISPLAY_PROPERTYNAME]];

    if (data.canCreateRuns) {
      this.displayedColumns.push({
        ColumnName: 'runMethod',
        Type: ValType.String,
<<<<<<< HEAD
=======
        untranslatedDisplay: '#LDS#Actions',
>>>>>>> oned/v92
      });
    }
  }

  public get showWarning() {
    return this.threshold > 0 && this.threshold < (this.dstSettings?.dataSource?.totalCount ?? 0);
  }

  public async ngOnInit(): Promise<void> {
    let overlayRef: OverlayRef;
<<<<<<< HEAD
    setTimeout(() => (overlayRef = this.busyService.show()));
    try {
      this.dataModel = await this.policyService.getDataModel();
      this.threshold = await this.policyService.getCasesThreshold();
    } finally {
      setTimeout(async () => {
        this.busyService.hide(overlayRef);
      });
    }

    return this.navigate();
=======
    setTimeout(() => (overlayRef = this.busyServiceEui.show()));
    try {
      this.threshold = await this.policyService.getCasesThreshold();
      this.hierarchical =
        (
          await this.policyService.getObjectsForFilterUntyped(
            this.data.uidobject,
            this.data.uidPickCategory,
            { Elements: this.data.filter, ConcatenationType: this.data.concat },
            { PageSize: -1 }
          )
        ).Hierarchy != null;

      this.treeDatabase = new AttestationCasesTreeDatabaseService(this.policyService, this.settingsService, this.data, this.busyService);
      await this.treeDatabase.prepare(this.entitySchema, false);
    } finally {
      setTimeout(async () => {
        this.busyServiceEui.hide(overlayRef);
      });
    }

    return this.hierarchical ? this.navigateTree() : this.navigate();
  }

  public get hasSampleData(): boolean {
    return this.data.uidPickCategory != null && this.data.uidPickCategory !== '';
>>>>>>> oned/v92
  }

  public async onNavigationStateChanged(newState: CollectionLoadParameters): Promise<void> {
    this.navigationState = newState;
    await this.navigate();
  }

  public onSelectionChanged(items: PortalAttestationFilterMatchingobjects[]): void {
    this.selectedItems = items;
  }

  public async createRun(data: PortalAttestationFilterMatchingobjects[]): Promise<void> {
    const count = data.length > 0 ? data.length : this.dstSettings.dataSource.totalCount;
<<<<<<< HEAD
    if (count <= 1000 || (await this.confirmCreation())) {
      let overlayRef: OverlayRef;
      setTimeout(() => (overlayRef = this.busyService.show()));
=======

    if (count <= this.threshold || (await this.confirmCreation())) {
      let overlayRef: OverlayRef;
      setTimeout(() => (overlayRef = this.busyServiceEui.show()));
>>>>>>> oned/v92

      try {
        await this.policyService.createAttestationRun(
          this.data.uidpolicy,
          data.map((elem) => elem.Key.value)
        );

        this.logger.trace(
          this,
          'attestation run created for',
          this.data.uidpolicy,
          data.map((elem) => elem.Key.value)
        );

        this.snackbar.open(
          {
            key: '#LDS#The attestation has been started successfully. It may take some time until the associated attestation cases are created.',
          },
          '#LDS#Close'
        );
      } finally {
        setTimeout(async () => {
<<<<<<< HEAD
          this.busyService.hide(overlayRef);
=======
          this.busyServiceEui.hide(overlayRef);
>>>>>>> oned/v92
          this.sidesheetRef.close(true);
        });
      }
    }
  }

<<<<<<< HEAD
  private async navigate(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));

    try {
      const datasource = await this.policyService.getObjectsForFilter(
=======
  private async navigateTree(): Promise<void> {
    await this.treeDatabase.prepare(this.entitySchema, true);
  }

  private async navigate(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyServiceEui.show()));

    try {
      const dataSource = await this.policyService.getObjectsForFilter(
>>>>>>> oned/v92
        this.data.uidobject,
        this.data.uidPickCategory,
        { Elements: this.data.filter, ConcatenationType: this.data.concat },
        this.navigationState
      );

      this.dstSettings = {
        displayedColumns: this.displayedColumns,
<<<<<<< HEAD
        dataSource: datasource,
        entitySchema: this.entitySchemaPolicy,
        navigationState: this.navigationState,
        dataModel: this.dataModel,
        identifierForSessionStore: 'attestatation-cases',
=======
        dataSource,
        entitySchema: this.entitySchemaPolicy,
        navigationState: this.navigationState,
>>>>>>> oned/v92
      };

      this.logger.debug(this, 'matching objects table navigated to', this.navigationState);
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      setTimeout(() => this.busyServiceEui.hide(overlayRef));
>>>>>>> oned/v92
    }
  }

  private async confirmCreation(): Promise<boolean> {
<<<<<<< HEAD
    return this.confirmationService.confirm({
      Title: '#LDS#Heading Start Attestation',
      Message: '#LDS#You have selected more than 1000 objects. Are you sure you want to start the attestation for all objects?',
=======
    const message = this.ldsReplace.transform(
      await this.translate
        .get(
          '#LDS#You have selected more than {0} objects. Attestation of the selected objects may take some time and generate notifications to many approvers. Are you sure you want to start the attestation for the selected objects?'
        )
        .toPromise(),
      this.threshold
    );
    return this.confirmationService.confirm({
      Title: await this.translate.get('#LDS#Heading Many Objects Affected').toPromise(),
      Message: message,
>>>>>>> oned/v92
    });
  }
}
