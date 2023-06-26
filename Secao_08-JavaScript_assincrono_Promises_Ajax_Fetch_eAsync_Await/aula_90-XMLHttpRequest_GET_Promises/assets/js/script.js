/*
    XMLHttpRequest é uma API disponível em linguagens de script para navegadores web tais como JavaScript. É utilizada para enviar requisições HTTP ou HTTPS diretamente para um servidor web e carregar os dados de resposta do servidor diretamente de volta ao script.
*/

const request = obj => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);

        xhr.send();

        xhr.addEventListener('load', () => {

            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }
            else {
                reject({ msg: xhr.statusText });
            }
        });
    });
};

document.addEventListener('click', e => {

    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {

    try {

        const href = el.getAttribute('href');

        const objConfig = {
            method: 'GET',
            url: href,
        };

        const response = await request(objConfig);

        carregaResultado(response);
    }
    catch (err) {
        console.log('ERRO:', err);
    }
};

function carregaResultado(response) {

    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
};