import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FirebaseUser } from '../../models/firebaseUser';
import { CompanyService } from '../../services/company.service';
import { UserSessionService } from '../../services/user-session.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-company-sign-in',
  templateUrl: './company-sign-in.component.html',
  styleUrls: ['./company-sign-in.component.css'],
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ]
})

export class CompanySignInComponent {
  email: string = "";
  password: string = "";
  errorMessage: string = "";
  submitted: boolean = false;

  constructor(
    private router: Router,
    private auth: Auth,
    private companiesService: CompanyService,
    private userSessionService: UserSessionService
  ) {}

  goToCompanySignUp() {
    this.router.navigate(['/sign-up-company']);
  }

  goToJobSeekerSignIn() {
    this.router.navigate(['/sign-in-job-seeker']);
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
        name: user.displayName || "",
        email: this.email,
      };

      this.companiesService.getCompanyById(user.uid).subscribe({
        next: (company) => {
          if (!company) {
            this.errorMessage = 'This user is not registered as a company.';
            return;
          }

          this.userSessionService.setUserData(firebaseUser);
          this.router.navigate(['/job-listing']);
        },
        error: () => {
          this.errorMessage = 'This user is not registered as a company.';
        }
      });
    } catch (error: any) {
      this.errorMessage = 'Incorrect email or password.';
    }
  }
}
