import { Component, OnInit } from '@angular/core';
import { IonicModule, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { InoculacaoService } from 'src/app/providers/inoculacao.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  constructor(public events: Events,
              private router: Router,
              private inoculacaoService: InoculacaoService) {}

  public anoInicial = new Date();

  public input = {local: null, numero: null, ano: new Date().getFullYear()};


    onSubmit() {

      switch (this.input.local) {
        case 'infectorio': {
          this.inoculacaoService.carregarInoculacaoPorDataAno(this.input.numero, this.input.ano);
          break;
        }
        case 'nucleo': {
          this.router.navigateByUrl('adicionar-inoculacao');
          break;
        }
        default: {
          this.router.navigateByUrl('observacao');
        }
      }
    }

    atualizaLocal() {
      this.inoculacaoService.local = this.input.local;
      console.log(this.input.local);
    }

    ngOnInit(): void {
      this.input.local = this.inoculacaoService.local;
    }

}
