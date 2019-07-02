export interface Usuario {
    /** Data hora em que Expira o token */
    exp: number;
    /** Data hora que o token foi assinado */
    iat: number;
    /** Login de quem assinou o token */
    iss: string;
    /** Nome de quem assinou o token */
    nome: string;
    /** Permissão de quem assinou o token */
    roles: string;
}
