import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-job-listing-list',
  imports: [],
  templateUrl: './company-job-listing-list.component.html',
  styleUrl: './company-job-listing-list.component.css'
})
export class CompanyJobListingListComponent {
  constructor(private router: Router) {}

  goToFindJobs() {
    this.router.navigate(['/find-jobs']);
  }
}
