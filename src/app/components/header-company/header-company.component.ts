import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserSessionService} from '../../services/user-session.service';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../models/company';
import {Auth} from '@angular/fire/auth';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header-company',
  imports: [
    NgClass
  ],
  templateUrl: './header-company.component.html',
  styleUrl: './header-company.component.css',
})

export class HeaderCompanyComponent {
  currentCompany: Company | null = null;

  constructor(
    private router: Router,
    private userSessionService: UserSessionService,
    private companyService: CompanyService,
    private auth: Auth
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

  logOut(): void {
    this.auth.signOut().then(() => {
      this.userSessionService.clearUserData();
      window.location.href = '/main-page';
    });
  }

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logoImage="/assets/jobtray_logo_with_text.png";
}
