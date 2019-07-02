import { Caixa } from './caixa';


export interface DiaObservacao {
    id: number;
    saudaveis: number;
    doentes: number;
    mortos: number;
    eutanasias: number;
    perdidos: number;
    dataObservacao: number;
    inoculacao: Caixa;

}
