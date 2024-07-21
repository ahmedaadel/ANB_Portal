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

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { PortalItshopPatternAdmin, PortalItshopPatternPrivate } from 'imx-api-qer';
<<<<<<< HEAD
import { CollectionLoadParameters, DisplayColumns, TypedEntity, ValType } from 'imx-qbm-dbts';
=======
import { CollectionLoadParameters, DisplayColumns, TypedEntity } from 'imx-qbm-dbts';
>>>>>>> oned/v92

import {
  AuthenticationService,
  ClassloggerService,
  ConfirmationService,
  DataSourceToolbarSettings,
  DataSourceWrapper,
  DataTableComponent,
<<<<<<< HEAD
=======
  HELP_CONTEXTUAL,
  HelpContextualValues,
>>>>>>> oned/v92
  SnackBarService,
} from 'qbm';
import { QerPermissionsService } from '../admin/qer-permissions.service';
import { ItshopPatternSidesheetComponent } from './itshop-pattern-sidesheet/itshop-pattern-sidesheet.component';
import { ItshopPatternService } from './itshop-pattern.service';
import { ItshopPatternCreateService } from './itshop-pattern-create-sidesheet/itshop-pattern-create.service';
import { ItShopPatternChangedType } from './itshop-pattern-changed.enum';

/**
<<<<<<< HEAD
 * Component that shows all list of all itshop pattern of the current user
=======
 * Component that shows a list of all product bundles (internal names are itshop pattern and request templates) of the current user
>>>>>>> oned/v92
 * or all itshop pattern of all other users, if the user is a shop admin.
 */
@Component({
  selector: 'imx-itshop-pattern',
  templateUrl: './itshop-pattern.component.html',
  styleUrls: ['./itshop-pattern.component.scss']
})
export class ItshopPatternComponent implements OnInit, OnDestroy {

<<<<<<< HEAD
  public dstWrapper: DataSourceWrapper<PortalItshopPatternAdmin>;
  public dstSettings: DataSourceToolbarSettings;
  public selectedPatterns: PortalItshopPatternAdmin[] = [];
=======
  /**
   * the wrapper component for the  {@link DataSourceToolbar|dataSourceToolbar}.
   */
  public dstWrapper: DataSourceWrapper<PortalItshopPatternAdmin>;

  public dstSettings: DataSourceToolbarSettings;

  /**
   * The list of all selected product bundles.
   */
  public selectedPatterns: PortalItshopPatternAdmin[] = [];

  /**
   * Indicates wether the component should be shown for shop admins or not.
   */
>>>>>>> oned/v92
  public adminMode: boolean;

  @ViewChild(DataTableComponent) public table: DataTableComponent<TypedEntity>;

  public readonly status = {
<<<<<<< HEAD
    enabled: (pattern: PortalItshopPatternAdmin): boolean => this.isMyPattern(pattern)
  };
  public infoText: string;

  private readonly subscriptions: Subscription[] = [];
  private currentUserUid: string;
  private infoTextAdmin = '#LDS#Here you can manage request templates. You can edit and share your own request templates and create copies of request templates created by others.';
  private infoTextUser = '#LDS#Here you can manage your request templates. You can edit your request templates, delete them and share them with others.';
=======
    enabled: (pattern: PortalItshopPatternAdmin): boolean => this.canBeEditedAndDeleted(pattern)
  };
  public helpContextId: HelpContextualValues;

  private readonly subscriptions: Subscription[] = [];
  private currentUserUid: string;
