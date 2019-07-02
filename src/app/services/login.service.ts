import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Login } from '../interface/login';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interface/usuario';
import { ConfiguracoesService } from './configuracoes.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _USUARIO: BehaviorSubject<Usuario>;
  public readonly usuario$: Observable<Usuario>;
  private urlApi;

  constructor(private http: HttpClient,
              private config: ConfiguracoesService) {
    this._USUARIO = new BehaviorSubject({} as Usuario);
    this.usuario$ = this._USUARIO.asObservable();
    this.urlApi = this.config.getAPISERVER();
  }

  setUsuario(usuario: Usuario) {
    this._USUARIO.next(usuario);
  }


  public getListLogin(): Observable<Login[]> {
    return this.http.get<Login[]>(this.urlApi + `/login/`);
  }

  public getListLoginVeterinarios(): Observable<Login[]> {
    return this.http.get<Login[]>(this.urlApi + `/login/loginveterinarios`);
  }
}
