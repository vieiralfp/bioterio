import { Component, OnInit, Input } from '@angular/core';
import { DiaObservacao } from '../../interface/dia-observacao';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-dia-observacao',
  templateUrl: './dia-observacao.component.html',
  styleUrls: ['./dia-observacao.component.scss']
})
export class DiaObservacaoComponent implements OnInit {



  @Input() diaObservacao: DiaObservacao = <DiaObservacao>{};


  constructor(public alertCtrl: ActionSheetController) {

  }
  public x = [];

  public camundongo = [];


  public dia = 0;
  public data = 0;

  private preencherCampos(diaObservacao: DiaObservacao) {

    let camundongoN = 0;
    for (let index = 0; index < diaObservacao.saudaveis; index++) {
      this.setValor(camundongoN, '|');
      this.x[camundongoN] = false;
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.doentes; index++) {
      this.setValor(camundongoN, 'D');
      this.x[camundongoN] = false;
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.perdidos; index++) {
      this.setValor(camundongoN, 'P');
      this.x[camundongoN] = false;
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.mortos; index++) {
      this.setValor(camundongoN, 'M');
      this.x[camundongoN] = false;
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.eutanasias; index++) {
      this.setValor(camundongoN, 'E');
      this.x[camundongoN] = false;
      camundongoN++;
    }

  }
  setValor(i: number, valor: string) {
    this.camundongo[i] = {i: i, valor: valor};
  }

  getValor(i: number) {
    console.log(this.camundongo[i]);
  }


  async presentAlert(camundongo) {
    const alert = await this.alertCtrl.create({
      header: 'Observação Camundongo',
      mode: 'ios',
      buttons: [{
        text: '|',
        handler: () => {
          this.setValor(camundongo.i, '|');
          this.x[camundongo.i] = false;
        }
      },
      {
        text: 'D',
        handler: () => {
          this.setValor(camundongo.i, 'D');
          this.x[camundongo.i] = false;
        }
      },
      {
        text: 'M',
        handler: () => {
          this.setValor(camundongo.i, 'M');
          this.x[camundongo.i] = false;
        }
      },
      {
        text: 'P',
        handler: () => {
          this.setValor(camundongo.i, 'P');
          this.x[camundongo.i] = false;
        }
      },
      {
        text: 'E',
        handler: () => {
          this.setValor(camundongo.i, 'E');
          this.x[camundongo.i] = false;
        }
      }]
    });

    await alert.present();
  }


  ngOnInit() {
    this.preencherCampos(this.diaObservacao);
  }

}
