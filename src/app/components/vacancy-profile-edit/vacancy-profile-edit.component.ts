import { Component } from '@angular/core';
import {UserSessionService} from '../../services/user-session.service';
import {VacancyService} from '../../services/vacancy.service';
import {ActivatedRoute} from '@angular/router';
import {Vacancy} from '../../models/vacancy';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-vacancy-profile-edit',
  imports: [
    FormsModule,
    NgIf,
    MatSnackBarModule
  ],
  templateUrl: './vacancy-profile-edit.component.html',
  styleUrl: './vacancy-profile-edit.component.css'
})

export class VacancyProfileEditComponent {
  vacancyId: string = "";
  currentVacancy: Vacancy | null = null;

  constructor(
    private userSessionService: UserSessionService,
    private vacancyService: VacancyService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      console.error("problema al cargar la id de la url");
      return;
    }
    this.vacancyId = id;

    this.vacancyService.getVacancyById(this.vacancyId).subscribe({
      next: (res) => {
        this.currentVacancy = res;
      }
    })
  }

  saveChanges(): void {
    if (!this.currentVacancy) {
      console.error('No hay vacante cargada');
      return;
    }

    this.vacancyService.updateVacancy(this.currentVacancy).subscribe({
      next: () => {
        this.snackBar.open('Vacante actualizada con éxito', 'Cerrar', {
          duration: 3000,
          panelClass: ['snack-center']
        });
      },
      error: (error) => {
        console.error('Error al actualizar la vacante:', error);
        this.snackBar.open('Error al actualizar la vacante', 'Cerrar', {
          duration: 4000,
          panelClass: ['snack-center-error']
        });
      }
    });
  }

  imagen="/assets/asps.png";
}
