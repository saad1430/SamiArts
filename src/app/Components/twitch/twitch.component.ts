import { Component, OnInit } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { Twitch } from 'src/app/models/twitch';

import { GeneralService } from 'src/app/Services/general.service';
import { TwitchService } from 'src/app/Services/twitch.service';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class TwitchComponent implements OnInit {

  twitchs$!: Observable<Twitch[]>

  constructor(
    private generel:GeneralService,
    private TwitchService:TwitchService
    ) { }

  title= this.generel.title;

  ngOnInit(): void {
    this.twitchs$ = this.fetchAll();
  }
  
  fetchAll(): Observable<Twitch[]> {
    return this.TwitchService.fetchAll();
  }

}
