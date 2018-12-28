import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'observacao', loadChildren: './pages/observacao/observacao.module#ObservacaoPageModule' },  { path: 'adicionar-inoculacao', loadChildren: './pages/adicionar-inoculacao/adicionar-inoculacao.module#AdicionarInoculacaoPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
