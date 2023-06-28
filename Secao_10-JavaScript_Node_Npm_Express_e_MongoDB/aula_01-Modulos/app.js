//

const { Pessoa } = require('./mod01');
const p1 = new Pessoa('Leonardo');

console.log(p1);

/*
const { nome, sobrenome, falaNome } = require('./mod01');

console.log(nome, sobrenome);
console.log(falaNome());
*/

/*
const mod01 = require('./mod01');
const falaNome = mod01.falaNome;
console.log(falaNome());
*/

/*
const falaNome = require('./mod01').falaNome;
console.log(falaNome());
*/

/*
const mod01 = require('./mod01');
console.log(mod01.falaNome());
*/