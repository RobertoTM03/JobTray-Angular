import { Component } from '@angular/core';
import {JobSeekerSignUpComponent} from '../../components/job-seeker-sign-up/job-seeker-sign-up.component';
import {HeaderSignUpComponent} from '../../components/header-sign-in/header-sign-in-sign-up.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-sign-up-job-seeker',
  imports: [
    JobSeekerSignUpComponent,
    HeaderSignUpComponent,
    FooterComponent
  ],
  templateUrl: './sign-up-job-seeker.component.html',
  styleUrl: './sign-up-job-seeker.component.css'
})

export class SignUpJobSeekerComponent {
}
