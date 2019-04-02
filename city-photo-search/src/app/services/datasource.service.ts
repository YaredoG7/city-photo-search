import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"; 
import {Observable, throwError } from "rxjs"; 
import {HttpResponse, HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class DatasourceService {
 private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/'
   }

   authenticate(user: string, pass: string): Observable<boolean> {
     return this.http.post<any>(`${this.baseUrl}login`, {
       username: user, password: pass
     }).pipe(response => {
        response.subscribe(resp => {
          sessionStorage.setItem('access_token', resp.token);
          response = resp.success;
          // console.log(response);
        })
        return response;
     })
   }
}
