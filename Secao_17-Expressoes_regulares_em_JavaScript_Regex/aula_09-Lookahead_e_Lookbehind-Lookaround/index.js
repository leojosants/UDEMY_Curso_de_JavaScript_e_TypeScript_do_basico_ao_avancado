function exemplo_07() {

    const { lookahead } = require('../base');

    const cpf = `
    012.250.796-10
    000.000.000-01
    111.111.111-11
    147.285.963-10
    aaa.bbb.ccc-dd
    `;

    console.log(cpf.match(/(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}/gm))

    // console.log(cpf.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/gm)); // assim funcionou
    // console.log(cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm)); // assin não funcionou conforme exemplo da aula
}
exemplo_07();

/* function exemplo_06() {

    const { lookahead } = require('../base');

    console.log(lookahead);

    // Negative lookbehind (frases que não comecam com ONLINE)
    console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

    exemplo_06();
}
*/

// function exemplo_05() {

//     const { lookahead } = require('../base');

//     console.log(lookahead);

//     // Positive lookbehind (frases que comecam com ONLINE)
//     console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

//     exemplo_05();
// }

/* function exemplo_04() {

    const { lookahead } = require('../base');

    console.log(lookahead);

    // Negative lookahead (frases que nao tem 'active')
    console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

    // Negative lookahead (frases que nao tem 'active')
    console.log(lookahead.match(/^(?!.+inactive).+$/gim));

    exemplo_04();
}
*/

/* function exemplo_03() {

    const { lookahead } = require('../base');

    console.log(lookahead);

    // Positive lookahed (frases que tem 'inactive')
    console.log(lookahead.match(/.+(?=\s+inactive)/gim));

    exemplo_03();
}
*/

/* function exemplo_02() {

    const { lookahead } = require('../base');

    console.log(lookahead);

    // Positive lookahed (frases que tem 'active')
    console.log(lookahead.match(/.+(?=[^in]active)/gim));

    exemplo_02();
}
*/

/* function exemplo_01() {

    const { lookahead } = require('../base');

    console.log(lookahead);
    console.log(lookahead.match(/.+[^in]active$/gim));

    exemplo_01();
}
*/