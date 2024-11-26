import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
constructor(private router: Router){}

canActivate():boolean{
  const isSignedUp = !!localStorage.getItem('signedUp');
  if (isSignedUp) {
    return true;
  } else {
    this.router.navigate(['/signup']);
    return false;
  }
}
}

