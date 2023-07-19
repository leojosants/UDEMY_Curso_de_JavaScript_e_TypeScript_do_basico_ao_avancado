export function exemplo_01() {

  const dadosCliente1: [string, number] = ['Leonardo', 39];

  dadosCliente1[0] = 'Leonardo Santos';
  dadosCliente1[1] = 40;

  console.log(dadosCliente1);

  exemplo_01();
};

export function exemplo_02() {

  const dadosCliente1: [string, number, string?] = ['Leonardo', 39];

  dadosCliente1[0] = 'Leonardo';
  dadosCliente1[2] = 'Santos';
  dadosCliente1[1] = 40;

  console.log(dadosCliente1[0], dadosCliente1[2], dadosCliente1[1]);

  exemplo_02();
};

export function exemplo_03() {

  const dadosCliente1: readonly [string, number, ...string[]] = ['Leonardo', 39, 'SJDR', 'MG'];

  // dadosCliente1.pop(); o tipo 'readonly' não permite nenhum tipo de alteração

  console.log(dadosCliente1);

  exemplo_03();
};

export function exemplo_04() {
  const array1: readonly string[] = ['Leonardo', 'Santos'];
  const array2: ReadonlyArray<string> = ['Leonardo', 'Santos'];

  console.log(array1);
  console.log(array2);

  exemplo_04();
};
