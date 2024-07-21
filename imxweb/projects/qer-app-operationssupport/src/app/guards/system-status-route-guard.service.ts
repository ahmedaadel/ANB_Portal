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

import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppConfigService, AuthenticationService, ISessionState } from 'qbm';
import { Observable, Subscription } from 'rxjs';
import { FeatureConfigService } from 'qer';

@Injectable({
  providedIn: 'root'
})
export class SystemStatusRouteGuardService implements CanActivate, OnDestroy {
  private onSessionResponse: Subscription;

  constructor(
    private readonly authentication: AuthenticationService,
    private readonly appConfig: AppConfigService,
    private readonly router: Router,
    private readonly featureService: FeatureConfigService
  ) { }

  public canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.onSessionResponse = this.authentication.onSessionResponse.subscribe(async (sessionState: ISessionState) => {
        if (sessionState.IsLoggedIn) {
          const conf = await this.featureService.getFeatureConfig();
          if (!conf.EnableSystemStatus) {
            this.router.navigate([this.appConfig.Config.routeConfig.start], { queryParams: {} });
          }
          observer.next(conf.EnableSystemStatus);
          observer.complete();
        }
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.onSessionResponse) {
      this.onSessionResponse.unsubscribe();
    }
  }
}

