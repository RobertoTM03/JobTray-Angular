import { Component } from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderJobSeekerComponent} from '../../components/header-job-seeker/header-job-seeker.component';
import {JobSeekerProfileComponent} from '../../components/job-seeker-profile-edit/job-seeker-profile.component';
import {VacancyProfileEditComponent} from '../../components/vacancy-profile-edit/vacancy-profile-edit.component';
import {
  CompanyVacancyToggleNavComponent
} from '../../components/company-vacancy-toggle-nav/company-vacancy-toggle-nav.component';
import {HeaderCompanyComponent} from '../../components/header-company/header-company.component';
import {MainSubtitleComponent} from '../../components/main-subtitle/main-subtitle.component';
import {VacancyProfileViewComponent} from '../../components/vacancy-profile-view/vacancy-profile-view.component';

@Component({
  selector: 'app-vacancy-profile-edit-viewer',
  imports: [
    FooterComponent,
    HeaderJobSeekerComponent,
    JobSeekerProfileComponent,
    VacancyProfileEditComponent,
    CompanyVacancyToggleNavComponent,
    HeaderCompanyComponent,
    MainSubtitleComponent,
    VacancyProfileViewComponent
  ],
  templateUrl: './vacancy-profile-edit-viewer.component.html',
  styleUrl: './vacancy-profile-edit-viewer.component.css'
})
export class VacancyProfileEditViewerComponent {

}
