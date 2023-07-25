/* let x;

if (typeof x === 'undefined') x = 20;

console.log(x * 20);
*/

/* export function createPerson(firstName: string, lastName?: string): { firstName: string, lastName?: string } {
  return {
    firstName,
    lastName,
  }
}

console.log(createPerson('Leonardo', 'Santos'));
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfNumber = squareOf('2');

if (squareOfNumber === null) console.log('Invalid account!');
else console.log(squareOfNumber);
