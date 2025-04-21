import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Vacancy} from '../../models/vacancy';
import {VacancyService} from '../../services/vacancy.service';
import {Router} from '@angular/router';

//TODO arreglar menú desplagable de filtros
//TODO implementar lógica de filtrado de vacantes

@Component({
  selector: 'app-job-seeker-find-jobs-list',
  templateUrl: './job-seeker-find-jobs-list.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrl: './job-seeker-find-jobs-list.component.css'
})

export class JobSeekerFindJobsListComponent {
  vacancies: Vacancy[] = [];
  visibleVacancies: Vacancy[] = [];
  vacanciesToShow = 5;

  constructor(
   private vacancyService: VacancyService,
   private router: Router,
  ) {}

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe({
      next: (data) => {
        this.vacancies = data;
        this.visibleVacancies = this.vacancies.slice(0, this.vacanciesToShow);
      },
      error: (err) => {
        console.error('Error al cargar vacantes:', err);
      }
    });
  }

  showMore(): void {
    this.vacanciesToShow += 5;
    this.visibleVacancies = this.vacancies.slice(0, this.vacanciesToShow);
  }

  seeVacancy(id: string){
    this.router.navigate(['/view-vacancy', id]);
  }
}
