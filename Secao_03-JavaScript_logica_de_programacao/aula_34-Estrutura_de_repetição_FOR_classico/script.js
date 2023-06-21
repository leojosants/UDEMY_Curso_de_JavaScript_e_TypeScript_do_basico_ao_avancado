//

const numeros = [];
const numerosImpares = [];
const numerosPares = [];

for (let i = 0; i <= 50; i++) { numeros.push(Math.floor(Math.random() * 100)); }

for (let i = 0; i < numeros.length; i++) {
    (numeros[i] % 2 == 0) ? numerosPares.push(numeros[i]) : numerosImpares.push(numeros[i])
}

console.log(numerosPares);
console.log(numerosImpares);


/*
// const linguagensProgramacao = ['JavaScript', 'Python', 'PHP', 'C++', 'C#', '.net'];

// for (let i = 0; i < linguagensProgramacao.length; i++) {
//     console.log(i, linguagensProgramacao[i]);
// }
*/

/*
// for (let i = 0; i <= 10; i++) {

//     const par = (i % 2 === 0 ? 'par' : 'impar');

//     console.log(i, par);
// }
*/