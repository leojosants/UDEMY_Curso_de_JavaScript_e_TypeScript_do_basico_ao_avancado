/*
    Avaliação preguiçosa (Lazy evaluation)
     - Avaliação preguiçosa é uma técnica usada em programação para atrasar a computação até um ponto em que o resultado da computação é considerado necessário.
*/

(function () {

    function* generatorFive() {
        yield function () { console.log('Executando yield1'); };
        yield function () { console.log('Executando yield2'); };
    }

    const g5 = generatorFive();
    const functionOne = g5.next().value;
    const functionTwo = g5.next().value;

    functionOne();
    functionTwo();

})();

/* (function () {

//     function* generatorThree() {
//         console.log('\tgeneratorThree() - INÍCIO');
//         yield 0;
//         yield 1;
//         yield 2;
//         console.log('\tgeneratorThree() - FIM');
//     }

//     function* generatorFour() {
//         console.log('\ngeneratorFour() - INÍCIO');
//         yield* generatorThree(); // irá iniciar a contagem da função generatorThree()
//         yield 3;
//         yield 4;
//         yield 5;
//         console.log('generatorFour() - FIM');
//     }

//     const g4 = generatorFour();

//     for (let valor of g4) { console.log(`\t${valor}`); }

// })();
*/

/* (function () {

//     function* generatorTwo() {
//         let i = 0;

//         while (true) {
//             yield i;
//             i++;
//         }
//     }

//     const g2 = generatorTwo();

//     console.log(g2.next().value);
//     console.log(g2.next().value);
//     console.log(g2.next().value);

// })();
*/

/* (function () {

//     function* generatorOne() {
//         yield 'Valor 1';
//         yield 'Valor 2';
//         yield 'Valor 3';
//     };

//     const g1 = generatorOne();

//     for (let valor of g1) {
//         console.log(valor);
//     }

})();
*/

/* (function () {

//     function* generatorOne() {
//         yield 'Valor 1';
//         yield 'Valor 3';
//         yield 'Valor 3';
//     };

//     const g1 = generatorOne();

//     console.log(g1.next().value);
//     console.log(g1.next().value);
//     console.log(g1.next());
//     console.log(g1.next().done);
// })();
*/