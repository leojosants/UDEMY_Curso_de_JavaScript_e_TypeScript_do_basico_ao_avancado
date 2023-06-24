// 
(function () {

    exampleOne = () => {

        /* Cópia */

        const product = { name: 'produto', price: 1.8 };
        const mug = Object.assign({}, product, { material: 'porcelana' });

        mug.name = 'teste';
        mug.price = 2.5;

        console.log(product);
        console.log(mug);

        exampleOne();
    };

    exampleTwo = () => {

        /* Object.keys - retorna as chaves */

        const product = { name: 'Produto', price: 1.8 };
        const mug = { name: product.name, price: product.price };

        console.log(Object.keys(product));
        console.log(Object.keys(mug));

        exampleTwo();
    };

    exampleThree = () => {

        /* Object.freeze - congela o objeto */

        const product = { name: 'Produto', price: 1.8 };
        Object.freeze(product);
        product.name = 'Veículo'
        console.log(product);

        const mug = { name: product.name, price: product.price };
        Object.freeze(mug);
        mug.price = 9.34;
        console.log(mug);

        exampleThree();
    };

    exampleFour = () => {

        /* 
            O método Object. getOwnPropertyDescriptor() retorna um descritor de propriedades para uma propriedade (isto é, uma diretamente presente, e não pertencente ao objeto por força da cadeia de protótipo do objeto) de um dado objeto. 
        */

        const product = { name: 'Product', price: 1.8 };

        Object.defineProperty(product, 'name',
            {
                writable: false,
                configurable: false
            }
        );

        console.log(Object.getOwnPropertyDescriptor(product, 'name'));

        product.name = 'test';

        console.log(product);

        exampleFour();
    };

    exampleFive = () => {

        /* object.values - retorna somente o valor */

        const product = { name: 'Product', price: 1.8 };

        console.log(Object.values(product));

        exampleFive();
    };

    exampleSix = () => {

        /* object.entries - retorna valor e chave */

        const product = { name: 'Product', price: 1.8 };

        for (let [key, value] of Object.entries(product)) {
            console.log(key, value);
        }

        for (let value of Object.entries(product)) {
            console.log(value[0], value[1]);
        }

    };
    exampleSix();

})();