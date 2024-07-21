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

import { StepperSelectionEvent } from '@angular/cdk/stepper';
<<<<<<< HEAD
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EuiLoadingService } from '@elemental-ui/core';
import { configureTestSuite } from 'ng-bullet';
import { Subject } from 'rxjs';

import { AuthenticationService, clearStylesFromDOM, LdsReplaceModule } from 'qbm';
import { PersonService } from 'qer';
import { ClaimDeviceComponent } from './claim-device.component';
import { ClaimDeviceService } from './claim-device.service';
=======
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { EuiLoadingService } from '@elemental-ui/core';
import { BehaviorSubject } from 'rxjs';

import { AuthenticationService, clearStylesFromDOM, ISessionState, LdsReplaceModule } from 'qbm';
import { PersonService } from 'qer';
import { ClaimDeviceComponent } from './claim-device.component';
import { ClaimDeviceService } from './claim-device.service';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
>>>>>>> oned/v92

@Component({
  selector: 'imx-cdr-editor',
  template: '<p>MockCdrEditor</p>'
})
class MockCdrEditor {
  @Input() public cdr: any;
}

describe('ClaimDeviceComponent', () => {
  let component: ClaimDeviceComponent;
<<<<<<< HEAD
  let fixture: ComponentFixture<ClaimDeviceComponent>;
=======
  let fixture: MockedComponentFixture<ClaimDeviceComponent>;
>>>>>>> oned/v92

  const claimGroupServiceStub = new class {
    numberOfSuggestedOwners = 0;

    hasSuggestedOwners = jasmine.createSpy('hasSuggestedOwners').and.callFake(() => Promise.resolve(this.numberOfSuggestedOwners > 0));
    assignOwner = jasmine.createSpy('assignOwner');
    createCdrForDevice = jasmine.createSpy('createCdrForDevice').and.returnValue({
      column: {
        ColumnName: 'UID_Hardware',
        GetValue: () => 'device-key',
        GetDisplayValue: () => 'displayvalue for some device'
      }
    });

    createColumnSuggestedOwner = jasmine.createSpy('createColumnSuggestedOwner').and.returnValue({
      ColumnName: 'some column name',
      GetValue: () => 'some value'
    });

    reset() {
      this.hasSuggestedOwners.calls.reset();
      this.assignOwner.calls.reset();
      this.createCdrForDevice.calls.reset();
      this.createColumnSuggestedOwner.calls.reset();
      this.numberOfSuggestedOwners = 0;
    }
  }();

  const personServiceStub = {
    createColumnCandidatesPerson: jasmine.createSpy('createColumnCandidatesPerson').and.returnValue({
      ColumnName: 'personColumn',
      GetValue: () => 'some value'
    })
  };

<<<<<<< HEAD
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClaimDeviceComponent,
        MockCdrEditor
      ],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatRadioModule,
        MatStepperModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        LdsReplaceModule
      ],
      providers: [
        {
          provide: ClaimDeviceService,
          useValue: claimGroupServiceStub
        },
        {
          provide: PersonService,
          useValue: personServiceStub
        },
        {
          provide: EuiLoadingService,
          useValue: {
            show: () => { },
            hide: __ => { }
          }
        },
        {
          provide: AuthenticationService,
          useValue: {
            onSessionResponse: new Subject()
          }
        }
      ]
    });
  });
=======
  const authStub = {
    onSessionResponse: new BehaviorSubject<ISessionState>({
      UserUid: "",
      Username: ""
    })
  }

  beforeEach(() => {
    return MockBuilder(ClaimDeviceComponent)
      .mock(ClaimDeviceService, claimGroupServiceStub)
      .mock(PersonService, personServiceStub)
      .mock(EuiLoadingService)
      .mock(AuthenticationService, authStub)
      .beforeCompileComponents(testBed => {
        testBed.configureTestingModule({
          declarations: [
            ClaimDeviceComponent,
            MockCdrEditor
          ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
      });
    });
  })
>>>>>>> oned/v92

  beforeEach(() => {
    claimGroupServiceStub.reset();
    personServiceStub.createColumnCandidatesPerson.calls.reset();

<<<<<<< HEAD
    fixture = TestBed.createComponent(ClaimDeviceComponent);
    component = fixture.componentInstance;
=======
    fixture = MockRender(ClaimDeviceComponent);
    component = fixture.point.componentInstance;
>>>>>>> oned/v92
    fixture.detectChanges();
  });

  afterAll(() => {
    clearStylesFromDOM();
  });

  it('changes the owner candidate list', () => {
    const cdr = { display: 'some display' };

    component.ownerCandidateListChange({
      value: { createOwnerCdr: () => cdr }
    } as MatRadioChange);

    expect(component.ownerCdr.display).toEqual(cdr.display);
  });

  for (const method of [
    () => component.loadSuggestedOwners(),
    () => component.stepChange({ selectedIndex: 2 } as StepperSelectionEvent)
  ]) {
    it('loads owner candidates', async () => {
      await method();
      expect(component.ownershipOptions.length).toEqual(2);

      [undefined, personServiceStub.createColumnCandidatesPerson].forEach((expectedOption, i) => {
        const cdr = component.ownershipOptions[i].createOwnerCdr();
        if (expectedOption) {
          expect(cdr).toBeDefined();
          expect(expectedOption).toHaveBeenCalled();
        } else {
          expect(cdr).toBeUndefined();
        }
      });
    });
  }

  it('assigns an owner', async () => {
    component.ownerCandidateListChange({ value: { createOwnerCdr: () => undefined } } as MatRadioChange);
    await component.assignOwner();
    expect(claimGroupServiceStub.assignOwner).toHaveBeenCalled();
  });

  it('assigns an owner via step change', async () => {
    component.ownerCandidateListChange({ value: { createOwnerCdr: () => undefined } } as MatRadioChange);
    await component.stepChange({ selectedIndex: 3 } as StepperSelectionEvent);
    expect(claimGroupServiceStub.assignOwner).toHaveBeenCalled();
  });
});
