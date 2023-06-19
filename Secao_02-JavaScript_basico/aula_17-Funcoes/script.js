console.log();

/*
// function somar(x = 0, y = 0) {
//     const resultado =  x + y;
//     return resultado;
// };
// const resultado = somar(1, 3);
// console.log(resultado);
*/

/*
// Função anônima
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));
*/

/*
// Arrow function
const raiz = (n) => {
    return n ** 0.5;
};
console.log(raiz(9));

    Simplificando Arrow Function
    - Se a função tiver somente uma linha de execução:
        - toda declaração pode ser realizada em uma única linha;
            const raiz = (n) => {return n ** 0.5;};
        
        - pode ser retirado os parenteses do parametro;
            const raiz = n => {return n ** 0.5;};
            
        - pode ser retirado as chaves;
            const raiz = n => return n ** 0.5;
        
        - pode ser retirado o retur chaves;
            const raiz = n => n ** 0.5;
*/

// Arrow function
const raiz = n => n ** 0.5;
console.log(raiz(9));