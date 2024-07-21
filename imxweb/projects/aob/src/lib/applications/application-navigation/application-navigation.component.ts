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

import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
<<<<<<< HEAD
import { EuiLoadingService } from '@elemental-ui/core';

import { PortalApplication, PortalApplicationNew } from 'imx-api-aob';
import { CollectionLoadParameters, FilterType, CompareOperator, TypedEntityCollectionData } from 'imx-qbm-dbts';
import { ClassloggerService, DataSourceToolbarSettings, DataTileBadge, DataTilesComponent, SettingsService } from 'qbm';
import { ApplicationsService } from '../applications.service';
import { UserModelService } from 'qer';
=======
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { PortalApplication, PortalApplicationNew } from 'imx-api-aob';
import { CollectionLoadParameters, TypedEntityCollectionData, TypedEntity } from 'imx-qbm-dbts';
import { BusyService, ClassloggerService, DataSourceToolbarSettings, DataTileBadge, DataTilesComponent, SettingsService } from 'qbm';
import { ApplicationsService } from '../applications.service';
import { UserModelService } from 'qer';
import { AobPermissionsService } from '../../permissions/aob-permissions.service';

>>>>>>> oned/v92

/**
 * This component shows a  list of {@link PortalApplication[]|applications} each in an
 * {@link ApplicationCardComponent|ApplicationCardComponent}.
 */
@Component({
  selector: 'imx-application-navigation',
  templateUrl: './application-navigation.component.html',
<<<<<<< HEAD
  styleUrls: ['./application-navigation.component.scss']
=======
  styleUrls: ['./application-navigation.component.scss'],
>>>>>>> oned/v92
})
export class ApplicationNavigationComponent implements OnInit {
  public dstSettings: DataSourceToolbarSettings;
  public readonly entitySchema = PortalApplication.GetEntitySchema();
  public selectable = true;
  public multiselect = false;
  public hideCustomToolbar = true;
  public filterKpiChecked = false;
  public isAdmin = false;
<<<<<<< HEAD

  @Output() public readonly dataSourceChanged =
    new EventEmitter<{ keywords?: string; dataSource: TypedEntityCollectionData<PortalApplication> }>();
  @Output() public readonly applicationSelected = new EventEmitter<string>();

  public readonly status = {
    getBadges: (application: PortalApplication | PortalApplicationNew): DataTileBadge[] => this.appService.getApplicationBadges(application)
  };

  private navigationState: CollectionLoadParameters & {
    filterkpi?: boolean
=======
  public selectedEntity: TypedEntity;
  public loadingSubject: Subject<boolean>;

  public busyService = new BusyService();

  /**
   * An event, that is triggert, if the dataSource is changed
   */
  @Output() public readonly dataSourceChanged = new EventEmitter<{
    keywords?: string;
    dataSource: TypedEntityCollectionData<PortalApplication>;
  }>();

  /**
   * An event that is emitted, if the user selects a data tile from the list
   */
  @Output() public readonly applicationSelected = new EventEmitter<string>();

  /**
   * a status that defines, how badges are calculated
   */
  public readonly status = {
    getBadges: (application: PortalApplication | PortalApplicationNew): DataTileBadge[] =>
      this.appService.getApplicationBadges(application),
  };

  private navigationState: CollectionLoadParameters & {
    filterkpi?: boolean;
>>>>>>> oned/v92
  };

  @ViewChild('tiles', { static: true }) private readonly tiles: DataTilesComponent;

  constructor(
    private logger: ClassloggerService,
    private readonly appService: ApplicationsService,
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
    private readonly settingsService: SettingsService,
    private readonly userService: UserModelService,
    private readonly applicationsProvider: ApplicationsService,
    public overlay: Overlay) {
  }

  public async ngOnInit(): Promise<void> {
    this.isAdmin = (await this.userService.getGroups()).some(ug => ug.Name === 'AOB_4_AOB_Admin');

    this.applicationsProvider.applicationRefresh.subscribe((res) => {
      if(res){ 
        return this.getData();
      }
    })
    return this.getData({ PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 });
  }

=======
    private readonly settingsService: SettingsService,
    private readonly userService: UserModelService,
    private readonly route: ActivatedRoute,
    private readonly applicationsProvider: ApplicationsService,
    private readonly aobPermissionsService: AobPermissionsService,
    public overlay: Overlay
  ) {}


  public async ngOnInit(): Promise<void> {

    this.isAdmin =  await this.aobPermissionsService.isAobApplicationAdmin();

    this.applicationsProvider.applicationRefresh.subscribe((res) => {
      if (res) {
        return this.getData();
      }
    });
    return this.getData({ PageSize: this.settingsService.DefaultPageSize, StartIndex: 0 });
  }

  /**
   * Emits the applicationSelected event, if the selected tile changes
   * @param selection the {@link PortalApplication | application} that is selected
   */
>>>>>>> oned/v92
  public async onSelectionChanged(selection: PortalApplication[]): Promise<void> {
    const app = selection[0];
    if (app) {
      this.applicationSelected.emit(app.UID_AOBApplication.value);
    }
  }
<<<<<<< HEAD

=======
  /**
   * Emits the applicationSelected event, if the selected tile changes
   * @param selection the {@link PortalApplication | application} that is selected
   */
  public onTileSelected(isSelected): void {
    if (!isSelected) this.applicationSelected.emit();
  }

  /**
   * Loads the {@link PortalApplication | applications} for the application view
   * @param newState the load parameter for the api call
   * @param keywords possible search parameter
   */
>>>>>>> oned/v92
  public async getData(newState?: CollectionLoadParameters, keywords?: string): Promise<void> {
    if (newState) {
      this.navigationState = newState;
    }

<<<<<<< HEAD
    const overlayRef = this.busyService.show();
=======
    const isBusy = this.busyService.beginBusy();
    this.loadingSubject?.next(true);
>>>>>>> oned/v92
    try {
      const dataSource = await this.appService.get(this.navigationState);

      if (dataSource) {
        this.dstSettings = {
          dataSource,
          entitySchema: this.entitySchema,
          navigationState: this.navigationState,
        };
      } else {
        this.dstSettings = undefined;
        this.logger.error(this, 'TypedEntityCollectionData<PortalApplication> is undefined');
      }

      this.dataSourceChanged.emit({ keywords, dataSource });
      this.route.queryParams.subscribe(async (params) => {
        if (params.id) {
          let app = dataSource.Data.find((x) => x.UID_AOBApplication.value == params.id);
          this.selectedEntity = app;
        }
      });
    } finally {
      isBusy.endBusy();
      this.loadingSubject?.next(false);
    }
  }

  public clearSelection(): void {
    this.tiles?.clearSelection();
  }

  public onCreateNew(): void {
    this.clearSelection();
    this.appService.createApplication();
  }

  public async onSearch(keywords: string): Promise<void> {
    this.logger.debug(this, `Searching for: ${keywords}`);

    this.navigationState.StartIndex = 0;
    if (keywords == null || keywords.length === 0) {
      this.navigationState.search = null;
    } else {
      this.navigationState.search = keywords;
    }

    return this.getData(undefined, keywords);
  }

  public async filterApplicationsWithKpiIssues(): Promise<void> {
    this.navigationState.filterkpi = this.filterKpiChecked;
    this.navigationState.StartIndex = 0;
    await this.getData();
  }
}
