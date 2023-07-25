// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function decorator(classPrototype: any, nameMethod: string | symbol): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let valueProperty: any;

  return {
    get: () => valueProperty,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set: (value: any) => {
      if (typeof value === 'string') {
        valueProperty = value.split('').reverse().join('');
        return;
      }

      valueProperty = value;
    },
  };
}

export class OnePerson {

  @decorator
  name: string;

  @decorator
  lastname: string;

  @decorator
  age: number;

  constructor(
    name: string,
    lastname: string,
    age: number,
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  method(msg: string): string {
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
