// 
function retornaHora() {

    let data = new Date();

    return data.toLocaleTimeString('pt-BR', { hour12: false });
}

// Executa em periodos o tempo passado por parâmetro
console.log('setInterval() iniciado...');
const timer = setInterval(() => {
    console.log(retornaHora());
}, 1000);

// Executa somente uma vez, conforme o tempo passado por parâmetro
setTimeout(() => {
    clearInterval(timer);
    console.log('setInterval() interrompido');
}, 5000);

setTimeout(() => {
    console.log(`setTimeout() executado após 10s`);
}, 10000);