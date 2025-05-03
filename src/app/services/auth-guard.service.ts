import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {UserSessionService} from './user-session.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userSessionService: UserSessionService,
  ) {}

  canActivate(): boolean {
    if (this.userSessionService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/not-found']);
      return false;
    }
  }
}
