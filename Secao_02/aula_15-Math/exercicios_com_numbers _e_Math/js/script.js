const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero_titulo');
const texto = document.getElementById('texto');

// document.body.innerHTML += `<h1>Seu número é: ${numero}</h1>`;
numeroTitulo.innerHTML = numero;

texto.innerHTML = '';

// document.body.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(numero)}</strong> <br />`;
texto.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(numero)}</strong> <br />`;
texto.innerHTML += `Raiz quadrada: <strong>${numero ** 0.5}</strong> <br />`;

// document.body.innerHTML += `${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong> <br />`;
texto.innerHTML += `${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong> <br />`;

// document.body.innerHTML += `É NaN? <strong>${Number.isNaN(numero)}</strong> <br />`;
texto.innerHTML += `É NaN? <strong>${Number.isNaN(numero)}</strong> <br />`;

// document.body.innerHTML += `Arrendondando para baixo: <strong>${Math.floor(numero)}</strong> <br />`;
texto.innerHTML += `Arrendondando para baixo: <strong>${Math.floor(numero)}</strong> <br />`;

// document.body.innerHTML += `Arrendondando para cima: <strong>${Math.ceil(numero)}</strong> <br />`;
texto.innerHTML += `Arrendondando para cima: <strong>${Math.ceil(numero)}</strong> <br />`;

// document.body.innerHTML += `Com dias casas decimais: <strong>${numero.toFixed(2)}</strong> <br />`;
texto.innerHTML += `Com duas casas decimais: <strong>${numero.toFixed(2)}</strong> <br />`;