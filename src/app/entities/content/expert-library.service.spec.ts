import { TestBed, inject } from '@angular/core/testing';

import { ExpertLibraryService } from './content-green-lamp.service';

describe('ExpertLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpertLibraryService]
    });
  });

  it('should be created', inject([ExpertLibraryService], (service: ExpertLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
