import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interface/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InoculacaoService {

  constructor(private http: HttpClient) { }

  getInoculacao(id): Observable<Login> {
    return this.http.get<Login>('http://localhost:8080/bioteriorest/rest/login/' + id );
  }
}


