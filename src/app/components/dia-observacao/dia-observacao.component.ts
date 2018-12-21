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
  public class1 = [];
  public class2 = [];
  public seisDias = false;

  public camundongo = [];


  public dia = 0;
  public data = 0;

  private preencherCampos(diaObservacao: DiaObservacao) {

    this.dia = (Math.ceil((diaObservacao.dataobservacao - diaObservacao.inoculacao.dataInoculacao) / (24 * 60 * 60 * 1000)));
    this.seisDias = this.dia === 6;

    let camundongoN = 0;
    for (let index = 0; index < diaObservacao.saudaveis; index++) {
      this.setValor(camundongoN, '|');
      this.setClassesFalse(camundongoN);
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.doentes; index++) {
      this.setValor(camundongoN, 'D');
      this.setClassesFalse(camundongoN);
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.perdidos; index++) {
      this.setValor(camundongoN, 'P');
      this.setClassesFalse(camundongoN);
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.mortos; index++) {
      this.setValor(camundongoN, 'M');
      this.setClassesFalse(camundongoN);
      camundongoN++;
    }

    for (let index = 0; index < diaObservacao.eutanasias; index++) {
      this.setValor(camundongoN, 'E');
      this.setClassesFalse(camundongoN);
      camundongoN++;
    }

    if (camundongoN < 9) {
      for (camundongoN; camundongoN < 10; camundongoN++) {
        this.setValor(camundongoN, (camundongoN + 1).toString());
        this.class1[camundongoN] = false;
        this.class2[camundongoN] = true;
      }
    }

  }
  setValor(i: number, valor: string) {
    this.camundongo[i] = {i: i, valor: valor};
  }

  setClassesFalse(i) {
    this.class1[i] = false;
    this.class2[i] = false;
  }

  getValor(i: number) {
    console.log(this.camundongo[i]);
  }




  async presentAlert(camundongo) {
    const alert = await this.alertCtrl.create({
     cssClass: 'EditIcon',
     // mode: 'ios',
      buttons: [{
        text: '|',
        cssClass: 'EditIcon',
        handler: () => {
          this.setValor(camundongo.i, '|');
        }
      },
      {
        text: 'D',
        handler: () => {
          this.setValor(camundongo.i, 'D');
        }
      },
      {
        text: 'M',
        handler: () => {
          this.setValor(camundongo.i, 'M');
        }
      },
      {
        text: 'P',
        handler: () => {
          this.setValor(camundongo.i, 'P');
        }
      },
      {
        text: 'E',
        handler: () => {
          this.setValor(camundongo.i, 'E');
        }
      },
      {
        text: 'Vazio',
        handler: () => {
          this.setValor(camundongo.i, camundongo.i + 1);
          this.class2[camundongo.i] = true;
        }
      }]
    });

    alert.translucent = true;

    alert.onWillDismiss().then(
        () => {
            for ( const i in this.class1) {
              if ( i != null) {
                this.class1[i] = false;
              }
            }
          }
      );


    await alert.present();
  }

  panEvent(evt) {
    console.log(evt.center.y);
  }

  tap(i) {
    console.log(i);
  }


  ngOnInit() {
    this.preencherCampos(this.diaObservacao);
  }

}
