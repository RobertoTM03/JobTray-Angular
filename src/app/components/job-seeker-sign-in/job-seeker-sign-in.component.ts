import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import {JobSeekerService} from '../../services/job-seeker.service';
import {UserSessionService} from '../../services/user-session.service';
import {FirebaseUser} from '../../models/firebaseUser';
import {NgIf} from '@angular/common';

//TODO Implementar validación de formularios

@Component({
  selector: 'app-job-seeker-sign-in',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './job-seeker-sign-in.component.html',
  styleUrl: './job-seeker-sign-in.component.css'
})
export class JobSeekerSignInComponent {
  email: string = "";
  password: string = "";
  errorMessage: string = "";

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

  async signIn(){
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      const user = userCredential.user;

      const firebaseUser: FirebaseUser = {
        uid: user.uid,
        name: user.displayName || "",
        email: this.email,
      }

      this.jobSeekerService.getJobSeekerById(user.uid).subscribe({
        next: (jobSeeker) => {
          this.userSessionService.setUserData(firebaseUser);
          this.router.navigate(['/find-jobs']);
        },
        error: (err) => {
          this.errorMessage = 'No se encontró información del usuario.';
          console.error(err);
        }
      });
    } catch (error: any) {
      this.errorMessage = 'Email o contraseña incorrectos.';
      console.error(error);
    }
  }
}
