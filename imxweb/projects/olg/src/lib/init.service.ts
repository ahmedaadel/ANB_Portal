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
import { Route, Router } from '@angular/router';
import { ExtService } from 'qbm';
import { MfaComponent } from './mfa/mfa.component';
<<<<<<< HEAD

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(
    private readonly extService: ExtService,
    private readonly router: Router,
  ) { }
=======
import { MfaFormControlComponent } from './mfa-form-control/mfa-form-control.component';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  constructor(private readonly extService: ExtService, private readonly router: Router) {}
>>>>>>> oned/v92

  public onInit(routes: Route[]): void {
    this.addRoutes(routes);

    this.extService.register('mfaComponent', {
<<<<<<< HEAD
      instance: MfaComponent
=======
      instance: MfaComponent,
    });
    
    this.extService.register('authenticator', {
      instance: MfaFormControlComponent,
>>>>>>> oned/v92
    });
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
