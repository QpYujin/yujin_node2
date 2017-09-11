import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth.authenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
