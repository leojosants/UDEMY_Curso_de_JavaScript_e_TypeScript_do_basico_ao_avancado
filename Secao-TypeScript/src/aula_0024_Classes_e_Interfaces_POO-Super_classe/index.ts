export class Person {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string,

    // eslint-disable-next-line no-unused-vars
    public lastname: string,

    // eslint-disable-next-line no-unused-vars
    private age: number,

    // eslint-disable-next-line no-unused-vars
    protected cpf: string,
  ) { }

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getFullName(): string {
    return `PERSON: ${this.name} ${this.lastname}`;
  }
}

export class Studenty extends Person {
  public register: string;

  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    register: string,
  ) {
    super(name, lastname, age, cpf);
    this.register = register;
  }

  public getFullName(): string {
    console.log('FAZENDO ALGO ANTES!');
    return super.getFullName();
  }
}

export class Client extends Person {
  public getFullName(): string {
    console.log('FAZENDO ALGO ANTES!');
    return super.getFullName();
  }
}

const person1 = new Person('Leonardo', 'Santos', 39, '000.000.000-00');
const studenty1 = new Studenty('João', 'Matias', 29, '000.111.222-33', '12345');
const client1 = new Client('Maria', 'Josefá', 29, '400.111.222-33');

console.log(person1);
console.log(studenty1);
console.log(client1);
