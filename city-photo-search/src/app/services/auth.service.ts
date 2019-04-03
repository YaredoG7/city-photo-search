import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DatasourceService} from './datasource.service';
@Injectable()
export class AuthService {

  constructor(private dataSource: DatasourceService) { }

  authenticate(username: string, password: string): Observable<boolean>{
    return this.dataSource.authenticate(username, password);
    }

  get authenticated(): boolean {
    return sessionStorage.getItem('access_token') !==  null;
    }

  clear() {
    sessionStorage.removeItem('access_token');
    }

  public checkLogin(): boolean {
    return this.authenticated;
   }
}
