// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decorator(classPrototype: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);

  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class OnePerson {
  name: string;
  lastname: string;
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

  @decorator
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
