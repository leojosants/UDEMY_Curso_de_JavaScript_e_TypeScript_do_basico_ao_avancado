/*
    ^   ->  Começa com
    $   ->  Termina com
*/

function exercicios_02() {

    const { ips } = require('../base');

    // 250 - 255    ->  25[0-5]
    // const ipRegExp = /(25[0-5])/g;
    // const ipRegExp = /(25[0-5])(\.)/g;
    // const ipRegExp = /^(25[0-5])(\.)/g;

    // 200 - 249    ->  2[0-4][0-9]
    // const ipRegExp = /^(25[0-5]|2[0-4][0-9])(\.)/g;

    // 100 - 199    ->  1\d{2}
    // const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2})(\.)/g;

    // 10 - 99      ->  [1-9]\d  
    // const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d)(\.)/g;

    // 0 - 9        ->  \d
    // const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)/g;

    const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

    console.log(ips);
    console.log(ips.match(ipRegExp));

    // utilizado para montar a expressão regular
    // const ipRegExp = /^((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;
    // for (let i = 0; i <= 300; i++) {
    // const ip = `${i}.${i}.${i}.${i}`
    // console.log(ip, ip.match(ipRegExp));
    // }
};
exercicios_02();

/* function exercicios_01() {

    const { cpfs } = require('../base');

    console.log(cpfs);
    console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));

    // cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g);
    console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));

    // cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g);
    console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

    exercicios_01();
};
*/