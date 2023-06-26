/* Promise.all / Promise.race / Promise.resolve / Promise.reject */

/*// Promise.all
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    const aleatorio = Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Entrada inválida!');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' --> Passei na promise.');
        }, tempo)
    });
}

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // esperaAi(1000, rand(1, 5)),
    'Outro valor'
];

Promise.all(promises)
.then(valor => { console.log(valor); })
.catch(e => { console.log('-> ERRO:', e); })
*/

/*// Promise.race
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    const aleatorio = Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Entrada inválida!');
                return;
            }

            resolve(msg.toUpperCase() + ' --> Passei na promise.');
        }, tempo)
    });
}

const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
];

Promise.race(promises)
    .then(valor => { console.log(valor); })
    .catch(e => { console.log('-> ERRO:', e); })

*/

/*// Promise.resolve
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    const aleatorio = Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Entrada inválida!');
                return;
            }

            resolve(msg.toUpperCase() + ' --> Passei na promise.');
        }, tempo)
    });
}

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache.');
    }
    else {
        console.log('baixando...');
        return esperaAi('Baixei a página.', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('-> ERRO:', e))
*/

// Promise.reject
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    const aleatorio = Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Entrada inválida!');
                return;
            }

            resolve(msg.toUpperCase() + ' --> Passei na promise.');
        }, tempo)
    });
}

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache.');
    }
    else {
        console.log('baixando...');
        return esperaAi('Baixei a página.', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('-> ERRO:', e))