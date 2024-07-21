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

import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormControl } from '@angular/forms';
=======
import { UntypedFormControl } from '@angular/forms';
>>>>>>> oned/v92

import { EditorBase } from '../editor-base';

/**
<<<<<<< HEAD
 * A component for viewing / editing multilined string columns
=======
 * Provides a {@link CdrEditor | CDR editor} for editing / viewing multiline string columns
 * 
 * To change the value, it uses a text area.
 * When set to read-only, it uses a {@link ViewPropertyComponent | view property component} to display the content.
>>>>>>> oned/v92
 */
@Component({
  selector: 'imx-edit-multiline',
  templateUrl: './edit-multiline.component.html',
<<<<<<< HEAD
  styleUrls: ['./edit-multiline.component.scss']
})
export class EditMultilineComponent extends EditorBase<string> {
  public readonly control = new FormControl(undefined, { updateOn: 'blur' });
=======
  styleUrls: ['./edit-multiline.component.scss'],
})
export class EditMultilineComponent extends EditorBase<string> {
  /**
   * The form control associated with the editor.
   */
  public readonly control = new UntypedFormControl(undefined, { updateOn: 'blur' });
>>>>>>> oned/v92
}
