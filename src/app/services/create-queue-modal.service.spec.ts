import { TestBed } from '@angular/core/testing';

import { CreateQueueModalService } from './create-queue-modal.service';

describe('CreateQueueModalService', () => {
  let service: CreateQueueModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateQueueModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
