/*
    Factory Function é a implementação em JS de um dos padrões de projetos criacionais, o Factory Method, existente como em outras linguagens orientadas a objetos. 
    Este padrão encapsula a criação de objetos a partir de um de seus métodos, funcionando como uma fábrica de objetos propriamente dita.
*/

(() => {

    criaPessoa = (nome, sobrenome, altura, peso) => {
        return {
            nome, sobrenome,

            // set
            get nomeCompleto() { return `${this.nome} ${this.sobrenome}`; },

            set nomeCompleto(valor) {
                valor = valor.split(' ');
                this.nome = valor.shift();
                this.sobrenome = valor.join(' ');
            },

            fala(assunto) { return `${this.nome}, o que deseja saber? ${assunto}: `; },

            altura: altura,
            peso: peso,

            get calculaImc() { return (this.peso / (Math.pow(this.altura, 2))).toFixed(2); }
        };
    };

    // const p1 = criaPessoa('Leonardo', 'Santos', 1.70, 76);
    // console.log(p1.fala('falando algo...'));

    // const p2 = criaPessoa('José', 'Honório', 1.60, 42);
    // console.log(p2.fala('IMC'), p2.calculaImc);

    const p3 = criaPessoa('Ana', 'Mariana', 1.49, 59);
    p3.nomeCompleto = 'José Bonifácio Arantes';
    console.log(p3.nome);
    console.log(p3.sobrenome);

})();