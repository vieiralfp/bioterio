import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InoculacaoService } from 'src/app/providers/inoculacao.service';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router,
    private inoculacaoService: InoculacaoService) { }

    public agora: Date;
    public agora21;

  @Input() public input = { local: null, numero: null, ano: null };


  onEvent(event) {
    const local = event.local;
    switch (local) {
      case 'infectorio': {
        this.inoculacaoService.carregarInoculacaoPorDataAno(event.numero, event.ano);
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

  ngOnInit() {
    this.agora = new Date();
    this.agora21 = this.agora.getTime() + (21 * 24 * 60 * 60 * 1000);
  }

}
