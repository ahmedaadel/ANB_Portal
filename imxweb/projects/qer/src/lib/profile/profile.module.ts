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
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { TranslateModule } from '@ngx-translate/core';

<<<<<<< HEAD
import { CdrModule, DataSourceToolbarModule, DataTableModule, DynamicTabsModule, ExtModule, LdsReplaceModule, RouteGuardService, TileModule } from 'qbm';
=======
import { CdrModule, DataSourceToolbarModule, DataTableModule, DynamicTabsModule, ExtModule, InfoModalDialogModule, LdsReplaceModule, SelectedElementsModule, RouteGuardService, TileModule, HELP_CONTEXTUAL, HelpContextualModule } from 'qbm';
>>>>>>> oned/v92
import { BusinessownerAddonTileModule } from '../businessowner-addon-tile/businessowner-addon-tile.module';
import { MailSubscriptionsComponent } from './mailsubscriptions.component';
import { MailSubscriptionService } from './mailsubscription.service';
import { IdentitySelectComponent } from './identity-select/identity-select.component';
import { PasswordQuestionsComponent } from './password-questions/password-questions.component';
<<<<<<< HEAD
import { CreatePasswordQuestionComponent } from './password-questions/create-password-question.component';
import { ProfileComponent } from './profile.component';
=======
import { ProfileComponent } from './profile.component';
import { PasswordQuestionsSidesheetComponent } from './password-questions/password-questions-sidesheet/password-questions-sidesheet.component';
import { UserModelService } from '../user/user-model.service';
import { SecurityKeysComponent } from './security-keys/security-keys.component';
import { SecurityKeysSidesheetComponent } from './security-keys/security-keys-sidesheet/security-keys-sidesheet.component';
import { ObjectHyperviewModule } from '../object-hyperview/object-hyperview.module';
>>>>>>> oned/v92

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [RouteGuardService],
<<<<<<< HEAD
    resolve: [RouteGuardService]
=======
    resolve: [RouteGuardService],
>>>>>>> oned/v92
  }
];

@NgModule({
  imports: [
    BusinessownerAddonTileModule,
    CommonModule,
    CdrModule,
    TranslateModule,
    DataSourceToolbarModule,
    DataTableModule,
    ExtModule,
    FormsModule,
<<<<<<< HEAD
=======
    ObjectHyperviewModule,
>>>>>>> oned/v92
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TileModule,
    LdsReplaceModule,
    EuiCoreModule,
    EuiMaterialModule,
<<<<<<< HEAD
    DynamicTabsModule
  ],
  providers: [
    MailSubscriptionService
=======
    DynamicTabsModule,
    InfoModalDialogModule,
    SelectedElementsModule,
    HelpContextualModule,
  ],
  providers: [
    MailSubscriptionService,
    UserModelService
>>>>>>> oned/v92
  ],
  declarations: [
    ProfileComponent,
    MailSubscriptionsComponent,
    IdentitySelectComponent,
<<<<<<< HEAD
    PasswordQuestionsComponent,
    CreatePasswordQuestionComponent
  ],
  exports: [
    ProfileComponent
=======
    SecurityKeysComponent,
    SecurityKeysSidesheetComponent,
    PasswordQuestionsComponent,
    PasswordQuestionsSidesheetComponent,
  ],
  exports: [
    ProfileComponent,
    PasswordQuestionsComponent,
>>>>>>> oned/v92
  ]
})
export class ProfileModule { }
