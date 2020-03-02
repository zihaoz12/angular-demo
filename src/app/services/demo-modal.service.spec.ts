import { TestBed } from '@angular/core/testing';

import { DemoModalService } from './demo-modal.service';

describe('DemoModalService', () => {
  let service: DemoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
