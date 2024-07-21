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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { configureTestSuite } from 'ng-bullet';

import { clearStylesFromDOM } from 'qbm';
import { AttestationActionComponent } from './attestation-action.component';

@Component({
  selector: 'imx-cdr-editor',
  template: '<p>MockCdrEditorComponent</p>'
})
class MockCdrEditorComponent {
  @Input() public cdr: any;
}

@Component({
  selector: 'imx-data-source-toolbar',
  template: '<p>MockDataSourceToolbarComponent</p>'
})
class MockDataSourceToolbarComponent {
  @Input() settings: any;
}

@Component({
  selector: 'imx-data-table',
  template: '<p>MockDataTableComponent</p>'
})
export class MockDataTableComponent {
  @Input() dst: any;
  @Input() detailViewVisible: any;
  @Input() selectable: any;
}

@Component({
  selector: 'imx-data-table-column',
  template: '<p>MockDataTableColumnComponent</p>'
})
class MockDataTableColumnComponent {
  @Input() entityColumn: any;
  @Input() entitySchema: any;
}

@Component({
  selector: 'imx-select-step',
  template: '<p>MockSelectStepComponent</p>'
})
class MockSelectStepComponent {
  @Input() display: any;
  @Input() steps: any;
}

@Component({
  selector: 'imx-decision-reason',
  template: '<p>MockDecisionReasonComponent</p>'
})
class MockDecisionReasonComponent {
  @Input() reasonStandard: any;
  @Input() reasonFreetext: any;
}

@Component({
  selector: 'imx-bulk-editor',
  template: '<p>MockBulkEditorComponent</p>'
})
class MockBulkEditorComponent {
  @Input() entities: any;
  @Input() hideButtons: any;
}

describe('AttestationActionComponent', () => {
  let component: AttestationActionComponent;
  let fixture: ComponentFixture<AttestationActionComponent>;
=======
import { EuiSidesheetRef, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { clearStylesFromDOM } from 'qbm';
import { DecisionStepSevice } from 'qer';
import { AttestationDecisionModule } from '../decision/attestation-decision.module';
import { AttestationActionComponent } from './attestation-action.component';

describe('AttestationActionComponent', () => {
  let component: AttestationActionComponent;
  let fixture: MockedComponentFixture<AttestationActionComponent>;
>>>>>>> oned/v92

  const mockSideSheetData = {
    description: 'some description',
    actionParameters: { reason: { column: {} } },
<<<<<<< HEAD
    attestationCases: [{
      typedEntity: undefined,
      display: 'the attestation case',
      propertiesForAction: [],
      attestationParameters: [],
      key: 'uid'
    }]
  };

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttestationActionComponent,
        MockCdrEditorComponent,
        MockDataSourceToolbarComponent,
        MockDataTableComponent,
        MockDataTableColumnComponent,
        MockSelectStepComponent,
        MockDecisionReasonComponent,
        MockBulkEditorComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: EUI_SIDESHEET_DATA,
          useValue: mockSideSheetData
        },
        {
          provide: EuiSidesheetRef,
          useValue: {}
        }
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationActionComponent);
    component = fixture.componentInstance;
=======
    attestationCases: [
      {
        typedEntity: undefined,
        display: 'the attestation case',
        propertiesForAction: [],
        attestationParameters: [],
        key: 'uid',
      },
    ],
  };

  beforeEach(() => {
    return MockBuilder(AttestationActionComponent, AttestationDecisionModule)
      .mock(EUI_SIDESHEET_DATA, mockSideSheetData,{export:true})
      .mock(EuiSidesheetRef,{},{export:true})
      .mock(DecisionStepSevice, {});
  });

  beforeEach(() => {
    fixture = MockRender(AttestationActionComponent);
    component = fixture.point.componentInstance;
>>>>>>> oned/v92
  });

  afterAll(() => {
    clearStylesFromDOM();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component.data.description).toEqual(mockSideSheetData.description);
    expect(component.attestationCases.length).toEqual(mockSideSheetData.attestationCases.length);
  });
});
