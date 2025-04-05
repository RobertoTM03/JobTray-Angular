import { Component } from '@angular/core';
import {MainTittleComponent} from '../../components/main-tittle/main-tittle.component';
import {MainSubtitleComponent} from '../../components/main-subtitle/main-subtitle.component';
import {
  CompanyJobListingListComponent
} from '../../components/company-job-listing-list/company-job-listing-list.component';

@Component({
  selector: 'app-vacancy-view-job-seeker',
  imports: [
    MainTittleComponent,
    MainSubtitleComponent,
    CompanyJobListingListComponent
  ],
  templateUrl: './vacancy-view-job-seeker.component.html',
  styleUrl: './vacancy-view-job-seeker.component.css'
})
export class VacancyViewJobSeekerComponent {

}
