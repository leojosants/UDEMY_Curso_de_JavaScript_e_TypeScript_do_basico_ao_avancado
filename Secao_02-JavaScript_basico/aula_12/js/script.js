
console.log(window);

// Somente um alerta, não captura dados
window.alert('Isso é um aviso!');

/*
    Captura dados ao clicar no botão
        OK = true
        CANCELAR = false
*/
const confirmacao = window.confirm('Deseja sair?');
console.log(confirmacao);

// Captura de dados no campo ao digitar
const nome = window.prompt('Digite seu nome');
console.log(typeof(nome));

const numero = Number(prompt('Digite um número'));
console.log(typeof(numero));