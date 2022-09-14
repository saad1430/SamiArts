import { Component } from '@angular/core';
import { GeneralService } from './Services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private general:GeneralService){}
  title = this.general.title;
  color=Math.floor(Math.random() * 10);
  page = false;
  year = Date.now();

}