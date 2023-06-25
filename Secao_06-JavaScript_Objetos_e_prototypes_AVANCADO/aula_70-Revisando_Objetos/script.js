//
(function () {

    exampleOne = () => {

        // const pessoa = {
        //     nome: 'Leonardo',
        //     sobrenome: 'Santos'
        // };

        // const chave = 'nome';
        // console.log(pessoa[chave]);
        // console.log(pessoa['sobrenome']);

        // console.log(pessoa.nome, pessoa.sobrenome);
        // console.log(pessoa['nome'], pessoa['sobrenome']);
        // exampleOne();
    };

    exampleTwo = () => {

        const peopleOne = new Object();

        peopleOne.nome = 'Leonardo';
        peopleOne.sobrenome = 'Santos';

        console.log(peopleOne.nome, peopleOne.sobrenome);

        exampleTwo();
    };

    exampleTree = () => {

        const peopleOne = new Object();

        peopleOne.nome = 'Leonardo';
        peopleOne.sobrenome = 'Santos';
        peopleOne.apelido = 'teste'

        console.log(peopleOne);

        delete peopleOne.apelido;

        console.log(peopleOne);

        exampleTree();
    };

    exampleFour = () => {

        const peopleOne = new Object();

        peopleOne.id = Math.floor(Math.random() * 10000);
        peopleOne.name = 'Leonardo';
        peopleOne.surname = 'Santos';
        peopleOne.age = 39;

        peopleOne.displayInformation = function () {
            console.log(`${this.id}, ${this.name} ${this.surname}, ${this.age}`);
        };

        peopleOne.getDateOfBirth = function () {
            const currentDate = new Date().getFullYear() - this.age;
            return currentDate;
        };


        for (let key in peopleOne) {
            console.log(key, peopleOne[key]);
        }

        // peopleOne.displayInformation();
        // console.log(peopleOne.getDateOfBirth());

        exampleFour();
    };

    exampleFive = () => {

        function createPerson(name, surname) {
            return {
                name: name,
                surname: surname,

                get fullName() {
                    return `${this.name} ${this.surname}`;
                }
            };
        };

        const peopleOne = createPerson('Leonardo', 'Santos');
        console.log(peopleOne.fullName);

        exampleFive();
    };

    exampleSix = () => {

        function Person(name, surname) {
            this.name = name;
            this.surname = surname;
            // Object.freeze(this); // CUIDADO AO UTILIZAR - trava todo objeto e não permite alteração / criação

            ////////// Object.freeze() --> tambem funciona com arrays
        };

        const peopleOne = new Person('Leonardo', 'Santos');
        const peopleTwo = new Person('Santana', 'Hariel');

        peopleOne.name = 'Josdddé';
        peopleTwo.surname = 'Casius'
        peopleOne.name = 'aaaaaaaaaa';

        console.log(peopleOne);
        console.log(peopleTwo);

    };
    exampleSix();

})();