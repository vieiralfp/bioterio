import { Principal } from './principal';
import { Login } from './login';

export interface Inoculacao {
    id: number;
    datainoculacao: number;
    principal: Principal;
    qtdInoculados: number;
    idadeCamundongos: string;
    statusReinoculacao: string;
    responsavelInoculacao: Login;
    dataFinalizacao: number;
    responsavelFinalizacao: Login;
}
