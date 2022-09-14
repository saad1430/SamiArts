import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, tap } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

import { Artwork } from '../models/artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private url = "http://localhost:3000/artwork/";

  httpOptions : {headers:HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type":"application/json"}),
  };

  constructor(
    private errorHandlerService:ErrorHandlerService,
    private http:HttpClient) { }

  fetchAll() : Observable<Artwork[]>{
    return this.http.get<Artwork[]>(this.url, {responseType:"json"})
    .pipe(tap((_)=>console.log("Artworks fetched!")),
    catchError(
      this.errorHandlerService.handleError<Artwork[]>("fetchAll",[])
    ));
  };

  // post(title:Partial<Artwork>):Observable<any>{
  //   return this.http.post<Partial<Artwork>>(this.url, title, this.httpOptions).pipe(
  //     catchError(
  //       this.errorHandlerService.handleError<any>("post")
  //     )
  //   )
  // };

  // update(Artwork:Artwork):Observable<any>{
  //   return this.http.put<Artwork>(this.url, Artwork, this.httpOptions).pipe(
  //     catchError(
  //       this.errorHandlerService.handleError<any>("update")
  //     )
  //   )
  // };

  // updateStatus(Artwork:Artwork):Observable<any>{
  //   return this.http.put<Artwork>(this.url, Artwork, this.httpOptions).pipe(
  //     catchError(
  //       this.errorHandlerService.handleError<any>("update")
  //     )
  //   )
  // };
  
  // delete(id:number):Observable<any>{
  //   return this.http.delete<Artwork>(this.url+`${id}`,this.httpOptions).pipe(
  //     catchError(
  //       this.errorHandlerService.handleError<any>("delete")
  //     )
  //   )
  // };
}
