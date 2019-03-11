import { Component, OnInit } from '@angular/core';
import { DiaObservacao } from 'src/app/interface/dia-observacao';

import { Inoculacao } from 'src/app/interface/inoculacao';
import { InoculacaoService } from 'src/app/providers/inoculacao.service';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { DetalhesInoculacaoComponent } from '../../components/detalhes-inoculacao/detalhes-inoculacao.component';
import { Login } from 'src/app/interface/login';
import { UtilService } from 'src/app/providers/util.service';


@Component({
  selector: 'app-observacao',
  templateUrl: './observacao.page.html',
  styleUrls: ['./observacao.page.scss'],
})
export class ObservacaoPage implements OnInit {


  constructor(private inoculacaoService: InoculacaoService,
    public alertListInoculacao: ActionSheetController,
    public datePipe: DatePipe,
    public popoverController: PopoverController,
    private utilService: UtilService) {

  }

  public anoInicial = new Date();
  public inoculacao: Inoculacao = {id: null,
    dataInoculacao: null,
    principal: null,
    qtdInoculados: null,
    idadeCamundongo: null,
    statusReinoculacao: null,
    responsavelInoculacao: null,
    dataFinalizacao: null,
    responsavelFinalizacao: null,
    observacoes: null};
  public diaObservacao: DiaObservacao[];
  public inoculacaoList: Inoculacao[];
  public anoData: Date = new Date();
  public listaLogin: Login[] = [];
  // Para configurar o ion-input type=date
  public dataFinalizacao = '';
  private umDia = 86400000;
  public ativo = true;

  public n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  async presentAlert() {
    const alert = await this.alertListInoculacao.create({
      mode: 'ios',
      buttons: this.createButtons()
    });

    await alert.present();
  }

  createButtons() {
    console.log(this.inoculacaoList);
    const buttons = [];
    for ( const inoc of this.inoculacaoList) {
      const button = {
        text: 'Amostra: ' + inoc.principal.registro + ' - Inoculação: ' + this.datePipe.transform(inoc.dataInoculacao, 'dd-MM-yyyy'),
        handler: () => {
          this.inoculacao = inoc;
          this.dataFinalizacao = this.datePipe.transform(this.inoculacao.dataFinalizacao, 'yyyy-MM-dd');
          this.carregarDiaObservacao();
        }
      };
      buttons.push(button);
    }
    return buttons;
  }

  public carregarInoculacao(input) {

    if (input == null || input.numero == null || input.ano == null) {
      return;
    }
    this.inoculacaoService.getListaInoculacao(input.numero, input.ano).subscribe((data) => {

      this.inoculacaoList = data;

      console.log(data);

      if (this.inoculacaoList.length === 1) {
        this.inoculacao = this.inoculacaoList[0];
        this.dataFinalizacao = this.datePipe.transform(this.inoculacao.dataFinalizacao, 'yyyy-MM-dd');

      } else if (this.inoculacaoList.length > 1 ) {
        this.presentAlert();

      } else if (this.inoculacaoList.length === 0) {
        return;
      }


    },
    (error) => {
      console.log(error);
    },
    () => {
        this.carregarDiaObservacao();
      }
    );
  }

  carregarDiaObservacao() {
    if (this.inoculacao != null) {
      this.inoculacaoService.listaDiaObservaoPorInoculacao(this.inoculacao.id).
      subscribe( (data) => {
        this.diaObservacao = data;
        this.ativo = false;
      },
      (error) => {
        console.log(error);
      });
   }
  }

  editInoculacao() {

    if (this.inoculacao != null && this.inoculacao.id != null) {
      this.inoculacao.dataFinalizacao = Date.parse(this.dataFinalizacao) + this.umDia;

      this.inoculacaoService.editarInoculacao(this.inoculacao).subscribe(
        () => { console.log('salvo!'); },
        () => { console.log('erro'); }
      );
    }
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


  ngOnInit(): void {
    this.setListaLogin();
  }

}
