import { Component } from '@angular/core';
import {HeaderSignUpComponent} from '../../components/header-sign-in/header-sign-in-sign-up.component';
import {CompanySignInComponent} from '../../components/company-sign-in/company-sign-in.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-sign-in-company',
  imports: [
    HeaderSignUpComponent,
    CompanySignInComponent,
    FooterComponent
  ],
  templateUrl: './sign-in-company.component.html',
  styleUrl: './sign-in-company.component.css'
})
export class SignInCompanyComponent {

}
