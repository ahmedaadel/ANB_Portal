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
<<<<<<< HEAD
import { Router, Route } from '@angular/router';
import { RoleExtendedDataWrite } from 'imx-api-qer';

import { PortalAdminRoleEset, PortalPersonRolemembershipsEset, PortalRespEset } from 'imx-api-rms';
import { EntitySchema, ExtendedTypedEntityCollection, TypedEntity, WriteExtTypedEntity, CollectionLoadParameters } from 'imx-qbm-dbts';
import { DynamicMethodService, ImxTranslationProviderService, imx_SessionService, MenuService } from 'qbm';
import { DataExplorerRegistryService, IdentityRoleMembershipsService, RoleService, RolesOverviewComponent } from 'qer';
=======
import { Route, Router } from '@angular/router';
import { RoleExtendedDataWrite } from 'imx-api-qer';

import { PortalAdminRoleEset, PortalPersonRolemembershipsEset, PortalRespEset, V2ApiClientMethodFactory } from 'imx-api-rms';
import {
  EntitySchema,
  ExtendedTypedEntityCollection,
  TypedEntity,
  WriteExtTypedEntity,
  CollectionLoadParameters,
  MethodDescriptor,
  EntityCollectionData,
  MethodDefinition,
} from 'imx-qbm-dbts';
import { DynamicMethodService, ImxTranslationProviderService, imx_SessionService, MenuService, HELP_CONTEXTUAL } from 'qbm';
import {
  DataExplorerRegistryService,
  IdentityRoleMembershipsService,
  MyResponsibilitiesRegistryService,
  RoleService,
  RolesOverviewComponent,
  isAuditor,
  isRoleAdmin,
  isRoleStatistics,
} from 'qer';
>>>>>>> oned/v92
import { EsetDataModel } from './eset-data-model';
import { EsetEntitlements } from './eset-entitlements';
import { EsetMembership } from './eset-membership';
import { RmsApiService } from './rms-api-client.service';
<<<<<<< HEAD


@Injectable({ providedIn: 'root' })
export class InitService {

=======
import { ProjectConfig } from 'imx-api-qbm';

export interface test {
  GetSchema(): EntitySchema;
  Get_byid(id: string): Promise<ExtendedTypedEntityCollection<TypedEntity, unknown>>;
  Get(): Promise<ExtendedTypedEntityCollection<PortalAdminRoleEset, unknown>>;
}

@Injectable({ providedIn: 'root' })
export class InitService {
>>>>>>> oned/v92
  private esetTag = 'ESet';

  constructor(
    private readonly router: Router,
    private readonly api: RmsApiService,
    private readonly session: imx_SessionService,
    private readonly translator: ImxTranslationProviderService,
    private readonly dynamicMethodSvc: DynamicMethodService,
    private readonly dataExplorerRegistryService: DataExplorerRegistryService,
    private readonly menuService: MenuService,
    private readonly roleService: RoleService,
<<<<<<< HEAD
    private readonly identityRoleMembershipService: IdentityRoleMembershipsService
  ) { }
=======
    private readonly identityRoleMembershipService: IdentityRoleMembershipsService,
    private readonly myResponsibilitiesRegistryService: MyResponsibilitiesRegistryService
  ) {}
>>>>>>> oned/v92

