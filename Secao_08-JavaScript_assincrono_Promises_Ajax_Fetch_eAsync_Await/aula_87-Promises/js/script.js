//
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    const aleatorio = Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Entrada inválida!');

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

esperaAi('\tConexão com BD.', rand(1, 3))
    .then(resposta => {
        console.log('\nIniciado PROMISE');
        console.log(resposta);
        return esperaAi('\tBuscando DB.', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('\tExibe DB.');
        console.log('Finalizado PROMISE.');
    })
    .catch((e) => {
        console.log('\t-> ERRO:', e);
    });


console.log('\nCódigo executando independente!');