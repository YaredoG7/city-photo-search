import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { City} from '../model/cities.interface';
import {Observable } from 'rxjs';

@Injectable()
export class DatasourceService {

  // could be avoided if we really need only the data, I am just using it here becasue I can

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
        })
        return response;
     })
   }

   getCitites(): Observable<City[]> {
     return this.http.get<City[]>(`${this.baseUrl}search`);
   }
}
