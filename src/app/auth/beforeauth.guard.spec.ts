import { TestBed } from '@angular/core/testing';

import { BeforeauthGuard } from './beforeauth.guard';

describe('BeforeauthGuard', () => {
  let guard: BeforeauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BeforeauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
