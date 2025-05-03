import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VacancyService } from '../../services/vacancy.service';
import { Vacancy } from '../../models/vacancy';
import { DatePipe } from '@angular/common';
import { UserSessionService } from '../../services/user-session.service';
import { FirebaseUser } from '../../models/firebaseUser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-job-listing-list',
  templateUrl: './company-job-listing-list.component.html',
  styleUrls: ['./company-job-listing-list.component.css'],
  imports: [
    CommonModule,
    DatePipe
  ]
})

export class CompanyJobListingListComponent {
  vacancies: Vacancy[] = [];
  selectedVacancyId: string | null = null;

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
      throw new Error('No active user found. You must be logged in.');
    }

    this.loadVacancies();
  }

  loadVacancies(): void {
    const firebaseUser: FirebaseUser | null = this.userSessionService.getUserData();
    if (firebaseUser) {
      const uid = firebaseUser.uid;
      this.vacancyService.getVacancies().subscribe({
        next: (data) => {
          this.vacancies = data.filter(vacancy => vacancy.ownerId === uid);
        },
        error: (err) => {
          console.error('Error obtaining vacancies:', err);
        }
      });
    }
  }

  seeVacancy(id: String): void {
    this.router.navigate(['/vacancy-applicants', id]);
  }

  toggleMenu(vacancyId: string): void {
    this.selectedVacancyId = this.selectedVacancyId === vacancyId ? null : vacancyId;
  }

  deleteVacancy(id: string): void {
    console.log('ID of the vacancy to be deleted:', id);

    this.vacancyService.getVacancyById(id).subscribe({
      next: (vacancy) => {
        if (vacancy) {
          console.log('Vacancy found:', vacancy);

          const firebaseId = vacancy.id;

          const firebaseUser: FirebaseUser | null = this.userSessionService.getUserData();
          if (firebaseUser?.uid === vacancy.ownerId) {
            if (confirm(`Are you sure you want to delete \"${vacancy.name}\" vacant?`)) {
              this.vacancyService.deleteVacancy(firebaseId).subscribe({
                next: () => {
                  console.log('Vacancy successfully eliminated.');
                  this.loadVacancies();
                },
                error: (err) => {
                  console.error('Error deleting vacancy', err);
                }
              });
            }
          } else {
            console.error('You do not have permission to delete this vacancy.');
          }
        } else {
          console.error('Vacancy with ID not found:', id);
        }
      },
      error: (err) => {
        console.error('Error obtaining vacancy', err);
      }
    });
  }
}
