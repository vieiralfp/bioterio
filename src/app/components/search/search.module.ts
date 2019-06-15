import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule ({
    declarations: [
      SearchComponent
    ],
    exports: [
      SearchComponent
    ],
    imports: [
      IonicModule,
      FormsModule
    ]
  })
  export class SearchModule { }
