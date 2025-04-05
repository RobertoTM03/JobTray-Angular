import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-tittle',
  imports: [],
  templateUrl: './main-tittle.component.html',
  styleUrl: './main-tittle.component.css'
})
export class MainTittleComponent {
    @Input() tittle: string = 'title';
}
