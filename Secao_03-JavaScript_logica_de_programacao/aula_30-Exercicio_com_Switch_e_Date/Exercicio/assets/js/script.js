/* Versão 1
// const h1 = document.querySelector('.container h1');
// const data = new Date();

// //function retornaDiaSemana(diaSemana) {
// retornaDiaSemana = (diaSemana)  {

//     let mensagem;

//     switch (diaSemana) {
//         case 0:
//             mensagem = 'Domingo'
//             return mensagem;

//         case 1:
//             mensagem = 'Segunda-feira';
//             return mensagem;

//         case 2:
//             mensagem = 'Terça-feira'
//             return mensagem;

//         case 3:
//             mensagem = 'Quarta-feira'
//             return mensagem;

//         case 4:
//             mensagem = 'Quinta-feira'
//             return mensagem;

//         case 5:
//             mensagem = 'Sexta-feira'
//             return mensagem;

//         case 6:
//             mensagem = 'Sábado'
//             return mensagem;

//         default:
//             mensagem = 'Entrada inválida'
//             return mensagem;
//     }
// }

// //function retornaMes(mes) {
// retornaMes = (mes) => {

//     let mensagem;

//     switch (mes) {
//         case 0:
//             mensagem = 'janeiro'
//             return mensagem;

//         case 1:
//             mensagem = 'fevereiro';
//             return mensagem;

//         case 2:
//             mensagem = 'março'
//             return mensagem;

//         case 3:
//             mensagem = 'abril'
//             return mensagem;

//         case 4:
//             mensagem = 'maio'
//             return mensagem;

//         case 5:
//             mensagem = 'junho'
//             return mensagem;

//         case 6:
//             mensagem = 'julho'
//             return mensagem;

//         case 7:
//             mensagem = 'agosto'
//             return mensagem;

//         case 8:
//             mensagem = 'setembro'
//             return mensagem;

//         case 9:
//             mensagem = 'outubro'
//             return mensagem;

//         case 10:
//             mensagem = 'novembro'
//             return mensagem;

//         case 11:
//             mensagem = 'dezembro'
//             return mensagem;

//         default:
//             mensagem = 'Entrada inválida'
//             return mensagem;
//     }
// }

// //function retornaZeroEsquerda(numero) { return numero >= 10 ? numero : `0${numero}`; }
// retornaZeroEsquerda = (numero) => { return numero >= 10 ? numero : `0${numero}`; }

// //function criaData(data) {
// criaData = (data) => {

//     const diaSemana = data.getDay();
//     const dia = data.getDate();
//     const mes = data.getMonth();
//     const ano = data.getFullYear();
//     const horas = data.getHours();
//     const minutos = data.getMinutes();
//     const nomeDia = retornaDiaSemana(diaSemana);
//     const nomeMes = retornaMes(mes);

//     return (
//         `${nomeDia}, ${dia} de ${nomeMes} de ${ano} ` +
//         `${retornaZeroEsquerda(horas)}:${retornaZeroEsquerda(minutos)}`
//     );
// }

// h1.innerHTML = criaData(data);
*/

/* Versão 2 - Conforme documentação Mozila 
const h1 = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes); // toLocaleDateString
*/

/*  Versão 3
const h1 = document.querySelector('.container h1');
const data = new Date();

// function retornaDiaSemana(diaSemana) {
retornaDiaSemana = (diaSemana) => {

    const diasDaSemana = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];

    return diasDaSemana[diaSemana];
}

// function retornaMes(mes) {
retornaMes = (mes) => {

    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril',
        'maio', 'junho', 'julho', 'agosto',
        'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    return meses[mes];
}

// function retornaZeroEsquerda(numero) { return numero >= 10 ? numero : `0${numero}`. }
retornaZeroEsquerda = numero => numero >= 10 ? numero : `0${numero}`;

// function criaData(data) {
criaData = (data) => {

    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const nomeDia = retornaDiaSemana(diaSemana);
    const nomeMes = retornaMes(mes);

    return (
        `${nomeDia}, ${dia} de ${nomeMes} de ${ano} ` +
        `${retornaZeroEsquerda(horas)}:${retornaZeroEsquerda(minutos)}`
    );
}

h1.innerHTML = criaData(data);
*/