export class ShoppingCart {

  private readonly products: Product[] = [];

  public insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  public quantityProducts(): number {
    return this.products.length;
  }

  public totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {

  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string,

    // eslint-disable-next-line no-unused-vars
    public price: number
  ) { }
}

const product1 = new Product('Camiseta', 50.00);
const product2 = new Product('Short', 50.00);

const shoppingCart = new ShoppingCart();
shoppingCart.insertProducts(product1);
shoppingCart.insertProducts(product2);

console.log(shoppingCart);
console.log(shoppingCart.quantityProducts());
console.log(shoppingCart.totalValue());
