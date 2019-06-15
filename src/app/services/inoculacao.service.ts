import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inoculacao } from '../interface/inoculacao';
import { DiaObservacao } from '../interface/dia-observacao';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InoculacaoService {

  constructor(private http: HttpClient,
              private router: Router) {
                this._INOCULACAO = new BehaviorSubject(null);
                this.inoculacao$ = this._INOCULACAO.asObservable();
                this._DIAINOCULACAO = new BehaviorSubject(null);
                this.diainoculacao$ = this._DIAINOCULACAO.asObservable();
               }

              private _INOCULACAO: BehaviorSubject<Inoculacao>;
              public readonly inoculacao$: Observable<Inoculacao>;
              private _DIAINOCULACAO: BehaviorSubject<DiaObservacao[]>;
              public readonly diainoculacao$: Observable<DiaObservacao[]>;

  private inoculacaoResolve: Inoculacao;
  private diaObservacaoResolve: DiaObservacao[];
  public local;
  public listInoculacaoResolve: Inoculacao[];

  public newInoculacao: Inoculacao = {id: null,
    dataInoculacao: null,
    principal: null,
    qtdInoculados: null,
    idadeCamundongo: null,
    statusReinoculacao: null,
    responsavelInoculacao: null,
    dataFinalizacao: null,
    responsavelFinalizacao: null,
    observacoes: null};


  // Resolve
   getInoculacaoResolve() {
    return {inoculacao: this.inoculacaoResolve, diaObservacao: this.diaObservacaoResolve};
  }

  // Resolve
  setInoculacaoResolve(inoculacao: Inoculacao, diaObservacao: DiaObservacao[]) {

    this.inoculacaoResolve = inoculacao;
    this.diaObservacaoResolve = diaObservacao;
    this._INOCULACAO.next(inoculacao);
    this._DIAINOCULACAO.next(diaObservacao);
  }

  // Resolve
  setListInoculacaoResolve(listInoculacao: Inoculacao[]) {
    this.listInoculacaoResolve = listInoculacao;
  }

  // Resolve
  getListInoculacaoResolve() {
    return this.listInoculacaoResolve;
  }

  irPara(url) {
    this.router.navigate([url]);
  }

  getInoculacao(id): Observable<Inoculacao> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', '*/*');

    return this.http.get<Inoculacao>(environment.endereco + `/inoculacao/${id}`, {headers} );
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

  deletarInoculacao(id: number): Observable<Inoculacao> {
    return this.http.delete<Inoculacao>(environment.endereco + `/inoculacao/${id}`,
    {headers: this.getHeaders()} );
  }

  nextInoculacao(id: number): Observable<Inoculacao> {
    return this.http.get<Inoculacao>(environment.endereco + `/inoculacao/next/${id}`);
  }

  previousInoculacao(id: number): Observable<Inoculacao> {
    return this.http.get<Inoculacao>(environment.endereco + `/inoculacao/previous/${id}`);
  }

  getListSeisDias(data: number) {
    return this.http.get<Inoculacao[]>(environment.endereco + `/inoculacao/seisdias/${data}`);
  }

  getListFinalizacao(data: number) {
    return this.http.get<Inoculacao[]>(environment.endereco + `/inoculacao/finalizacao/${data}`);
  }

  getNaoFinalizada(data: number) {
    return this.http.get<Inoculacao[]>(environment.endereco + `/inoculacao/naofinalizada/${data}`);
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



  public carregarInoculacaoPorID(id) {
    this.getInoculacao(id).subscribe((inoculacao) => {
      if (inoculacao != null) {
        this.listaDiaObservaoPorInoculacao(inoculacao.id).subscribe((diaObsercacaoList) => {
          this.setInoculacaoResolve(inoculacao, diaObsercacaoList);
          this.router.navigate(['observacao']);
        });
      }
    });
  }


  public carregarInoculacaoPorDataAno(numero, ano) {

    if (numero != null && ano != null) {

      this.getListaInoculacao(numero, ano).subscribe((data) => {

        if (data.length === 1) {
          console.log(data);
          this.listaDiaObservaoPorInoculacao(data[0].id).subscribe((diaObsercacaoList) => {
            this.setInoculacaoResolve(data[0], diaObsercacaoList);
            this.router.navigate(['observacao']);
            return this.getInoculacaoResolve();
          });

        } else if (data.length > 1 ) {
          this.setListInoculacaoResolve(data);
          this.router.navigate(['lista-observacao']);

        } else if (data.length === 0) {
          this.setInoculacaoResolve(this.newInoculacao, []);
          this.router.navigate(['observacao']);
        }


      },
      (error) => {
        console.log(error);
      }
      );
    }
  }
}





