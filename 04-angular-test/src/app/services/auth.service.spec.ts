import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should authenticate the user', () => {
    const service: AuthService = TestBed.get (AuthService);

    localStorage.setItem('currentUser', 'admin');

    expect (service.isAuthenticated()).toBeTruthy();
  });
});
