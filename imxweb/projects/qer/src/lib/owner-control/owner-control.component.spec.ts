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
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { configureTestSuite } from 'ng-bullet';

import { clearStylesFromDOM } from 'qbm';
import { OwnerCandidateOptions } from './owner.model';
import { OwnerControlComponent } from './owner-control.component';
import { OwnerControlService } from './owner-control.service';


@Component({
  selector: 'imx-cdr-editor',
  template: '<p>MockRequestTable</p>'
})
class MockCdr {
  @Input() cdr: any;
  @Output() controlCreated = new EventEmitter<any>();
}

describe('OwnerControlComponent', () => {
  let component: OwnerControlComponent;
  let fixture: ComponentFixture<OwnerControlComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        MatRadioModule,
        MatCardModule,
        MatTooltipModule
      ],
      declarations: [
        OwnerControlComponent,
        MockCdr
      ],
      providers: [
        {
          provide: OwnerControlService,
          useValue: {
            createGroupOwnerPersonCdr: jasmine.createSpy('createGroupOwnerPersonCdr')
          }
        }
      ]
    })
  });

=======
import { UntypedFormControl } from '@angular/forms';
import { MockBuilder, MockRender } from 'ng-mocks';

import { clearStylesFromDOM, CdrEditorComponent } from 'qbm';
import { OwnerCandidateOptions } from './owner.model';
import { OwnerControlComponent } from './owner-control.component';
import { OwnerControlModule } from './owner-control.module';
import { OwnerControlService } from './owner-control.service';

describe('OwnerControlComponent', () => {
  let component: OwnerControlComponent;

  beforeEach(() =>{
    return MockBuilder(OwnerControlComponent, OwnerControlModule)
    .mock(CdrEditorComponent)
    .mock(OwnerControlService);
  });

  beforeEach(()=>{
    component = MockRender(OwnerControlComponent).point.componentInstance;
  })

>>>>>>> oned/v92
  afterAll(() => {
    clearStylesFromDOM();
  });

<<<<<<< HEAD
  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  for (const testcase of [
    {options:OwnerCandidateOptions.people, createHandler:true},
    {options:OwnerCandidateOptions.people, createHandler:false},
    {options:OwnerCandidateOptions.roles, createHandler:true},
    {options:OwnerCandidateOptions.roles, createHandler:false},
  ]) {
    it('calls right editor', () => {
      const control = new FormControl('');

      expect(() => {
        component.onFormControlCreated(control,testcase.options,testcase.createHandler);
      }).not.toThrowError();
      
    });  
  }
  
=======
  it('should be created', () => {
    expect(component).toEqual(jasmine.any(OwnerControlComponent));
  });

  for (const testcase of [
    { options: OwnerCandidateOptions.people, createHandler: true },
    { options: OwnerCandidateOptions.people, createHandler: false },
    { options: OwnerCandidateOptions.roles, createHandler: true },
    { options: OwnerCandidateOptions.roles, createHandler: false },
  ]) {
    it('calls right editor', () => {
      const control = new UntypedFormControl('');
      component.onFormControlCreated(control, testcase.options, testcase.createHandler);

      expect(() => {
        component.onFormControlCreated(control, testcase.options, testcase.createHandler);
      }).not.toThrowError();
    });
  }
>>>>>>> oned/v92
});
