import { Component, OnInit } from '@angular/core';
import { InoculacaoService } from '../providers/inoculacao.service';
import { Login } from '../interface/login';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public nome = 'Luiz Fernando';

  constructor(public inoculacao: InoculacaoService) {}

  ngOnInit(): void {
    this.inoculacao.getInoculacao(0)
    .subscribe((login: Login) => {
      if ( login != null ) {
        this.nome = login.nome;
      }
    },
    () => {this.nome = 'Erro'; }
    );
  }


}

