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
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { configureTestSuite } from 'ng-bullet';

import { clearStylesFromDOM } from 'qbm';
import { ApprovalsComponent } from './approvals.component';

@Component({
  selector: 'imx-approvals-table',
  template: '<p>MockApprovalsTable</p>'
})
class MockApprovalsTable {
  @Input() params: any;
}

describe('Approvals', () => {
  let component: ApprovalsComponent;
  let fixture: ComponentFixture<ApprovalsComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApprovalsComponent,
        MockApprovalsTable
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: {
              subscribe: () => {}
            }
          }
        }
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalsComponent);
    component = fixture.componentInstance;
=======
import { ActivatedRoute } from '@angular/router';
import { EuiSidesheetService } from '@elemental-ui/core';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { clearStylesFromDOM } from 'qbm';
import { from } from 'rxjs';
import { UserModelService } from '../user/user-model.service';
import { ApprovalsComponent } from './approvals.component';
import { ApprovalsModule } from './approvals.module';

describe('Approvals', () => {
  let component: ApprovalsComponent;
  let fixture: MockedComponentFixture<ApprovalsComponent>;

  beforeEach(() => {
    return MockBuilder(ApprovalsComponent, ApprovalsModule)
      .mock(EuiSidesheetService)
      .mock(UserModelService,{getPendingItems: jasmine.createSpy('getPendingItems').and.returnValue(Promise.resolve({}))},{export:true})
      .mock(
        ActivatedRoute,
        {
          queryParams: from([]),
        },
        { export: true }
      );
  });

  beforeEach(() => {
    fixture = MockRender(ApprovalsComponent);
    component = fixture.point.componentInstance;
>>>>>>> oned/v92
  });

  afterAll(() => {
    clearStylesFromDOM();
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeDefined();
  });
});
