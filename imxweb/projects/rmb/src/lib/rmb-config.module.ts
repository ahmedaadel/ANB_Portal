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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitService } from './init.service';
<<<<<<< HEAD
=======
import { TeamRoleModule } from './team-role/team-role.module';
>>>>>>> oned/v92

const routes: Routes = [
];

@NgModule({
  imports: [
<<<<<<< HEAD
    RouterModule.forChild(routes)
  ]
=======
    RouterModule.forChild(routes),
    TeamRoleModule
  ],
>>>>>>> oned/v92
})
export class RmbConfigModule {
  constructor(private readonly initializer: InitService) {
    console.log('🔥 RMB loaded');
    this.initializer.onInit(routes);

    console.log('▶️ RMB initialized');
  }
}
