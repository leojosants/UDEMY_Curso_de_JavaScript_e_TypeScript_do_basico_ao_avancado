/*
    O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
*/

(function () {

    /* 
        Exercício 1: Retorne os números maiores que 10 
    */
    exerciseOne = () => {

        const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
        const filteredNumbers = numbers.filter(value => value > 10);

        console.log(filteredNumbers);

        // Retorne os números maiores que 10
        // const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
        // const numbersGreaterTen = [];
        // for (let number of numbers) {
        //     if (number > 10) numbersGreaterTen.push(number);
        // }
        // for (let number of numbersGreaterTen) { console.log(number); };
    };
    // exerciseOne();


    /*
        Exercício 2:
        - Retorne as pessoas que tem o nome com 5 letras ou mais.
        - Retorne as pessoas com mais de 50 anos.
        - Retorne as pessoas cujo nome termina com a letra 'a' minúscula.
    */
    exerciseTwo = () => {
        const people = [
            { nome: 'Luiz', idade: 62 },
            { nome: 'Maria', idade: 23 },
            { nome: 'Eduardo', idade: 55 },
            { nome: 'Letícia', idade: 19 },
            { nome: 'Rosana', idade: 32 },
            { nome: 'Wallace', idade: 47 }
        ];

        const pessoasComNomesComMais5Letras = people.filter(obj => obj.nome.length >= 5);

        const pessoasComIdadeMaior50 = people.filter(obj => obj.idade > 50);

        const nomesTerminadosEm_a = people.filter(obj => obj.nome.toLowerCase().endsWith('a'));

        console.log('\nPessoas com nomes com mais de 5 letras:', pessoasComNomesComMais5Letras);
        console.log('\nPessoas com mais de 50 anos:', pessoasComIdadeMaior50);
        console.log('\nPessoas com nomes terminados em "a":', nomesTerminadosEm_a);

    };
    exerciseTwo();

})();