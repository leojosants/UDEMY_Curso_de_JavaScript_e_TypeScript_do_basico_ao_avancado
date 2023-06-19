console.log();

/*
Primitivos (imutável) --> string, number boolean, undefined, null (bigint, symbol)

let a = 'A';
let b = a; // cópia, qualquer alteração em uma não afeta a outra
console.log(`a = ${a}, \tb = ${b}`);

a = 'alterado'
console.log(`a = ${a}, \tb = ${b}`);
*/

/*
Referencia (mutável) --> array, object, function
*/

const a = {
    nome: 'Leonardo',
    sobrenome: 'Santos'
};

const b = { ...a };

console.log(a, b);

a.nome = 'Luan';
a.sobrenome = 'Oliveira';
console.log(a, b);

// let a = [1, 2, 3];
// let b = a; // não é cópia, aponta para o mesmo endereço, ou seja, qualquer alteração afeta as duas variáveis
// let c = b; // não é cópia, aponta para o mesmo endereço, ou seja, qualquer alteração afeta as duas variáveis

// let d = [...c]; // cópia

// console.log(`a = ${a}, b = ${b}, c = ${c}`);

// a.push(4);
// console.log('\na.push(4)');
// console.log(`a = ${a}, b = ${b}`);

// b.pop();
// console.log('\nb.pop()');
// console.log(`a = ${a}, b = ${b}`);

// a.push('ADICIONADO ISSO');
// console.log("\na.push('ADICIONADO ISSO')");
// console.log(`c = ${c}`);
// console.log(`d = ${d}`);