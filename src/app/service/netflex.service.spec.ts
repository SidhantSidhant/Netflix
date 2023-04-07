import { TestBed } from '@angular/core/testing';

import { NetflexService } from './netflex.service';

describe('NetflexService', () => {
  let service: NetflexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetflexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
