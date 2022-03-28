import { TestBed } from '@angular/core/testing';

import { MatAdapterService } from './mat-adapter.service';

describe('MatAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatAdapterService = TestBed.get(MatAdapterService);
    expect(service).toBeTruthy();
  });
});
