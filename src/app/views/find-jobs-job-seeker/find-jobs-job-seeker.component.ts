import { Component } from '@angular/core';
import {
  JobSeekerFindJobsListComponent
} from '../../components/job-seeker-find-jobs-list/job-seeker-find-jobs-list.component';
import {MainTittleComponent} from '../../components/main-tittle/main-tittle.component';
import {JobSeekerSearchBarComponent} from '../../components/job-seeker-search-bar/job-seeker-search-bar.component';

@Component({
  selector: 'app-find-jobs-job-seeker',
  imports: [
    JobSeekerFindJobsListComponent,
    MainTittleComponent,
    JobSeekerSearchBarComponent
  ],
  templateUrl: './find-jobs-job-seeker.component.html',
  styleUrl: './find-jobs-job-seeker.component.css'
})

export class FindJobsJobSeekerComponent {

}
