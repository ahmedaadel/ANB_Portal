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

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EuiSidesheetService } from '@elemental-ui/core';
import { IClientProperty } from 'imx-qbm-dbts';

<<<<<<< HEAD
import { ClassloggerService, ConfirmationService, UserMessageService } from 'qbm';
=======
import { ClassloggerService, ConfirmationService, HelpContextualService, UserMessageService } from 'qbm';
>>>>>>> oned/v92
import { Subject } from 'rxjs';

import { PickCategoryComponent } from './pick-category.component';
import { PickCategoryService } from './pick-category.service';

describe('PickCategoryComponent', () => {
  let component: PickCategoryComponent;
  let fixture: ComponentFixture<PickCategoryComponent>;


  const sidesheetServiceStub = {
    open: jasmine.createSpy('open')
  };

  let confirm = true;
  const mockConfirmationService = {
    confirm: jasmine.createSpy('confirm')
      .and.callFake(() => Promise.resolve(confirm))
  }

  const deletePickCategoriesSpy = jasmine.createSpy('deletePickCategories').and.returnValue(Promise.resolve({}));
<<<<<<< HEAD

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PickCategoryComponent 
=======
  const mockHelpContextualService = {
    setHelpContextId: jasmine.createSpy('setHelpContextId')
      .and.callFake(() => Promise.resolve())
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PickCategoryComponent
>>>>>>> oned/v92
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {
          provide: PickCategoryService,
          useValue: {
            pickcategorySchema: { Columns: { __Display: { ColumnName: '__Display' } as IClientProperty } },
            getPickCategories: jasmine.createSpy('getPickCategories').and.returnValue({}),
<<<<<<< HEAD
            deletePickCategories: deletePickCategoriesSpy,           
=======
            deletePickCategories: deletePickCategoriesSpy,
>>>>>>> oned/v92
            createPickCategory: jasmine.createSpy('createPickCategory').and.returnValue({}),
            handleOpenLoader: jasmine.createSpy('handleOpenLoader').and.callThrough(),
            handleCloseLoader: jasmine.createSpy('handleCloseLoader').and.callThrough(),
          }
        },
        {
          provide: EuiSidesheetService,
          useValue: sidesheetServiceStub
        },
        {
          provide: ConfirmationService,
          useValue: mockConfirmationService
        },
        {
          provide: UserMessageService,
          useValue: {
            subject: new Subject()
          }
        },
        {
          provide: ClassloggerService,
          useValue: {
            debug: jasmine.createSpy('debug').and.callThrough(),
            trace: jasmine.createSpy('trace').and.callThrough()
          }
<<<<<<< HEAD
=======
        },
        {
          provide: HelpContextualService,
          useValue: mockHelpContextualService
>>>>>>> oned/v92
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deletePickCategoriesSpy.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('delete() tests', () => {
    for (const testcase of [
      { confirm: true },
      { confirm: false }
    ]) {
      it('should make a call to delete the PickCategories, if the user confirm the dialog', async () => {
        confirm = testcase.confirm;
        await component.delete();

        if(testcase.confirm) {
          expect(deletePickCategoriesSpy).toHaveBeenCalled();
        } else {
          expect(deletePickCategoriesSpy).not.toHaveBeenCalled();
<<<<<<< HEAD
        }  
=======
        }
>>>>>>> oned/v92
      });
    }
  });
});
