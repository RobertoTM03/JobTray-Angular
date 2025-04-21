import { Component } from '@angular/core';
import {
  JobSeekerFindJobsListComponent
} from '../../components/job-seeker-find-jobs-list/job-seeker-find-jobs-list.component';
import {MainTittleComponent} from '../../components/main-tittle/main-tittle.component';
import {JobSeekerSearchBarComponent} from '../../components/job-seeker-search-bar/job-seeker-search-bar.component';
import {HeaderJobSeekerComponent} from '../../components/header-job-seeker/header-job-seeker.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-find-jobs-job-seeker',
  imports: [
    JobSeekerFindJobsListComponent,
    MainTittleComponent,
    JobSeekerSearchBarComponent,
    HeaderJobSeekerComponent,
    FooterComponent
  ],
  templateUrl: './find-jobs-job-seeker.component.html',
  styleUrl: './find-jobs-job-seeker.component.css'
})

export class FindJobsJobSeekerComponent {

}
