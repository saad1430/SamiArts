import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, tap } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

import { Twitch } from '../models/twitch';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  private url = "http://localhost:3000/twitch/";

  httpOptions : {headers:HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type":"application/json"}),
  };

  constructor(
    private errorHandlerService:ErrorHandlerService,
    private http:HttpClient) { }

  fetchAll() : Observable<Twitch[]>{
    return this.http.get<Twitch[]>(this.url, {responseType:"json"})
    .pipe(tap((_)=>console.log("Twitch Overlay fetched!")),
    catchError(
      this.errorHandlerService.handleError<Twitch[]>("fetchAll",[])
    ));
  };
}
