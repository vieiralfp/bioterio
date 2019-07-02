import { Principal } from './principal';
import { Login } from './login';

export interface Caixa {
    id: number;
    dataInoculacao: number;
    principal: Principal;
    qtdInoculados: number;
    idadeCamundongo: string;
    statusReinoculacao: string;
    responsavelInoculacao: Login;
    dataFinalizacao: number;
    responsavelFinalizacao: Login;
    observacoes: string;
    observacaocamundongolist: {
        id: number;
        saudaveis: number;
        doentes: number;
        mortos: number;
        eutanasias: number;
        perdidos: number;
        dataObservacao: number;
        inoculacao: Caixa;
    }[];
}
