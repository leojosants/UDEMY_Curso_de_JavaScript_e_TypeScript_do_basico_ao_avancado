export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const retturn = args.reduce((sum, value) => {

    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }

    return sum;
  }, 0);

  return retturn;
}

console.log(sum(1, 2, 3));
// console.log(sum(...[1, 2, 3, 'a', 'b', 'c', 1])); // apresentando erro
console.log(sum('a', 'b', 'c'));
