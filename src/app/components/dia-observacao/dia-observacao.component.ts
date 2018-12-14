import { Component, OnInit } from '@angular/core';
import { Inoculacao } from 'src/app/interface/inoculacao';
import { DiaObservacao } from 'src/app/interface/dia-observacao';

@Component({
  selector: 'app-dia-observacao',
  templateUrl: './dia-observacao.component.html',
  styleUrls: ['./dia-observacao.component.scss']
})
export class DiaObservacaoComponent implements OnInit {


    public diaObservacao: DiaObservacao = { id: 0,
                                            saudaveis: 6,
                                            doentes: 1,
                                            mortos: 1,
                                            eutanasias: 1,
                                            perdidos: 1,
                                            dataobservacao: 33000000,
                                            inoculacao: null};

  public camundongo = [];


  public dia = 0;
  public data = 0;

  private preencherCampos(diaObservacao: DiaObservacao) {

    let camundongoN = 0;
    for (let index = 0; index < diaObservacao.saudaveis; index++) {
      this.setValor(camundongoN, '|');
      // this.camundongo[camundongoN] = '|';
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.doentes; index++) {
      this.setValor(camundongoN, 'D');
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.perdidos; index++) {
      this.setValor(camundongoN, 'P');
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.mortos; index++) {
      this.setValor(camundongoN, 'M');
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.eutanasias; index++) {
      this.setValor(camundongoN, 'E');
      camundongoN++;
    }

  }
  setValor(i: number, valor: string) {
    this.camundongo[i] = {i: i, valor: valor};
  }

  getValor(i: number) {
    console.log(this.camundongo[i]);
  }

  inicio(i: number) {
    console.log('inicio=' + this.camundongo[i].i);
  }

  fim(i: number) {
    console.log('fim=' + this.camundongo[i].i);
  }

  getPosition(e) {
    console.log(e);
  }

  ngOnInit() {
    this.preencherCampos(this.diaObservacao);
  }

}
