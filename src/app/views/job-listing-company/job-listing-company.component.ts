import { Component } from '@angular/core';
import {MainTittleComponent} from '../../components/main-tittle/main-tittle.component';
import {
  CompanyJobListingListComponent
} from '../../components/company-job-listing-list/company-job-listing-list.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-listing-company',
  imports: [
    MainTittleComponent,
    CompanyJobListingListComponent
  ],
  templateUrl: './job-listing-company.component.html',
  styleUrl: './job-listing-company.component.css'
})
export class JobListingCompanyComponent {

}
