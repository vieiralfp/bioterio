import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { InoculacaoService } from 'src/app/providers/inoculacao.service';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private router: Router,
    public menuCtrl: MenuController,
    private inoculacaoService: InoculacaoService) { }

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

  public irPara(link) {
    this.router.navigateByUrl(link);
    this.menuCtrl.close();
  }


  ngOnInit() {
  }

}
