// Array<T> - T[]

export function exemplo_01() {
  function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((acumulador, valor) => acumulador * valor, 1);
  }

  const result: number = multiplicaArgs(1, 2, 3);
  console.log(result);

  exemplo_01();
};

export function exemplo_02() {
  function concatenaString(...args: string[]): string {
    return args.reduce((acumulador, valor) => acumulador + valor);
  }

  const concatenacao: string = concatenaString('a', 'b', 'c');

  console.log(concatenacao);

  exemplo_02();
};

export function exemplo_03() {
  function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
  }

  const upper: string[] = toUpperCase('a', 'b', 'c');

  console.log(upper);

  exemplo_03();
};
