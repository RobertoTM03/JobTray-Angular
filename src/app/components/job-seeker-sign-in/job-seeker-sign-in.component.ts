import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { JobSeekerService } from '../../services/job-seeker.service';
import { UserSessionService } from '../../services/user-session.service';
import { FirebaseUser } from '../../models/firebaseUser';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-job-seeker-sign-in',
  templateUrl: './job-seeker-sign-in.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./job-seeker-sign-in.component.css']
})
export class JobSeekerSignInComponent {
  email = '';
  password = '';
  errorMessage = '';
  submitted = false;

  constructor(
    private router: Router,
    private auth: Auth,
    private jobSeekerService: JobSeekerService,
    private userSessionService: UserSessionService
  ) {}

  goToCompanySignIn() {
    this.router.navigate(['/sign-in-company']);
  }

  goToJobSeekerSignUp() {
    this.router.navigate(['/sign-up-job-seeker']);
  }

  async signIn(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      const user = userCredential.user;

      const firebaseUser: FirebaseUser = {
        uid: user.uid,
        name: user.displayName || '',
        email: this.email,
      };

      this.jobSeekerService.getJobSeekerById(user.uid).subscribe({
        next: (jobSeeker) => {
          if (!jobSeeker) {
            this.errorMessage = 'This user is not registered as Job Seeker.';
            return;
          }

          this.userSessionService.setUserData(firebaseUser);
          this.router.navigate(['/find-jobs']);
        },
        error: () => {
          this.errorMessage = 'This user is not registered as Job Seeker.';
        }
      });

    } catch (error: any) {
      this.errorMessage = 'Incorrect email or password.';
    }
  }
}
