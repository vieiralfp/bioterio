import { Component, OnInit } from '@angular/core';
import { DiaObservacao } from 'src/app/interface/dia-observacao';

import { ActionSheetController, PopoverController, ToastController, Events, MenuController, LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Login } from 'src/app/interface/login';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute, Data, NavigationEnd } from '@angular/router';
import { ToastComponent } from 'src/app/components/toast/toast.component';
import { fromEvent, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Caixa } from 'src/app/interface/caixa';
import { CaixaService } from 'src/app/services/caixa.service';


@Component({
  selector: 'app-observacao',
  templateUrl: './observacao.page.html',
  styleUrls: ['./observacao.page.scss'],
})
export class ObservacaoPage extends ToastComponent implements OnInit {

  constructor(private caixaService: CaixaService,
              public datePipe: DatePipe,
              private loginService: LoginService,
              public toastController: ToastController,
              public alertCtrl: ActionSheetController,
              private router: Router,
              private loadingController: LoadingController
    ) {
      super(toastController);
    }



  public anoInicial = new Date();
  public caixa: Caixa = this.caixaService.newCaixa;
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
         this.caixaService.irPara('adicionar-inoculacao');
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
    if (this.caixa != null) {
      this.caixaService.deletarInoculacao(this.caixa.id).subscribe(
        () => {
          this.presentToastColor('Registro deletado', 'success');
          this.caixa = null;
          this.diaObservacao = [];
          this.router.navigate(['inicio']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 403) {
          this.presentToastColorDuracao(error.error.erro, 'danger', 3000);
          } else {
            this.presentToastColorDuracao('Erro desconhecido', 'danger', 3000);
          }
        }
      );
    }
  }

  editInoculacao() {

    if (this.caixa != null && this.caixa.id != null && this.id === this.caixa.id) {
      this.caixa.dataFinalizacao = Date.parse(this.dataFinalizacao) + this.gtm3;

      this.caixaService.editarInoculacao(this.caixa).subscribe(
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
      1500);
      });
  }

  setListaLogin() {
    this.loginService.getListLoginVeterinarios().
    subscribe( (listaLogins) => {
      this.listaLogin = listaLogins;
    },
    (error) => {
      console.log('Falha ao buscar Usuários' + error);
    });
  }

 proximaCaixa() {

    if (this.caixa.id != null ) {

      this.caixaService.nextInoculacao(this.caixa.id).subscribe((data) => {

        if (data != null ) {
            this.caixa = data;
            this.diaObservacao = data.observacaocamundongolist;
            this.setId(this.caixa.id);
        }

      },
      (error) => {
        console.log(error.error);
        this.presentToastColor(error.error, 'dark');
      });
    }
  }

  previousCaixa() {

    if (this.caixa.id != null ) {

      this.caixaService.previousInoculacao(this.caixa.id).subscribe((data) => {

        if (data != null ) {
            this.caixa = data;
            this.diaObservacao = data.observacaocamundongolist;
            this.setId(this.caixa.id);
        }

      },
      (error) => {
        console.log(error.error);
        this.presentToastColor(error.error, 'dark');
      });
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 0
    });
    await loading.present().then(() => {
        this.setListaLogin();
        this.caixaService.caixa$.subscribe((cx) => {
        if (cx != null) {
          this.caixa = cx;
          this.diaObservacao = cx.observacaocamundongolist;
          this.setId(this.caixa.id);
        } else {
          this.router.navigate(['inicio']);
        }
        loading.dismiss();
      });
    });

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  ngOnInit(): void {
    this.presentLoading();
  }

  }
