import { TestBed } from '@angular/core/testing';

import { QbmApiClientService } from './qbm-api-client.service';

describe('QbmApiClientService', () => {
  let service: QbmApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QbmApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
