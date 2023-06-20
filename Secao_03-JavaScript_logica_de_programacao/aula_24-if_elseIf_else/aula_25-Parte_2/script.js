console.log();

const numeroAleatorio = Math.floor(Math.random() * 100);
let mensagem = null;

if (numeroAleatorio <= 25) { mensagem = '0 e 25'; }
else if (numeroAleatorio >= 26 && numeroAleatorio <= 50) { mensagem = '26 a 50'; }
else if (numeroAleatorio >= 51 && numeroAleatorio <= 75) { mensagem = '51 a 75'; }
else if (numeroAleatorio >= 76 && numeroAleatorio <= 100) { mensagem = '76 a 100'; }

console.log(`O número aleatório está no intervalo de: ${mensagem}`);
// console.log(`O número aleatório ${numeroAleatorio} está no intervalo de: ${mensagem}`);
