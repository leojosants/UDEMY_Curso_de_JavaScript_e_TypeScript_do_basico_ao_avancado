type Adder = {
  // eslint-disable-next-line no-unused-vars
  (x: number): number,

  // eslint-disable-next-line no-unused-vars
  (x: number, y: number): number,

  // eslint-disable-next-line no-unused-vars
  (...arg: number[]): number,
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((sum, value) => sum + value, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
