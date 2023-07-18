"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semRetorno() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args.join(' '));
}
semRetorno('Leonardo', 'Santos');
var pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    exibirNome: function () {
        console.log(this.nome, this.sobrenome);
    }
};
exports.pessoa = pessoa;
pessoa.exibirNome();
