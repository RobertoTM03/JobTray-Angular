import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserSessionService} from '../../services/user-session.service';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../models/company';

@Component({
  selector: 'app-header-company',
  imports: [],
  templateUrl: './header-company.component.html',
  styleUrl: './header-company.component.css',

})
export class HeaderCompanyComponent {
  currentCompany: Company | null = null;

  constructor(
    private router: Router,
    private userSessionService: UserSessionService,
    private companyService: CompanyService,
  ) {}

  ngOnInit() {
    let userData = this.userSessionService.getUserData();
    if (userData == null) {
      console.error("No user data");
      return;
    }
    this.companyService.getCompanyById(userData.uid).subscribe({
      next: data => {
        this.currentCompany = data;
      }
    })
  }

  goToJobListing() {
    this.router.navigate(['/job-listing']);
  }

  goToPostVacancyPost() {
    this.router.navigate(['/post-vacancy']);
  }

  logOut() {
    this.userSessionService.clearUserData();

    this.router.navigate(['/main-page']);
  }

  logoImage="/assets/jobtray_logo_with_text.png";
}
