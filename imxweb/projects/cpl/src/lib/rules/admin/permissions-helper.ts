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
export function isCiso(groups: string[]): boolean {
  return groups.find(item => item === 'vi_4_SECURITY_OFFICER') != null;
}

export function isRuleOwner(groups: string[]): boolean {
  return groups.find(item => item === 'vi_4_RULEADMIN_RESPONSIBLE') != null;
}

export function isExceptionAdmin(groups: string[]): boolean {
  return groups.find(item => item === 'vi_4_RULEADMIN_EXCEPTION') != null;
}
=======
export function isExceptionAdmin(groups: string[]): boolean {
  return groups.find(item => item === 'vi_4_RULEADMIN_EXCEPTION') != null;
}

export function isRuleStatistics(features: string[]): boolean {
  return features.find(item => item === 'Portal_UI_RuleStatistics') != null;
}
>>>>>>> oned/v92
