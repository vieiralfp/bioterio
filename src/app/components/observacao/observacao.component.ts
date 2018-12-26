import { Component, OnInit, ViewChild } from '@angular/core';
import { Inoculacao } from '../../interface/inoculacao';
import { DiaObservacaoComponent } from '../dia-observacao/dia-observacao.component';
import { DiaObservacao } from 'src/app/interface/dia-observacao';
import { InoculacaoService } from 'src/app/providers/inoculacao.service';
import { Login } from 'src/app/interface/login';
import { Principal } from 'src/app/interface/principal';


@Component({
  selector: 'app-observacao',
  templateUrl: './observacao.component.html',
  styleUrls: ['./observacao.component.scss']
})
export class ObservacaoComponent implements OnInit {



  public diaObservacao: DiaObservacao[];

  public login: Login;

  public observacao: Inoculacao = {
    id: null,
    dataFinalizacao: 1542160800000,
    dataInoculacao: 1539572400000,
    idadeCamundongo: '21 - 28 dias',
    principal: null,
    qtdInoculados: 8,
    responsavelFinalizacao: this.login,
    responsavelInoculacao:  this.login  /*{  id: 2, assinatura: null, ativo: true,
                              crmv: '1520', login: 'lfpv',
                              nome: 'Luiz Fernando', nomearquivo: '',
                              senha: '1234', tipousuario: 'veterinario'},*/,
    statusReinoculacao: 'não reinoculado',
    observacoes: ''
};

private diaObservacao1: DiaObservacao = { id: 0,
saudaveis: 7,
doentes: 0,
mortos: 1,
eutanasias: 0,
perdidos: 0,
dataObservacao: 1539658800000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao2: DiaObservacao = { id: 0,
saudaveis: 7,
doentes: 0,
mortos: 0,
eutanasias: 0,
perdidos: 0,
dataObservacao: 1539745200000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao3: DiaObservacao = { id: 0,
saudaveis: 6,
doentes: 1,
mortos: 1,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1539831600000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao4: DiaObservacao = { id: 0,
saudaveis: 5,
doentes: 1,
mortos: 2,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1539918000000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao5: DiaObservacao = { id: 0,
saudaveis: 6,
doentes: 1,
mortos: 1,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540004400000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao6: DiaObservacao = { id: 0,
saudaveis: 5,
doentes: 1,
mortos: 2,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540090800000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao7: DiaObservacao = { id: 0,
saudaveis: 6,
doentes: 1,
mortos: 1,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540177200000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao8: DiaObservacao = { id: 0,
saudaveis: 5,
doentes: 1,
mortos: 2,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540263600000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao9: DiaObservacao = { id: 0,
saudaveis: 6,
doentes: 1,
mortos: 1,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540350000000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao10: DiaObservacao = { id: 0,
saudaveis: 5,
doentes: 1,
mortos: 2,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540436400000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao11: DiaObservacao = { id: 0,
saudaveis: 6,
doentes: 1,
mortos: 1,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540522800000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao12: DiaObservacao = { id: 0,
saudaveis: 5,
doentes: 1,
mortos: 2,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540609200000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao13: DiaObservacao = { id: 0,
saudaveis: 6,
doentes: 1,
mortos: 1,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540695600000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao14: DiaObservacao = { id: 0,
saudaveis: 5,
doentes: 1,
mortos: 2,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540782000000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao15: DiaObservacao = { id: 0,
saudaveis: 5,
doentes: 1,
mortos: 2,
eutanasias: 1,
perdidos: 1,
dataObservacao: 1540868400000,
inoculacao: this.observacao, observacoes: '' };

private diaObservacao16: DiaObservacao = { id: 0,
  saudaveis: 5,
  doentes: 1,
  mortos: 2,
  eutanasias: 1,
  perdidos: 1,
  dataObservacao: 1540954800000,
  inoculacao: this.observacao, observacoes: '' };

  private diaObservacao17: DiaObservacao = { id: 0,
    saudaveis: 5,
    doentes: 1,
    mortos: 2,
    eutanasias: 1,
    perdidos: 1,
    dataObservacao: 1541041200000,
    inoculacao: this.observacao, observacoes: '' };

    private diaObservacao18: DiaObservacao = { id: 0,
      saudaveis: 5,
      doentes: 1,
      mortos: 2,
      eutanasias: 1,
      perdidos: 1,
      dataObservacao: 1541127600000,
      inoculacao: this.observacao, observacoes: '' };

      private diaObservacao19: DiaObservacao = { id: 0,
        saudaveis: 5,
        doentes: 1,
        mortos: 2,
        eutanasias: 1,
        perdidos: 1,
        dataObservacao: 1541214000000,
        inoculacao: this.observacao, observacoes: '' };

        private diaObservacao20: DiaObservacao = { id: 0,
          saudaveis: 5,
          doentes: 1,
          mortos: 2,
          eutanasias: 1,
          perdidos: 1,
          dataObservacao: 1541300400000,
          inoculacao: this.observacao, observacoes: '' };

          private diaObservacao21: DiaObservacao = { id: 0,
            saudaveis: 5,
            doentes: 1,
            mortos: 2,
            eutanasias: 1,
            perdidos: 1,
            dataObservacao: 1541383200000,
            inoculacao: this.observacao, observacoes: '' };

            private diaObservacao22: DiaObservacao = { id: 0,
              saudaveis: 5,
              doentes: 1,
              mortos: 2,
              eutanasias: 1,
              perdidos: 1,
              dataObservacao: 1541469600000,
              inoculacao: this.observacao, observacoes: '' };

              private diaObservacao23: DiaObservacao = { id: 0,
                saudaveis: 5,
                doentes: 1,
                mortos: 2,
                eutanasias: 1,
                perdidos: 1,
                dataObservacao: 1541556000000,
                inoculacao: this.observacao, observacoes: '' };

                private diaObservacao24: DiaObservacao = { id: 0,
                  saudaveis: 5,
                  doentes: 1,
                  mortos: 2,
                  eutanasias: 1,
                  perdidos: 1,
                  dataObservacao: 1541642400000,
                  inoculacao: this.observacao, observacoes: '' };

                  private diaObservacao25: DiaObservacao = { id: 0,
                    saudaveis: 5,
                    doentes: 1,
                    mortos: 2,
                    eutanasias: 1,
                    perdidos: 1,
                    dataObservacao: 1541728800000,
                    inoculacao: this.observacao, observacoes: '' };

                    private diaObservacao26: DiaObservacao = { id: 0,
                      saudaveis: 5,
                      doentes: 1,
                      mortos: 2,
                      eutanasias: 1,
                      perdidos: 1,
                      dataObservacao: 1541815200000,
                      inoculacao: this.observacao, observacoes: '' };

                      private diaObservacao27: DiaObservacao = { id: 0,
                        saudaveis: 5,
                        doentes: 1,
                        mortos: 2,
                        eutanasias: 1,
                        perdidos: 1,
                        dataObservacao: 1541901600000,
                        inoculacao: this.observacao, observacoes: '' };

                        private diaObservacao28: DiaObservacao = { id: 0,
                          saudaveis: 5,
                          doentes: 1,
                          mortos: 2,
                          eutanasias: 1,
                          perdidos: 1,
                          dataObservacao: 1541988000000,
                          inoculacao: this.observacao, observacoes: '' };

                          private diaObservacao29: DiaObservacao = { id: 0,
                            saudaveis: 5,
                            doentes: 1,
                            mortos: 2,
                            eutanasias: 1,
                            perdidos: 1,
                            dataObservacao: 1542074400000,
                            inoculacao: this.observacao, observacoes: '' };

                            private diaObservacao30: DiaObservacao = { id: 0,
                              saudaveis: 5,
                              doentes: 1,
                              mortos: 2,
                              eutanasias: 1,
                              perdidos: 1,
                              dataObservacao: 1542160800000,
                              inoculacao: this.observacao, observacoes: '' };
constructor(private inoculacaoService: InoculacaoService) {

}
  getDate() {
    const dataEntrada: Date = new Date(this.observacao.dataFinalizacao);
    return dataEntrada;
  }

  iniciar() {
    this.diaObservacao = [this.diaObservacao1, this.diaObservacao2,
      this.diaObservacao3, this.diaObservacao4, this.diaObservacao5,
      this.diaObservacao6, this.diaObservacao7, this.diaObservacao8,
      this.diaObservacao9, this.diaObservacao10, this.diaObservacao11,
      this.diaObservacao12, this.diaObservacao13, this.diaObservacao14,
      this.diaObservacao15, this.diaObservacao16, this.diaObservacao17,
      this.diaObservacao18, this.diaObservacao19, this.diaObservacao20,
      this.diaObservacao21, this.diaObservacao22, this.diaObservacao23,
      this.diaObservacao24, this.diaObservacao25, this.diaObservacao26,
      this.diaObservacao27, this.diaObservacao28, this.diaObservacao29,
      this.diaObservacao30
      ];
  }

  salvarInoculacao() {
    this.inoculacaoService.salvarInoculacao(this.observacao )
    .subscribe(() => {console.log('salvar inoculação'); },
    (erro) => {console.log('erro' + erro); } );

  }

  getValor(n) {
    console.log(this.diaObservacao[n]);
  }

  ngOnInit() {
    this.inoculacaoService.getInoculacao(2).
    subscribe( (data: Login) => {
      this.login = data;
      console.log(this.login.nome);
      this.observacao.responsavelInoculacao = this.login;
    });

    this.inoculacaoService.getPrincipal(11645).subscribe( (principal: Principal) => {
      this.observacao.principal = principal;
      console.log(principal);
    },
    (error) => {
      console.log('Falha ao buscar Principal' + error);
    });
    this.iniciar();
  }

}
