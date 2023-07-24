/* type TypePerson = {
  name: string;
  lastname: string;
  fullName: () => string;
}

export class Person implements TypePerson {

  constructor(
    public name: string,
    public lastname: string,
  ) { }

  public fullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Leonardo', 'Santos');

console.log(person.fullName());
*/

type TypeName = {
  name: string;
}
type TypeLastname = {
  lastname: string;
}
type TypefullName = {
  fullName: () => string;
}

export class Person implements TypeName, TypeLastname, TypefullName {

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
