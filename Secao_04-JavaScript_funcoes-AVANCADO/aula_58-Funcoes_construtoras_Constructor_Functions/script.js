//
(function () {

    function Pessoa(nome, sobrenome) {
        const id = Math.floor(Math.random() * 1000);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.exibeInfo = function () { console.log(`Id: ${id} - ${this.nome} ${this.sobrenome}`); };
    }

    const p1 = new Pessoa('Leonardo', 'Santos');

    p1.exibeInfo();

})();