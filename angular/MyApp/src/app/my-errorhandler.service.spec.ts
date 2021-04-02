import { TestBed } from '@angular/core/testing';

import { MyErrorhandlerService } from './my-errorhandler.service';

describe('MyErrorhandlerService', () => {
  let service: MyErrorhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyErrorhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
