import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservacaoPage } from './pages/observacao/observacao.page';
import { ListaObservacaoPage } from './pages/lista-observacao/lista-observacao.page';
import { AdicionarInoculacaoPage } from './pages/adicionar-inoculacao/adicionar-inoculacao.page';
import { InoculacaoResolveService } from './resolve/inoculacao-resolve.service';
import {InicioPage } from './pages/inicio/inicio.page';
import { InoculacaoListResolveService } from './resolve/inoculacao-list-resolve.service';
import { NotGuardService } from './guard/not-guard.service';
import { GuardService } from './guard/guard.service';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  { path: '',
    component:  InicioPage,
    canActivate: [GuardService],
  },
  { path: 'observacao',
    component:  ObservacaoPage,
   // resolve: {inoculacaoResolve: InoculacaoResolveService},
    canActivate: [GuardService]
  },
  { path: 'lista-observacao',
    component:  ListaObservacaoPage,
 //   resolve: {routeListInoculacaoResolve: InoculacaoListResolveService},
    canActivate: [GuardService]
   },
  { path: 'adicionar-inoculacao',
    component: AdicionarInoculacaoPage,
    canActivate: [GuardService]
  },
  { path: 'seis-dias',
    loadChildren: './pages/seis-dias/seis-dias.module#SeisDiasPageModule',
    canActivate: [GuardService]
  },
  { path: 'inicio',
    loadChildren: './pages/inicio/inicio.module#InicioPageModule',
    canActivate: [GuardService]
  },
  { path: 'lista-observacao',
    loadChildren: './pages/lista-observacao/lista-observacao.module#ListaObservacaoPageModule',
    canActivate: [GuardService]
  },

  { path: 'login',
    component: LoginPage,
    canActivate: [NotGuardService]
  },  { path: 'configuracoes', loadChildren: './pages/configuracoes/configuracoes.module#ConfiguracoesPageModule' }





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
