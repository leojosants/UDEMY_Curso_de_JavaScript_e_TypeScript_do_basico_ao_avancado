// 
(function () {

    versionOne = () => {

        /*
        - Retorne a soma do dobro de todos os pares.
        -> Filtrar pares.
        -> Dobrar valores.
        -> Reduzir (somar tudo)
        */

        const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

        const pars = numbers.filter(obj => obj % 2 === 0);

        const doubleNumbers = pars.map(obj => obj * 2);

        const sumNumbers = doubleNumbers.reduce((accumulator, value) => accumulator += value);

        console.log('\nNúmeros pares:', pars);
        console.log('\nNúmeros dobrados:', doubleNumbers);
        console.log('\nSoma de todos os números:', sumNumbers);
        versionOne();
    };

    versionTwo = () => {
        /*
            - Retorne a soma do dobro de todos os pares.
            -> Filtrar pares.
            -> Dobrar valores.
            -> Reduzir (somar tudo)
        */

        const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

        const sumDoublePairs = numbers
            .filter(obj => obj % 2 == 0)
            .map(obj => obj * 2)
            .reduce((accumulator, value) => accumulator + value);

        console.log('\nSoma do dobro de todos os pares:', sumDoublePairs);

        versionTwo();
    };

})();