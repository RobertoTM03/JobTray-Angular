import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-vacancy-toggle-nav',
  imports: [],
  templateUrl: './company-vacancy-toggle-nav.component.html',
  styleUrl: './company-vacancy-toggle-nav.component.css'
})

export class CompanyVacancyToggleNavComponent {
  id: string = "";
  activeTab: 'details' | 'applicants' = 'details';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const urlId = this.route.snapshot.paramMap.get('id');
    if (!urlId) {
      console.error("Problem loading url id");
      return;
    }

    this.id = urlId;

    const currentUrl = this.router.url;
    if (currentUrl.includes('vacancy-applicants')) {
      this.activeTab = 'applicants';
    } else if (currentUrl.includes('edit-vacancy')) {
      this.activeTab = 'details';
    }
  }

  goToVacancyApplicants() {
    this.router.navigate(['/vacancy-applicants', this.id]);
  }

  goToEditVacancy() {
    this.router.navigate(['/edit-vacancy', this.id]);
  }
}
