import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { InoculacaoService } from '../services/inoculacao.service';

@Injectable({
  providedIn: 'root'
})
export class InoculacaoResolveService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot) {
    return this.inoculacaoService.getInoculacaoResolve();
  }

  constructor(private inoculacaoService: InoculacaoService) { }
}
