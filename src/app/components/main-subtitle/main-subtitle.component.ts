import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-subtitle',
  imports: [],
  templateUrl: './main-subtitle.component.html',
  styleUrl: './main-subtitle.component.css'
})
export class MainSubtitleComponent {
  @Input() subtitle: string = 'subtitle';
  @Input() prevPath: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('prevPath:', this.prevPath);
  }

  goBack(): void {
    this.router.navigate([`/${this.prevPath}`]);
  }
}
