import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AdicionarInoculacaoPageModule } from '../pages/adicionar-inoculacao/adicionar-inoculacao.module';
import { AboutPageModule } from '../about/about.module';
import { ObservacaoPageModule } from '../pages/observacao/observacao.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ObservacaoPageModule,
    AdicionarInoculacaoPageModule,
    AboutPageModule,
    ContactPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
