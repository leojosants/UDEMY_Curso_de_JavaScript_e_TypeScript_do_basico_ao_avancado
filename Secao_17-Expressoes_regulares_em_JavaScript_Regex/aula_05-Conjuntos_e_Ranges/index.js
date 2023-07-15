/*
    [abc]   ->  conjunto
    [^abc]  ->  negação
    [min-max]   ->  range
*/

function exemplo_09() {

    const { alfabeto } = require('../base');

    console.log('\n', alfabeto, '\n');

    // \s	
    // Encontra correspondência com um único caractere de espaço em branco, espaço, tabulação, avanço de página, quebra de linha. Equivalente a [ \f\n\r\t\v\u00A0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000].

    // \S	
    // Encontra correspondência em um único caractere que não seja espaço em branco.Equivalente a[^ \f\n\r\t\v\u00A0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000].


    console.log(alfabeto.match(/\s+/g));
    console.log(alfabeto.match(/\S+/g)); // negação

};
exemplo_09();

/* function exemplo_08() {

    const { alfabeto } = require('../base');

    console.log('\n', alfabeto, '\n');

    // /d
    // Encontra correspondência com um número.Equivalente a[0 - 9].

    console.log(alfabeto.match(/[\d]+/g));
    console.log(alfabeto.match(/\d+/g));
    console.log(alfabeto.match(/\D+/g));
    console.log(alfabeto.match(/\D/g)); // negação

    exemplo_08();
};
*/

/* function exemplo_07() {

    const { alfabeto } = require('../base');

    console.log('\n', alfabeto, '\n');

    // /w
    //  Encontra correspondência de qualquer caractere alfanumérico incluindo underline. Equivalente a [A-Za-z0-9_].

    // /W
    // Encontra correspondência em um não caractere;Equivalente a [^A-Za-z0-9_].

    console.log(alfabeto.match(/[\w]+/g));
    console.log(alfabeto.match(/\w+/g));
    console.log(alfabeto.match(/\W+/g)); // negação

    exemplo_07();
};
*/

/* function exemplo_06() {

    const { alfabeto } = require('../base');

    console.log('\n', alfabeto, '\n');
    console.log(alfabeto.match(/[a-z]+/g));
    console.log(alfabeto.match(/[a-g]+/g));
    console.log(alfabeto.match(/[D-H]+/g));
    console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
    console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // unicode

    exemplo_06();
};
*/

/* function exemplo_05() {

    const { alfabeto } = require('../base');

    console.log('\n', alfabeto, '\n');
    console.log(alfabeto.match(/[0-9]/g));
    // console.log(alfabeto.match(/[9-0]/g)); // não pode ser invertido

    // exemplo_05();
};
*/

/* function exemplo_04() {

    const { alfabeto } = require('../base');

    console.log('\n', alfabeto, '\n');
    console.log(alfabeto.match(/[^abc123]/g));

    // exemplo_04();
};
*/

/* function exemplo_03() {

    const { alfabeto } = require('../base');

    console.log('\n', alfabeto, '\n');
    console.log(alfabeto.match(/[abc123]+/g));

    // exemplo_03();
};
*/

/* function exemplo_02() {

    const { alfabeto } = require('../base');

    console.log('\n', alfabeto, '\n');
    console.log(alfabeto.match(/[abc]+/g));

    // exemplo_02();
};
*/

/* function exemplo_01() {

    const { alfabeto } = require('../base');

    console.log('\n', alfabeto, '\n');
    console.log(alfabeto.match(/[abc]/g));

    // exemplo_01();
};
*/