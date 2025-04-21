import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import {JobSeekerService} from '../../services/job-seeker.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {JobSeeker} from '../../models/job-seeker';
import {FirebaseUser} from '../../models/firebaseUser';
import {UserSessionService} from '../../services/user-session.service';

//TODO Implementar validación de formularios

@Component({
  selector: 'app-job-seeker-sign-up',
  templateUrl: './job-seeker-sign-up.component.html',
  imports: [
    FormsModule,
    CommonModule
  ],
  styleUrl: './job-seeker-sign-up.component.css'
})
export class JobSeekerSignUpComponent {
  fullName: string = "";
  email: string = "";
  phoneNumber: string = "";
  password: string = "";
  confirmPassword: string = "";
  errorMessage: string = "";


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

  async signUp(){
    if (this.password != this.confirmPassword){
      this.errorMessage = "Passwords don't match";
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      const user = userCredential.user;

      const firebaseUser: FirebaseUser = {
        uid: user.uid,
        name: this.fullName,
        email: this.email,
      }

      this.userSessionService.setUserData(firebaseUser);

      const currentJobSeeker: JobSeeker = {
        id: user.uid,
        fullName: this.fullName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        otherContactMethod: "",
        userProfileDescription: "",
        portfolioLink: "",
        image: "/assets/jobSeekers/jobSeeker-default.jpg",
      }

      this.jobSeekerService.addJobSeeker(currentJobSeeker).subscribe(() => {
        this.router.navigate(['/find-jobs']);
      });
    } catch (error: any) {
      this.errorMessage = error.message;
      console.error('Error al registrar:', error);
    }
  }
}
