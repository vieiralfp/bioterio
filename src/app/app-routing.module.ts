import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservacaoPage } from './pages/observacao/observacao.page';
import { ListaObservacaoPage } from './pages/lista-observacao/lista-observacao.page';
import {InicioPage } from './pages/inicio/inicio.page';
import { NotGuardService } from './guard/not-guard.service';
import { GuardService } from './guard/guard.service';
import { LoginPage } from './pages/login/login.page';
import { ConfiguracoesPage } from './pages/configuracoes/configuracoes.page';

const routes: Routes = [
  { path: '',
    component:  InicioPage,
    canActivate: [GuardService],
  },
  { path: 'observacao',
    component:  ObservacaoPage,
    canActivate: [GuardService]
  },
  { path: 'lista-observacao',
    component:  ListaObservacaoPage,
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
  },
  { path: 'configuracoes',
    component: ConfiguracoesPage,
    canActivate: [NotGuardService]
  },
  { path: 'adicionar-caixa',
    loadChildren: './pages/adicionar-caixa/adicionar-caixa.module#AdicionarCaixaPageModule',
    canActivate: [GuardService]
  }






];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
