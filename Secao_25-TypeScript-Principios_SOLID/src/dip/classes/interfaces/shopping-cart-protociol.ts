import { CartItem } from "./cart-item";

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>

  // eslint-disable-next-line no-unused-vars
  addItem(item: CartItem): void;

  // eslint-disable-next-line no-unused-vars
  removeItem(index: number): void;

  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
