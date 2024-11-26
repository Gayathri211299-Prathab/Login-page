import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Create a spy object for Router
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    // Configure TestBed
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy },
      ],
    });

    // Inject the guard
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if signedUp is true in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('true'); // Mock localStorage
    const canActivate = guard.canActivate();
    expect(canActivate).toBeTrue();
  });

  it('should block activation and redirect to signup if signedUp is false in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null); // Mock localStorage
    const canActivate = guard.canActivate();
    expect(canActivate).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/signup']);
  });
});
