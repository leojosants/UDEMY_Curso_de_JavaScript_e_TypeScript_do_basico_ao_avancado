/*
    g   - global      --> encontra todas as ocorrências
    i   - insensitive --> não checa letras maiúsculas
    ()  - grupos
    |   - ou
*/

const { texto } = require('../base');

function exemploFuncaoExec() {

    const regExp1 = /(maria|joão|João)(, hoje sua esposa)/i;
    const found = regExp1.exec(texto);

    if (found) {
        console.log(found[0]);
        console.log(found[1]);
        console.log(found[2]);
    }

    /*
    // const regExp1 = /(Teve )(5 filhos)/i;
    // console.log(regExp1.exec(texto));
    */

    /*
    // const regExp1 = /Teve 5 filhos/i;
    // console.log(regExp1.exec(texto).input);
    */

    /*
    // const regExp1 = /Teve 5 filhos/i;
    // console.log(regExp1.exec(texto).index);
    */

    /*
    // const regExp1 = /Teve 5 filhos/i;
    // console.log(regExp1.exec(texto)[0]);
    */

    /*
    //  const regExp1 = /Teve 5 filhos/i;
    // console.log(regExp1.exec(texto));
    */

    exemploFuncaoExec();
}

function exemploFuncaoTest() {

    const regExp1 = /Teve 5 filhos/i;
    console.log(regExp1.test(texto));

    /*
    // const regExp1 = /João/i;
    // console.log(regExp1.test(texto));
    */

    /*
    // const regExp1 = /João/;
    // console.log(regExp1.test(texto));
    */

    exemploFuncaoTest();
}