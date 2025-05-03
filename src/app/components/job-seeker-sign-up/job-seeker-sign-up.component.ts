import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { JobSeekerService } from '../../services/job-seeker.service';
import { FirebaseUser } from '../../models/firebaseUser';
import { UserSessionService } from '../../services/user-session.service';
import { CommonModule } from '@angular/common';
import { JobSeeker } from '../../models/job-seeker';

@Component({
  selector: 'app-job-seeker-sign-up',
  templateUrl: './job-seeker-sign-up.component.html',
  styleUrls: ['./job-seeker-sign-up.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class JobSeekerSignUpComponent {
  fullName = '';
  email = '';
  phoneNumber = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  submitted = false;

  constructor(
    private router: Router,
    private jobSeekerService: JobSeekerService,
    private auth: Auth,
    private userSessionService: UserSessionService,
  ) {}

  goToCompanySignUp() {
    this.router.navigate(['/sign-up-company']);
  }

  goToJobSeekerSignIn() {
    this.router.navigate(['/sign-in-job-seeker']);
  }

  async signUp(form: NgForm) {
    this.submitted = true;

    if (form.invalid || this.password !== this.confirmPassword) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords don't match";
      }
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      const user = userCredential.user;

      const firebaseUser: FirebaseUser = {
        uid: user.uid,
        name: this.fullName,
        email: this.email,
      };

      const jobSeeker: JobSeeker = {
        id: user.uid,
        fullName: this.fullName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        otherContactMethod: "",
        userProfileDescription: "",
        portfolioLink: "",
        image: "/assets/jobSeekers/jobSeeker-default.jpg",
      }

      this.jobSeekerService.addJobSeeker(jobSeeker).subscribe({
        next: () => {
          this.userSessionService.setUserData(firebaseUser);
          this.router.navigate(['/find-jobs']);
        },
        error: () => {
          this.errorMessage = 'Error creating user data';
        }
      });
    } catch (error: any) {
      this.errorMessage = 'Registration failed: ' + error.message;
    }
  }
}
