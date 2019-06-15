import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObservacaoPage } from './observacao.page';

import { DiaObservacaoComponent } from '../../components/dia-observacao/dia-observacao.component';
 import { SearchModule } from '../../components/search/search.module';

const routes: Routes = [
  {
    path: '',
    component: ObservacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ObservacaoPage
  ],
  declarations: [ObservacaoPage, DiaObservacaoComponent],
  entryComponents: [DiaObservacaoComponent]
})
export class ObservacaoPageModule {}
