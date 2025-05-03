import { Component } from '@angular/core';
import {HeaderMainPageComponent} from '../../components/header-main-page/header-main-page.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {MainPageComponent} from '../../components/main-page/main-page.component';

@Component({
  selector: 'app-main-pages',
  imports: [HeaderMainPageComponent, FooterComponent, MainPageComponent],
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})

export class MainPagesComponent {}
