function exemplo_01() {

  function addOrConcat(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
  }

  console.log(addOrConcat(2, 3));
  console.log(addOrConcat('2', '3'));
  console.log(addOrConcat(2, '3'));
  console.log(addOrConcat('2', 3));

};
exemplo_01();
