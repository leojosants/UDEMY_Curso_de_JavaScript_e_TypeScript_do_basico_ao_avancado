
/* export default
export const nome = 'Leonardo';
export const sobrenome = 'Santos';
export const idade = 39;
const cpf = '000.000.000-00';

export default function soma(x, y) {
    return x + y;
}
*/

/* Exportando individualmente 
export const anoAtual = new Date().getFullYear();
export const nome = 'Leonardo';
export const sobrenome = 'Santos';
export const anoNascimento = 1984;
export const idade = anoAtual - anoNascimento;

export function soma(x, y) {
    return x + y;
};

export class Pessoa {
    
    constructor(nome, sobrenome, anoNascimento) {
        
        const anoAtual = new Date().getFullYear();
        
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = anoAtual - anoNascimento;
    }
}
*/

/* Exportando o conjunto
const anoAtual = new Date().getFullYear();
const nome = 'Leonardo';
const sobrenome = 'Santos';
const anoNascimento = 1984;
const idade = anoAtual - anoNascimento;

function soma(x, y) {
    return x + y;
};

export { nome as nome2, sobrenome, idade, soma };
*/