import { Component } from '@angular/core';
import {JobSeekerSignInComponent} from '../../components/job-seeker-sign-in/job-seeker-sign-in.component';
import {HeaderSignUpComponent} from '../../components/header-sign-in/header-sign-in-sign-up.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-sign-in-job-seeker',
  imports: [
    JobSeekerSignInComponent,
    HeaderSignUpComponent,
    FooterComponent
  ],
  templateUrl: './sign-in-job-seeker.component.html',
  styleUrl: './sign-in-job-seeker.component.css'
})

export class SignInJobSeekerComponent {
}
