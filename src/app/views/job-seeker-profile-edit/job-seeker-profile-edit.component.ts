import { Component } from '@angular/core';
import {HeaderJobSeekerComponent} from '../../components/header-job-seeker/header-job-seeker.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {JobSeekerProfileComponent} from '../../components/job-seeker-profile-edit/job-seeker-profile.component';

@Component({
  selector: 'app-job-seeker-profile-edit',
  imports: [
    HeaderJobSeekerComponent,
    FooterComponent,
    JobSeekerProfileComponent
  ],
  templateUrl: './job-seeker-profile-edit.component.html',
  styleUrl: './job-seeker-profile-edit.component.css'
})
export class JobSeekerProfileEditComponent {

}
