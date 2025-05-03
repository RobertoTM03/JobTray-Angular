import { Component } from '@angular/core';
import {MainTittleComponent} from '../../components/main-tittle/main-tittle.component';
import {
  CompanyJobListingListComponent
} from '../../components/company-job-listing-list/company-job-listing-list.component';
import {HeaderCompanyComponent} from '../../components/header-company/header-company.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-job-listing-company',
  imports: [
    MainTittleComponent,
    CompanyJobListingListComponent,
    HeaderCompanyComponent,
    FooterComponent
  ],
  templateUrl: './job-listing-company.component.html',
  styleUrl: './job-listing-company.component.css'
})

export class JobListingCompanyComponent {
}
