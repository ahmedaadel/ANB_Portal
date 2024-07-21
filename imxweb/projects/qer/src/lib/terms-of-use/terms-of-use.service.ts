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
import { OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { EuiDownloadOptions, EuiLoadingService } from '@elemental-ui/core';
=======
import { Injectable } from '@angular/core';
import { EuiDownloadOptions } from '@elemental-ui/core';
>>>>>>> oned/v92

import { CompareOperator, FilterType, MethodDefinition } from 'imx-qbm-dbts';
import { PortalTermsofuse, QerProjectConfig, V2ApiClientMethodFactory } from 'imx-api-qer';
import { AppConfigService, ElementalUiConfigService } from 'qbm';

import { ProjectConfigurationService } from '../project-configuration/project-configuration.service';
import { QerApiService } from '../qer-api-client.service';

/**
 * Service to control the load of the configuration and to accept the terms of use without any authentication or with an authentication.
 */
@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
})
export class TermsOfUseService {

=======
  providedIn: 'root',
})
export class TermsOfUseService {
>>>>>>> oned/v92
  private readonly apiMethodFactory: V2ApiClientMethodFactory = new V2ApiClientMethodFactory();

  constructor(
    private readonly appConfig: AppConfigService,
<<<<<<< HEAD
    private readonly busyService: EuiLoadingService,
    private readonly elementalUiConfigService: ElementalUiConfigService,
    private readonly qerClient: QerApiService,
    private readonly projectConfigService: ProjectConfigurationService
  ) { }
=======
    private readonly elementalUiConfigService: ElementalUiConfigService,
    private readonly qerClient: QerApiService,
    private readonly projectConfigService: ProjectConfigurationService
  ) {}
>>>>>>> oned/v92

  /**
   * Get the list of {@link PortalTermsofuse} for the given UIDs.
   */
  public async getTermsOfUse(uidTermsOfUse: string[]): Promise<PortalTermsofuse[]> {
    const arr: PortalTermsofuse[] = [];
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      for (const uid of uidTermsOfUse) {
        arr.push((await this.qerClient.typedClient.PortalTermsofuse.Get({
          PageSize: 100000,
          filter: [{
            ColumnName: 'UID_QERTermsOfUse',
            CompareOp: CompareOperator.Equal,
            Value1: uid,
            Type: FilterType.Compare
          }]
        })).Data[0]);
      }
      return arr;
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }

  /**
   * Accept the terms of use for the given uid of an approval item without any authentication.
   */
  public async acceptApprovalItemsWithoutAuthentication(uidCartItems: string): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      return await this.qerClient.client.portal_itshop_approve_requests_accept_post(uidCartItems);
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }


  /**
   * Accept the terms of use for the given uid of a cart item without any authentication.
   */
  public async acceptCartItemsWithoutAuthentication(uidCartItems: string): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      return await this.qerClient.client.portal_itshop_cart_accept_post(uidCartItems);
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
=======
    for (const uid of uidTermsOfUse) {
      arr.push(await this.getSingleTermsOfUse(uid));
    }
    return arr;
  }

  /**
   * Returns the single {@link PortalTermsofuse} for the given uid
   * @param uidTermsOfUse the uid for the term of use
   */
  public async getSingleTermsOfUse(uidTermsOfUse: string): Promise<PortalTermsofuse> {
    return (
      await this.qerClient.typedClient.PortalTermsofuse.Get({
        PageSize: 100000,
        filter: [
          {
            ColumnName: 'UID_QERTermsOfUse',
            CompareOp: CompareOperator.Equal,
            Value1: uidTermsOfUse,
            Type: FilterType.Compare,
          },
        ],
      })
    ).Data[0];
  }

  /**
   * Accept the terms of use for the given uid of an approval item
   */
  public async acceptApprovalItems(uidCartItems: string): Promise<void> {
    return await this.qerClient.client.portal_itshop_approve_requests_accept_post(uidCartItems);
  }

  /**
   * Accept the terms of use for the given uid of a cart item
   */
  public async acceptCartItems(uidCartItems: string): Promise<void> {
    return await this.qerClient.client.portal_itshop_cart_accept_post(uidCartItems);
>>>>>>> oned/v92
  }

  /**
   * Return the Step-up authentication provider for terms of use agreement and workflow approval.
   */
  public async getStepUpAuthenticationProvider(): Promise<string> {
    let projectConfig: QerProjectConfig;
<<<<<<< HEAD
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      projectConfig = await this.projectConfigService.getConfig();
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
=======
    projectConfig = await this.projectConfigService.getConfig();
>>>>>>> oned/v92
    return projectConfig?.ITShopConfig.StepUpAuthenticationProvider;
  }

  /**
<<<<<<< HEAD
=======
   * Returns a stepup id for the given uid
   * @param uidPwo A list of uids that need a separate authentication
   */
  public async getStepupId(uidPwo: string[]): Promise<string> {
    return this.qerClient.v2Client.portal_itshop_approve_requests_stepup_post({ UidPwo: uidPwo });
  }

  /**
>>>>>>> oned/v92
   * Return the download options for a specified uid of a {@link PortalTermsofuse|terms of use}.
   */
  public getDownloadOptions(key: string, display: string): EuiDownloadOptions {
    return {
<<<<<<< HEAD
      ... this.elementalUiConfigService.Config.downloadOptions,
=======
      ...this.elementalUiConfigService.Config.downloadOptions,
>>>>>>> oned/v92
      url: this.appConfig.BaseUrl + new MethodDefinition(this.apiMethodFactory.portal_termsofuse_download_get(key)).path,
      fileName: `${display}.pdf`,
    };
  }
}
