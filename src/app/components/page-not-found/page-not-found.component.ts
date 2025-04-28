import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserSessionService} from '../../services/user-session.service';

@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  constructor(
    private router: Router,
    private userSessionService: UserSessionService
  ){}

  logOut() {
    this.userSessionService.clearUserData();

    this.router.navigate(['/main-page']);
  }

}
