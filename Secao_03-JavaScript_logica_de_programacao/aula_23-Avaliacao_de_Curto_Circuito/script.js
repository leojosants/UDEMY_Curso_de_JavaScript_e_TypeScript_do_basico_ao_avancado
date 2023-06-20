console.log();

/*
    &&  ->  false && false => false
    ||  ->  true  || false => true

    Valores avaliados em falso:
        FALSY
        false
        0
        string vazia -> ''
        null / undefined
        NaN
*/

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
console.log(a || b || c || d || e);

/*
// const a = 0;
// const b = null;
// const c = 'false';
// const d = false;
// const e = NaN;
// console.log(typeof (a || b || c || d || e));
*/

/*
// const corUsuario = 'azul';
// const corPadrao = (corUsuario || 'red');
// console.log(corPadrao);
*/

/*
// const corUsuario = null;
// const corPadrao = (corUsuario || 'red');
// console.log(corPadrao);
*/

// console.log(0 || false || null || 'Leo' || true);

/*
// function falaOi() {
//     return 'oi';
// }
// const vaiExecutar = false;
// console.log(vaiExecutar && falaOi());
*/

/*
// console.log('Leonardo' && 'João'); // retorna a ultima verifição
// console.log('Leonardo' && '');
// console.log('Leonardo' && undefined && 'Maria');
// console.log('Leonardo' && null && 'Maria');
// console.log('Leonardo' && NaN && 'Maria');
*/