import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobSeekerService } from '../../services/job-seeker.service';
import { VacancyService } from '../../services/vacancy.service';
import { JobSeeker } from '../../models/job-seeker';
import { ApplicantStage } from '../../enums/applicant-stage.enum';
import { DatePipe, NgForOf, NgIf } from '@angular/common';

interface DisplayApplicant {
  id: string;
  fullName: string;
  image: string;
  stage: ApplicantStage;
  applyDate: string;
  showOptions: boolean;
}

@Component({
  selector: 'app-company-vacancy-applicants-list',
  standalone: true,
  templateUrl: './company-vacancy-applicants-list.component.html',
  styleUrl: './company-vacancy-applicants-list.component.css',
  imports: [DatePipe, NgForOf, NgIf]
})

export class CompanyVacancyApplicantsListComponent implements OnInit {
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
      console.error("Error loading vacancy");
      return;
    }

    this.applicants = [];

    this.vacancyService.getVacancyById(vacancyId).subscribe({
      next: vacancy => {
        if (!vacancy?.applicants) return;

        vacancy.applicants.forEach(app => {
          this.jobSeekerService.getJobSeekerById(app.id).subscribe((jobSeeker: JobSeeker) => {
            const alreadyExists = this.applicants.some(a => a.id === app.id);
            if (!alreadyExists) {
              this.applicants.push({
                id: app.id,
                fullName: jobSeeker.fullName,
                image: jobSeeker.image,
                stage: app.stage,
                applyDate: app.applyDate,
                showOptions: false
              });
            }
          });
        });
      },
      error: err => {
        console.error("Error loading vacancy", err);
      }
    });
  }

  seeProfile(id: string): void {
    this.router.navigate(['/job-seeker-profile-view', id]);
  }

  toggleOptions(applicant: DisplayApplicant): void {
    this.applicants.forEach(a => {
      a.showOptions = a === applicant ? !a.showOptions : false;
    });
  }

  declineApplicant(applicant: DisplayApplicant): void {
    const vacancyId = this.route.snapshot.paramMap.get('id');
    if (!vacancyId) return;

    if (confirm("Are you sure you want to decline this applicant?")) {
      this.vacancyService.removeApplicantFromVacancy(vacancyId, {
        id: applicant.id,
        stage: applicant.stage,
        applyDate: applicant.applyDate
      }).subscribe({
        next: () => {
          this.applicants = this.applicants.filter(a => a.id !== applicant.id);
        },
        error: err => {
          console.error("Error rejecting applicant", err);
        }
      });
    }
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.button-group');
    if (!clickedInside) {
      this.applicants.forEach(a => (a.showOptions = false));
    }
  }
}
