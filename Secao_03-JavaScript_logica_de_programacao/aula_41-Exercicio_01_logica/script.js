
// Escreva uma função que recebe 2 números e retorne o maior deles.

const retornaMaior = (primeiroNumero, segundoNumero) => Math.max(primeiroNumero, segundoNumero);

const maiorNumero = retornaMaior(Math.floor(Math.random() * 100), Math.floor(Math.random() * 500))

console.log(`O maior número é: ${maiorNumero}`);