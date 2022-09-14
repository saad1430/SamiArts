import { Component, OnInit } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { Artwork } from 'src/app/models/artwork';
import { ArtworkService } from 'src/app/Services/artwork.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artworks$!: Observable<Artwork[]>

  constructor(
    private generel:GeneralService,
    private ArtworkService:ArtworkService
    ) { }

  title= this.generel.title;

  ngOnInit(): void {
    this.artworks$ = this.fetchAll();
  }
  
  fetchAll(): Observable<Artwork[]> {
    return this.ArtworkService.fetchAll();
  }

  

}
