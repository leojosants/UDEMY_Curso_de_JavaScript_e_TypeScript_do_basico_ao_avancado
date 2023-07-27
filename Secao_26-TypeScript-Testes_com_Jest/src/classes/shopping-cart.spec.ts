import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discoutMock = createDiscountMock();
  const sut = new ShoppingCart(discoutMock);
  return { sut, discoutMock };
};

const createDiscountMock = () => {
  class DiscoutMock extends Discount { }
  return new DiscoutMock();
};

const createCartItem = (name: string, price: number) => {

  class CartItemMock implements CartItem {
    // eslint-disable-next-line no-unused-vars
    constructor(public name: string, public price: number) { }
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discoutMock } = createSut();
  const cartItem0 = createCartItem('Camiseta', 40);
  const cartItem1 = createCartItem('Caneta', 1);

  sut.addItem(cartItem0);
  sut.addItem(cartItem1);

  return { sut, discoutMock };
};

describe('ShoppingCart', () => {
  it('should have 2 cat items.', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount.', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(41);
    expect(sut.totalWithDiscount()).toBe(41);
  });

  it('should add products.', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products.', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });
});
