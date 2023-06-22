//

criaMultiplicador = (multiplicador) => {
    return function (n) {
        return n * multiplicador;
    };
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

/*
// falaFrase = (comeco) => {
//     falaResto = (resto) => comeco + ' ' + resto;
//     return falaResto;
// }

// const olaMundo = falaFrase('Olá');

// console.log(olaMundo('Mundo!'));
*/

/*
// const criaPessoa = (nome, sobrenome) => { return { nome, sobrenome } };

// const p1 = criaPessoa('Leonardo', 'Santos');

// console.log(p1);
*/

/*
document.addEventListener('click', () => { document.body.style.backgroundColor = 'red' });
*/

/*
// const soma = (a, b) => {
//     return a + b;
// };

// console.log(soma(2, 4));
*/