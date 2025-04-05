import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-subtitle',
  imports: [],
  templateUrl: './main-subtitle.component.html',
  styleUrl: './main-subtitle.component.css'
})
export class MainSubtitleComponent {
  @Input() subtitle: string = 'subtitle';
}
