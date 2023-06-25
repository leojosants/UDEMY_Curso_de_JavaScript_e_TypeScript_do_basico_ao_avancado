/*
    O método Object.defineProperty() / Object.defineProperties() define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto. Nota: Você invoca este método diretamente no construtor do Object ao invés de invocar em uma instância do tipo Object .
*/

(function () {
    exampleDefinePropertyGettersAndSetters = () => {

        exampleOne = () => {

            function Product(name, price, stock) {
                this.name = name;
                this.price = price;

                let privatetStock = stock;

                Object.defineProperty(this, 'stock',
                    {
                        enumerable: true,   // mostra a chave  oculta
                        configurable: true,  // configura ou não a chave, sendo true, redeclarar todo bloco e reconfigurar 

                        get: function () { return privatetStock; },

                        set: function (value) {

                            if (typeof value !== 'number') {
                                throw new TypeError('Tipo de entrada inválida!');
                            }

                            privatetStock = value
                        }
                    }
                );

            }

            const productOne = new Product('Camiseta', 20, 3);

            console.log(productOne);
            productOne.stock = '500';
            console.log(productOne.stock);
            exampleOne();
        };

        exampleTwo = () => {

            function createProduct(name) {
                return {
                    get name() { return name; },

                    set name(value) {
                        value = value.replace(' .', '');
                        name = value;
                    }
                };
            };

            const productOne = createProduct('Camisa');

            productOne.name = 'Short     .';

            console.log(productOne.name);

        };
        exampleTwo();

    };
    exampleDefinePropertyGettersAndSetters();

})();