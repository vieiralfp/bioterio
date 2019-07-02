import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import 'hammerjs';
import { SearchModule } from './components/search/search.module';
import { DetalhesInoculacaoComponent } from './components/detalhes-inoculacao/detalhes-inoculacao.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ObservacaoPageModule } from './pages/observacao/observacao.module';
import { ListaObservacaoPageModule } from './pages/lista-observacao/lista-observacao.module';
import { InicioPageModule } from './pages/inicio/inicio.module';
import { ToastComponent } from './components/toast/toast.component';
import { LoginPageModule } from './pages/login/login.module';
import { ConfiguracoesPageModule } from './pages/configuracoes/configuracoes.module';
import { TokenApiService } from './interceptadores/token-api.service';
import { InvalidTokenApiService } from './interceptadores/invalid-token.service';
import { RefreshTokenService } from './interceptadores/refresh-token.service';


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
      LoginPageModule,
      ListaObservacaoPageModule,
      ConfiguracoesPageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    FormsModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenApiService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
