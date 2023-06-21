// 
const elementos = [
    {
        tag: 'p',
        texto: 'Estou estudando JavaScript.',
    },
    {
        tag: 'div',
        texto: 'Estou estudando HTML.',
    },
    {
        tag: 'section',
        texto: 'Estou estudando CSS.',
    },
    {
        tag: 'footer',
        texto: 'Estou estudando Inglês',
    },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {

    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);

    div.appendChild(tagCriada);
}

container.appendChild(div);