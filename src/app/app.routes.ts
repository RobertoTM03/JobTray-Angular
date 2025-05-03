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
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {AuthGuard} from './services/auth-guard.service';

export const routes: Routes = [
  { path: 'find-jobs', component: FindJobsJobSeekerComponent, canActivate: [AuthGuard] },
  { path: 'job-listing', component: JobListingCompanyComponent, canActivate: [AuthGuard] },
  { path: 'job-seeker-profile-view/:id', component:CompanyViewJobSeekerProfileComponent, canActivate: [AuthGuard] },
  { path: 'job-seeker-profile-edit', component: JobSeekerProfileEditComponent, canActivate: [AuthGuard]  },
  { path: 'sign-in-job-seeker', component: SignInJobSeekerComponent },
  { path: 'sign-in-company', component: SignInCompanyComponent },
  { path: 'sign-up-job-seeker', component: SignUpJobSeekerComponent },
  { path: 'sign-up-company', component: SignUpCompanyComponent },
  { path: 'vacancy-applicants/:id', component: VacancyApplicantsListCompanyComponent, canActivate: [AuthGuard] },
  { path: 'view-vacancy/:id', component: VacancyProfileEditViewerComponent, canActivate: [AuthGuard] },
  { path: 'edit-vacancy/:id', component: VacancyViewCompanyComponent, canActivate: [AuthGuard] },
  { path: 'post-vacancy', component: VacancyPostCompanyComponent, canActivate: [AuthGuard] },
  { path: 'main-page', component: MainPagesComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: '**', redirectTo: "not-found", pathMatch: 'full' },
];
