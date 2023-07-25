let x = 10;
x = 0b1010;
console.log(x);

const y = 10;
console.log(y);

let a = 100 as const; //eslint-disable-line
console.log(a);

const person = {
  name: 'Leonardo' as const,
  lastName: 'Santos',
}
console.log(person);

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}
chooseColor('Red');

export default 1;
