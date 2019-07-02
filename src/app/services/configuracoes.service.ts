import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesService {
  constructor(private http: HttpClient) {}

  get protocolo() {
    return localStorage.getItem('IP_PROTOCOLO');
  }

  set protocolo(protocolo: string) {
    localStorage.setItem('IP_PROTOCOLO', protocolo);
  }

  get ipServidor() {
    return localStorage.getItem('IP_SERVIDOR');
  }

  set ipServidor(ip: string) {
    localStorage.setItem('IP_SERVIDOR', ip);
  }

  get porta() {
    return localStorage.getItem('IP_PORTA');
  }

  set porta(porta: string) {
    localStorage.setItem('IP_PORTA', porta);
  }

  get urlApi() {
    return localStorage.getItem('URL_API');
  }

  set urlApi(url: string) {
    localStorage.setItem('URL_API', url);
  }

  get usarConfigAlternativa() {
    if (localStorage.getItem('USAR_CONFIG_ALTERNATIVA') === 'TRUE' ) {
      return true;
    }
    return false;
  }

  set usarConfigAlternativa(usar: boolean) {
    if (usar) {
      localStorage.setItem('USAR_CONFIG_ALTERNATIVA', 'TRUE');
    } else {
      localStorage.setItem('USAR_CONFIG_ALTERNATIVA', 'FALSE');
    }
  }

  getAPISERVER(): string {
    if (this.usarConfigAlternativa) {
      return this.protocolo + '://' + this.ipServidor + ':' + this.porta + '/' + this.urlApi;
    }
    return environment.endereco;
  }

}
