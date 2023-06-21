/*
    Escreva uma função que receba um número e retorne o seguinte:
     ok - Número é divisível por 3: Fizz
     ok - Número é divisível por 5: Buzz
     ok - Número é divisível por 3 e 5: FizzBuzz
     ok - Número não é divisível por 3 e 5: Retorna o próprio numero
     ok - Checar se o numero realmente é um número: Retona o próprio número
     ok - Use a função com números de 0 a 100
*/

function retornaRespostas(numero) {

    if ((numero % 3 === 0) && (numero % 5 === 0)) return 'FizzBuzz';

    if (numero % 3 === 0) return 'Fizz';

    if (numero % 5 === 0) return 'Buzz';

    if (typeof (numero) !== 'number') return numero;

    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, retornaRespostas(i));
    // console.log();
}