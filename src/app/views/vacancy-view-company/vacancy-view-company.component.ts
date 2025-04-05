import { Component } from '@angular/core';
import {MainSubtitleComponent} from '../../components/main-subtitle/main-subtitle.component';
import {
  CompanyVacancyToggleNavComponent
} from '../../components/company-vacancy-toggle-nav/company-vacancy-toggle-nav.component';

@Component({
  selector: 'app-vacancy-view-company',
  imports: [
    MainSubtitleComponent,
    CompanyVacancyToggleNavComponent
  ],
  templateUrl: './vacancy-view-company.component.html',
  styleUrl: './vacancy-view-company.component.css'
})
export class VacancyViewCompanyComponent {

}
