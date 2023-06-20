
function adicionaZeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data) {

    const dia = adicionaZeroEsquerda(data.getDate());
    const mes = adicionaZeroEsquerda(data.getMonth() + 1);
    const ano = adicionaZeroEsquerda(data.getFullYear());
    const hora = adicionaZeroEsquerda(data.getHours());
    const minutos = adicionaZeroEsquerda(data.getMinutes());
    const segundos = adicionaZeroEsquerda(data.getSeconds());
    const diaSemana = adicionaZeroEsquerda(data.getDay());

    return `${diaSemana} ${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(`\n${dataBrasil}`);

/*
// const DataAtualEmMilisegundos = Date.now();
// const data = new Date(DataAtualEmMilisegundos);

// console.log(`Data atual representada em milisegundos: ${DataAtualEmMilisegundos}`);
// console.log(`Data atual: ${data}`);
*/

/*
// const data = new Date('2023-05-23 15:59:00.100');
// const dia = data.getDate();
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const hora = data.getHours();
// const minuto = data.getMinutes();
// const segundos = data.getSeconds();
// const miliSegundos = data.getMilliseconds();
// const diaSemana = data.getDay();
// const DataAtualEmMilisegundos = Date.now();

// console.log(`\nData completa: ${data.toString()}`);
// console.log(`Dia: ${dia}`);
// console.log(`Mês: ${mes}`);
// console.log(`Ano: ${ano}`);
// console.log(`Hora: ${hora}`);
// console.log(`Minutos: ${minuto}`);
// console.log(`Segundos: ${segundos}`);
// console.log(`Milisegundos: ${miliSegundos}`);
// console.log(`Semana: ${diaSemana}`);
* /

/*
// // const data = new Date(ano, numero_refere_ao_mes, dia, hora, minuto(s), segundo(s), miléssimos (opcional));
// const data = new Date(2023, 5, 20, 15, 40, 34);

// console.log(`\n${data}`);
*/

/*
// const tresHoras = (60 * 60 * 3 * 1000);
// const umDia = (60 * 60 * 24 * 1000);
// const data = new Date(0 + tresHoras + umDia);

// console.log(`\n${data.toString()}`);
*/