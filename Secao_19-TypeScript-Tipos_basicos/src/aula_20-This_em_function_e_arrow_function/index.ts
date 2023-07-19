export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
};

funcao.call(new Date(), 'Leonardo', 39);
funcao.apply(new Date(), ['Leonardo', 39]);
