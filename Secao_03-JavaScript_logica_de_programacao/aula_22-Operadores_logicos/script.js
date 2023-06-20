console.log();

/*
operadores lógicos
    &&  ->  AND ->  E
    ||  ->  OR  ->  OU
    !   ->  NOT ->  NÃO
*/

const usuario = 'Leonardo';
const senha = 123456;
const operadorAnd = (usuario === 'Leonardo' && senha === 123456);
const operadorOr = (usuario === 'Leonardo' || senha === 123756);

console.log(`Vai logar? ${operadorAnd}`);
console.log(`Vai logar? ${operadorOr}`);

/*
// const expressaoAnd = (true && true);
// const expressaoOr = (true || false);
// const expressaoNot = (!true);
// console.log(expressaoAnd);
// console.log(expressaoOr);
// console.log(expressaoNot);
*/