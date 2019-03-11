import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObservacaoPage } from './observacao.page';

import { DiaObservacaoComponent } from '../../components/dia-observacao/dia-observacao.component';
import { SearchComponent } from '../../components/search/search.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [ObservacaoPage, DiaObservacaoComponent, SearchComponent],
  entryComponents: [SearchComponent]
})
export class ObservacaoPageModule {}
