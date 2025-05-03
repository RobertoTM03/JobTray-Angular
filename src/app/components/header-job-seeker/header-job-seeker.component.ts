import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {JobSeekerService} from '../../services/job-seeker.service';
import {JobSeeker} from '../../models/job-seeker';
import {UserSessionService} from '../../services/user-session.service';
import {Auth} from '@angular/fire/auth';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header-job-seeker',
  imports: [
    NgClass
  ],
  templateUrl: './header-job-seeker.component.html',
  styleUrl: './header-job-seeker.component.css',
  standalone: true,
})

export class HeaderJobSeekerComponent {
  currentJobSeeker: JobSeeker | null = null;

  constructor(
    private router: Router,
    private jobSeekerService: JobSeekerService,
    private userSessionService: UserSessionService,
    private auth: Auth
  ) {}

  ngOnInit(): void {
    const userData = this.userSessionService.getUserData();

    if (userData == null) {
      console.error('userData is null');
      return;
    }

    this.jobSeekerService.getJobSeekerById(userData.uid).subscribe(
      jobSeeker => {
        this.currentJobSeeker = jobSeeker;
      }
    )
  }

  goToFindJobs() {
    this.router.navigate(['/find-jobs']);
  }

  goToEditProfile() {
    this.router.navigate(['/job-seeker-profile-edit']);
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
