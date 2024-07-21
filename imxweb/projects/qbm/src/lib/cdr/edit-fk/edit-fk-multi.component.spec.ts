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
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { configureTestSuite } from 'ng-bullet';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { Subject, of } from 'rxjs';
import { EuiCoreModule, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
=======
import { fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { EuiSidesheetService } from '@elemental-ui/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
>>>>>>> oned/v92

import { IValueMetadata } from 'imx-qbm-dbts';
import { EntityColumnStub } from '../../testing/entity-column-stub.spec';
import { clearStylesFromDOM } from '../../testing/clear-styles.spec';
import { EditFkMultiComponent } from './edit-fk-multi.component';
import { MultiValueService } from '../../multi-value/multi-value.service';
<<<<<<< HEAD

describe('EditFkMultiComponent', () => {
  let component: EditFkMultiComponent;
  let fixture: ComponentFixture<EditFkMultiComponent>;

  const afterClosedSubject = new Subject<any>();

  const matDialogStub = {
    open: jasmine.createSpy('open').and.returnValue({ afterClosed: () => afterClosedSubject })
  };

  const multiValueDelimMock = '|';

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EuiCoreModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule,
        LoggerTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        EditFkMultiComponent
      ],
      providers: [
        {
          provide: EuiSidesheetService,
          useValue: matDialogStub
        },
        {
          provide: TranslateService,
          useValue: { get: jasmine.createSpy('get').and.callFake(key => of(key.replace('#LDS#', ''))) }
        },
        {
          provide: MultiValueService,
          useValue: {
            getValues: jasmine.createSpy('getValues').and.callFake(value => value ? value.split(multiValueDelimMock) : undefined),
            getMultiValue: jasmine.createSpy('getMultiValue').and.callFake(values => values.join(multiValueDelimMock))
          }
        }
      ]
    });
  });

  beforeEach(waitForAsync(() => {
    matDialogStub.open.calls.reset();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFkMultiComponent);
    component = fixture.componentInstance;
=======
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { CdrModule } from '../cdr.module';
import { QbmDefaultMocks } from '../../../default-mocks.spec';

describe('EditFkMultiComponent', () => {
  let component: EditFkMultiComponent;
  let fixture: MockedComponentFixture<EditFkMultiComponent>;
  const multiValueDelimMock = '|';

  beforeEach(() => {
    return MockBuilder([EditFkMultiComponent, TranslateModule.forRoot(), FormsModule, ReactiveFormsModule])
      .mock(CdrModule)
      .mock(EuiSidesheetService)
      .mock(TranslateService, { get: jasmine.createSpy('get').and.callFake((key) => of(key.replace('#LDS#', ''))) })
      .mock(MultiValueService, {
        getValues: jasmine.createSpy('getValues').and.callFake((value) => (value ? value.split(multiValueDelimMock) : undefined)),
        getMultiValue: jasmine.createSpy('getMultiValue').and.callFake((values) => values.join(multiValueDelimMock)),
      });
  });

  beforeEach(() => {
    fixture = MockRender(EditFkMultiComponent);
    component = fixture.point.componentInstance;
>>>>>>> oned/v92
  });

  afterAll(() => {
    clearStylesFromDOM();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  [
    {
      valueStructs: [
        {
          DataValue: 'val1',
<<<<<<< HEAD
          DisplayValue: 'displayValue1'
        }
=======
          DisplayValue: 'displayValue1',
        },
>>>>>>> oned/v92
      ],
      expected: {
        value: 'val1',
        display: 'displayValue1',
        controlValue: 'displayValue1',
      },
<<<<<<< HEAD
      canEdit: true
=======
      canEdit: true,
>>>>>>> oned/v92
    },
    {
      valueStructs: [
        {
          DataValue: 'val1',
<<<<<<< HEAD
          DisplayValue: 'displayValue1'
        },
        {
          DataValue: 'val2',
          DisplayValue: 'displayValue2'
        }
=======
          DisplayValue: 'displayValue1',
        },
        {
          DataValue: 'val2',
          DisplayValue: 'displayValue2',
        },
>>>>>>> oned/v92
      ],
      expected: {
        value: 'val1' + multiValueDelimMock + 'val2',
        display: 'displayValue1' + multiValueDelimMock + 'displayValue2',
<<<<<<< HEAD
        controlValue: '2 items selected'
      },
      canEdit: true
=======
        controlValue: '2 items selected',
      },
      canEdit: true,
>>>>>>> oned/v92
    },
    {
      valueStructs: [],
      expected: {
        value: undefined,
        display: undefined,
<<<<<<< HEAD
        controlValue: undefined
      },
      canEdit: true
=======
        controlValue: undefined,
      },
      canEdit: true,
>>>>>>> oned/v92
    },
    {
      valueStructs: [],
      expected: {
        value: undefined,
        display: undefined,
<<<<<<< HEAD
        controlValue: undefined
      },
      canEdit: false
    }
  ].forEach(testcase =>
    it('should change the assignment, canEdit=' + testcase.canEdit, fakeAsync(() => {
      const fakeDelay = 1000;
      const start = {
        value: 'val0',
        display: 'display0'
      };
      const column = new EntityColumnStub(
        start.value,
        start.display,
        {
=======
        controlValue: undefined,
      },
      canEdit: false,
    },
  ].forEach((testcase) =>
    it(
      'should change the assignment, canEdit=' + testcase.canEdit,
      fakeAsync(() => {
        const fakeDelay = 1000;
        const start = {
          value: 'val0',
          display: 'display0',
        };
        const column = new EntityColumnStub(start.value, start.display, {
>>>>>>> oned/v92
          GetFkRelations: () => undefined,
          CanEdit: () => testcase.canEdit,
          GetLimitedValues: () => undefined,
          GetMinLength: () => undefined,
<<<<<<< HEAD
          GetDisplay: () => ''
        } as unknown as IValueMetadata
      );
      component.bind({
        column,
        isReadOnly: () => false
      });

      tick(fakeDelay);

      component.editAssignment();
      tick(fakeDelay);

      afterClosedSubject.subscribe(_ =>
        expect(matDialogStub.open).toHaveBeenCalled()
      );

      afterClosedSubject.next({ table: {}, candidates: testcase.valueStructs });

      tick(fakeDelay);

      if (testcase.canEdit && testcase.valueStructs) {
        expect(component.columnContainer.displayValue).toEqual(testcase.expected.display);
        expect(component.control.value).toEqual(testcase.expected.controlValue);
        expect(component.columnContainer.value).toEqual(testcase.expected.value);
      } else {
        expect(component.columnContainer.displayValue).toEqual(start.display);
        expect(component.control.value).toEqual(start.display);
        expect(component.columnContainer.value).toEqual(start.value);
      }
    })));

  for (const testcase of
    [
      { description: '= 0', minLength: 0, expectedError: false },
      { description: '> 0', minLength: 1, expectedError: true }
    ]) {
    it('should set error.required to ' + testcase.expectedError +
      ' if minLength ' + testcase.description + ' and value is not set', async () => {
        const column = new EntityColumnStub(
          '',
          '',
          {
            GetFkRelations: () => undefined,
            CanEdit: () => true,
            GetLimitedValues: () => undefined,
            GetMinLength: () => testcase.minLength
          } as IValueMetadata
        );
        await component.bind({
          column,
          isReadOnly: () => false
=======
          GetDisplay: () => '',
        } as unknown as IValueMetadata);

        component.bind({
          column,
          isReadOnly: () => false,
        });

        tick(fakeDelay);

        component.editAssignment();
        tick(fakeDelay);

        QbmDefaultMocks.afterClosedSubject.subscribe((_) => {
          expect(QbmDefaultMocks.sidesheetServiceStub.open).toHaveBeenCalled();
        });

        QbmDefaultMocks.afterClosedSubject.next({ table: {}, candidates: testcase.valueStructs });

        tick(fakeDelay);

        if (testcase.canEdit && testcase.valueStructs) {
          expect(component.columnContainer.displayValue).toEqual(testcase.expected.display);
          expect(component.control.value).toEqual(testcase.expected.controlValue);
          expect(component.columnContainer.value).toEqual(testcase.expected.value);
        } else {
          expect(component.columnContainer.displayValue).toEqual(start.display);
          expect(component.control.value).toEqual(start.display);
          expect(component.columnContainer.value).toEqual(start.value);
        }
      })
    )
  );

  for (const testcase of [
    { description: '= 0', minLength: 0, expectedError: false },
    { description: '> 0', minLength: 1, expectedError: true },
  ]) {
    it(
      'should set error.required to ' + testcase.expectedError + ' if minLength ' + testcase.description + ' and value is not set',
      async () => {
        const column = new EntityColumnStub('', '', {
          GetFkRelations: () => undefined,
          CanEdit: () => true,
          GetLimitedValues: () => undefined,
          GetMinLength: () => testcase.minLength,
        } as IValueMetadata);
        await component.bind({
          column,
          isReadOnly: () => false,
>>>>>>> oned/v92
        });

        component.control.markAsTouched();
        component.control.updateValueAndValidity({ onlySelf: true, emitEvent: false });

        expect(component.control.value).toBeUndefined();
        if (testcase.expectedError) {
          expect(component.control.errors.required).toBeTruthy();
        } else {
          expect(component.control.errors).toBeNull();
        }
<<<<<<< HEAD
      });
=======
      }
    );
>>>>>>> oned/v92
  }
});
