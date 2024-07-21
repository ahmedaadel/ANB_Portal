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
import { Component, Input, EventEmitter, Output, TemplateRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
=======
import { Component, Input, EventEmitter, Output, TemplateRef, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
>>>>>>> oned/v92
import { SelectionChange } from '@angular/cdk/collections';
import { Subscription } from 'rxjs';

import { DataSourceToolbarComponent } from '../data-source-toolbar/data-source-toolbar.component';
import { TypedEntity, IClientProperty } from 'imx-qbm-dbts';
import { DataTileMenuItem } from './data-tile-menu-item.interface';
import { DataTileBadge } from '../data-source-toolbar/data-tile-badge.interface';

/**
 * A list component containing {@link SingleTileComponent| tiles}.
 * Collaborates with a DST (datasource toolbar).
 */
@Component({
  selector: 'imx-data-tiles',
  templateUrl: './data-tiles.component.html',
<<<<<<< HEAD
  styleUrls: ['./data-tiles.component.scss']
=======
  styleUrls: ['./data-tiles.component.scss'],
>>>>>>> oned/v92
})
export class DataTilesComponent implements OnChanges, OnDestroy {
  /**
   * The DST (Datasource toolbar)
   */
  @Input() public dst: DataSourceToolbarComponent;

  /**
   * Indicates if tiles are selectable.
   */
  @Input() public selectable = false;

  /**
   * Indicates if multiselect is enabled.
   * If selectable is set to false, this property has no effect.
   */
  @Input() public multiSelect = true;

  /**
   * Custom template of tiles
   */
  @Input() public contentTemplate: TemplateRef<any>;

  /**
   * The title object of a tile.
   */
  @Input() public titleObject: IClientProperty;

  /**
   * The subtitle object of a tile.
   */
  @Input() public subtitleObject: IClientProperty;

  public additionalSubtitleObjects: IClientProperty[] = [];

  /**
   * The icon will be shown if the image is not set or not available.
   */
  @Input() public icon: string;

  /**
   * List of action names.
   * The list will be transformed into a menu and attached to each tile.
   */
  @Input() public actions: DataTileMenuItem[];

  /**
   * Tile Image. If present and selection is enabled, the selection icons will not be shown.
   */
  @Input() public image: IClientProperty;

<<<<<<< HEAD
=======
  @Input() public selectedEntity: TypedEntity;

>>>>>>> oned/v92
  /**
   * If the image property of a tile is set, but does not contain a valid image, the fallbackIcon will be used.
   */
  @Input() public fallbackIcon: string;

  /**
   * If present this text would be shown, if no items are found.  .
   */
  @Input() public noItemsFoundText = '#LDS#No data';

  /**
   * If present this text would be shown, if no items are found.  .
   */
<<<<<<< HEAD
  @Input() public noItemsMatchText = '#LDS#No matching data';

=======
  @Input() public noItemsMatchText = '#LDS#There is no data matching your search.';
>>>>>>> oned/v92

  /**
   * This icon will be displayed when there is no data on the datasource (and a search is not applied)
   * Defaults to the 'table' icon when not supplied
   */
  @Input() public noDataIcon = 'table';

  /**
   * This icon will be displayed along with the 'noMatchingDataTranslationKey' text when a search or filter
   * is applied but there is no data as a result
   * Defaults to the 'search' icon when not supplied
   */
  @Input() public noMatchingDataIcon = 'search';

<<<<<<< HEAD

=======
>>>>>>> oned/v92
  /**
   * The width of a tile.
   */
  @Input() public width = '340px';

  /**
   * The height of a tile.
   */
  @Input() public height: '140px';

  @Input() public useActionMenu = true;

  /**
   * Event will fire, when a menu item in a tile is clicked.
   * Emmits the name of the actions.
   */
  @Output() public actionSelected = new EventEmitter<DataTileMenuItem>();

  /**
   * Event, that will fire when the selection has changed.
   */
  @Output() public selectionChanged = new EventEmitter<TypedEntity[]>();

<<<<<<< HEAD
=======
  //When tile is unselected and if the below event exists on the consumer this event will be emitted.
  @Output() public selected = new EventEmitter();

>>>>>>> oned/v92
  /**
   * Event, that will fire when the user clicks on the badge.
   */
  @Output() public badgeClicked = new EventEmitter<DataTileBadge>();

  /**
<<<<<<< HEAD
=======
   * @ignore
   * internal handler for loading
   */
  public isLoading = true;

  /**
>>>>>>> oned/v92
   * Keeps track of the selected item in single select mode
   */
  private selectedItem: TypedEntity;

  /**
   * @ignore
   * List of subscriptions.
   */
  private subscriptions: Subscription[] = [];

<<<<<<< HEAD
=======
  constructor(private readonly changeDetector: ChangeDetectorRef){}

>>>>>>> oned/v92
  /**
   * @ignore Used internally.
   *
   * Listens for changes of data table inputs e.g. checks it the datasource has changed.
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['dst'] && changes['dst'].currentValue) {
<<<<<<< HEAD
      this.subscriptions.push(this.dst.selectionChanged.subscribe((event: SelectionChange<TypedEntity>) =>
        this.selectionChanged.emit(event.source.selected)
      ));

      this.additionalSubtitleObjects = this.dst?.additionalListElements;
=======
      this.subscriptions.push(
        this.dst.selectionChanged.subscribe((event: SelectionChange<TypedEntity>) => this.selectionChanged.emit(event.source.selected))
      );

      this.additionalSubtitleObjects = this.dst?.additionalListElements;

      if (this.dst.busyService) {
        this.subscriptions.push(this.dst.busyService.busyStateChanged.subscribe((value:boolean)=>{
          this.isLoading = value;
          this.changeDetector.detectChanges()
        }));
      }
      this.isLoading = this.dst?.busyService?.isBusy ?? false;

>>>>>>> oned/v92
    }
  }

  /**
   * @ignore Used internally.
   * Unsubscribes all listeners.
   */
  public ngOnDestroy(): void {
<<<<<<< HEAD
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
=======
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
>>>>>>> oned/v92
  }

  public isSelected(item: TypedEntity): boolean {
    if (this.multiSelect) {
      return this.dst.isChecked(item);
    }

<<<<<<< HEAD
    return this.selectedItem &&
      this.selectedItem.GetEntity().GetKeys().join() === item.GetEntity().GetKeys().join();
=======
    if (this.selectedEntity) {
      this.selectedItem = this.selectedEntity;
    }

    return this.selectedItem && this.selectedItem.GetEntity().GetKeys().join() === item.GetEntity().GetKeys().join();
>>>>>>> oned/v92
  }

  /**
   * Fires when selection changes and toggles selection state.
   */
  public onSelectionChanged(item: TypedEntity): void {
    if (this.multiSelect) {
      this.dst.toggle(item);
    } else {
      this.selectedItem = item;
      this.selectionChanged.emit([item]);
    }
  }

<<<<<<< HEAD
=======
  public onTileSelected(selected) {
    this.selected.emit(selected);
  }

>>>>>>> oned/v92
  public onActionSelected(action: DataTileMenuItem): void {
    this.actionSelected.emit(action);
  }

  public clearSelection(): void {
    this.selectedItem = undefined;
    this.dst.clearSelection();
  }

  public selectAll(): void {
    this.dst.selectAllOnPage();
  }

  public onBadgeClicked(badge: DataTileBadge): void {
    this.badgeClicked.emit(badge);
  }
}
