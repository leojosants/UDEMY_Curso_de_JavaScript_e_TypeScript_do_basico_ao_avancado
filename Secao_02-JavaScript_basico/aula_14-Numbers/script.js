
let num1 = 1;
let num2 = 2;

// Concatenação
console.log(`\nnum1 = ${num1}, num2 = ${num2}`);
console.log(`num1.toString().concat(num2) = ${num1.toString().concat(num2)}`);
console.log(`typeof (num1.toString().concat(num2)) = ${typeof (num1.toString().concat(num2))}`);

// Representação binária
num1 = 100049494;
console.log(`\nnum1 = ${num1}`);
console.log(`num1.toString(2) = ${num1.toString(2)}`);

// Arredondando 
num1 = 12.5555555566666;
console.log(`\nnum1 = ${num1}`);
console.log(`num1.toFixed(2) = ${num1.toFixed(2)}`);

// Verificando o retorno do tipo de dado
num1 = 10
console.log(`\nnum1 = ${num1}`);
console.log(`\Number.isInteger(num1) = ${Number.isInteger(num1)}`);

// Verificando o retorno do tipo de dado
num1 = 10.45
console.log(`\nnum1 = ${num1}`);
console.log(`Number.isInteger(num1) = ${Number.isInteger(num1)}`);

let temp = num1 * 'Ola';
console.log(`\ntemp = ${temp}`);
console.log(`Number.isNaN(temp) = ${Number.isNaN(temp)}`);

temp = num1 * '5';
console.log(`\ntemp = ${temp}`);
console.log(`Number.isNaN(temp) = ${Number.isNaN(temp)}`);

// Corrigindo Imprecisão
num1 = 0.7;
num2 = 0.1
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 = parseFloat(num1.toFixed(2));
console.log(`\nnum1 = ${num1}`);
console.log(`Number.isInteger(num1) = ${Number.isInteger(num1)}`);

num1 = 0.7;
num2 = 0.1
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
console.log(`\nnum1 = ${num1}`);
console.log(`Number.isInteger(num1) = ${Number.isInteger(num1)}`);

// console.log(`\n${num1}`);


// console.log(`\n ${}`);