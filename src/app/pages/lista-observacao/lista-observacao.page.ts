import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaixaService } from 'src/app/services/caixa.service';
import { Caixa } from 'src/app/interface/caixa';

@Component({
  selector: 'app-lista-observacao',
  templateUrl: './lista-observacao.page.html',
  styleUrls: ['./lista-observacao.page.scss'],
})
export class ListaObservacaoPage implements OnInit {

  constructor(private caixaService: CaixaService) { }

  public caixaList: Caixa[];

  public carregarObservacao(caixa: Caixa) {
    this.caixaService.carregarInoculacaoPorCaixa(caixa);
  }


  ngOnInit() {
    this.caixaService.caixas$.subscribe((caixas) => {
      this.caixaList = caixas;
    });
  }

}
