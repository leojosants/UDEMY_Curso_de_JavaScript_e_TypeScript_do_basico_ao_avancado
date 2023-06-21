// 
const divParagrafos = document.querySelector('.paragrafos');
const pElementos = divParagrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body); // Capturando os estilos aplicados 
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of pElementos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}