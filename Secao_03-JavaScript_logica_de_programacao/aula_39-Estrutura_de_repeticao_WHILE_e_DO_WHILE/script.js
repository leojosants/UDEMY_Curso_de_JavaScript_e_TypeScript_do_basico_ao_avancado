//
function range(min, max) {

    const num = Math.random() * (max - min) + min;

    return Math.floor(num);
};

const min = 1;
const max = 50;
let numeroAleatorio = range(min, max);

while (numeroAleatorio !== 10) {

    numeroAleatorio = range(min, max);

    console.log(numeroAleatorio);
}

console.log('--------------------');

do {

    numeroAleatorio = range(min, max);

    console.log(numeroAleatorio);

} while (numeroAleatorio !== 10);




/*
// const nome = 'Leonardo';
// let i = 0;

// while (i < nome.length) {

//     console.log(nome[i]);

//     i++;
// }
*/