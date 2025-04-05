import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header-job-seeker',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header-job-seeker.component.html',
  styleUrl: './header-job-seeker.component.css',

})
export class HeaderJobSeekerComponent {
  imagen="/assets/asps.png";


}
