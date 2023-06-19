console.log();

const pessoa1 = {

    nome: 'Leonardo',
    sobrenome: 'Santos',
    idade: 39,

    fala() {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
    },

    fazAniversario() {
        console.log(`Fiz aniversário, agora tenho ${++this.idade} anos`);
    }
};

pessoa1.fala();
pessoa1.fazAniversario();

/*
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
const exibePessoa = pessoa => `Nome: ${pessoa.nome}, Sobrenome: ${pessoa.sobrenome}, Idade: ${pessoa.idade}`;
pessoa1 = criaPessoa('Leonardo', 'Santos', 39);
console.log(exibePessoa(pessoa1));
*/