import { Principal } from './principal';
import { Login } from './login';

export interface Inoculacao {
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
}
