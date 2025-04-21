import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-main-page',
  imports: [],
  templateUrl: `./header-main-page.component.html`,
  styleUrl: './header-main-page.component.css',
})

export class HeaderMainPageComponent {
  constructor(private router: Router) {}

  goToJobSeekerSignIn() {
    this.router.navigate(['/sign-in-job-seeker']);
  }

  goToJobSeekerSignUp() {
    this.router.navigate(['/sign-up-job-seeker']);
  }

  logoImage="/assets/jobtray_logo_with_text.png";
}
