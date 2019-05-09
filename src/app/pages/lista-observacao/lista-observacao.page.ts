import { Component, OnInit } from '@angular/core';
import { Inoculacao } from 'src/app/interface/inoculacao';
import { ActivatedRoute } from '@angular/router';
import { InoculacaoService } from 'src/app/providers/inoculacao.service';

@Component({
  selector: 'app-lista-observacao',
  templateUrl: './lista-observacao.page.html',
  styleUrls: ['./lista-observacao.page.scss'],
})
export class ListaObservacaoPage implements OnInit {

  constructor(private inoculacaoService: InoculacaoService,
              private route: ActivatedRoute) { }

  public inoculacaoList: Inoculacao[];

  public carregarObservacao(input) {
    this.inoculacaoService.carregarInoculacaoPorID(input.id);
  }


  ngOnInit() {

    const data = this.route.snapshot.data.routeListInoculacaoResolve;
    console.log(data);
    if (data != null) {
      this.inoculacaoList = data;
      console.log('aqui', this.inoculacaoList);
      this.inoculacaoService.setListInoculacaoResolve(null);
    }
  }

}
