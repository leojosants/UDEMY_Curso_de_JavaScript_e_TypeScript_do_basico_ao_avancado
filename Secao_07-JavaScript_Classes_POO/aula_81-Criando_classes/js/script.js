// 
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { console.log(`${this.nome} está falando!`); }
}

// Comparando com factory function
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () { console.log(`${this.nome} está falando!`); };


const p1 = new Pessoa('Leonardo', 'Santos');
console.log(p1);

const p2 = new Pessoa('João', 'Santos');
console.log(p2);