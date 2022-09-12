import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-animated-wallpaper',
  templateUrl: './animated-wallpaper.component.html',
  styleUrls: ['./animated-wallpaper.component.scss']
})
export class AnimatedWallpaperComponent implements OnInit {

  constructor(private generel:GeneralService) { }

  title= this.generel.title;

  ngOnInit(): void {
  }

}
