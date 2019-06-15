import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize, tap, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TokenService } from './token.service';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';
import { TokenApi } from '../interface/token-api';
import * as jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _AUTENTICADO: BehaviorSubject<boolean>;
  public readonly autenticado$: Observable<boolean>;
  public redirectUrl: string;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private usuarioService: LoginService,
    private route: Router
  ) {
    this._AUTENTICADO = new BehaviorSubject(false);
    this.autenticado$ = this._AUTENTICADO.asObservable();
  }

  logar(login: string, password: string): Observable<boolean> {
    const url = `${environment.endereco}/login`;
    const body = new HttpParams()
    .set('login', login)
    .set('password', password);

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');



    return this.http.post(url, body, {headers, observe: 'response'}
      ).pipe(
      map((resposta) => {
        return this.criarSessao(resposta.headers.get('Authorization'));
      })
    );
  }

  deslogar() {
    const url = `${environment.endereco}/auth/logout`;
    return this.http.post<TokenApi>(url, {}).pipe(
      finalize(() => { this.resetarSessao(); })
    );
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
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  resetarSessao() {
    this.tokenService.resetarToken();
    if (this._AUTENTICADO.value) {
      this._AUTENTICADO.next(false);
    }
  }

}
