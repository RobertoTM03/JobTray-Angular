import { Component } from '@angular/core';
import {MainTittleComponent} from '../../components/main-tittle/main-tittle.component';
import {CompanyVacancyPostComponent} from '../../components/company-vacancy-post/company-vacancy-post.component';
import {HeaderCompanyComponent} from '../../components/header-company/header-company.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-vacancy-post-company',
  imports: [
    MainTittleComponent,
    CompanyVacancyPostComponent,
    HeaderCompanyComponent,
    FooterComponent
  ],
  templateUrl: './vacancy-post-company.component.html',
  styleUrl: './vacancy-post-company.component.css'
})

export class VacancyPostCompanyComponent {
}
