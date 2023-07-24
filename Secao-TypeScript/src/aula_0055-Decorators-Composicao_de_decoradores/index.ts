interface Constructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
  new(...args: any[]): any;
}

function invertsNameAndColor(param0: string, param1: string) {
  return function (target: Constructor) {
    console.log('Sou o decorator e recebi', target);

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
        return `${value.split('').reverse().join('')} ${param0} ${param1}`;
      }
    };
  }
}

function otherDecorator(param0: string) {
  return function (target: Constructor) {
    console.log(`Sou o outro decorador ${param0}`);
    return target;
  }
}

@otherDecorator('Parâmetro do outro decorator')
@invertsNameAndColor('Valor1', 'Valor2')
export class Animal {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string,

    // eslint-disable-next-line no-unused-vars
    public color: string,
  ) {
    console.log('Sou a classe!');
  }
}

const animal = new Animal('Bento', 'Preto');
console.log(animal);
