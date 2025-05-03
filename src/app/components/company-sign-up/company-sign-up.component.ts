import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { CompanyService } from '../../services/company.service';
import { FirebaseUser } from '../../models/firebaseUser';
import { UserSessionService } from '../../services/user-session.service';
import { Company } from '../../models/company';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class CompanySignUpComponent {
  companyName = '';
  email = '';
  cifNif = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  submitted = false;

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
        name: this.companyName,
        email: this.email,
      };

      const company: Company = {
        id: user.uid,
        name: this.companyName,
        cifNif: this.cifNif,
        email: this.email,
        image: "/assets/companies/company-default.jpg",
      }

      this.companyService.addCompany(company).subscribe({
        next: () => {
          this.userSessionService.setUserData(firebaseUser);
          this.router.navigate(['/job-listing']);
        },
        error: () => {
          this.errorMessage = 'Error creating company data';
        }
      });
    } catch (error: any) {
      this.errorMessage = 'Registration failed: ' + error.message;
    }
  }
}
