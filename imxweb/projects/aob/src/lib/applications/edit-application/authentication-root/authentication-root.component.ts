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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { AbstractControl, FormGroup } from '@angular/forms';
=======
import { AbstractControl, UntypedFormGroup } from '@angular/forms';
>>>>>>> oned/v92

import { PortalApplication } from 'imx-api-aob';
import { BaseCdr } from 'qbm';

@Component({
  selector: 'imx-authentication-root',
  templateUrl: './authentication-root.component.html',
  styleUrls: ['./authentication-root.component.scss']
})
export class AuthenticationRootComponent implements OnInit {
<<<<<<< HEAD
  public readonly form = new FormGroup({}, __ => {
=======
  public readonly form = new UntypedFormGroup({}, __ => {
>>>>>>> oned/v92
    if (this.application == null) {
      return null;
    }

    const isAuthenticationIntegrated = this.application.IsAuthenticationIntegrated.value;
    const authenticationRootValue = this.application.AuthenticationRootHelper.value;
    return !authenticationRootValue?.length && isAuthenticationIntegrated ? { relationInvalid: true } : null;
  });

  public authenticationRootWrapper: BaseCdr; 

  @Input() public application: PortalApplication;

  @Output() public readonly controlCreated = new EventEmitter<AbstractControl>();

  public async ngOnInit(): Promise<void> {
    const authenticationRootHelper = this.application.AuthenticationRootHelper;

    if (!authenticationRootHelper.value?.length) {
      await authenticationRootHelper.Column.PutValueStruct({
        DataValue: this.application.AuthenticationRoot.value,
        DisplayValue: this.application.AuthenticationRoot.Column.GetDisplayValue()
      });
    }

    this.authenticationRootWrapper = new BaseCdr(authenticationRootHelper.Column);

    this.controlCreated.emit(this.form);
  }
}
