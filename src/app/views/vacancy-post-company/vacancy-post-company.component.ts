import { Component } from '@angular/core';
import {MainTittleComponent} from '../../components/main-tittle/main-tittle.component';
import {CompanyVacancyPostComponent} from '../../components/company-vacancy-post/company-vacancy-post.component';

@Component({
  selector: 'app-vacancy-post-company',
  imports: [
    MainTittleComponent,
    CompanyVacancyPostComponent
  ],
  templateUrl: './vacancy-post-company.component.html',
  styleUrl: './vacancy-post-company.component.css'
})
export class VacancyPostCompanyComponent {

}
