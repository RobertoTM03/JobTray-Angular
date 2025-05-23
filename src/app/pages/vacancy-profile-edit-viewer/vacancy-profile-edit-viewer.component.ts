import { Component } from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderJobSeekerComponent} from '../../components/header-job-seeker/header-job-seeker.component';
import {VacancyProfileViewComponent} from '../../components/vacancy-profile-view/vacancy-profile-view.component';

@Component({
  selector: 'app-vacancy-profile-edit-viewer',
  imports: [
    FooterComponent,
    HeaderJobSeekerComponent,
    VacancyProfileViewComponent
  ],
  templateUrl: './vacancy-profile-edit-viewer.component.html',
  styleUrl: './vacancy-profile-edit-viewer.component.css'
})

export class VacancyProfileEditViewerComponent {
}
