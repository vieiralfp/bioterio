import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CaixaService } from 'src/app/services/caixa.service';
import { Caixa } from 'src/app/interface/caixa';

@Component({
  selector: 'app-seis-dias',
  templateUrl: './seis-dias.page.html',
  styleUrls: ['./seis-dias.page.scss'],
})
export class SeisDiasPage implements OnInit {

  constructor(public datePipe: DatePipe,
              private caixaService: CaixaService) { }

  public listaNaoFinalizada = [];
  public listaSeisDias = [];
  public listaFinalizacoes = [];
  // Quantidade de milesegundos para deixar a data com o GTM -0300 (America/Sao_Paulo)
  private gtm3 = new Date().getTimezoneOffset() * 60 * 1000;
  // Para configurar o ion-input type=date
  public dataPesquisa = '';

  listarSeisDias() {
    // Carregar lista de não finalizado com DiaObservacao[] junto. Retirar desta lista as sublistas
    // de seis dias e finalização. Alterar método Carregar inoculação por ID para apenas passar
    // a inoculação já carregada e não buscá-la novamente do banco

    // Melhorar o visual para o usuário saber que está indo para a outra página

    const dataDate = new Date(this.dataPesquisa).getTime() + this.gtm3;


    this.caixaService.listaSeisDias(dataDate);
    this.caixaService.caixasseis$.subscribe((listaSeis) => {
      this.listaSeisDias = listaSeis;
    },
    (erro) => {
      console.log(erro);
    });

    this.caixaService.listaFinalizacao(dataDate);
    this.caixaService.caixasfinal$.subscribe((lista) => {
      this.listaFinalizacoes = lista;
    },
    (error) => {
      console.log(error);
    }
    );

    this.caixaService.getNaoFinalizada(dataDate);
    this.caixaService.caixas$.subscribe( (caixas) => {
      this.listaNaoFinalizada = caixas;
    },
    (erro) => {
      console.log(erro);
    });

  }


  public carregarInoculacaoPorId(id) {
    this.caixaService.carregarInoculacaoPorId(id);
  }

  ngOnInit() {
    this.dataPesquisa = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.listarSeisDias();
  }

}
