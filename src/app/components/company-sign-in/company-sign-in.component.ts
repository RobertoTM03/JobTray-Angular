import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import {FirebaseUser} from '../../models/firebaseUser';
import {FormsModule} from '@angular/forms';
import {CompanyService} from '../../services/company.service';
import {UserSessionService} from '../../services/user-session.service';

//TODO Implementar validación de formularios

@Component({
  selector: 'app-company-sign-in',
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './company-sign-in.component.html',
  styleUrl: './company-sign-in.component.css'
})
export class CompanySignInComponent {
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(
    private router: Router,
    private auth: Auth,
    private companiesService: CompanyService,
    private userSessionService: UserSessionService,
  ) {}

  goToCompanySignUp() {
    this.router.navigate(['/sign-up-company']);
  }

  goToJobSeekerSignIn() {
    this.router.navigate(['/sign-in-job-seeker']);
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

      this.companiesService.getCompanyById(user.uid).subscribe({
        next: (company) => {
          this.userSessionService.setUserData(firebaseUser);
          this.router.navigate(['/job-listing']);
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
