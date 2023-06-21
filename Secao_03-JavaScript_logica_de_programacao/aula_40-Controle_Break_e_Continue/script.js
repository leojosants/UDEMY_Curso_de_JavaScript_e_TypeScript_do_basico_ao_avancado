// 
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] == 2) {
        console.log(`...encontrado 2, pule...`);
        continue;
    }

    if (numeros[i] === 7) {
        console.log(`...encontrado '7', saindo...`);
        break;
    }

    console.log(numeros[i]);
}

console.log('-----------------------------');

for (let numero of numeros) {

    if (numero == 2) {
        console.log(`...encontrado 2, pule...`);
        continue;
    }

    if (numero === 7) {
        console.log(`...encontrado '7', saindo...`);
        break;
    }

    console.log(numero);
}

console.log('-----------------------------');

let i = 0;

while (i < numeros.length) {

    let numero = numeros[i];

    if (numero == 2) {
        console.log(`...encontrado 2, pule...`);
        i++;
        continue;
    }

    if (numero === 7) {
        console.log(`...encontrado '7', saindo...`);
        i++;
        break;
    }

    console.log(numero);
    i++;
}

console.log('-----------------------------');

let cont = 0;

do {

    let numero = numeros[cont];

    if (numero == 2) {
        console.log(`...encontrado 2, pule...`);
        cont++;
        continue;
    }

    if (numero === 7) {
        console.log(`...encontrado '7', saindo...`);
        cont++;
        break;
    }

    console.log(numero);
    cont++;

} while (cont < numeros.length);