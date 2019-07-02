import { Caixa } from './caixa';


export interface DiaObservacao {
    id: number;
    saudaveis: number;
    doentes: number;
    eutanasias: number;
    mortos: number;
    perdidos: number;
    dataObservacao: number;
    inoculacao: Caixa;

}
