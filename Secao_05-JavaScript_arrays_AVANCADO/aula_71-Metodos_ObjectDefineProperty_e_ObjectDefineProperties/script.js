/*
    O método Object.defineProperty() / Object.defineProperties() define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto. Nota: Você invoca este método diretamente no construtor do Object ao invés de invocar em uma instância do tipo Object .
*/

(function () {
    exampleDefineProperty = () => {

        exampleOne = () => {

            function Product(name, price, stock) {
                this.name = name;
                this.price = price;
                // this.stock = stock;

                // Primeira declaração
                Object.defineProperty(this, 'stock',
                    {
                        enumerable: true,   // mostra a chave  oculta
                        value: stock,       // mostra o valor da chave oculta
                        writable: false,    // permite ou não alteração
                        configurable: true  // configura ou não a chave, sendo true, redeclarar todo bloco e reconfigurar 
                    }
                );

                // Redeclaração devido a 'configurable' estar true.
                Object.defineProperty(this, 'stock',
                    {
                        enumerable: true,
                        value: stock,
                        writable: true,
                        configurable: false
                    }
                );
            }

            const productOne = new Product('Camiseta', 20, 3);

            productOne.stock = 500000;
            console.log(productOne);
            exampleOne();
        };

        exampleTwo = () => {

            function Product(name, price, stock) {
                this.name = name;
                this.price = price;

                Object.defineProperty(this, 'stock',
                    {
                        enumerable: true,   // mostra a chave  oculta
                        value: stock,       // mostra o valor da chave oculta
                        writable: true,    // permite ou não alteração
                        configurable: false  // configura ou não a chave, sendo true, redeclarar todo bloco e reconfigurar 
                    }
                );

            }

            const productOne = new Product('Camiseta', 20, 3);

            productOne.stock = 500000;
            delete productOne.stock; // não será realizado devido 'configurable: false'
            console.log(productOne);

            exampleTwo();
        };

        exampleThree = () => {

            function Product(name, price, stock) {
                this.name = name;
                this.price = price;

                Object.defineProperty(this, 'stock',
                    {
                        enumerable: false,   // mostra a chave  oculta
                        value: stock,       // mostra o valor da chave oculta
                        writable: true,     // permite ou não alteração
                        configurable: false // configura ou não a chave, sendo true, redeclarar todo bloco e reconfigurar 
                    }
                );

            }

            const productOne = new Product('Camiseta', 20, 3);

            console.log(Object.keys(productOne)); // retorna as chaves do objeto, conforme 'enumerable: false / true'
            exampleThree();
        };
        exampleDefineProperty();
    };

    exampleDefineProperties = () => {

        exampleOne = () => {

            function Product(name, price, stock) {

                Object.defineProperty(
                    this,
                    'stock',
                    {
                        enumerable: true,
                        value: stock,
                        writable: true,
                        configurable: true
                    }
                );

                Object.defineProperties(
                    this,
                    {
                        name: {
                            enumerable: true,
                            value: name,
                            writable: true,
                            configurable: true
                        },
                        price: {
                            enumerable: true,
                            value: price,
                            writable: true,
                            configurable: true
                        }
                    }
                );

            }

            const productOne = new Product('T-shirt', 20, 3);

            console.log(productOne);

            for (let key in productOne) { console.log(key); }

            exampleOne();
        };

        exampleTwo = () => {

            function Product(name, price, stock) {
                this.name = name;
                this.price = price;

                Object.defineProperty(
                    this,
                    'stock',
                    {
                        enumerable: true,
                        value: stock,
                        writable: true,
                        configurable: true
                    }
                );
            }

            const productOne = new Product('T-shirt', 20, 3);

            console.log(Object.keys(productOne));

            for (let key in productOne) { console.log(key); }

        };
        exampleTwo();

    };
    exampleDefineProperties();

})();