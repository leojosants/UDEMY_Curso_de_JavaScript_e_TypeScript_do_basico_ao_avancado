export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + ' ' + valor);
}

export function retornaMaiusculo(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplicaArgs(1, 2, 3));
console.log(concatenaStrings('Leonardo', 'Santos'));
console.log(retornaMaiusculo('a', 'b', 'c'));
