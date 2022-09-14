import { Component, OnInit } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { Wallpaper } from 'src/app/models/wallpaper';

import { GeneralService } from 'src/app/Services/general.service';
import { WallpaperService } from 'src/app/Services/wallpaper.service';

@Component({
  selector: 'app-animated-wallpaper',
  templateUrl: './animated-wallpaper.component.html',
  styleUrls: ['./animated-wallpaper.component.scss']
})
export class AnimatedWallpaperComponent implements OnInit {

  wallpapers$!: Observable<Wallpaper[]>

  constructor(
    private generel:GeneralService,
    private WallpaperService:WallpaperService
    ) { }

  title= this.generel.title;

  ngOnInit(): void {
    this.wallpapers$ = this.fetchAll();
  }
  
  fetchAll(): Observable<Wallpaper[]> {
    return this.WallpaperService.fetchAll();
  }
}
