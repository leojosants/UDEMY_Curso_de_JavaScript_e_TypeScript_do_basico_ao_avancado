// 
exemplo06 = () => {

    class Pessoa {
        constructor(nome) {
            this.nome = nome;
        }
    }

    const nome = 'Leonardo';
    const sobrenome = 'Santos';

    module.exports = {
        nome, sobrenome, Pessoa
    };
};
exemplo06()

/* exemplo05 = () => {

    class Pessoa {
        constructor(nome) {
            this.nome = nome;
        }
    }

    exports.Pessoa = Pessoa;
    exemplo05()
};
*/

/* exemplo04 = () => {

    const nome = 'Leonardo';
    const sobrenome = 'Santos';

    const falaNome = () => `${nome} ${sobrenome}`;

    exports.nome = nome;
    exports.sobrenome = sobrenome;
    exports.falaNome = falaNome;
    this.teste = 'teste';
    exemplo04()
};
*/

/* exemplo03 = () => {

    const nome = 'Leonardo';
    const sobrenome = 'Santos';

    const falaNome = () => {
        console.log(nome, sobrenome);
    };

    exports.nome = nome;
    exports.sobre = sobrenome;
    exports.falaNome = falaNome;
    this.teste = 'teste';

    console.log(exports);
    exemplo03()
};
*/

/* exemplo02 = () => {
    const nome = 'Leonardo';
    const sobrenome = 'Santos';

    const falaNome = () => {
        console.log(nome, sobrenome);
    };

    exports.nome = nome;
    exports.sobre = sobrenome;
    exports.falaNome = falaNome;

    exemplo02()
};
*/

/* exemplo01 = () => {

    console.log(exports);
    const nome = 'Leonardo';
    const sobrenome = 'Santos';

    const falaNome = () => {
        console.log(nome, sobrenome);
    };

    module.exports.nome = nome;
    module.exports.sobre = sobrenome;
    module.exports.falaNome = falaNome;

    console.log(module.exports);
    exemplo01()
};
*/