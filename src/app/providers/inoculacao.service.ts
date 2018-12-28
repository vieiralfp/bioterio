import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../interface/login';
import { Observable } from 'rxjs';
import { Principal } from '../interface/principal';
import { environment } from 'src/environments/environment';
import { Inoculacao } from '../interface/inoculacao';
import { DiaObservacao } from '../interface/dia-observacao';

@Injectable({
  providedIn: 'root'
})
export class InoculacaoService {

  constructor(private http: HttpClient) { }

  getInoculacao(id): Observable<Login> {
    return this.http.get<Login>(environment.endereco + `/login/${id}` );
  }

  getPrincipal(id): Observable<Principal> {
    return this.http.get<Principal>(environment.endereco + `/principal/${id}`);
  }

  salvarInoculacao(inoculacao: Inoculacao): Observable<Inoculacao> {
    return this.http.post<Inoculacao>(environment.endereco + `/inoculacao/`, inoculacao,
    {headers: this.getHeaders()} );
  }

  editarDiaObservacao(diaObservacao: DiaObservacao): Observable<DiaObservacao> {
    return this.http.put<DiaObservacao>(environment.endereco + '/observacao/' + diaObservacao.id, diaObservacao);
  }

  slavarDiaObservacao(diaObservacao: DiaObservacao): Observable<DiaObservacao> {
    return this.http.post<DiaObservacao>(environment.endereco + '/observacao/' + diaObservacao.id, diaObservacao,
    {headers: this.getHeaders()});
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}





