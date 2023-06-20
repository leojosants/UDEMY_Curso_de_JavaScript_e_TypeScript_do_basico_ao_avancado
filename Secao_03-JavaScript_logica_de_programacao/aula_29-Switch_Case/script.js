
function retornaDiaSemana(diaSemana) {

    let mensagem = null;

    switch (diaSemana) {
        case 0:
            mensagem = 'Domingo'
            break;

        case 1:
            mensagem = 'Segunda-feira';
            break;

        case 2:
            mensagem = 'Terca-feira'
            break;

        case 3:
            mensagem = 'Quarta-feira'
            break;

        case 4:
            mensagem = 'Quinta-feira'
            break;

        case 5:
            mensagem = 'Sexta-feira'
            break;

        case 6:
            mensagem = 'Sábado'
            break;

        default:
            mensagem = 'Entrada inválida'
            break;
    }

    return mensagem;
}

const data = {
    ano: Math.floor(Math.random() * 2023),
    mes: Math.floor(Math.random() * 12),
    dia: Math.floor(Math.random() * 31),
    hora: Math.floor(Math.random() * 24),
    minuto: Math.floor(Math.random() * 59),
    segundo: 0
};

const novaData = new Date(data.ano, data.mes, data.dia, data.hora, data.minuto, data.segundo);
const diaSemana = novaData.getDay();
const diaSemanaTexto = retornaDiaSemana(diaSemana);

console.log(`\nDia da semana da data ${data.dia}/${data.mes}/${data.ano}: ${diaSemanaTexto}.`);