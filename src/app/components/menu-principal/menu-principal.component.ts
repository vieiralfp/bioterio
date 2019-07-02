import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/interface/usuario';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private router: Router,
              public menuCtrl: MenuController,
              private auth: AuthService,
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
    url: 'adicionar-caixa',
    icon: 'assets/icon/inoculacao.svg'
  }

  ];

  public usuario: Usuario;

  public irPara(link) {
    this.router.navigate([link]);
    this.menuCtrl.close();
  }

  public logout() {
    this.auth.deslogar();
    this.menuCtrl.close();
  }


  ngOnInit() {
    this.loginService.usuario$.subscribe((usuario) => {
      this.usuario = usuario;
    });
  }

}
