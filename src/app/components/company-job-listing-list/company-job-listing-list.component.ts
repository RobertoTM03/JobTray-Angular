import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VacancyService } from '../../services/vacancy.service';
import { Vacancy } from '../../models/vacancy';
import { DatePipe } from '@angular/common';  // Asegúrate de que DatePipe esté importado
import { UserSessionService } from '../../services/user-session.service';
import { FirebaseUser } from '../../models/firebaseUser';
import { CommonModule } from '@angular/common';  // Agregado para evitar el error de 'ngIf'

@Component({
  selector: 'app-company-job-listing-list',
  templateUrl: './company-job-listing-list.component.html',
  styleUrls: ['./company-job-listing-list.component.css'],
  imports: [
    CommonModule,  // Agregado para incluir CommonModule y evitar errores con ngIf y ngFor
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

  // Navegar a la página de registro de empresa
  goToCompanySignIn() {
    this.router.navigate(['/sign-up-company']);
  }

  // Obtener las vacantes al iniciar
  ngOnInit(): void {
    const firebaseUser: FirebaseUser | null = this.userSessionService.getUserData();

    if (firebaseUser === null) {
      throw new Error('No se ha encontrado un usuario activo. Debes iniciar sesión.');
    }

    this.loadVacancies();  // Cargar vacantes al inicio
  }

  loadVacancies(): void {
    const firebaseUser: FirebaseUser | null = this.userSessionService.getUserData();
    if (firebaseUser) {
      const uid = firebaseUser.uid;
      this.vacancyService.getVacancies().subscribe({
        next: (data) => {
          this.vacancies = data.filter(vacancy => vacancy.ownerId === uid);
          console.log('Vacantes cargadas después de eliminar:', this.vacancies);  // Verifica si las vacantes se recargan
        },
        error: (err) => {
          console.error('Error al obtener vacantes:', err);
        }
      });
    }
  }

  // Ver los postulantes de una vacante
  seeVacancy(id: String): void {
    this.router.navigate(['/vacancy-applicants', id]);
  }

  // Mostrar/ocultar el menú de opciones
  toggleMenu(vacancyId: string): void {
    this.selectedVacancyId = this.selectedVacancyId === vacancyId ? null : vacancyId;
  }

  // Eliminar una vacante
  deleteVacancy(id: string): void {
    console.log('ID de la vacante a eliminar:', id);  // Verifica el ID

    // Obtener la vacante por su ID antes de eliminarla
    this.vacancyService.getVacancyById(id).subscribe({
      next: (vacancy) => {
        if (vacancy) {
          console.log('Vacante encontrada:', vacancy);

          // Accedemos al firebaseId de la vacante
          const firebaseId = vacancy.id;

          // Verificar si el usuario autenticado es el propietario de la vacante
          const firebaseUser: FirebaseUser | null = this.userSessionService.getUserData();
          if (firebaseUser?.uid === vacancy.ownerId) {
            // Ahora pasamos el firebaseId directamente a la función de eliminación
            this.vacancyService.deleteVacancy(firebaseId).subscribe({
              next: () => {
                console.log('Vacante eliminada exitosamente.');
                this.loadVacancies();  // Recargar vacantes después de eliminar
              },
              error: (err) => {
                console.error('Error al eliminar la vacante', err);
              }
            });
          } else {
            console.error('No tienes permiso para eliminar esta vacante.');
          }
        } else {
          console.error('No se encontró la vacante con el ID:', id);
        }
      },
      error: (err) => {
        console.error('Error al obtener la vacante', err);
      }
    });
  }

}
