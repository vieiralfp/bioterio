import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdicionarCaixaPage } from './adicionar-caixa.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarCaixaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdicionarCaixaPage]
})
export class AdicionarCaixaPageModule {}
