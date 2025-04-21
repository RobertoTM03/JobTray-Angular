import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {VacancyService} from '../../services/vacancy.service';
import {Vacancy} from '../../models/vacancy';
import {DatePipe, NgForOf} from '@angular/common';
import {UserSessionService} from '../../services/user-session.service';
import {FirebaseUser} from '../../models/firebaseUser';

//TODO Falta el menu desplegable

@Component({
  selector: 'app-company-job-listing-list',
  imports: [
    DatePipe,
    NgForOf,
  ],
  templateUrl: './company-job-listing-list.component.html',
  styleUrl: './company-job-listing-list.component.css'
})
export class CompanyJobListingListComponent {
  vacancies: Vacancy[] = [];

  constructor(
    private router: Router,
    private vacancyService: VacancyService,
    private userSessionService: UserSessionService
  ) {}

  goToCompanySignIn() {
    this.router.navigate(['/sign-up-company']);
  }

  ngOnInit(): void {
    const firebaseUser: FirebaseUser | null = this.userSessionService.getUserData();

    if (firebaseUser === null) {
      throw new Error('No se ha encontrado un usuario activo. Debes iniciar sesión.');
    }

    const uid = firebaseUser.uid;

    this.vacancyService.getVacancies().subscribe({
      next: data => {
        this.vacancies = data.filter(vacancy => vacancy.ownerId === uid);
      },
      error: error => {
        console.error('Error al obtener las vacantes:', error);
      }
    });
  }


  seeVacancy(id: String): void {
    this.router.navigate(['/vacancy-applicants', id]);
  }

  toggleMenu(): void {
  }

  deleteVacancy(id: string): void {
    this.vacancyService.deleteVacancy(id).subscribe({})
  }
}
