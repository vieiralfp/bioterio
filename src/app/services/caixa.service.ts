import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Caixa } from '../interface/caixa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfiguracoesService } from './configuracoes.service';
import { DiaObservacao } from '../interface/dia-observacao';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {

  constructor(private http: HttpClient,
              private config: ConfiguracoesService,
              private router: Router) {

    this._CAIXAS = new BehaviorSubject(null);
    this.caixas$ = this._CAIXAS.asObservable();

    this._CAIXASSEIS = new BehaviorSubject(null);
    this.caixasseis$ = this._CAIXASSEIS.asObservable();

    this._CAIXASFINAL = new BehaviorSubject(null);
    this.caixasfinal$ = this._CAIXASFINAL.asObservable();

    this._CAIXA = new BehaviorSubject(null);
    this.caixa$ = this._CAIXA.asObservable();
   }

  private _CAIXAS: BehaviorSubject<Caixa[]>;
  public readonly caixas$: Observable<Caixa[]>;

  private _CAIXASSEIS: BehaviorSubject<Caixa[]>;
  public readonly caixasseis$: Observable<Caixa[]>;

  private _CAIXASFINAL: BehaviorSubject<Caixa[]>;
  public readonly caixasfinal$: Observable<Caixa[]>;

  private _CAIXA: BehaviorSubject<Caixa>;
  public readonly caixa$: Observable<Caixa>;
  public local;


    public newCaixa: Caixa = {id: null,
      dataInoculacao: null,
      principal: null,
      qtdInoculados: null,
      idadeCamundongo: null,
      statusReinoculacao: null,
      responsavelInoculacao: null,
      dataFinalizacao: null,
      responsavelFinalizacao: null,
      observacoes: null,
      observacaocamundongolist: []};

   /** Retorna as caixas do infectório não finalizadas */
   getNaoFinalizada(data: number) {

    this.http.get<Caixa[]>(this.config.getAPISERVER() + `/inoculacao/naofinalizada/${data}`)
    .subscribe((inoculacoes) => {
      this._CAIXAS.next(inoculacoes);
    });

  }

  listaSeisDias(data: number) {
    this.http.get<Caixa[]>(this.config.getAPISERVER() +
     `/inoculacao/seisdias/${data}`).subscribe((lista) => {
      this._CAIXASSEIS.next(lista);
    })  ;
  }

  listaFinalizacao(data: number) {
    this.http.get<Caixa[]>(this.config.getAPISERVER() +
     `/inoculacao/finalizacao/${data}`).subscribe((lista) => {
      this._CAIXASFINAL.next(lista);
    })  ;
  }

    public carregarInoculacaoPorId(id) {
      return this.http.get<Caixa>(this.config.getAPISERVER() + `/inoculacao/${id}`).subscribe((cx) => {
        this._CAIXA.next(cx);
        this.router.navigate(['observacao']);
      });
    }

    public carregarInoculacaoPorCaixa(caixa: Caixa) {
        if (caixa != null) {
            this._CAIXA.next(caixa);
            this.router.navigate(['observacao']);
        }
    }

    salvarInoculacao(inoculacao: Caixa): Observable<Caixa> {
      return this.http.post<Caixa>(this.config.getAPISERVER() + `/inoculacao/`, inoculacao,
      {headers: this.getHeaders()} );
    }

    editarInoculacao(inoculacao: Caixa): Observable<Caixa> {
      return this.http.put<Caixa>(this.config.getAPISERVER() + '/inoculacao/' + inoculacao.id, inoculacao);
    }

    deletarInoculacao(id: number): Observable<Caixa> {
      return this.http.delete<Caixa>(this.config.getAPISERVER() + `/inoculacao/${id}`,
      {headers: this.getHeaders()} );
    }

    irPara(url) {
      this.router.navigate([url]);
    }

    nextInoculacao(id: number): Observable<Caixa> {
      return this.http.get<Caixa>(this.config.getAPISERVER() + `/inoculacao/next/${id}`);
    }

    previousInoculacao(id: number): Observable<Caixa> {
      return this.http.get<Caixa>(this.config.getAPISERVER() + `/inoculacao/previous/${id}`);
    }

    editarDiaObservacao(diaObservacao: DiaObservacao): Observable<DiaObservacao> {
      return this.http.put<DiaObservacao>(this.config.getAPISERVER() + '/observacao/' + diaObservacao.id, diaObservacao);
    }

    getListaInoculacao(namostra: number, ano: number): Observable<Caixa[]> {
      return this.http.get<Caixa[]>(this.config.getAPISERVER() + `/inoculacao/namostra/${namostra}/${ano}`);
    }

    public carregarInoculacaoPorDataAno(numero, ano) {

      if (numero != null && ano != null) {

        this.getListaInoculacao(numero, ano).subscribe((data) => {

          if (data.length === 1) {
            this._CAIXA.next(data[0]);
            this.router.navigate(['observacao']);

          } else if (data.length > 1 ) {
            this._CAIXAS.next(data);
            this.router.navigate(['lista-observacao']);

          } else if (data.length === 0) {
            return 'Caixa não encontrada';
          }

        },
        (error) => {
          console.log(error);
        }
        );
      }
    }


    private getHeaders(): HttpHeaders {
      const headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      return headers;
    }


}
