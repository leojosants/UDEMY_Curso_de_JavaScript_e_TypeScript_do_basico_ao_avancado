
const nome = 'Leonardo';
const alturaEmCm = 1.7
const anoDeNascimento = 1984

let sobrenome = 'Santos';
let anoAtual = 2023
let idade = anoAtual - anoDeNascimento;
let peso = 75;
let indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);

console.log(`
    Nome: ${nome} ${sobrenome} \n
    Ano de nascimento: ${anoDeNascimento} \n
    Idade atual: ${idade} anos \n
    Peso: ${peso} Kg \n
    Altura: ${alturaEmCm} cm  \n
    Índice de Massa Corporal (IMC): ${indiceMassaCorporal}
`);