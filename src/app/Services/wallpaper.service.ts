import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, tap } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

import { Wallpaper } from '../models/wallpaper';

@Injectable({
  providedIn: 'root'
})
export class WallpaperService {

  private url = "http://localhost:3000/wallpaper/";

  httpOptions : {headers:HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type":"application/json"}),
  };

  constructor(
    private errorHandlerService:ErrorHandlerService,
    private http:HttpClient) { }

  fetchAll() : Observable<Wallpaper[]>{
    return this.http.get<Wallpaper[]>(this.url, {responseType:"json"})
    .pipe(tap((_)=>console.log("Wallpapers fetched!")),
    catchError(
      this.errorHandlerService.handleError<Wallpaper[]>("fetchAll",[])
    ));
  };
}
