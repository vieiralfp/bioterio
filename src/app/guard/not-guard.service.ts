import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotGuardService {

  constructor(private authService: AuthService,
              private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.authService.autenticado$.pipe(
      map(autenticado => {
        return !autenticado;
      })
    );
  }
}
