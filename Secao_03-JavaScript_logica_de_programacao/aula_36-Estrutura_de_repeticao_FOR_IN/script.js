//

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 39,
};

for (let dados in pessoa) { console.log(dados, pessoa[dados]); }

console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
console.log(pessoa['idade']);

/*
// const frutas = ['Pera', 'maçã', 'Uva'];

// for (let i in frutas) { console.log(frutas[i]); }
*/

/*
// const frutas = ['Pera', 'maçã', 'Uva'];

// // FOR clássico
// for (let i = 0; i < frutas.length; i++) { console.log(frutas[i]); }
*/