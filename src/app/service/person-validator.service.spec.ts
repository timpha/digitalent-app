import { TestBed, inject } from '@angular/core/testing';

import { PersonValidatorService } from './person-validator.service';

describe('PersonValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonValidatorService]
    });
  });

  it('should be created', inject([PersonValidatorService], (service: PersonValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
