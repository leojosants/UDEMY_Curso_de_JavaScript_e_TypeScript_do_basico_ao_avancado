const { texto } = require('../base');

const regExp1 = /João|Maria/gi;

console.log(texto);
console.log('- - -  - - - - - x x x x x x x - - - - - - -  -')

console.log('->', texto.replace(/(João|Maria)/gi,
    function (input) { return '### ' + input.toUpperCase() + ' ###'; }
));

/*
// const regExp1 = /João|Maria/gi;

// console.log(texto);
// console.log('- - -  - - - - - x x x x x x x - - - - - - -  -')
// console.log('->', texto.match(regExp1));
// console.log('->', texto.replace(/(João|Maria)/gi, '<grupo 1>$1<grupo 1>'));
*/

/*
// const regExp1 = /João|Maria/gi;
// console.log(texto);
// console.log('- - -  - - - - - x x x x x x x - - - - - - -  -')
// console.log('->', texto.match(regExp1));
// console.log('->', texto.replace(/João|Maria/gi, 'Felipe'));
*/

/*
// const regExp1 = /João|Maria/gi;
// console.log(texto);
// console.log('----------------xxxxxxx---------------------')
// console.log('->', texto.match(regExp1));
// console.log('->', texto.replace(/João/gi, 'Felipe'));
*/

/*
// const regExp1 = /João|Maria/gi;
// console.log(texto);
// console.log('----------------xxxxxxx---------------------')
// console.log('->', texto.match(regExp1));
// console.log('->', texto.replace(/João/i, 'Felipe'));
*/

/*
// const regExp1 = /João|Maria/gi;
// console.log(texto);
// console.log('----------------xxxxxxx---------------------')
// console.log('->', texto.match(regExp1));
// console.log('->', texto.replace('João', 'Felipe'));
*/

/*
// const regExp1 = /João|Maria/gi;
// const found = texto.match(regExp1);
// console.log(found);
*/

/*
// const regExp1 = /João/gi;
// const found = texto.match(regExp1);
// console.log(found);
*/

/*
// const regExp1 = /João/i;
// const found = texto.match(regExp1);
// console.log(found);
*/

/*
// const regExp1 = /João/g;
// const found = texto.match(regExp1);
// console.log(found);
*/