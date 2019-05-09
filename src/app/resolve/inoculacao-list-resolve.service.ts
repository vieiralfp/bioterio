import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { InoculacaoService } from '../providers/inoculacao.service';

@Injectable({
  providedIn: 'root'
})
export class InoculacaoListResolveService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot) {
    return this.inoculacaoService.getListInoculacaoResolve();
  }

  constructor(private inoculacaoService: InoculacaoService) { }
}
