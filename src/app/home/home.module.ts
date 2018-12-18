import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
 import { ObservacaoComponent } from '../components/observacao/observacao.component';
import { DiaObservacaoComponent } from '../components/dia-observacao/dia-observacao.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
    declarations: [HomePage, ObservacaoComponent, DiaObservacaoComponent]
})
export class HomePageModule {}
