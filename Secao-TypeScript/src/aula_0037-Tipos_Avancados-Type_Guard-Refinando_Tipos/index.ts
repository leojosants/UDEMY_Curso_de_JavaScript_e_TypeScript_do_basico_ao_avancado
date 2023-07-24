export function add(a: unknown, b: unknown): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 2));
console.log(add('a', 'b'));

type Person = {
  type: 'person',
  name: string,
};

type Animal = {
  type: 'animal',
  color: string,
};

type PersonOrAnimal = Person | Animal;

export class Studenty implements Person {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  type: 'person' = 'person';

  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string
  ) { }
}

function showName(obj: PersonOrAnimal): void {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Studenty) console.log(obj.name);

  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      break;

    case 'animal':
      console.log('Isso é um animal', obj.color);
      break;
  }
}

showName(new Studenty('Leonardo'));

showName(
  {
    type: 'animal',
    color: 'Vermelho',
  }
);
