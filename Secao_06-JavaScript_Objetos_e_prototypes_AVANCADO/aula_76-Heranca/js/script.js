// 
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) { this.preco += quantia; };
Produto.prototype.desconto = function (quantia) { this.preco -= quantia; };

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // herança
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype); // lincando os prototypes
Camiseta.prototype.constructor = Camiseta; // especificando o costrutor
Camiseta.prototype.aumento = function (percentual) { this.preco = this.preco + (this.preco * (percentual / 100)) }; // sobrescrevendo

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); // herança
    this.material = material;

    Object.defineProperty(this, 'estoque',
        {
            enumerable: true,
            configurable: false,

            get: function () { return estoque; },

            set: function (valor) {
                if (typeof valor !== 'number') return;
                estoque = valor;
            }
        }
    );
}
Caneca.prototype = Object.create(Produto.prototype); // lincando os prototypes
Caneca.prototype.constructor = Caneca; // especificando o costrutor

const produto = new Produto('Notebook', 3.000);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Indiana', 89.00, 'Porcelana', 5);

// caneca.estoque = '10';
caneca.estoque = 100;

console.log(produto);
console.log(camiseta);
console.log(caneca);