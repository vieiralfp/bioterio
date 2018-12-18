import { Component, OnInit, ViewChild } from '@angular/core';
import { Inoculacao } from '../../interface/inoculacao';
import { DiaObservacaoComponent } from '../dia-observacao/dia-observacao.component';
import { DiaObservacao } from 'src/app/interface/dia-observacao';


@Component({
  selector: 'app-observacao',
  templateUrl: './observacao.component.html',
  styleUrls: ['./observacao.component.scss']
})
export class ObservacaoComponent implements OnInit {



  public diaObservacao: DiaObservacao[];
  @ViewChild(DiaObservacaoComponent) diaObservacaoComponent: DiaObservacaoComponent[];


  public observacao: Inoculacao = {
                                    id: 1,
                                    dataFinalizacao: null,
                                    datainoculacao: 0,
                                    idadeCamundongos: '21',
                                    principal: null,
                                    qtdInoculados: 8,
                                    responsavelFinalizacao: null,
                                    responsavelInoculacao: {  id: 2, assinatura: null, ativo: true,
                                                              crmv: '1520', login: 'lfpv',
                                                              nome: 'Luiz Fernando', nomearquivo: '',
                                                              senha: '1234', tipousuario: 'veterinario'},
                                    statusReinoculacao: 'não reinoculado'
  };

  private diaObservacao1: DiaObservacao = { id: 0,
    saudaveis: 6,
    doentes: 1,
    mortos: 1,
    eutanasias: 1,
    perdidos: 1,
    dataobservacao: 33000000,
    inoculacao: this.observacao};

    private diaObservacao2: DiaObservacao = { id: 0,
      saudaveis: 5,
      doentes: 1,
      mortos: 2,
      eutanasias: 1,
      perdidos: 1,
      dataobservacao: 33000000,
      inoculacao: this.observacao};

      private diaObservacao3: DiaObservacao = { id: 0,
        saudaveis: 6,
        doentes: 1,
        mortos: 1,
        eutanasias: 1,
        perdidos: 1,
        dataobservacao: 33000000,
        inoculacao: this.observacao};

        private diaObservacao4: DiaObservacao = { id: 0,
          saudaveis: 5,
          doentes: 1,
          mortos: 2,
          eutanasias: 1,
          perdidos: 1,
          dataobservacao: 33000000,
          inoculacao: this.observacao};

          private diaObservacao5: DiaObservacao = { id: 0,
            saudaveis: 6,
            doentes: 1,
            mortos: 1,
            eutanasias: 1,
            perdidos: 1,
            dataobservacao: 33000000,
            inoculacao: this.observacao};

            private diaObservacao6: DiaObservacao = { id: 0,
              saudaveis: 5,
              doentes: 1,
              mortos: 2,
              eutanasias: 1,
              perdidos: 1,
              dataobservacao: 33000000,
              inoculacao: this.observacao};

              private diaObservacao7: DiaObservacao = { id: 0,
                saudaveis: 6,
                doentes: 1,
                mortos: 1,
                eutanasias: 1,
                perdidos: 1,
                dataobservacao: 33000000,
                inoculacao: this.observacao};

                private diaObservacao8: DiaObservacao = { id: 0,
                  saudaveis: 5,
                  doentes: 1,
                  mortos: 2,
                  eutanasias: 1,
                  perdidos: 1,
                  dataobservacao: 33000000,
                  inoculacao: this.observacao};

                  private diaObservacao9: DiaObservacao = { id: 0,
                    saudaveis: 6,
                    doentes: 1,
                    mortos: 1,
                    eutanasias: 1,
                    perdidos: 1,
                    dataobservacao: 33000000,
                    inoculacao: this.observacao};

                    private diaObservacao10: DiaObservacao = { id: 0,
                      saudaveis: 5,
                      doentes: 1,
                      mortos: 2,
                      eutanasias: 1,
                      perdidos: 1,
                      dataobservacao: 33000000,
                      inoculacao: this.observacao};

                      private diaObservacao11: DiaObservacao = { id: 0,
                        saudaveis: 6,
                        doentes: 1,
                        mortos: 1,
                        eutanasias: 1,
                        perdidos: 1,
                        dataobservacao: 33000000,
                        inoculacao: this.observacao};

                        private diaObservacao12: DiaObservacao = { id: 0,
                          saudaveis: 5,
                          doentes: 1,
                          mortos: 2,
                          eutanasias: 1,
                          perdidos: 1,
                          dataobservacao: 33000000,
                          inoculacao: this.observacao};

                          private diaObservacao13: DiaObservacao = { id: 0,
                            saudaveis: 6,
                            doentes: 1,
                            mortos: 1,
                            eutanasias: 1,
                            perdidos: 1,
                            dataobservacao: 33000000,
                            inoculacao: this.observacao};

                            private diaObservacao14: DiaObservacao = { id: 0,
                              saudaveis: 5,
                              doentes: 1,
                              mortos: 2,
                              eutanasias: 1,
                              perdidos: 1,
                              dataobservacao: 33000000,
                              inoculacao: this.observacao};
  constructor() {
    this.diaObservacao = [this.diaObservacao1, this.diaObservacao2,
      this.diaObservacao3, this.diaObservacao4, this.diaObservacao5,
      this.diaObservacao6, this.diaObservacao7, this.diaObservacao8,
      this.diaObservacao9, this.diaObservacao10, this.diaObservacao11,
      this.diaObservacao12, this.diaObservacao13, this.diaObservacao14,
      this.diaObservacao6, this.diaObservacao7, this.diaObservacao8,
      this.diaObservacao9, this.diaObservacao10, this.diaObservacao11,
      this.diaObservacao12, this.diaObservacao13, this.diaObservacao14
    ];
  }

  ngOnInit() {
  }

}
