import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {Vacancy} from '../../models/vacancy';
import {UserSessionService} from '../../services/user-session.service';
import {VacancyService} from '../../services/vacancy.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-vacancy-profile-view',
  imports: [
    NgIf
  ],
  templateUrl: './vacancy-profile-view.component.html',
  styleUrl: './vacancy-profile-view.component.css'
})
export class VacancyProfileViewComponent {
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

  applyVacancy() {
    //TODO Hacer lógica para añdir aplicantes
  }

  imagen="/assets/asps.png";
}
