import { Routes } from '@angular/router';

import { FindJobsJobSeekerComponent } from './pages/find-jobs-job-seeker/find-jobs-job-seeker.component';
import { JobListingCompanyComponent } from './pages/job-listing-company/job-listing-company.component';
import { SignInJobSeekerComponent } from './pages/sign-in-job-seeker/sign-in-job-seeker.component';
import { SignInCompanyComponent } from './pages/sign-in-company/sign-in-company.component';
import { SignUpJobSeekerComponent } from './pages/sign-up-job-seeker/sign-up-job-seeker.component';
import { SignUpCompanyComponent } from './pages/sign-up-company/sign-up-company.component';
import { VacancyApplicantsListCompanyComponent } from './pages/vacancy-applicants-list-company/vacancy-applicants-list-company.component';
import {VacancyProfileEditViewerComponent} from './pages/vacancy-profile-edit-viewer/vacancy-profile-edit-viewer.component'
import {VacancyViewCompanyComponent} from './pages/vacancy-view-company/vacancy-view-company.component';
import {VacancyPostCompanyComponent} from './pages/vacancy-post-company/vacancy-post-company.component';
import {CompanyViewJobSeekerProfileComponent} from './pages/job-seeker-profile-view/company-view-job-seeker-profile.component'
import {JobSeekerProfileEditComponent} from './pages/job-seeker-profile-edit/job-seeker-profile-edit.component';
import {MainPagesComponent} from './pages/main-pages/main-pages.component';

//TODO Proteger rutas para acceso denegar acceso sin sesión iniciada
//TODO Proteger rutas frente a cierto tipo de integrantes

export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'find-jobs', component: FindJobsJobSeekerComponent },
  { path: 'job-listing', component: JobListingCompanyComponent },
  { path: 'job-seeker-profile-view/:id', component:CompanyViewJobSeekerProfileComponent },
  { path: 'job-seeker-profile-edit', component: JobSeekerProfileEditComponent  },
  { path: 'sign-in-job-seeker', component: SignInJobSeekerComponent },
  { path: 'sign-in-company', component: SignInCompanyComponent },
  { path: 'sign-up-job-seeker', component: SignUpJobSeekerComponent },
  { path: 'sign-up-company', component: SignUpCompanyComponent },
  { path: 'vacancy-applicants/:id', component: VacancyApplicantsListCompanyComponent },
  { path: 'view-vacancy/:id', component: VacancyProfileEditViewerComponent },
  { path: 'edit-vacancy/:id', component: VacancyViewCompanyComponent },
  { path: 'post-vacancy', component: VacancyPostCompanyComponent },
  { path: 'main-page', component: MainPagesComponent },
];
