import { TestBed } from '@angular/core/testing';

import { GhHttpService } from './gh-http.service';

describe('GhHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhHttpService = TestBed.get(GhHttpService);
    expect(service).toBeTruthy();
  });
});
