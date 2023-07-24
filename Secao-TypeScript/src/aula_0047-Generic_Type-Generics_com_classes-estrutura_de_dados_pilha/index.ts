export class Person<T, U>{
  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: T,

    // eslint-disable-next-line no-unused-vars
    public age: U,
  ) { }
}

export class Stack<T>{
  private counter = 0;
  private elements: { [key: number]: T } = {};

  push(elements: T): void {
    this.elements[this.counter] = elements;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.counter--;
    const elementDeleted = this.elements[this.counter];
    return elementDeleted;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  size(): number {
    return this.counter;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number | string>();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push('Leonardo');

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
