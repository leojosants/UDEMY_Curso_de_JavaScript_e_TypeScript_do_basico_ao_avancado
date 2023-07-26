/*
  ISP - Interface Segregation Principle (Princípio da Segregação de Interface)
  Os clientes não devem ser forçados a depender de 'types, interfaces ou membros abstratos' que não utilizam.
*/

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from "./classes/customer";

// const tenPercentDiscount = new TenPercentDiscount();
// const fiftyPercentDiscount = new FiftyPercentDiscount();

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency;

// const individualCustomer = new IndividualCustomer('Leonardo', 'Santos', '000.000.000-00');
const enterpriseCustomer = new EnterpriseCustomer('Nome da Empresa', '00.000.000/0001-00');

const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);