  public onInit(routes: Route[]): void {
    this.addRoutes(routes);

    // wrapper class for interactive methods
<<<<<<< HEAD
    class ApiWrapper {

      constructor(private getByIdApi: {
        GetSchema(): EntitySchema,
        Get_byid(id: string): Promise<ExtendedTypedEntityCollection<TypedEntity, unknown>>
      }) { }

      Get(): Promise<ExtendedTypedEntityCollection<WriteExtTypedEntity<RoleExtendedDataWrite>, unknown>> {
        throw new Error("Creation of new system roles is not yet supported.");
      }

      GetSchema() { return this.getByIdApi.GetSchema(); }

      async Get_byid(id: string): Promise<ExtendedTypedEntityCollection<WriteExtTypedEntity<RoleExtendedDataWrite>, unknown>> {
        const data = await this.getByIdApi.Get_byid(id);
        const result: ExtendedTypedEntityCollection<WriteExtTypedEntity<RoleExtendedDataWrite>, unknown> = {
          ...data,
          Data: data.Data.map(d => { return new WriteExtTypedEntity<RoleExtendedDataWrite>(d.GetEntity()) })
=======
    // tslint:disable-next-line: max-classes-per-file
    class ApiWrapper {
      constructor(
        private getByIdApi: {
          GetSchema(): EntitySchema;
          Get_byid(id: string): Promise<ExtendedTypedEntityCollection<TypedEntity, unknown>>;
          Get?(): Promise<ExtendedTypedEntityCollection<PortalAdminRoleEset, unknown>>;
        }
      ) {}

      public async Get(): Promise<ExtendedTypedEntityCollection<WriteExtTypedEntity<RoleExtendedDataWrite>, unknown>> {
        if (!this.getByIdApi.Get) {
          throw new Error('Creation of new system roles is not yet supported.');
        }
        const data = await this.getByIdApi.Get();
        const result: ExtendedTypedEntityCollection<WriteExtTypedEntity<RoleExtendedDataWrite>, unknown> = {
          ...data,
          Data: data.Data.map((d) => new WriteExtTypedEntity<RoleExtendedDataWrite>(d.GetEntity())),
        };
        return result;
      }

      public GetSchema(): EntitySchema {
        return this.getByIdApi.GetSchema();
      }

      public async Get_byid(id: string): Promise<ExtendedTypedEntityCollection<WriteExtTypedEntity<RoleExtendedDataWrite>, unknown>> {
        const data = await this.getByIdApi.Get_byid(id);
        const result: ExtendedTypedEntityCollection<WriteExtTypedEntity<RoleExtendedDataWrite>, unknown> = {
          ...data,
          Data: data.Data.map((d) => new WriteExtTypedEntity<RoleExtendedDataWrite>(d.GetEntity())),
>>>>>>> oned/v92
        };
        return result;
      }
    }

    this.roleService.targetMap.set(this.esetTag, {
      canBeSplitTarget: false,
      canBeSplitSource: false,
      table: this.esetTag,
      respType: PortalRespEset,
      resp: this.api.typedClient.PortalRespEset,
      adminType: PortalAdminRoleEset,
      admin: {
<<<<<<< HEAD
        get: async (parameter: any) => this.api.client.portal_admin_role_eset_get(parameter)
      },
      adminSchema: this.api.typedClient.PortalAdminRoleEset.GetSchema(),
      dataModel: new EsetDataModel(this.api),
      interactiveResp: new ApiWrapper(
        this.api.typedClient.PortalRespEsetInteractive
      ),
      interactiveAdmin: new ApiWrapper(
        this.api.typedClient.PortalAdminRoleEsetInteractive
      ),
      entitlements: new EsetEntitlements(this.api, this.dynamicMethodSvc, this.translator),
      membership: new EsetMembership(this.api, this.session, this.translator)
=======
        get: async (parameter: any) =>
          this.api.client.portal_admin_role_eset_get({
            OrderBy: parameter.OrderBy,
            StartIndex: parameter.StartIndex,
            PageSize: parameter.PageSize,
            filter: parameter.filter,
            search: parameter.search,
            risk: parameter.risk,
            esettype: parameter.esettype,
          }),
      },
      adminSchema: this.api.typedClient.PortalAdminRoleEset.GetSchema(),
      dataModel: new EsetDataModel(this.api),
      respCanCreate: false,
      adminCanCreate: true,
      interactiveResp: new ApiWrapper(this.api.typedClient.PortalRespEsetInteractive),
      interactiveAdmin: new ApiWrapper(this.api.typedClient.PortalAdminRoleEsetInteractive),
      entitlements: new EsetEntitlements(this.api, this.dynamicMethodSvc, this.translator),
      membership: new EsetMembership(this.api, this.session, this.translator),
      canUseRecommendations: true,
      exportMethod: (navigationState: CollectionLoadParameters, isAdmin: boolean) => {
        const factory = new V2ApiClientMethodFactory();
        return {
          getMethod: (withProperties: string, PageSize?: number) => {
            let method: MethodDescriptor<EntityCollectionData>;
            if (PageSize) {
              method = isAdmin
                ? factory.portal_admin_role_eset_get({ ...navigationState, withProperties, PageSize, StartIndex: 0 })
                : factory.portal_resp_eset_get({ ...navigationState, withProperties, PageSize, StartIndex: 0 });
            } else {
              method = isAdmin
                ? factory.portal_admin_role_eset_get({ ...navigationState, withProperties })
                : factory.portal_resp_eset_get({ ...navigationState, withProperties });
            }
            return new MethodDefinition(method);
          },
        };
      },
      translateKeys: {
        create: '#LDS#Create system role',
        createHeading: '#LDS#Heading Create System Role',
        editHeading: '#LDS#Heading Edit System Role',
        createSnackbar: '#LDS#The system role has been successfully created.',
      },
>>>>>>> oned/v92
    });

    this.identityRoleMembershipService.addTarget({
      table: this.esetTag,
      type: PortalPersonRolemembershipsEset,
      entitySchema: this.api.typedClient.PortalPersonRolemembershipsEset.GetSchema(),
      controlInfo: {
        label: '#LDS#Menu Entry System roles',
        index: 80,
      },
<<<<<<< HEAD
      get: async (uidPerson: string, parameter: CollectionLoadParameters) => this.api.client.portal_person_rolememberships_ESet_get(
          uidPerson,
          parameter),
      withAnalysis: true
=======
      get: async (uidPerson: string, parameter: CollectionLoadParameters) =>
        this.api.client.portal_person_rolememberships_ESet_get(uidPerson, parameter),
      withAnalysis: true,
>>>>>>> oned/v92
    });

    this.setupMenu();

    this.dataExplorerRegistryService.registerFactory(
<<<<<<< HEAD
      (preProps: string[], groups: string[]) => {
        if (!this.isRoleAdmin(groups)) {
=======
      (preProps: string[], features: string[], projectConfig: ProjectConfig, groups: string[]) => {
        if (!isRoleAdmin(features) && !isRoleStatistics(features) && !isAuditor(groups)) {
>>>>>>> oned/v92
          return;
        }
        return {
          instance: RolesOverviewComponent,
          data: {
            TableName: this.esetTag,
            Count: 0,
          },
<<<<<<< HEAD
=======
          contextId: HELP_CONTEXTUAL.DataExplorerSystemRoles,
>>>>>>> oned/v92
          sortOrder: 8,
          name: 'systemroles',
          caption: '#LDS#Menu Entry System roles',
        };
      }
    );
<<<<<<< HEAD
  }

  private setupMenu(): void {
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
  }

  private isRoleAdmin(groups: string[]): boolean {
    return groups.find((group) => {
      const groupName = group.toUpperCase();
      return groupName === 'VI_4_ROLEADMIN_ADMIN';
    }) ? true : false;
=======

    this.myResponsibilitiesRegistryService.registerFactory((preProps: string[], features: string[]) => ({
      instance: RolesOverviewComponent,
      sortOrder: 8,
      name: this.esetTag,
      caption: '#LDS#Menu Entry System roles',
      data: {
        TableName: this.esetTag,
        Count: 0,
      },
      contextId: HELP_CONTEXTUAL.MyResponsibilitiesSystemRoles,
    }));
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], features: string[], projectConfig: ProjectConfig, groups: string[]) => {
      if (!isRoleAdmin(features) && !isRoleStatistics(features) && !isAuditor(groups)) {
        return null;
      }
      return {
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
        ],
      };
    });
>>>>>>> oned/v92
  }

  private addRoutes(routes: Route[]): void {
    const config = this.router.config;
<<<<<<< HEAD
    routes.forEach(route => {
=======
    routes.forEach((route) => {
>>>>>>> oned/v92
      config.unshift(route);
    });
    this.router.resetConfig(config);
  }
}
