// 
const pessoa = {

    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 39,

    endereco: {
        rua: 'Fidelis',
        numero: 289
    }
};

const {
    nome,
    ...resto
} = pessoa;

console.log(resto);

// const {
//     endereco,
//     endereco: { rua, numero }
// } = pessoa;
// console.log(endereco, rua, numero);

// const { nome: teste } = pessoa; // renomeando a chave
// console.log(teste);

// const { nome, sobrenome, idade, endereco } = pessoa;
// console.log(nome, sobrenome, idade, endereco.numero);
/** */