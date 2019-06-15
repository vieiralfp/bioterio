import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaObservacaoPage } from './lista-observacao.page';

const routes: Routes = [
  {
    path: '',
    component: ListaObservacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaObservacaoPage]
})
export class ListaObservacaoPageModule {}
