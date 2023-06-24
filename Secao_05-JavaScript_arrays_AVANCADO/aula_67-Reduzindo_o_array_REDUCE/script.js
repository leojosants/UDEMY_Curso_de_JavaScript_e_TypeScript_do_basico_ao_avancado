/*
    A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único.
*/
(function () {

    exampleOne = () => {

        /*
            - Some todos os numeros (Reduce).
            - Retorne um array com os pares (Filter).
            - Retorne um array com o dobro dos valores (Map).
        */

        const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

        const sumNumbers = numbers.reduce((accumulator, value) => accumulator += value);

        const pairNumbers = numbers.reduce((accumulator, value) => {
            if (value % 2 === 0) accumulator.push(value);
            return accumulator;
        }, [])

        const doubleNumbers = numbers.reduce((accumulator, value) => {
            accumulator.push(value * 2);
            return accumulator;
        }, []);

        console.log('\nSoma de todos os números:', sumNumbers);
        console.log('\nTodos os números pares:', pairNumbers);
        console.log('\nTodos os numeros dobrados:', doubleNumbers);
        exampleOne();
    }

    exampleTwo = () => {

        // Retorne a pessoa mais velha

        const people = [
            { nome: 'Luiz', idade: 62 },
            { nome: 'Maria', idade: 23 },
            { nome: 'Eduardo', idade: 55 },
            { nome: 'Letícia', idade: 10 },
            { nome: 'Rosana', idade: 64 },
            { nome: 'Wallace', idade: 63 }
        ];

        const olderPerson = people.reduce((accumulator, value) => {
            if (accumulator.idade > value.idade) return accumulator;
            return value;
        });

        console.log('\nPessoa mais velha:', olderPerson);

    };
    exampleTwo();


})();