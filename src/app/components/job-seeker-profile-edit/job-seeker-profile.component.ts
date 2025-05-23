import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {JobSeeker} from '../../models/job-seeker';
import {JobSeekerService} from '../../services/job-seeker.service';
import {UserSessionService} from '../../services/user-session.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-job-seeker-profile-edit-page',
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './job-seeker-profile.component.html',
  styleUrl: './job-seeker-profile.component.css'
})

export class JobSeekerProfileComponent {
  currentJobSeeker: JobSeeker | null = null;
  jobSeekerId: string = "";

  constructor(
    private jobSeekerService: JobSeekerService,
    private userSessionService: UserSessionService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    let id = this.userSessionService.getUserData()?.uid
    if (id == null) {
      console.error("Problem loading url id");
      return;
    }
    this.jobSeekerId = id;

    this.jobSeekerService.getJobSeekerById(this.jobSeekerId).subscribe({
      next: (res) => {
        this.currentJobSeeker = res;
      }
    })
  }

  saveChanges(): void {
    if (!this.currentJobSeeker) return;

    this.jobSeekerService.updateJobSeeker(this.currentJobSeeker).subscribe({
      next: () => {
        this.snackBar.open('Profile successfully updated', 'Close', {
          duration: 3000,
          panelClass: ['snack-center']
        });
      },
      error: err => {
        console.error('Error saving:', err);
        this.snackBar.open('Error updating profile', 'Close', {
          duration: 4000,
          panelClass: ['snack-center-error']
        });
      }
    });
  }

  imagen="/assets/asps.png";
}
