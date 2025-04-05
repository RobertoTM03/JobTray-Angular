import { Component } from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderCompanyComponent} from '../../components/header-company/header-company.component';
import {JobSeekerProfileViewComponent} from '../../components/job-seeker-profile-view/job-seeker-profile-view.component';

@Component({
  selector: 'app-company-view-job-seeker-profile',
  imports: [
    FooterComponent,
    HeaderCompanyComponent,
    JobSeekerProfileViewComponent
  ],
  templateUrl: './company-view-job-seeker-profile.component.html',
  styleUrl: './company-view-job-seeker-profile.component.css'
})
export class CompanyViewJobSeekerProfileComponent {

}
