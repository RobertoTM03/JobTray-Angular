import { Component } from '@angular/core';
import {CompanySignUpComponent} from '../../components/company-sign-up/company-sign-up.component';
import {HeaderSignUpComponent} from '../../components/header-sign-in/header-sign-in-sign-up.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-sign-up-company',
  imports: [
    CompanySignUpComponent,
    HeaderSignUpComponent,
    FooterComponent
  ],
  templateUrl: './sign-up-company.component.html',
  styleUrl: './sign-up-company.component.css'
})
export class SignUpCompanyComponent {

}
