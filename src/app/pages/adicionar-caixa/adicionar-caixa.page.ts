import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { Login } from 'src/app/interface/login';
import { LoginService } from 'src/app/services/login.service';
import { DatePipe } from '@angular/common';
import { ToastComponent } from 'src/app/components/toast/toast.component';
import { Caixa } from 'src/app/interface/caixa';
import { ToastController } from '@ionic/angular';
import { CaixaService } from 'src/app/services/caixa.service';


@Component({
  selector: 'app-adicionar-caixa',
  templateUrl: './adicionar-caixa.page.html',
  styleUrls: ['./adicionar-caixa.page.scss'],
})
export class AdicionarCaixaPage extends ToastComponent implements OnInit {


  constructor(private principalService: PrincipalService,
              private loginService: LoginService,
              private caixaService: CaixaService,
              public datePipe: DatePipe,
              public toastController: ToastController) {
              super(toastController);
}


public caixa: Caixa = this.newCaixa();

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
        this.caixa.principal = data;
        this.caixa.statusReinoculacao = 'primeira';
        this.caixa.qtdInoculados = 8;
        this.caixa.idadeCamundongo = '21-28 dias';

        this.dataInoculacao = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    } else {
        this.presentToastColorDuracao('Amostra ' + namostra + '/' + ano + ' não encontrada', 'danger', 2000);
    }
    },
    (error) => {
        console.log('Falha ao buscar Principal' + error);
    });
}

setListaLogin() {
    this.loginService.getListLoginVeterinarios().
        subscribe( (listaLogins) => {
            this.listaLogin = listaLogins;
        },
            (error) => {
                console.log('Falha ao buscar Usuários' + error);
            }
        );
}

public salvarInoculacao() {

    this.caixa.dataInoculacao = Date.parse(this.dataInoculacao) + this.gtm3;
    this.caixa.observacaocamundongolist = [];
    // persiste Inoculacao no banco de dados, depois persiste trinta DiaObservacao
    for (let i = 0; i < 30; i++) {
      const  dataInoc = (this.caixa.dataInoculacao) + ((i + 1 ) * 24 * 60 * 60 * 1000);
      this.caixa.observacaocamundongolist.push({
                                                id: null,
                                                saudaveis: 0,
                                                doentes: 0,
                                                mortos: 0,
                                                eutanasias: 0,
                                                perdidos: 0,
                                                dataObservacao: dataInoc,
                                                inoculacao: null
                                              });
    }

    this.caixaService.salvarInoculacao(this.caixa).subscribe(() => {
      this.presentToastColor('Salvo com sucesso', 'success');
      this.cancelar();
    },
    (error) => {
      console.log(error);
    }
    );

}

public cancelar() {
  this.dataInoculacao = null;
  this.caixa = this.newCaixa();
}

private newCaixa(): Caixa {
  const cx: Caixa = {dataFinalizacao: null, dataInoculacao: null, id: null,
    idadeCamundongo: null, observacoes: null, principal: null, qtdInoculados: null,
    responsavelFinalizacao: null, responsavelInoculacao: null, statusReinoculacao: null, observacaocamundongolist: []};
  return cx;
}


ngOnInit() {
this.setListaLogin();
}

}
