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

  private preencherCampos(diaObservacao: DiaObservacao) {

    this.dia = (Math.ceil((diaObservacao.dataObservacao - diaObservacao.inoculacao.dataInoculacao) / (24 * 60 * 60 * 1000)));
    this.seisDias = this.dia === 6;

    let i = 0;
    for (let index = 0; index < diaObservacao.saudaveis; index++) {
      this.setCamundongo(i, '|');
      this.setClassesFalse(i);
      i++;
    }

    for (let index = 0; index < diaObservacao.doentes; index++) {
      this.setCamundongo(i, 'D');
      this.setClassesFalse(i);
      i++;
    }

    for (let index = 0; index < diaObservacao.perdidos; index++) {
      this.setCamundongo(i, 'P');
      this.setClassesFalse(i);
      i++;
    }

    for (let index = 0; index < diaObservacao.mortos; index++) {
      this.setCamundongo(i, 'M');
      this.setClassesFalse(i);
      i++;
    }

    for (let index = 0; index < diaObservacao.eutanasias; index++) {
      this.setCamundongo(i, 'E');
      this.setClassesFalse(i);
      i++;
    }

    if (i < 9) {
      for (i; i < 10; i++) {
        this.setCamundongo(i, (i + 1).toString());
        this.class1[i] = false;
        this.class2[i] = true;
      }
    }

  }
  setCamundongo(i: number, valor: string) {
    this.camundongo[i] = valor;
    this.class2[i] = false;
  }

  setClassesFalse(i) {
    this.class1[i] = false;
    this.class2[i] = false;
  }

  getDiaObservacao(): DiaObservacao {
    let saudaveis = 0;
    let doentes = 0;
    let eutanasias = 0;
    let perdidos = 0;
    let mortos = 0;

    this.camundongo.forEach(element => {

      switch (element) {
        case '|':
          saudaveis++;
          break;
        case 'D' :
          doentes++;
          break;
        case 'E':
          eutanasias++;
          break;
        case 'P':
          perdidos++;
          break;
        case 'M':
          mortos++;
          break;
        default:

        }
      });
     const valor: DiaObservacao = {id: this.diaObservacao.id,
                                 saudaveis: saudaveis,
                                  mortos: mortos,
                                  doentes: doentes,
                                  perdidos: perdidos,
                                  eutanasias: eutanasias,
                                  dataObservacao: this.diaObservacao.dataObservacao,
                                  inoculacao: this.diaObservacao.inoculacao,
                                  observacoes: this.diaObservacao.observacoes };

    console.log(valor);
    return valor;
  }

  async presentAlert(i) {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      buttons: [{
        text: '|',
        handler: () => {
         this.preencherSaudavelQuandoVazio(i);
         this.setCamundongo(i, '|');
        }
      },
      {
        text: 'D',
        handler: () => {
          this.setCamundongo(i, 'D');
        }
      },
      {
        text: 'M',
        handler: () => {
          this.setCamundongo(i, 'M');
        }
      },
      {
        text: 'P',
        handler: () => {
          this.setCamundongo(i, 'P');
        }
      },
      {
        text: 'E',
        handler: () => {
          this.setCamundongo(i, 'E');
        }
      },
      {
        text: 'Vazio',
        handler: () => {
          this.setCamundongo(i, (i + 1).toString() );
          this.class2[i] = true;
        }
      }]
    });

    alert.translucent = true;

    alert.onWillDismiss().then(
        () => {
            for ( const indx in this.class1) {
              if ( indx != null) {
                this.class1[indx] = false;
              }
            }
          }
      );


    await alert.present();
  }

  preencherSaudavelQuandoVazio(i) {
    if (i > 0 ) {
      for (let n = 0; n < i; n++) {
        if ( this.camundongo[n] === (n + 1).toString() ) {
          this.setCamundongo(n, '|');
        }
      }
    }
  }

  ngOnInit() {
    this.preencherCampos(this.diaObservacao);
  }

}
