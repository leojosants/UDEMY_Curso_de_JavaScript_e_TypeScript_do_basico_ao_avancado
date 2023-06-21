/*
    For Clássico:   Utilizado geralmente com iteráveis      -->      array ou strings
    For In:         Retorna índice ou chave                 -->      strings, arry ou objetos  
    For Of:         Retorna o valor em si (iteráveis)       -->      iteráveis, array ou strings
*/

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 39,
};

for (let chave in pessoa) { console.log(chave, pessoa[chave]); }

// Não aceita uso em objetos, pois não são iteráveis
// for (let chave of pessoa) { console.log(chave, pessoa[chave]); }

/*
// const nomes = ['Leonardo', 'Julia', 'Anderson'];

// nomes.forEach(function (valor, indice) { console.log(valor, indice); });

// console.log('----------');

// // Acessa somente o valor
// for (let valor of nomes) { console.log(valor); }

// console.log('----------');

// // Acessa o índice, porém diminui a escrita da condição
// for (let i in nomes) { console.log(nomes[i]); }

// console.log('----------');

// // Acessa o índice
// for (let i = 0; i < nomes.length; i++) { console.log(nomes[i]); }
*/

/*
// const nome = 'Leonardo Santos';

// // For of
// for (valor of nome) { console.log(valor); } // Não acessa o índice, acessa o valor diretamente
// for (valor of nome) { console.log(nome[valor]); } // Não acessa o índice, acessa o valor diretamente

// // For In
// for (let i in nome) { console.log(nome[i]); }

// // For clássico
// for (let i = 0; i < nome.length; i++) { console.log(nome[i]); }
*/