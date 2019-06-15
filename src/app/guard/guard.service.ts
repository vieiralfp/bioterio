import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private authService: AuthService,
              private route: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.autenticado$.pipe(map(data => {

      if (data === false) {
          this.authService.redirectUrl = state.url;
          this.route.navigate(['/login']);
      }

      return data;
  }));
  }
}
