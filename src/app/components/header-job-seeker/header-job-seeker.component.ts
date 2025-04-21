import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {JobSeekerService} from '../../services/job-seeker.service';
import {JobSeeker} from '../../models/job-seeker';
import {UserSessionService} from '../../services/user-session.service';

@Component({
  selector: 'app-header-job-seeker',
  imports: [
  ],
  templateUrl: './header-job-seeker.component.html',
  styleUrl: './header-job-seeker.component.css',

})

export class HeaderJobSeekerComponent {
  currentJobSeeker: JobSeeker | null = null;

  constructor(
    private router: Router,
    private jobSeekerService: JobSeekerService,
    private userSessionService: UserSessionService
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

  goToEditProfile(id: string | undefined) {
    this.router.navigate(['/job-seeker-profile-edit']);
  }

  logOut() {
    this.userSessionService.clearUserData();
    this.router.navigate(['/main-page']);
  }

  logoImage="/assets/jobtray_logo_with_text.png";
}
