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
import { OverlayRef } from '@angular/cdk/overlay';
import { EuiLoadingService, EuiSidesheetConfig, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';

<<<<<<< HEAD
import { DataSourceToolbarSettings, ClassloggerService, SettingsService, DataSourceWrapper, DataTableGroupedData } from 'qbm';
import { CollectionLoadParameters, DataModel } from 'imx-qbm-dbts';
=======
import { DataSourceToolbarSettings, ClassloggerService, SettingsService, DataSourceWrapper, DataTableGroupedData, BusyService } from 'qbm';
import { CollectionLoadParameters } from 'imx-qbm-dbts';
>>>>>>> oned/v92
import { PersonConfig, PortalPersonAll } from 'imx-api-qer';

import { ProjectConfigurationService } from '../project-configuration/project-configuration.service';
import { AddressbookDetailComponent } from './addressbook-detail/addressbook-detail.component';
import { AddressbookService } from './addressbook.service';

/**
 * White pages view. Contains a person details view.
 */
@Component({
  selector: 'imx-addressbook',
  templateUrl: './addressbook.component.html',
<<<<<<< HEAD
  styleUrls: ['./addressbook.component.scss']
=======
  styleUrls: ['./addressbook.component.scss'],
>>>>>>> oned/v92
})
export class AddressbookComponent implements OnInit {
  /**
   * Settings needed by the DataSourceToolbarComponent
   */
  public dstSettings: DataSourceToolbarSettings;

  public groupData: { [key: string]: DataTableGroupedData } = {};
<<<<<<< HEAD
=======
  public busyService = new BusyService();
>>>>>>> oned/v92

  private personConfig: PersonConfig;
  private dstWrapper: DataSourceWrapper<PortalPersonAll>;

  constructor(
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
=======
    private readonly euiBusyService: EuiLoadingService,
>>>>>>> oned/v92
    private readonly logger: ClassloggerService,
    private readonly configService: ProjectConfigurationService,
    private readonly settingsService: SettingsService,
    private readonly addressbookService: AddressbookService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly translateService: TranslateService
<<<<<<< HEAD
  ) { }

  public async ngOnInit(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
=======
  ) {}

  public async ngOnInit(): Promise<void> {
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92

    try {
      this.personConfig = (await this.configService.getConfig()).PersonConfig;

      this.dstWrapper = await this.addressbookService.createDataSourceWrapper(
<<<<<<< HEAD
        this.personConfig.VI_MyData_WhitePages_ResultAttributes, 'address-book'
=======
        this.personConfig.VI_MyData_WhitePages_ResultAttributes,
        'address-book'
>>>>>>> oned/v92
      );

      this.dstSettings = await this.dstWrapper.getDstSettings({ PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 });
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  /**
   * Occurs when the navigation state has changed - e.g. users clicks on the next page button.
   *
   */
  public async onNavigationStateChanged(newState: CollectionLoadParameters): Promise<void> {
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
=======
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92

    try {
      this.dstSettings = await this.dstWrapper.getDstSettings(newState);
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  public async onGroupingChange(groupKey: string): Promise<void> {
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
=======
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92

    try {
      const groupData = this.groupData[groupKey];
      groupData.settings = await this.dstWrapper.getGroupDstSettings(groupData.navigationState);
<<<<<<< HEAD
      groupData.data = groupData.settings.dataSource;
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      groupData.settings.dataModel = this.dstSettings.dataModel;
      groupData.settings.entitySchema = this.dstSettings.entitySchema;
      groupData.data = groupData.settings.dataSource;
    } finally {
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }

  /**
   * Occurs when user selects a person.
   *
   * @param personAll Selected person.
   */
  public async onHighlightedEntityChanged(personAll: PortalPersonAll): Promise<void> {
    this.logger.debug(this, `Selected person changed`);
    this.logger.trace(this, 'New selected person', personAll);

    let overlayRef: OverlayRef;
<<<<<<< HEAD
    setTimeout(() => overlayRef = this.busyService.show());
=======
    setTimeout(() => (overlayRef = this.euiBusyService.show()));
>>>>>>> oned/v92

    let config: EuiSidesheetConfig;

    try {
      config = {
        title: await this.translateService.get('#LDS#Heading View Identity Details').toPromise(),
<<<<<<< HEAD
        headerColour: 'iris-blue',
        padding: '0',
        width: 'max(600px, 60%)',
        data: await this.addressbookService.getDetail(
          personAll,
          this.personConfig.VI_MyData_WhitePages_DetailAttributes
        )
      };
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
=======
        subTitle: personAll.GetEntity().GetDisplay(),
        padding: '0',
        width: 'max(600px, 60%)',
        testId: 'addressbook-view-identity-details',
        data: await this.addressbookService.getDetail(personAll, this.personConfig.VI_MyData_WhitePages_DetailAttributes),
      };
    } finally {
      setTimeout(() => this.euiBusyService.hide(overlayRef));
>>>>>>> oned/v92
    }

    this.sidesheet.open(AddressbookDetailComponent, config);
  }

  public async onSearch(search: string): Promise<void> {
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
=======
    const isBusy = this.busyService.beginBusy();
>>>>>>> oned/v92

    try {
      this.dstSettings = await this.dstWrapper.getDstSettings({ StartIndex: 0, search });
    } finally {
<<<<<<< HEAD
      setTimeout(() => this.busyService.hide(overlayRef));
=======
      isBusy.endBusy();
>>>>>>> oned/v92
    }
  }
}
