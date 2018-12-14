import { Municipio } from './municipio';

export interface Remetente {
    id: number;
    apenasdestinatario: boolean;
    bairro: string;
    cep: number;
    email1: string;
    email2: string;
    endereco: string;
    nome: string;
    obsservacoes: string;
    telefone1: string;
    telefone2: string;
    cidadeid: Municipio;
}
