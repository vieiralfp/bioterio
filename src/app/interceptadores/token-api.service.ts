import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenApiService implements HttpInterceptor {

  constructor(private tokenService: TokenService,
              private auth: AuthService,
              private router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (this.tokenService.token && !this.auth.logando) {
      req = req.clone({ setHeaders: { Authorization:  this.tokenService.token }});
    }

    return next.handle(req);
  }


}
