import { Inoculacao } from './inoculacao';

export interface DiaObservacao {
    id: number;
    saudaveis: number;
    doentes: number;
    mortos: number;
    eutanasias: number;
    perdidos: number;
    dataObservacao: number;
    inoculacao: Inoculacao;
    observacoes: string;

}
