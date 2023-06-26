/*
    XMLHttpRequest é uma API disponível em linguagens de script para navegadores web tais como JavaScript. É utilizada para enviar requisições HTTP ou HTTPS diretamente para um servidor web e carregar os dados de resposta do servidor diretamente de volta ao script.
*/

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
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('ERRO 404!');

        const html = await response.text();

        carregaResultado(html);
    }
    catch (err) { console.error(err) };
};

function carregaResultado(response) {

    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
};