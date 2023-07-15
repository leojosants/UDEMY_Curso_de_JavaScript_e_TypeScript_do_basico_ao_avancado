/*
    ^   começa com  -> no início da expressão
    $   termina com -> no final da expressão
    [^] negação

    Flag:
    m   multiline
*/

function exemplo_03() {
    const { cpfs2 } = require('../base');

    const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

    console.log(cpfs2.match(cpfRegExp));
};
exemplo_03();

/* function exemplo_02() {

    const cpf = ' 254.224.877-45';
    const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/g;

    console.log(cpf.match(cpfRegExp));
    
    exemplo_02();
};
*/

/* function exemplo_01() {

    const cpf = '254.224.877-45';
    const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/g;

    console.log(cpf.match(cpfRegExp));
    
    exemplo_01();
};
*/