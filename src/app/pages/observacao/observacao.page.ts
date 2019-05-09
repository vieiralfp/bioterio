import { Component, OnInit } from '@angular/core';
import { DiaObservacao } from 'src/app/interface/dia-observacao';

import { Inoculacao } from 'src/app/interface/inoculacao';
import { InoculacaoService } from 'src/app/providers/inoculacao.service';
import { ActionSheetController, PopoverController, ToastController, Events, MenuController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Login } from 'src/app/interface/login';
import { UtilService } from 'src/app/providers/util.service';
import { Router, ActivatedRoute, Data, NavigationEnd } from '@angular/router';
import { ToastComponent } from 'src/app/components/toast/toast.component';


@Component({
  selector: 'app-observacao',
  templateUrl: './observacao.page.html',
  styleUrls: ['./observacao.page.scss'],
})
export class ObservacaoPage extends ToastComponent implements OnInit {

  constructor(private inoculacaoService: InoculacaoService,
              public datePipe: DatePipe,
              private utilService: UtilService,
              public toastController: ToastController,
              public alertCtrl: ActionSheetController,
              private route: ActivatedRoute
    ) {
      super(toastController);
    }



  public anoInicial = new Date();
  public inoculacao: Inoculacao = this.inoculacaoService.newInoculacao;
  public diaObservacao: DiaObservacao[];
  public listaLogin: Login[] = [];

  // Para configurar o ion-input type=date
  public dataFinalizacao = '';

  // Quantidade de milesegundos para deixar a data com o GTM -0300 (America/Sao_Paulo)
  private gtm3 = new Date().getTimezoneOffset() * 60 * 1000;
  public ativo = true;

  public n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public id;

  async presentMenu() {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      buttons: [
        {
          text: 'Próxima Caixa',
          handler: () => {
           this.proximaCaixa();
          }
        },
        {
          text: 'Caixa Anterior',
          handler: () => {
           this.previousCaixa();
          }
        },
        {
        text: 'Criar ficha de observação',
        handler: () => {
         this.inoculacaoService.irPara('adicionar-inoculacao');
        }
      },
      {
        text: 'Deletar',
        handler: () => {
         this.deletar();
        }
      },
        { text: 'Cancelar',
          role: 'cancel',
        }
    ]
    });

    alert.translucent = true;

    await alert.present();
  }

  public deletar() {
    if (this.inoculacao != null) {
      this.inoculacaoService.deletarInoculacao(this.inoculacao.id).subscribe(
        () => {
          this.presentToastColor('Registro deletado', 'success');
          this.inoculacao = this.inoculacaoService.newInoculacao;
          this.diaObservacao = [];
        },
        (error) => {
          this.presentToastColor(error, 'danger');
        }
      );
    }
  }


  editInoculacao() {

    if (this.inoculacao != null && this.inoculacao.id != null && this.id === this.inoculacao.id) {
      this.inoculacao.dataFinalizacao = Date.parse(this.dataFinalizacao) + this.gtm3;

      this.inoculacaoService.editarInoculacao(this.inoculacao).subscribe(
        () => {
        this.presentToastColor('Dados salvos com sucesso', 'success');
       },
        () => { console.log('erro'); }
      );
    }

  }

  setId(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.id = id;
      },
      1000);
      });
  }

  setListaLogin() {
    this.utilService.getListLoginVeterinarios().
    subscribe( (listaLogins) => {
      this.listaLogin = listaLogins;
    },
    (error) => {
      console.log('Falha ao buscar Usuários' + error);
    });
  }

 proximaCaixa() {

    if (this.inoculacao.id != null ) {

      this.inoculacaoService.nextInoculacao(this.inoculacao.id).subscribe((data) => {
        console.log(data);

        if (data != null ) {
          this.inoculacaoService.listaDiaObservaoPorInoculacao(data.id).subscribe((data2) => {
            this.inoculacao = data;
            this.diaObservacao = data2;
            this.setId(this.inoculacao.id);
          });
        }

      },
      (error) => {
        console.log(error.error);
        this.presentToastColor(error.error, 'dark');
      });
    }
  }

  previousCaixa() {

    if (this.inoculacao.id != null ) {

      this.inoculacaoService.previousInoculacao(this.inoculacao.id).subscribe((data) => {
        console.log(data);

        if (data != null ) {
          this.inoculacaoService.listaDiaObservaoPorInoculacao(data.id).subscribe((data2) => {
            this.inoculacao = data;
            this.diaObservacao = data2;
            this.setId(this.inoculacao.id);
          });
        }

      },
      (error) => {
        console.log(error.error);
        this.presentToastColor(error.error, 'dark');
      });
    }
  }

  ngOnInit(): void {
    this.setListaLogin();
    const data = this.route.snapshot.data.inoculacaoResolve;
    if (data != null && data.inoculacao != null && data.inoculacao.id != null) {
      this.inoculacao = data.inoculacao;
      this.diaObservacao = data.diaObservacao;
      this.setId(this.inoculacao.id);
      this.inoculacaoService.setInoculacaoResolve(null, null);
    }

  }

  }
