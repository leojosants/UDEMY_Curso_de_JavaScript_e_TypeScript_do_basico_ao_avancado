interface TypeName {
  name: string;
}

interface TypeLastname {
  lastname: string;
}

interface TypeFullName {
  fullName(): string;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type TypePerson = TypeName & TypeLastname & TypeFullName;

interface TypePerson2 extends TypeName, TypeLastname, TypeFullName { }

export class Person implements TypePerson2 {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string,

    // eslint-disable-next-line no-unused-vars
    public lastname: string,
  ) { }

  public fullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Leonardo', 'Santos');

console.log(person.fullName());
