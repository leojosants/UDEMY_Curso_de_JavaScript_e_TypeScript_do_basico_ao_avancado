"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semRetorno(...args) {
    console.log(args.join(' '));
}
semRetorno('Leonardo', 'Santos', 'MG');
const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    estado: 'MG',
    exibeNome() {
        console.log(this.nome, this.sobrenome, this.estado);
    }
};
exports.pessoa = pessoa;
pessoa.exibeNome();
