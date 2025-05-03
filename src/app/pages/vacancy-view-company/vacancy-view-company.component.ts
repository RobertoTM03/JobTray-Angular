import { Component } from '@angular/core';
import {MainSubtitleComponent} from '../../components/main-subtitle/main-subtitle.component';
import {
  CompanyVacancyToggleNavComponent
} from '../../components/company-vacancy-toggle-nav/company-vacancy-toggle-nav.component';
import {FooterComponent} from "../../components/footer/footer.component";
import {VacancyProfileEditComponent} from "../../components/vacancy-profile-edit/vacancy-profile-edit.component";
import {HeaderCompanyComponent} from '../../components/header-company/header-company.component';

@Component({
  selector: 'app-vacancy-view-company',
  imports: [
    MainSubtitleComponent,
    CompanyVacancyToggleNavComponent,
    FooterComponent,
    VacancyProfileEditComponent,
    HeaderCompanyComponent
  ],
  templateUrl: './vacancy-view-company.component.html',
  styleUrl: './vacancy-view-company.component.css'
})

export class VacancyViewCompanyComponent {
}
