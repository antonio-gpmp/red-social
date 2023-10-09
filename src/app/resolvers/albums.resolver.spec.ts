import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { albumsResolver } from './albums.resolver';

describe('albumsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => albumsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
