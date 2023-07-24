interface Person {
  name: string;
}

interface Person {
  readonly lastname: string;
}

interface Person {
  readonly address: readonly string[];
}

interface Person {
  readonly age?: number;
}

const person: Person = {
  name: 'Leonardo',
  lastname: 'Santos',
  address: ['Av. Tiradentes'],
}

console.log(person);
