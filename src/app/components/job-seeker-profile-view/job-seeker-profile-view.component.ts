import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {JobSeeker} from '../../models/job-seeker';
import {ActivatedRoute} from '@angular/router';
import {JobSeekerService} from '../../services/job-seeker.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-job-seeker-profile-edit-view',
  imports: [
    FormsModule,
    NgIf,
    MatSnackBarModule
  ],
  templateUrl: './job-seeker-profile-view.component.html',
  styleUrl: './job-seeker-profile-view.component.css',
})

export class JobSeekerProfileViewComponent {
  currentJobSeeker: JobSeeker | null = null;
  jobSeekerId: string = "";

  constructor(
    private jobSeekerService: JobSeekerService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
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

  imagen="/assets/asps.png";
}
