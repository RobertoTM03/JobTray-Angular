import { Routes } from '@angular/router';

import { MainPageComponent } from './views/main-page/main-page.component';
import { FindJobsJobSeekerComponent } from './views/find-jobs-job-seeker/find-jobs-job-seeker.component';
import { JobListingCompanyComponent } from './views/job-listing-company/job-listing-company.component';
import { SignInJobSeekerComponent } from './views/sign-in-job-seeker/sign-in-job-seeker.component';
import { SignInCompanyComponent } from './views/sign-in-company/sign-in-company.component';
import { SignUpJobSeekerComponent } from './views/sign-up-job-seeker/sign-up-job-seeker.component';
import { SignUpCompanyComponent } from './views/sign-up-company/sign-up-company.component';
import { VacancyApplicantsListCompanyComponent } from './views/vacancy-applicants-list-company/vacancy-applicants-list-company.component';
import {VacancyViewJobSeekerComponent} from './views/vacancy-view-job-seeker/vacancy-view-job-seeker.component';
import {VacancyViewCompanyComponent} from './views/vacancy-view-company/vacancy-view-company.component';
import {VacancyPostCompanyComponent} from './views/vacancy-post-company/vacancy-post-company.component';
import {CompanyViewJobSeekerProfileComponent} from './views/company-view-job-seeker-profile/company-view-job-seeker-profile.component'
import {JobSeekerProfileEditComponent} from './views/job-seeker-profile-edit/job-seeker-profile-edit.component';
export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },  // ruta por defecto
  { path: 'main-page', component: MainPageComponent },
  { path: 'find-jobs', component: FindJobsJobSeekerComponent },
  { path: 'job-listing', component: JobListingCompanyComponent },
  { path: 'company-view-job-seeker-profile', component:CompanyViewJobSeekerProfileComponent },
  { path: 'job-seeker-profile-edit', component: JobSeekerProfileEditComponent  },
  { path: 'sign-in-job-seeker', component: SignInJobSeekerComponent },
  { path: 'sign-in-company', component: SignInCompanyComponent },
  { path: 'sign-up-job-seeker', component: SignUpJobSeekerComponent },
  { path: 'sign-up-company', component: SignUpCompanyComponent },
  { path: 'vacancy-applicants', component: VacancyApplicantsListCompanyComponent },
  { path: 'view-vacancy', component: VacancyViewJobSeekerComponent },
  { path: 'edit-vacancy', component: VacancyViewCompanyComponent },
  { path: 'post-vacancy', component: VacancyPostCompanyComponent }
];
