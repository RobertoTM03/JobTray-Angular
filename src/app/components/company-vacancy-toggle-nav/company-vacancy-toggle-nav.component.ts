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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    let urlId = this.route.snapshot.paramMap.get('id');
    if (urlId == null) {
      console.error("problema al cargar la id de la url");
      return;
    }
    this.id = urlId;
  }

  goToVacancyApplicants() {
    this.router.navigate(['/vacancy-applicants', this.id]);
  }

  goToEditVacancy() {
    this.router.navigate(['/edit-vacancy', this.id]);
  }
}




