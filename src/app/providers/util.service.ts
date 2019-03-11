import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interface/login';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  public getListLogin(): Observable<Login[]> {
    return this.http.get<Login[]>(environment.endereco + `/login/`);
  }

  public getListLoginVeterinarios(): Observable<Login[]> {
    return this.http.get<Login[]>(environment.endereco + `/login/loginveterinarios`);
  }
}
