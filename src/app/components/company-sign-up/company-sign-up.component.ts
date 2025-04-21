import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import {CompanyService} from '../../services/company.service';
import {FirebaseUser} from '../../models/firebaseUser';
import {UserSessionService} from '../../services/user-session.service';
import {Company} from '../../models/company';

//TODO Implementar validación de formularios

@Component({
  selector: 'app-company-sign-up',
  imports: [
    FormsModule
  ],
  templateUrl: './company-sign-up.component.html',
  styleUrl: './company-sign-up.component.css'
})

export class CompanySignUpComponent {
  companyName: string = "";
  email: string = "";
  cifNif: string = "";
  password: string = "";
  confirmPassword: string = "";
  errorMessage: string = "";

  constructor(
    private router: Router,
    private auth: Auth,
    private companyService: CompanyService,
    private userSessionService: UserSessionService,
  ) {}

  goToCompanySignIn() {
    this.router.navigate(['/sign-in-company']);
  }

  goToJobSeekerSignUp() {
    this.router.navigate(['/sign-up-job-seeker']);
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
        name: this.companyName,
        email: this.email,
      }

      this.userSessionService.setUserData(firebaseUser);

      const currentCompany: Company = {
        id: user.uid,
        name: this.companyName,
        cifNif: this.cifNif,
        email: this.email,
        image: "/assets/companies/company-default.jpg",
      }

      this.companyService.addCompany(currentCompany).subscribe(() => {
        this.router.navigate(['/job-listing']);
      });
    } catch (error: any) {
      this.errorMessage = error.message;
      console.error('Error al registrar:', error);
    }
  }
}
