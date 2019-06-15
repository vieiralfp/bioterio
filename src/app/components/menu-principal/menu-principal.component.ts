import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { InoculacaoService } from 'src/app/services/inoculacao.service';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/interface/usuario';
import { Observable } from 'rxjs';
import { Inoculacao } from 'src/app/interface/inoculacao';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private router: Router,
              public menuCtrl: MenuController,
              private inoculacaoService: InoculacaoService,
              private loginService: LoginService) { }

  links = [{
    titulo: 'Home',
    url: 'inicio',
    icon: 'assets/icon/home.svg'
  },
  {
    titulo: 'Observação Infectório',
    url: 'seis-dias',
    icon: 'assets/icon/observacao.svg'
  },
  {
    titulo: 'Criar Ficha Inoculação',
    url: 'adicionar-inoculacao',
    icon: 'assets/icon/inoculacao.svg'
  }

  ];

  public usuario: Usuario;
  public inoculacao: Inoculacao;

  public irPara(link) {
    this.router.navigate([link]);
    this.menuCtrl.close();
  }


  ngOnInit() {
    this.loginService.usuario$.subscribe((usuario) => {
      this.usuario = usuario;
    });
    this.inoculacaoService.inoculacao$.subscribe((data) => {
      this.inoculacao = data;
    });
  }

}
