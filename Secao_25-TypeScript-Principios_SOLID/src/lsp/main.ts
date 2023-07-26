/*
  LSP - Liskov Substitution Principle (Princípio da Substituição de Liskov)
  Se phi(x) é uma propriedade demonstrável dos objetos 'x' de tipo 'T'. Então phi(y) deve ser verdadeiro para objetos 'y' do tipo 'S' onde 'S' é um subtipo de 'T'.

  - Subtipos precisam ser substituíveis por seus tipos de base / Se um programa espera um Animal (cachorro), que herda de Animal, deve servir como qualquer outro Animal.
*/

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount } from './classes/discount';

// const tenPercentDiscount = new TenPercentDiscount();
// const fiftyPercentDiscount = new FiftyPercentDiscount();

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency;
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);
