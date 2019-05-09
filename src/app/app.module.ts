import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import 'hammerjs';
import { SearchModule } from './components/search/search.module';
import { DetalhesInoculacaoComponent } from './components/detalhes-inoculacao/detalhes-inoculacao.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ObservacaoPageModule } from './pages/observacao/observacao.module';
import { ListaObservacaoPageModule } from './pages/lista-observacao/lista-observacao.module';
import { AdicionarInoculacaoPageModule } from './pages/adicionar-inoculacao/adicionar-inoculacao.module';
import { InoculacaoResolveService } from './resolve/inoculacao-resolve.service';
import { InicioPageModule } from './pages/inicio/inicio.module';
import { ToastComponent } from './components/toast/toast.component';


@NgModule({
  declarations: [AppComponent, DetalhesInoculacaoComponent, MenuPrincipalComponent, ToastComponent],
  entryComponents: [DetalhesInoculacaoComponent, MenuPrincipalComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
     AppRoutingModule,
      HttpClientModule,
      FormsModule,
      SearchModule,
      InicioPageModule,
      ObservacaoPageModule,
      ListaObservacaoPageModule,
      AdicionarInoculacaoPageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    FormsModule,
    InoculacaoResolveService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
