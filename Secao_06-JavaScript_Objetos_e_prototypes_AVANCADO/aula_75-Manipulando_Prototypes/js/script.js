// 
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percent) {
    this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.adds = function (percent) {
    this.price = this.price + (this.price * (percent / 100));
};

const productThree = Object.create(Product.prototype,
    {
        price: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 142
        },
        size: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 42
        }
    }
);

productThree.adds(23);
console.log(productThree);


/* function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percent) {
    this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.adds = function (percent) {
    this.price = this.price + (this.price * (percent / 100));
};

const productThree = Object.create(Product.prototype);
productThree.price = 100;
productThree.adds(10);

console.log(productThree)
*/

/* function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percent) {
    this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.adds = function (percent) {
    this.price = this.price + (this.price * (percent / 100));
};

const productTwo = { name: 'Caneca', price: 15 };

Object.setPrototypeOf(productTwo, Product.prototype);

productTwo.adds(10);

console.log(productTwo);
*/

/* function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percent) {
    this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.adds = function (percent) {
    this.price = this.price + (this.price * (percent / 100));
};

const productOne = new Product('Camiseta', 50);
const productTwo = { name: 'Caneca', price: 15 };

Object.setPrototypeOf(productTwo, Product.prototype);

productTwo.adds(10);

console.log(productOne);
console.log(productTwo);
*/