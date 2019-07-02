import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Principal } from '../interface/principal';
import { Observable } from 'rxjs';
import { ConfiguracoesService } from './configuracoes.service';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private urlApi;

  constructor(private http: HttpClient,
              private config: ConfiguracoesService) {
                this.urlApi = this.config.getAPISERVER();
               }

  getPrincipal(id): Observable<Principal> {
    return this.http.get<Principal>(this.urlApi + `/principal/${id}`);
  }

  getPrincipalNumeroAmostraAno(namostra, ano): Observable<Principal> {
    return this.http.get<Principal>(this.urlApi + `/principal/namostra/${namostra}/${ano}`);
  }

  editPrincipal(principal: Principal) {
    return this.http.put<Principal>(this.urlApi + `/principal/${principal.id}`, principal);
  }
}
