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

  getInoculacao(id): Observable<Inoculacao> {
    return this.http.get<Inoculacao>(environment.endereco + `/inoculacao/${id}` );
  }

  getListaInoculacao(namostra: number, ano: number): Observable<Inoculacao[]> {
    return this.http.get<Inoculacao[]>(environment.endereco + `/inoculacao/namostra/${namostra}/${ano}`);
  }

  salvarInoculacao(inoculacao: Inoculacao): Observable<Inoculacao> {
    return this.http.post<Inoculacao>(environment.endereco + `/inoculacao/`, inoculacao,
    {headers: this.getHeaders()} );
  }

  editarInoculacao(inoculacao: Inoculacao): Observable<Inoculacao> {
    return this.http.put<Inoculacao>(environment.endereco + '/inoculacao/' + inoculacao.id, inoculacao);
  }

  editarDiaObservacao(diaObservacao: DiaObservacao): Observable<DiaObservacao> {
    return this.http.put<DiaObservacao>(environment.endereco + '/observacao/' + diaObservacao.id, diaObservacao);
  }

  salvarDiaObservacao(diaObservacao: DiaObservacao): Observable<DiaObservacao> {
    return this.http.post<DiaObservacao>(environment.endereco + '/observacao/' , diaObservacao,
    {headers: this.getHeaders()});
  }

  listaDiaObservaoPorInoculacao(inoculacaoID: number): Observable<DiaObservacao[]> {
    return this.http.get<DiaObservacao[]>(environment.endereco +
       `/observacao/listaobservacaoporinoculacao/${inoculacaoID}`);
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}





