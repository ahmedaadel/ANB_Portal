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
import { PortalPasswordquestions } from 'imx-api-qer';
import { CollectionLoadParameters, EntitySchema, ExtendedTypedEntityCollection } from 'imx-qbm-dbts';
import { QerApiService } from '../../qer-api-client.service';


@Injectable({
  providedIn: 'root'
})
export class PasswordQuestionService {
  constructor(private readonly api: QerApiService) { }

  public getSchema(): EntitySchema {
    return this.api.typedClient.PortalPasswordquestions.GetSchema();
  }

  public async get(params?: CollectionLoadParameters): Promise<ExtendedTypedEntityCollection<PortalPasswordquestions, unknown>> {
    return await this.api.typedClient.PortalPasswordquestions.Get(params);
  }

  public async put(item: PortalPasswordquestions): Promise<ExtendedTypedEntityCollection<PortalPasswordquestions, unknown>> {
    return await this.api.typedClient.PortalPasswordquestions.Put(item);
  }

  public async post(item: PortalPasswordquestions): Promise<ExtendedTypedEntityCollection<PortalPasswordquestions, unknown>> {
    return await this.api.typedClient.PortalPasswordquestions.Post(item);
  }

  public async delete(item: PortalPasswordquestions): Promise<void> {
    await this.api.client.portal_passwordquestions_delete(item.GetEntity().GetKeys()[0]);
  }

  public create(): PortalPasswordquestions {
    return this.api.typedClient.PortalPasswordquestions.createEntity();
=======
import {
  PasswordresetPasswordquestions,
  PasswordresetPasswordquestionsWrapper,
  PortalPasswordquestions,
  PortalPasswordquestionsWrapper,
} from 'imx-api-qer';
import { CollectionLoadParameters, EntitySchema, ExtendedTypedEntityCollection } from 'imx-qbm-dbts';
import { QerApiService } from '../../qer-api-client.service';
import { UserModelService } from '../../user/user-model.service';

export type PasswordQuestionInterface = PasswordresetPasswordquestions | PortalPasswordquestions;
export type PasswordQuestionWrapper = PortalPasswordquestionsWrapper | PasswordresetPasswordquestionsWrapper;
export type PasswordQuestionType = 'portal' | 'passwordreset';
@Injectable({
  providedIn: 'root',
})
export class PasswordQuestionService {
  private passwordQuestionWrapper: PasswordQuestionWrapper = this.api.typedClient.PortalPasswordquestions;
  private passwordQuestionType: PasswordQuestionType;

  constructor(private readonly api: QerApiService, private readonly userService: UserModelService) {}

  public getSchema(): EntitySchema {
    return this.passwordQuestionWrapper.GetSchema();
  }

  public async get(params?: CollectionLoadParameters): Promise<ExtendedTypedEntityCollection<PasswordQuestionInterface, unknown>> {
    return await this.passwordQuestionWrapper.Get(params);
  }

  public async put(item: PasswordQuestionInterface): Promise<ExtendedTypedEntityCollection<PasswordQuestionInterface, unknown>> {
    return await this.passwordQuestionWrapper.Put(item);
  }

  public async post(item: PasswordQuestionInterface): Promise<ExtendedTypedEntityCollection<PasswordQuestionInterface, unknown>> {
    return await this.passwordQuestionWrapper.Post(item);
  }

  public async delete(item: PasswordQuestionInterface): Promise<void> {
    await this.passwordQuestionWrapper.Delete(item.GetEntity().GetKeys()[0]);
  }

  public create(): PasswordQuestionInterface {
    return this.passwordQuestionWrapper.createEntity();
  }

  public setPasswordQuestionType(type: PasswordQuestionType): void {
    this.passwordQuestionType = type;
    if (type === 'portal') {
      this.passwordQuestionWrapper = this.api.typedClient.PortalPasswordquestions;
    } else {
      this.passwordQuestionWrapper = this.api.typedClient.PasswordresetPasswordquestions;
    }
  }

  public async getRequiredPasswordQuestion(): Promise<number> {
    if (this.passwordQuestionType === 'portal') {
      const userConfig = await this.userService.getUserConfig()
      return userConfig.RequiredPasswordQuestions;
    }
    const passwordPortalConfig = await this.api.client.passwordreset_config_get()
    return passwordPortalConfig.RequiredPasswordQuestions;
>>>>>>> oned/v92
  }
}
