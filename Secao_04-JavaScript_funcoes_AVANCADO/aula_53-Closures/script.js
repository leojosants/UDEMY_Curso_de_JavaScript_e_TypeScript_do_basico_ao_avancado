/*
    Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna.
*/

retornaFuncao = (nome) => {
    return function () { return nome; }
};

const funcao = retornaFuncao('Santos');
const funcao2 = retornaFuncao('Leonardo');

console.dir(funcao); // consultar navegador com a função dir
console.dir(funcao2); // consultar navegador com a função dir

console.log(funcao());
console.log(funcao2());