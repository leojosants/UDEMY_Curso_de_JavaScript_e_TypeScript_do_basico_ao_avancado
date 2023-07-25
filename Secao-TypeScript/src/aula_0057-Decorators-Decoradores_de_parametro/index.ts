// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decorator(classPrototype: any, nameMethod: string | symbol, index: number): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);

  return 'teste';
}

export class OnePerson {
  name: string;
  lastname: string;
  age: number;

  constructor(
    name: string,
    // @decorator name: string,

    lastname: string,
    // @decorator lastname: string,

    age: number,
    // @decorator age: number,
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }
}

const person = new OnePerson('Leonardo', 'Santos', 39);
const method = person.method('Olá, Mundo!');
console.log(method);
