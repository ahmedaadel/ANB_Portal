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
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { EuiLoadingService } from '@elemental-ui/core';

import { AuthenticationService, ClassloggerService } from 'qbm';
import { UserModelService } from 'qer';
import { Subscription } from 'rxjs';
import { ApplicationsService } from '../applications/applications.service';
import { ImageService } from '../images/image.service';
<<<<<<< HEAD
=======
import { AobPermissionsService } from '../permissions/aob-permissions.service';
>>>>>>> oned/v92

@Component({
  selector: 'imx-start',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit, OnDestroy {
  public numberOfApplications = 0;
  public isAdmin: boolean;
  public name: string;
  public imageUrl: SafeUrl;

  private authSubscription: Subscription;

  constructor(
    private readonly busyService: EuiLoadingService,
    private readonly applicationsProvider: ApplicationsService,
    private readonly logger: ClassloggerService,
    private readonly userService: UserModelService,
    private readonly imageProvider: ImageService,
<<<<<<< HEAD
=======
    private readonly aobPermissionsService: AobPermissionsService,
>>>>>>> oned/v92
    authentication: AuthenticationService,
  ) {
    this.authSubscription = authentication.onSessionResponse?.subscribe(async sessionState => {
      this.name = sessionState.Username;
      this.imageUrl = await this.imageProvider.getPersonImageUrl(sessionState.UserUid);
    }
    );
  }

  public ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  public async ngOnInit(): Promise<void> {
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      this.logger.debug(this, 'get number of applications...');
      const apps = await this.applicationsProvider.get();
      if (apps) {
        this.numberOfApplications = apps.totalCount;
      } else {
        this.logger.error(this, 'TypedEntityCollectionData<AobApplication> is undefined');
      }

<<<<<<< HEAD
      this.isAdmin = (await this.userService.getGroups()).some(ug => ug.Name === 'AOB_4_AOB_Admin');
=======
      this.isAdmin = await this.aobPermissionsService.isAobApplicationAdmin();
>>>>>>> oned/v92

    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }
}
