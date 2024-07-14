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
 * Copyright 2022 One Identity LLC.
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

export function isPersonAdmin(groups: string[]): boolean {
  return groups.find(item => item.toUpperCase() === 'VI_4_PERSONADMIN') != null;
}

export function isPersonManager(groups: string[]): boolean {
  return groups.find(item => item.toUpperCase() === 'VI_4_ALLMANAGER') != null;
}

export function isStructAdmin(groups: string[]): boolean {
  return groups.find(item => item.toUpperCase() === 'VI_4_STRUCTADMIN_ADMIN') != null;
}

export function isShopAdmin(groups: string[]): boolean {
  return groups.find(item => item.toUpperCase() === 'VI_4_ITSHOPADMIN_ADMIN') != null;
}

export function CCC_isOutsourceAdmin(groups: string[]): boolean {
  return groups.find(item => item === 'CCC_OutsourcePermissionGroup') != null;
}
export function CCC_isHROutsourceAdmin(groups: string[]): boolean {
  return groups.find(item => item === 'CCC_HROutsourcePermissionGroup') != null;
}