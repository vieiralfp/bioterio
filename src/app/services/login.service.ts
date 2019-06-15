import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Login } from '../interface/login';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _USUARIO: BehaviorSubject<Usuario>;
  public readonly usuario$: Observable<Usuario>;

  constructor(private http: HttpClient) {
    this._USUARIO = new BehaviorSubject({} as Usuario);
    this.usuario$ = this._USUARIO.asObservable();
  }

  setUsuario(usuario: Usuario) {
    this._USUARIO.next(usuario);
  }


  public getListLogin(): Observable<Login[]> {
    return this.http.get<Login[]>(environment.endereco + `/login/`);
  }

  public getListLoginVeterinarios(): Observable<Login[]> {
    return this.http.get<Login[]>(environment.endereco + `/login/loginveterinarios`);
  }
}
