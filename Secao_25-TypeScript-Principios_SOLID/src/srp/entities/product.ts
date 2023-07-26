import { CartItem } from "./interfaces/cart-item";

export class Product implements CartItem {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string,

    // eslint-disable-next-line no-unused-vars
    public price: number,
  ) { }
}
