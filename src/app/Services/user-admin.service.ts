import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, tap } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  private url = "http://localhost:3000/useradmin/saad1430/";

  httpOptions : {headers:HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type":"application/json"}),
  };

  constructor(
    private errorHandlerService:ErrorHandlerService,
    private http:HttpClient) { }

  fetchAll() : Observable<User[]>{
    return this.http.get<User[]>(this.url, {responseType:"json"})
    .pipe(tap((_)=>console.log("User fetched!")),
    catchError(
      this.errorHandlerService.handleError<User[]>("fetchAll",[])
    ));
  };
}
