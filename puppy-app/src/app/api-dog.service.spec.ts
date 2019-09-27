import { TestBed } from '@angular/core/testing';

import { ApiDogService } from './api-dog.service';

describe('ApiDogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiDogService = TestBed.get(ApiDogService);
    expect(service).toBeTruthy();
  });
});
