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
import { SearchComponent } from './components/search/search.component';
import { DetalhesInoculacaoComponent } from './components/detalhes-inoculacao/detalhes-inoculacao.component';



@NgModule({
  declarations: [AppComponent, DetalhesInoculacaoComponent],
  entryComponents: [DetalhesInoculacaoComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
     AppRoutingModule,
      HttpClientModule,
      FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    FormsModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
