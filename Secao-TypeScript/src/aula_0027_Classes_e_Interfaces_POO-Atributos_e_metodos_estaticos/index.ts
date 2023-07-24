export class Person {

  static standardAge = 0;
  static stardardCpf = '000.000.000-00';

  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string,

    // eslint-disable-next-line no-unused-vars
    public lastname: string,

    // eslint-disable-next-line no-unused-vars
    public age: number,

    // eslint-disable-next-line no-unused-vars
    public cpf: string,

  ) { }

  public normalMethod(): void {
    console.log(Person.standardAge, Person.stardardCpf);
  }

  static createPerson(name: string, lastname: string,): Person {
    return new Person(name, lastname, Person.standardAge, Person.stardardCpf);
  }
}

const person1 = Person.createPerson('Leonardo', 'Santos');

console.log(person1);
person1.normalMethod();
