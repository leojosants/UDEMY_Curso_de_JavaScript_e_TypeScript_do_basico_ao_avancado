//

/* Atribuição via desestruturação

// Arrow function não possui arguments
const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador /= numero;
        if (operador === '/') acumulador *= numero;
    }
    console.log(acumulador);
}

const adicao = '+';
const subtracao = '-';
const multiplicacao = '*';
const divisao = '/';

conta(adicao, 1, 20, 30, 40, 50);
conta(subtracao, 1, 20, 30, 40, 50);
conta(multiplicacao, 1, 20, 30, 40, 50);
conta(divisao, 1, 20, 30, 40, 50);

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// const array = ['Leonardo', 'Santos', 39];

// funcao(array);

// function funcao({ nome, sobrenome, idade }) {
    //     console.log(nome, sobrenome, idade);
    // }

    // const obj = { nome: 'Leonardo', sobrenome: 'Santos', idade: 39 };
    
    // funcao(obj);
*/

/*
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcao(2, null, 20); // null será reconhecido como zero
// funcao(2, undefined, 20); // somente undifined que o valor padrão do paramentro assumirá o argumento
// funcao(2, '', 20); // irá concatenar
// funcao(2);
*/

/*
function funcao(a, b, c) {
    console.log(a, b, c);
}

funcao(1, 2, 3);
funcao(1, 2);
*/

/*
function funcao(a, b, c) {
    let resultadoDaSoma = 0;

    for (let argument of arguments) {
        resultadoDaSoma += argument;
    }

    console.log(resultadoDaSoma, a, b, c);
};

funcao(1, 2, 3, 4, 5, 6, 7);
*/