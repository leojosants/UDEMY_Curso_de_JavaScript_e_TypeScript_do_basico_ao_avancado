@decorator
export class Animal {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string,

    // eslint-disable-next-line no-unused-vars
    public color: string,
  ) { }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    name: string;
    color: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      this.name = this.inverts(args[0]);
      this.color = this.inverts(args[1]);
    }

    inverts(value: string): string {
      return value.split('').reverse().join('')
    }
  };
}

const animal = new Animal('Bento', 'Preto');
console.log(animal);
