export function exemplo_01() {

  let x;

  if (typeof x === 'undefined') x = 20;

  console.log(x * 2);

  exemplo_01();
};

export function exemplo_02() {

  function createPerson(firstName: string, lastName?: string): { firstName: string; lastName?: string; } {
    return { firstName, lastName }
  }

  console.log(createPerson('Leonardo', 'Santos'));

  exemplo_02();
};

export function exemplo_03() {

  function squareOf(x: any) {
    if (typeof x === 'number') return x * x;
    return null;
  };

  const squareOfTwoNumber = squareOf(2);

  if (squareOfTwoNumber === null) {
    console.log('Conta inválida');
  }
  else {
    console.log(squareOfTwoNumber * 100);
  }

  exemplo_03();
};
