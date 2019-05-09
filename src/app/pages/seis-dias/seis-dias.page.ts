import { Component, OnInit } from '@angular/core';
import { Inoculacao } from 'src/app/interface/inoculacao';
import { InoculacaoService } from 'src/app/providers/inoculacao.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-seis-dias',
  templateUrl: './seis-dias.page.html',
  styleUrls: ['./seis-dias.page.scss'],
})
export class SeisDiasPage implements OnInit {

  constructor(private inoculacaoService: InoculacaoService,
    public datePipe: DatePipe) { }

  public listaNaoFinalizada: Inoculacao[];
  public listaSeisDias: Inoculacao[];
  public listaFinalizacoes: Inoculacao[];
  private anoAtual = new Date().getFullYear();
  // Quantidade de milesegundos para deixar a data com o GTM -0300 (America/Sao_Paulo)
  private gtm3 = new Date().getTimezoneOffset() * 60 * 1000;

  listarSeisDias (data: string) {
    const dataDate = new Date(data).getTime() + this.gtm3;

    console.log(dataDate) ;

    this.inoculacaoService.getListSeisDias(dataDate).subscribe((lista) => {
      this.listaSeisDias = lista;
    },
    (error) => {
      console.log(error);
    }
    );

    this.inoculacaoService.getListFinalizacao(dataDate).subscribe((lista) => {
      this.listaFinalizacoes = lista;
    },
    (error) => {
      console.log(error);
    }
    );

    this.inoculacaoService.getNaoFinalizada(dataDate).subscribe((lista) => {
      this.listaNaoFinalizada = lista;
    },
    (error) => {
      console.log(error);
    }
    );
  }

  public carregarObservacao(input) {

    this.inoculacaoService.carregarInoculacaoPorID(input.id);
  }

  ngOnInit() {
    const data = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.listarSeisDias(data);
  }

}
