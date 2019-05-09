import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/providers/principal.service';
import { Inoculacao } from 'src/app/interface/inoculacao';
import { Login } from 'src/app/interface/login';
import { UtilService } from 'src/app/providers/util.service';
import { InoculacaoService } from 'src/app/providers/inoculacao.service';
import { DatePipe } from '@angular/common';
import { DiaObservacao } from 'src/app/interface/dia-observacao';
import { AlertController, Events, ToastController } from '@ionic/angular';
import { ToastComponent } from 'src/app/components/toast/toast.component';

@Component({
  selector: 'app-adicionar-inoculacao',
  templateUrl: './adicionar-inoculacao.page.html',
  styleUrls: ['./adicionar-inoculacao.page.scss'],
})
export class AdicionarInoculacaoPage extends ToastComponent implements OnInit {

  constructor(private principalService: PrincipalService,
    private utilService: UtilService, private inoculcaoService: InoculacaoService,
    public datePipe: DatePipe,
    public alertController: AlertController,
    public toastController: ToastController) {
    super(toastController);
  }


  public inoculacao: Inoculacao = {dataFinalizacao: null, dataInoculacao: null, id: null,
    idadeCamundongo: null, observacoes: null, principal: null, qtdInoculados: null,
    responsavelFinalizacao: null, responsavelInoculacao: null, statusReinoculacao: null };

  public listaLogin: Login[] = [];

  // Quantidade de milesegundos para deixar a data com o GTM -0300 (America/Sao_Paulo)
  private gtm3 = new Date().getTimezoneOffset() * 60 * 1000;

  // Para configurar o ano atual
  public dataInicial = new Date();
  public responsavelInoculacao: Login;

  // Para configurar o ion-input type=date
  public dataInoculacao = '';

  public getPrincipalNamostraAno(namostra: number, ano: number) {
    this.principalService.getPrincipalNumeroAmostraAno(namostra, ano)
    .subscribe( (data) => {
      if (data != null ) {
        this.inoculacao.principal = data;
        this.inoculacao.statusReinoculacao = 'primeira';
        this.inoculacao.qtdInoculados = 8;
        this.inoculacao.idadeCamundongo = '21-28 dias';

        this.dataInoculacao = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      } else {
        this.exibirAlertPrincipalNaoEncontrado(namostra, ano);
      }
    },
    (error) => {
      console.log('Falha ao buscar Principal' + error);
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

  async exibirAlertPrincipalNaoEncontrado(namostra, ano) {
    const alert = await this.alertController.create({
      header: 'Não encontrada',
      message: 'Amostra ' + namostra + '/' + ano + ' não encontrada',
      buttons: ['Ok']
    });
    await alert.present();
  }

  public salvarInoculacao() {

    this.inoculacao.dataInoculacao = Date.parse(this.dataInoculacao) + this.gtm3;

    // persiste Inoculacao no banco de dados, depois persiste trinta DiaObservacao
    this.inoculcaoService.salvarInoculacao(this.inoculacao).subscribe((data) => {

      for (let i = 0; i < 30; i++) {

        const  dataObservacao = (this.inoculacao.dataInoculacao) + ((i + 1 ) * 24 * 60 * 60 * 1000);
        const diaObservacao: DiaObservacao = {id: null, dataObservacao: dataObservacao, doentes: 0,
        eutanasias: 0, mortos: 0, perdidos: 0,  saudaveis: 0, inoculacao: data };

        this.inoculcaoService.salvarDiaObservacao(diaObservacao).subscribe(() => {

        },
        (error) => {
          console.log(error);
        });
      }
      this.exibirMensagem();
      this.cancelar();
    },
    (error) => {
      console.log(error);
    }
    );

  }

  public cancelar() {
    this.dataInoculacao = null;
    this.inoculacao = {dataFinalizacao: null, dataInoculacao: null, id: null,
      idadeCamundongo: null, observacoes: null, principal: null, qtdInoculados: null,
      responsavelFinalizacao: null, responsavelInoculacao: null, statusReinoculacao: null };
  }

  exibirMensagem() {
    this.presentToastColor('Salvo com sucesso', 'success');
  }

  ngOnInit() {
    this.setListaLogin();
  }

}
