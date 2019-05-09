import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservacaoPage } from './pages/observacao/observacao.page';
import { ListaObservacaoPage } from './pages/lista-observacao/lista-observacao.page';
import { AdicionarInoculacaoPage } from './pages/adicionar-inoculacao/adicionar-inoculacao.page';
import { InoculacaoResolveService } from './resolve/inoculacao-resolve.service';
import {InicioPage } from './pages/inicio/inicio.page';
import { InoculacaoListResolveService } from './resolve/inoculacao-list-resolve.service';

const routes: Routes = [
  { path: '', component:  InicioPage},
  { path: 'observacao', component:  ObservacaoPage,
    resolve: {inoculacaoResolve: InoculacaoResolveService} },
  { path: 'lista-observacao', component:  ListaObservacaoPage,
    resolve: {routeListInoculacaoResolve: InoculacaoListResolveService} },
  { path: 'adicionar-inoculacao', component: AdicionarInoculacaoPage },
  { path: 'seis-dias', loadChildren: './pages/seis-dias/seis-dias.module#SeisDiasPageModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'lista-observacao', loadChildren: './pages/lista-observacao/lista-observacao.module#ListaObservacaoPageModule' }




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
