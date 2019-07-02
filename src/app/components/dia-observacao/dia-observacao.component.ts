import { Component, OnInit, Input } from '@angular/core';
import { DiaObservacao } from '../../interface/dia-observacao';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { ToastComponent } from '../toast/toast.component';
import { Caixa } from 'src/app/interface/caixa';
import { CaixaService } from 'src/app/services/caixa.service';

@Component({
  selector: 'app-dia-observacao',
  templateUrl: './dia-observacao.component.html',
  styleUrls: ['./dia-observacao.component.scss']
})
export class DiaObservacaoComponent extends ToastComponent implements OnInit {


  @Input() caixa: Caixa = null;
  @Input() diaObservacao: DiaObservacao = {} as DiaObservacao;


  constructor(public alertCtrl: ActionSheetController,
              private caixaService: CaixaService,
              public toastController: ToastController) {
                super(toastController);

  }
  public class1 = [];
  public class2 = [];
  public seisDias = false;

  public camundongo = [];


  public dia = 0;

  private preencherCampos(diaObservacao: DiaObservacao) {

    this.dia = (Math.ceil((diaObservacao.dataObservacao - this.caixa.dataInoculacao) / (24 * 60 * 60 * 1000)));
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
    let saud = 0;
    let doen = 0;
    let euta = 0;
    let perd = 0;
    let mort = 0;

    this.camundongo.forEach(element => {

      switch (element) {
        case '|':
          saud++;
          break;
        case 'D' :
          doen++;
          break;
        case 'E':
          euta++;
          break;
        case 'P':
          perd++;
          break;
        case 'M':
          mort++;
          break;
        default:

        }
      });
    const valor: DiaObservacao = { id: this.diaObservacao.id,
                                    saudaveis: saud,
                                    mortos: mort,
                                    doentes: doen,
                                    perdidos: perd,
                                    eutanasias: euta,
                                    dataObservacao: this.diaObservacao.dataObservacao,
                                    inoculacao: this.caixa };

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
            this.salvarDiaObservacao();
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

  salvarDiaObservacao() {
    this.caixaService.editarDiaObservacao(this.getDiaObservacao()).subscribe(() => {
      this.presentToast();
    },
    (error) => {
      console.log(error);
    }
    );
  }

  ngOnInit() {
    this.preencherCampos(this.diaObservacao);
  }

  async presentToast() {
    this.presentToastColor('Dados salvos com sucesso', 'success');
  }

}
