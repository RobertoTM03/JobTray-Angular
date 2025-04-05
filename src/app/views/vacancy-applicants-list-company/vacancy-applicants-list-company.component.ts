import { Component } from '@angular/core';
import {
  CompanyVacancyApplicantsListComponent
} from '../../components/company-vacancy-applicants-list/company-vacancy-applicants-list.component';
import {MainSubtitleComponent} from '../../components/main-subtitle/main-subtitle.component';
import {
  CompanyVacancyToggleNavComponent
} from '../../components/company-vacancy-toggle-nav/company-vacancy-toggle-nav.component';

@Component({
  selector: 'app-vacancy-applicants-list-company',
  imports: [
    CompanyVacancyApplicantsListComponent,
    MainSubtitleComponent,
    CompanyVacancyToggleNavComponent
  ],
  templateUrl: './vacancy-applicants-list-company.component.html',
  styleUrl: './vacancy-applicants-list-company.component.css'
})
export class VacancyApplicantsListCompanyComponent {

}
