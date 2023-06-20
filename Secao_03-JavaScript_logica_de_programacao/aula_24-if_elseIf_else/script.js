console.log();
/*
    - Entre 0 e 11      -->     Bom dia
    - Entre 12 e 17     -->     Boa tarde
    - Entre 18 e 23     -->     Boa noite 
*/

const hora = (Math.floor(Math.random() * 25));
let mensagem = null;

if (hora >= 0 && hora <= 11) { mensagem = 'Bom dia!'; }
else if (hora >= 12 && hora <= 17) { mensagem = 'Boa tarde!'; }
else if (hora >= 18 && hora <= 23) { mensagem = 'Boa noite!'; }
else { mensagem = 'Fora do intervalo!'; }

console.log(`${hora} hora(s) -> ${mensagem}`);

/*
// const hora = (Math.floor(Math.random() * 25));
// console.log(`${hora} hora(s)`);
// if (hora >= 0 && hora <= 11) { console.log('Bom dia!'); }
// else if (hora >= 12 && hora <= 17) { console.log('Boa tarde!'); }
// else if (hora >= 18 && hora <= 23) { console.log('Boa noite!'); }
// else { console.log('Fora do intervalo!'); }
*/