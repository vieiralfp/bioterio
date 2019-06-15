import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Principal } from '../interface/principal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }

  getPrincipal(id): Observable<Principal> {
    return this.http.get<Principal>(environment.endereco + `/principal/${id}`);
  }

  getPrincipalNumeroAmostraAno(namostra, ano): Observable<Principal> {
    return this.http.get<Principal>(environment.endereco + `/principal/namostra/${namostra}/${ano}`);
  }
}
