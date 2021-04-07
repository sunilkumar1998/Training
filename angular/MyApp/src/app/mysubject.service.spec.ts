import { TestBed } from '@angular/core/testing';

import { MysubjectService } from './mysubject.service';

describe('MysubjectService', () => {
  let service: MysubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
