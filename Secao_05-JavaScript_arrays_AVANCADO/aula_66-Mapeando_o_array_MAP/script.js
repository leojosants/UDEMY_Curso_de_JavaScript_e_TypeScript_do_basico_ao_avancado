/*
    O map é um método nativo do JavaScript, utilizado na manipulação (alteração) de dados dentro de arrays.
*/
(function () {

    /*
        Para cada elemento:
        - Retorne apenas uma string com o nome da pessoa.
        - Remova apenas a chave 'nome' do objeto.
        - Adcione uma chave id em cada objeto
    */
    exemploTwo = () => {

        const people = [
            { nome: 'Luiz', idade: 62 },
            { nome: 'Maria', idade: 23 },
            { nome: 'Eduardo', idade: 55 },
            { nome: 'Letícia', idade: 19 },
            { nome: 'Rosana', idade: 32 },
            { nome: 'Wallace', idade: 47 }
        ];

        const names = people.map(obj => obj.nome);

        const ages = people.map(obj => ({ idade: obj.idade }));

        const withIds = people.map((obj) => {
            const newObj = { ...obj };
            newObj.id = Math.floor(Math.random() * 100);
            return newObj;
        });

        console.log('Nomes:', names);
        console.log('Idades:', ages);
        console.log('Ids:', withIds);
        exemploTwo();
    };

    // exemploOne = () => {

    //     // Dobrar valores

    //     const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

    //     const duplicateNumbers = numbers.map(value => value * 2)

    //     console.log('Valores duplicados:', duplicateNumbers);
    //     exemploOne();
    // };

})();