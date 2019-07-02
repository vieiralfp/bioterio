import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Usuario } from '../interface/usuario';
import * as jwtDecode from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { TryCatchStmt } from '@angular/compiler';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService implements HttpInterceptor {

  constructor(private tokenService: TokenService,
              private authService: AuthService) { }

  intercept(  req: HttpRequest<any>,
              next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (this.tokenService.token) {
      const usuario: Usuario = jwtDecode(this.tokenService.token);
      const faltaParaExpirar = ((usuario.exp * 1000) - new Date().getTime()) / 60000;
      if (faltaParaExpirar < 10 && !this.authService.refreshingToken ) {
        try {
          this.authService.refreshingToken = true;
          this.authService.refreshToken().subscribe();
        } catch (erro) {
          console.log(erro);
        }
      }
    }
    return next.handle(req);
  }

}
