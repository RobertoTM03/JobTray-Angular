import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Vacancy} from '../../models/vacancy';
import {VacancyService} from '../../services/vacancy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-seeker-find-jobs-list',
  templateUrl: './job-seeker-find-jobs-list.component.html',
  standalone: true,
  imports: [NgForOf, NgIf, FormsModule],
  styleUrl: './job-seeker-find-jobs-list.component.css'
})

export class JobSeekerFindJobsListComponent {
  originalVacancies: Vacancy[] = [];
  filteredVacancies: Vacancy[] = [];
  visibleVacancies: Vacancy[] = [];
  vacanciesToShow = 5;

  filtersVisible: boolean = false;

  selectedSalaryRange: string = '';
  selectedJobTypes: { [key: string]: boolean } = {
    'Full-Time': true,
    'Half-Time': true,
    'Remote': true,
    'Internship': true,
    'Contract': true,
  };

  selectedEducations: { [key: string]: boolean } = {
    'Elementary School': true,
    'Middle School': true,
    'High School': true,
    'University': true,
    'Master': true,
  };

  constructor(
    private vacancyService: VacancyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe({
      next: (data) => {
        this.originalVacancies = data;
        this.applyFilters();
      },
      error: (err) => {
        console.error('Error loading vacancies:', err);
      }
    });
  }

  toggleFilters(): void {
    this.filtersVisible = !this.filtersVisible;
  }

  closeFilters(): void {
    this.filtersVisible = false;
  }

  applyFilters(): void {
    this.filteredVacancies = this.originalVacancies.filter(vacancy => {
      const salary = vacancy.minimumSalary;
      const jobType = vacancy.jobType;
      const education = vacancy.minimumEducationRequired;

      let salaryMatch = true;
      switch (this.selectedSalaryRange) {
        case '0-1000':
          salaryMatch = salary >= 0 && salary <= 1000;
          break;
        case '1000-1500':
          salaryMatch = salary > 1000 && salary <= 1500;
          break;
        case '1500-2000':
          salaryMatch = salary > 1500 && salary <= 2000;
          break;
        case '3000+':
          salaryMatch = salary >= 3000;
          break;
        case '':
          salaryMatch = true;
          break;
        default:
          salaryMatch = false;
      }

      const jobTypeMatch = this.selectedJobTypes[jobType] ?? false;
      const educationMatch = this.selectedEducations[education] ?? false;

      return salaryMatch && jobTypeMatch && educationMatch;
    });

    this.visibleVacancies = this.filteredVacancies.slice(0, this.vacanciesToShow);
  }

  showMore(): void {
    this.vacanciesToShow += 5;
    this.visibleVacancies = this.filteredVacancies.slice(0, this.vacanciesToShow);
  }

  seeVacancy(id: string): void {
    this.router.navigate(['/view-vacancy', id]);
  }
}
