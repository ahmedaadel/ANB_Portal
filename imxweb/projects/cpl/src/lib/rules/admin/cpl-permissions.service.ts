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

import { UserModelService } from 'qer';
<<<<<<< HEAD
import { isCiso, isExceptionAdmin, isRuleOwner } from './permissions-helper';
=======
import { isExceptionAdmin, isRuleStatistics } from './permissions-helper';
>>>>>>> oned/v92

@Injectable({
  providedIn: 'root'
})
export class CplPermissionsService {
  constructor(private readonly userService: UserModelService) { }

<<<<<<< HEAD
  public async isCiso(): Promise<boolean> {
    return isCiso((await this.userService.getGroups()).map(group => group.Name));
  }

  public async isRuleOwner(): Promise<boolean> {
    return isRuleOwner((await this.userService.getGroups()).map(group => group.Name));
  }

  public async isExceptionAdmin(): Promise<boolean> {
    return isExceptionAdmin((await this.userService.getGroups()).map(group => group.Name));
  }
=======
  public async isExceptionAdmin(): Promise<boolean> {
    return isExceptionAdmin((await this.userService.getGroups()).map(group => group.Name));
  }

  public async isRuleStatistics(): Promise<boolean> {
    return isRuleStatistics((await this.userService.getFeatures()).Features);
  }
>>>>>>> oned/v92
}
