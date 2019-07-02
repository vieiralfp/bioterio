import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize, tap, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import { LoginService } from './login.service';
import * as jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { Usuario } from '../interface/usuario';
import { ConfiguracoesService } from './configuracoes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _AUTENTICADO: BehaviorSubject<boolean>;
  public readonly autenticado$: Observable<boolean>;
  public redirectUrl: string;
  public refreshingToken = false;
  public logando = false;
  private urlApi;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private usuarioService: LoginService,
    private route: Router,
    private config: ConfiguracoesService
  ) {
    this._AUTENTICADO = new BehaviorSubject(false);
    this.autenticado$ = this._AUTENTICADO.asObservable();
    this.urlApi = this.config.getAPISERVER();
  }

  logar(login: string, password: string): Observable<boolean> {
    const url = this.urlApi + '/login';
    const body = new HttpParams()
    .set('login', login)
    .set('password', password);

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');

    this.logando = true;

    return this.http.post(url, body, {headers, observe: 'response'}
      ).pipe(
      map((resposta) => {
        return this.criarSessao(resposta.headers.get('Authorization'));
      })
    );
  }

  deslogar() {
    this.apagarToken();
    this.route.navigate(['login']);
  }

  criarSessao(token: string): boolean {
    try {
      const usuario: Usuario = jwtDecode(token);
      this.usuarioService.setUsuario(usuario);
      this.tokenService.token = token;
      this._AUTENTICADO.next(true);
      this.redirectUrl = (this.redirectUrl == null || this.redirectUrl === 'login' ||
      this.redirectUrl === '/login')  ? 'inicio' : this.redirectUrl;
      this.route.navigate([this.redirectUrl]);
      this.logando = false;
      return true;
    } catch (err) {
      console.log(err);
      this.logando = false;
      return false;
    }
  }

  refreshToken(): Observable<HttpResponse<any>> {
    const url = `${this.urlApi}/login/refresh`;
    const headers = new HttpHeaders();

    return this.http.post(url, null, {headers, observe: 'response'}
      ).pipe(
      map((resposta) => {
         const token = resposta.headers.get('Authorization');
         this.tokenService.token = token;
         const usuario: Usuario = jwtDecode(token);
         this.usuarioService.setUsuario(usuario);
         this.refreshingToken = false;
         return resposta;
      },
      (error) => {
        console.log(error);
        return null;
      })
    );
  }

  apagarToken() {
    this.tokenService.invalidarToken();
    if (this._AUTENTICADO.value) {
      this._AUTENTICADO.next(false);
    }
  }

}
