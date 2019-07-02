import { Component, OnInit } from '@angular/core';
import { ConfiguracoesService } from 'src/app/services/configuracoes.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  constructor(private config: ConfiguracoesService) { }

  public usarConfig = false;
  public protocolo = '';
  public ipServidor = '';
  public porta = '';
  public urlApi = '';

  setServidor() {
    this.config.usarConfigAlternativa = this.usarConfig;
    this.config.protocolo = this.protocolo;
    this.config.ipServidor = this.ipServidor;
    this.config.porta = this.porta;
    this.config.urlApi = this.urlApi;
  }

  ngOnInit() {
    this.usarConfig = this.config.usarConfigAlternativa;
    this.protocolo = this.config.protocolo;
    this.ipServidor = this.config.ipServidor;
    this.porta = this.config.porta;
    this.urlApi = this.config.urlApi;
  }

}