>>>>>>> oned/v92

  constructor(
    private readonly patternService: ItshopPatternService,
    private readonly patternCreateService: ItshopPatternCreateService,
    private readonly qerPermissionService: QerPermissionsService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly snackBar: SnackBarService,
    private readonly translate: TranslateService,
    private readonly logger: ClassloggerService,
    private readonly confirmationService: ConfirmationService,
    authentication: AuthenticationService
  ) {
    this.subscriptions.push(
      authentication.onSessionResponse.subscribe((sessionState) =>
        this.currentUserUid = sessionState.UserUid
      )
    );
  }

  public async ngOnInit(): Promise<void> {
<<<<<<< HEAD

=======
>>>>>>> oned/v92
    this.patternService.handleOpenLoader();
    try {
      this.adminMode = await this.qerPermissionService.isShopAdmin();

<<<<<<< HEAD
      this.infoText = this.adminMode ? this.infoTextAdmin : this.infoTextUser;
=======
      this.helpContextId = this.adminMode ? HELP_CONTEXTUAL.RequestTemplates: HELP_CONTEXTUAL.RequestTemplatesUser;
>>>>>>> oned/v92

      const entitySchema = this.adminMode
        ? this.patternService.itshopPatternAdminSchema
        : this.patternService.itshopPatternPrivateSchema;
      this.dstWrapper = new DataSourceWrapper(
        state => this.adminMode
          ? this.patternService.getPublicPatterns(state)
          : this.patternService.getPrivatePatterns(state),
        [
          entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
          entitySchema.Columns.UID_Person,
          entitySchema.Columns.IsPublicPattern,
<<<<<<< HEAD
          {
            ColumnName: 'actions',
            Type: ValType.String,
            afterAdditionals: true
          }
=======
>>>>>>> oned/v92
        ],
        entitySchema,
        undefined,
        'itshop-pattern'
      );
    } finally {
      this.patternService.handleCloseLoader();
    }
    await this.getData();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

<<<<<<< HEAD
  public isMyPattern(pattern: PortalItshopPatternAdmin): boolean {
    return this.currentUserUid === pattern.UID_Person.value;
  }

  public async delete(selectedPattern?: PortalItshopPatternPrivate): Promise<void> {
    if (await this.confirmationService.confirm({
      Title: '#LDS#Heading Delete Request Templates',
      Message: '#LDS#Are you sure you want to delete the selected request templates?'
    })) {
      await this.patternService.delete(selectedPattern ? [selectedPattern] : this.selectedPatterns);
=======
  public isMyPattern(pattern: PortalItshopPatternPrivate | PortalItshopPatternAdmin): boolean {
    return this.currentUserUid === pattern.UID_Person.value;
  }

  public canBeEditedAndDeleted(pattern: PortalItshopPatternPrivate | PortalItshopPatternAdmin): boolean {
    return this.isMyPattern(pattern) || this.adminMode;
  }

  public async delete(selectedPattern?: PortalItshopPatternPrivate | PortalItshopPatternAdmin): Promise<void> {
    if (await this.confirmationService.confirm({
      Title: '#LDS#Heading Delete Product Bundles',
      Message: '#LDS#Are you sure you want to delete the selected product bundles?'
    })) {
      await this.patternService.delete(selectedPattern ? [selectedPattern] : this.selectedPatterns, this.adminMode);
>>>>>>> oned/v92
      this.getData();
      this.table.clearSelection();
    }
  }

<<<<<<< HEAD
  public async publish(selectedPatterns: PortalItshopPatternAdmin[]): Promise<void> {
=======
  public async publish(selectedPatterns: PortalItshopPatternPrivate[] | PortalItshopPatternAdmin[]): Promise<void> {
>>>>>>> oned/v92
    await this.patternService.makePublic(selectedPatterns, true);
    this.getData();
    this.table.clearSelection();
  }

<<<<<<< HEAD
  public async unpublish(selectedPatterns: PortalItshopPatternAdmin[]): Promise<void> {
=======
  public async unpublish(selectedPatterns: PortalItshopPatternPrivate[] | PortalItshopPatternAdmin[]): Promise<void> {
>>>>>>> oned/v92
    await this.patternService.makePublic(selectedPatterns, false);
    this.getData();
    this.table.clearSelection();
  }

  public async createNewPattern(): Promise<void> {
    if (await this.patternCreateService.createNewPattern(true)) {
      this.getData();
    }
  }

  public async getData(parameter?: CollectionLoadParameters): Promise<void> {
    this.patternService.handleOpenLoader();
    try {
      const parameters = {
        ...parameter,
        ...{ OrderBy: 'Ident_ShoppingCartPattern asc' }
      };
      this.dstSettings = await this.dstWrapper.getDstSettings(parameters);
    } finally {
      this.patternService.handleCloseLoader();
    }
  }

  public selectedItemsCanBePublished(): boolean {
    return this.selectedPatterns != null
      && this.selectedPatterns.length > 0
      && this.selectedPatterns.every(item => this.isMyPattern(item) && !item.IsPublicPattern.value);
  }

  public selectedItemsCanBeUnpublished(): boolean {
    return this.selectedPatterns != null
      && this.selectedPatterns.length > 0
      && this.selectedPatterns.every(item => this.isMyPattern(item) && item.IsPublicPattern.value);
  }

  public selectedItemsCanBeDeleted(): boolean {
    return this.selectedPatterns != null
      && this.selectedPatterns.length > 0
<<<<<<< HEAD
      && this.selectedPatterns.every(item => this.isMyPattern(item));
=======
      && this.selectedPatterns.every(item => this.canBeEditedAndDeleted(item));
>>>>>>> oned/v92
  }

  public onSelectionChanged(items: PortalItshopPatternAdmin[]): void {
    this.logger.trace(this, 'selection changed', items);
    this.selectedPatterns = items;
  }

<<<<<<< HEAD

  public async viewDetails(selectedPattern: PortalItshopPatternAdmin): Promise<void> {
    const isMyPattern = this.isMyPattern(selectedPattern);
    const pattern = isMyPattern
      ? await this.patternService.getPrivatePattern(selectedPattern.GetEntity().GetKeys()[0])
      : selectedPattern;

    const result = await this.sidesheet.open(ItshopPatternSidesheetComponent, {
      title: await this.translate.get('#LDS#Heading Edit Request Template').toPromise(),
      headerColour: 'iris-blue',
      bodyColour: 'asher-gray',
=======
  public async onHighlightedEntityChanged(selectedPattern: PortalItshopPatternPrivate | PortalItshopPatternAdmin): Promise<void> {
    await this.viewDetails(selectedPattern);
  }

  private async viewDetails(selectedPattern: PortalItshopPatternPrivate | PortalItshopPatternAdmin): Promise<void> {
    const isMyPattern = this.isMyPattern(selectedPattern);
    const canEditAndDelete = this.canBeEditedAndDeleted(selectedPattern);
    const pattern = isMyPattern
      ? await this.patternService.getPrivatePattern(selectedPattern.GetEntity().GetKeys()[0])
      : (await this.patternService.getPublicPatterns()).Data.find(
          (pattern) => pattern.GetEntity().GetKeys()[0] === selectedPattern.GetEntity().GetKeys()[0],
        );

    const title = await this.translate.get(canEditAndDelete
      ? '#LDS#Heading Edit Product Bundle'
      : '#LDS#Heading View Product Bundle Details').toPromise();

    const result = await this.sidesheet.open(ItshopPatternSidesheetComponent, {
      title,
      subTitle: pattern.Ident_ShoppingCartPattern.value,
>>>>>>> oned/v92
      panelClass: 'imx-sidesheet',
      disableClose: true,
      padding: '0',
      width: '600px',
      testId: 'pattern-details-sidesheet',
      data: {
        pattern,
        isMyPattern,
<<<<<<< HEAD
        adminMode: this.adminMode
=======
        adminMode: this.adminMode,
        canEditAndDelete
>>>>>>> oned/v92
      }
    }).afterClosed().toPromise();

    if (result === ItShopPatternChangedType.Saved) {
<<<<<<< HEAD
      const snackBarMessage = '#LDS#The request template has been successfully saved.';
=======
      const snackBarMessage = '#LDS#The product bundle has been successfully saved.';
>>>>>>> oned/v92
      this.snackBar.open({ key: snackBarMessage });
      this.getData();
    } else if (result) {
      this.getData();
    }

  }
}
