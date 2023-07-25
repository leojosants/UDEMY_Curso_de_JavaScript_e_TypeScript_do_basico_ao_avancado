import _ from './modulo';

const array = [100, 200];

console.log(global.MYGLOBAL);

console.log(`Soma dos elementos:${_.sum(array)}`);
console.log(`Menor elemento: ${_.min(array)}`);
console.log(`Maior elemento: ${_.max(array)}`);
console.log(`Média dos elementos: ${_.mean(array)}`);
console.log(`Média dos elementos: ${_.mul(array)}`);

/* _.muliply()
const multiplier = 2;
const multiplicand = 10;
console.log(`Result: ${_.multiply(multiplier, multiplicand)}`);
*/
