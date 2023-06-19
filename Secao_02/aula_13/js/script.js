// Exercício

let varA = 'A'  // receber o valor de B
let varB = 'B'  // receber o valor de C
let varC = 'C'  // receber o valor de A

console.log(`${varA} ${varB} ${varC}`);

// Primeira opção
/*const VarATemp = varA;
varA = varB
varB = varC
varC = VarATemp
console.log(`${varA} ${varB} ${varC}`);*/

// Segunda opção
[varA, varB, varC] = [varB, varC, varA]
console.log(`${varA} ${varB} ${varC}`);