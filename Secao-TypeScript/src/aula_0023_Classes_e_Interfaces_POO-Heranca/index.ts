export class Person {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public readonly name: string,

    // eslint-disable-next-line no-unused-vars
    public readonly lastname: string,

    // eslint-disable-next-line no-unused-vars
    private readonly age: number,

    // eslint-disable-next-line no-unused-vars
    protected readonly cpf: string,
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
  public getFullName(): string {
    return `STUDENTY: ${this.name} ${this.lastname}`;
  }
}

export class Client extends Person {
  public getFullName(): string {
    return `CLIENT: ${this.name} ${this.lastname}`;
  }
}

const person1 = new Person('Leonardo', 'Santos', 39, '000.000.000-00');
const studenty1 = new Studenty('João', 'Matias', 29, '000.111.222-33');
const client1 = new Client('Maria', 'Josefá', 29, '400.111.222-33');

console.log(person1);
console.log(person1.getFullName());

console.log(studenty1);
console.log(studenty1.getFullName());

console.log(client1);
console.log(client1.getFullName());
