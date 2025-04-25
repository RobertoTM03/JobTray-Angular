import { Component } from '@angular/core';
import { JobSeekerService } from '../../services/job-seeker.service';
import { UserSessionService } from '../../services/user-session.service';
import { VacancyService } from '../../services/vacancy.service';
import {ActivatedRoute, Router} from '@angular/router';
import { JobSeeker } from '../../models/job-seeker';
import { ApplicantStage } from '../../enums/applicant-stage.enum';
import {DatePipe, NgForOf, NgIf} from '@angular/common';

//TODO Falta el menu desplegable

interface DisplayApplicant {
  id: string;
  fullName: string;
  image: string;
  stage: ApplicantStage;
  applyDate: string;
  showOptions?: boolean;
}

@Component({
  selector: 'app-company-vacancy-applicants-list',
  templateUrl: './company-vacancy-applicants-list.component.html',
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  styleUrl: './company-vacancy-applicants-list.component.css'
})

export class CompanyVacancyApplicantsListComponent {
  applicants: DisplayApplicant[] = [];

  constructor(
    private jobSeekerService: JobSeekerService,
    private vacancyService: VacancyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadApplicantsForVacancy();
  }

  loadApplicantsForVacancy(): void {
    const vacancyId = this.route.snapshot.paramMap.get('id');
    if (!vacancyId) {
      console.error("Error al cargar la vacante");
      return;
    }

    this.vacancyService.getVacancyById(vacancyId).subscribe({
      next: vacancy => {
        if (!vacancy?.applicants) {
          console.error("Vacante sin aplicantes");
          return;
        }

        vacancy.applicants.forEach(app => {
          this.jobSeekerService.getJobSeekerById(app.id).subscribe((jobSeeker: JobSeeker) => {
            this.applicants.push({
              id: app.id,
              fullName: jobSeeker.fullName,
              image: jobSeeker.image,
              stage: app.stage,
              applyDate: app.applyDate
            });
          });
        });
      },
      error: err => {
        console.error("Error al cargar la vacante", err);
      }
    });
  }

  seeProfile(id: string): void {
    this.router.navigate(['/job-seeker-profile-view', id], {});
  }

  toggleOptions(applicant: DisplayApplicant): void {
    applicant.showOptions = !applicant.showOptions;
    console.log('Toggled options for:', applicant);
  }

  declineApplicant(applicant: DisplayApplicant): void {
    console.log('Aplicante rechazado:', applicant);
    // TODO: implementar lógica de rechazo de aplicantes
  }
}
