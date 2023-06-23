// Closure é a habilidade da função acessar o seu escopo léxico.

retornaFuncao = (nome) => {
    return function () { return nome; }
};

const funcao = retornaFuncao('Santos');
const funcao2 = retornaFuncao('Leonardo');

console.dir(funcao); // consultar navegador com a função dir
console.dir(funcao2); // consultar navegador com a função dir

console.log(funcao());
console.log(funcao2());