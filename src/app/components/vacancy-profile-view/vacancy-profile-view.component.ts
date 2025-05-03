import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {Vacancy} from '../../models/vacancy';
import {UserSessionService} from '../../services/user-session.service';
import {VacancyService} from '../../services/vacancy.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Applicant} from '../../models/applicant';
import {ApplicantStage} from '../../enums/applicant-stage.enum';

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
      console.error("Problem loading url id");
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
    const user = this.userSessionService.getUserData();

    if (!user || !this.currentVacancy) {
      this.snackBar.open('You cannot apply for this vacancy.', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
      return;
    }

    const posted = this.currentVacancy.applicants.some(app => app.id === user.uid);
    if (posted) {
      this.snackBar.open('You have already applied for this vacancy.', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
      return;
    }

    const applicant: Applicant = {
      id: user.uid,
      stage: ApplicantStage.New,
      applyDate: new Date().toISOString().split('T')[0]
    };

    this.vacancyService.addApplicantToVacancy(this.vacancyId, applicant).subscribe({
      next: () => {
        this.snackBar.open('Application successfully submitted.', 'Close', {
          duration: 3000,
          verticalPosition: 'top'
        });
        this.currentVacancy?.applicants.push(applicant);
      },
      error: () => {
        this.snackBar.open('Error when applying for the vacancy.', 'Close', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }
    });
  }

  imagen="/assets/asps.png";
}
