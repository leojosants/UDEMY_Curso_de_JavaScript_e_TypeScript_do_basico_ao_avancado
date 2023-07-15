/*
    * (opcionais)       0 ou n  {0,}
    + (obrigatório)     1 ou n  {1,}
    ? (opcionais)       0 ou 1  {0,1}
    \                   caractere de escape
    {n, m}              {mínimo, máximo}
        {10,}   - no mínimo 10
        {,10}   - de 0 a 10
        {5,10}  - de 5 a 10
        {10}    - 10 vezes
*/

function exemplo_14() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.((jp|JP)(e|E)?(g|G))/g;

    for (const arquivo of arquivos) {
        const valido = arquivo.match(regExp);
        console.log(arquivo, '->', valido);
    }

    // exemplo_14();
}

function exemplo_13() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.jpe{0,1}g/gi;

    for (const arquivo of arquivos) {
        const valido = arquivo.match(regExp);
        console.log(arquivo, '->', valido);
    }

    // exemplo_13();
}

function exemplo_12() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.jpe{1,}g/gi;

    for (const arquivo of arquivos) {
        const valido = arquivo.match(regExp);
        console.log(arquivo, '->', valido);
    }

    exemplo_12();
}

function exemplo_11() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.jpe{0,}g/gi;

    for (const arquivo of arquivos) {
        const valido = arquivo.match(regExp);
        console.log(arquivo, '->', valido);
    }

    // exemplo_11();
}

function exemplo_10() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.jpe?g/gi;

    for (const arquivo of arquivos) {
        const valido = arquivo.match(regExp);
        if (!valido) continue;
        console.log(arquivo, '->', valido);
    }

    // exemplo_10();
}

function exemplo_09() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.jpe*g/gi;

    for (const arquivo of arquivos) {
        console.log(arquivo, '->', arquivo.match(regExp));
    }

    // exemplo_09();
}

function exemplo_08() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.jpe?g/gi;

    for (const arquivo of arquivos) {
        console.log(arquivo, '->', arquivo.match(regExp));
    }

    // exemplo_08();
}

function exemplo_07() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.(jpg|jpeg)/gi;

    for (const arquivo of arquivos) {
        console.log(arquivo, '->', arquivo.match(regExp));
    }

    // exemplo_07();
}

function exemplo_06() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.jpeg/gi;

    for (const arquivo of arquivos) {
        console.log(arquivo, '->', arquivo.match(regExp));
    }

    // exemplo_06();
}

function exemplo_05() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.jpg/gi;

    for (const arquivo of arquivos) {
        console.log(arquivo, '->', arquivo.match(regExp));
    }

    // exemplo_05();
}

function exemplo_04() {

    const { texto, arquivos } = require('../base');

    const regExp = /\.jpg/g;

    for (const arquivo of arquivos) {
        console.log(arquivo, '->', arquivo.match(regExp));
    }

    // exemplo_04();
}

function exemplo_03() {

    const { texto, arquivos } = require('../base');

    const regExp = /\./g;

    for (const arquivo of arquivos) {
        console.log(arquivo.match(regExp));
    }

    // exemplo_03();
}

function exemplo_02() {

    const { texto } = require('../base');
    console.log(`${texto} \n - - -  - - - - - x x x x x x x - - - - - - -  -`);

    const regExp = /Jo+ão+/gi;

    console.log(texto.match(regExp));

    // exemplo_02();
}

function exemplo_01() {

    const { texto } = require('../base');
    console.log(`${texto} \n - - -  - - - - - x x x x x x x - - - - - - -  -`);

    const regExp = /Jo+ão/gi;

    console.log(texto.match(regExp));

    // exemplo_01()
}
