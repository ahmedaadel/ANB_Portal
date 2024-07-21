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

import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';

<<<<<<< HEAD
import { MenuService } from 'qbm';
=======
import { ExtService } from 'qbm';
import { CallsComponent } from './calls/calls.component';
>>>>>>> oned/v92


@Injectable({ providedIn: 'root' })
export class InitService {

  constructor(
    private readonly router: Router,
<<<<<<< HEAD
    private readonly menuService: MenuService,
=======
    private readonly extService: ExtService,
>>>>>>> oned/v92
  ) { }

  public onInit(routes: Route[]): void {
    this.addRoutes(routes);
<<<<<<< HEAD

    this.setupMenu();
=======
    this.extService.register('mastHead', { instance: CallsComponent, inputData: {
      id: 'helpdeskTickets',
      label: '#LDS#Menu Entry Help desk tickets',
      url: 'help-desk-support/tickets'
    }});
>>>>>>> oned/v92

    /*
    this.dataExplorerRegistryService.registerFactory(
      (preProps: string[], groups: string[]) => {
        if (!this.isRoleAdmin(groups)) {
          return;
        }
        return {
          instance: RolesOverviewComponent,
          data: {
            TableName: this.esetTag,
            Count: 0,
          },
          sortOrder: 8,
          name: 'systemroles',
          caption: '#LDS#Menu Entry System roles',
        };
      }
    );
    */
  }

<<<<<<< HEAD
  private setupMenu(): void {
    /*
    this.menuService.addMenuFactories(
      (preProps: string[], groups: string[]) => {
        if (!this.isRoleAdmin(groups)) {
          return null;
        }
        const menu = {
          id: 'ROOT_Data',
          title: '#LDS#Data administration',
          sorting: '40',
          items: [
            {
              id: 'QER_DataExplorer',
              navigationCommands: { commands: ['admin', 'dataexplorer'] },
              title: '#LDS#Menu Entry Data Explorer',
              sorting: '40-10',
            },
          ]
        };

        return menu;
      });
      */
  }

=======
>>>>>>> oned/v92
  private addRoutes(routes: Route[]): void {
    const config = this.router.config;
    routes.forEach(route => {
      config.unshift(route);
    });
    this.router.resetConfig(config);
  }
}
