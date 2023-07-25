/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace0 {
  export const name = 'leonardo';

  export class PersonNamespace {
    constructor(
      // eslint-disable-next-line no-unused-vars
      public name: string
    ) { }
  }

  const person0 = new PersonNamespace('João');
  console.log(person0);

  export namespace OtherNamespace {
    export const name = 'Joana';
  }
}

const person1 = new MyNamespace0.PersonNamespace('Mara');
console.log(person1);
console.log(MyNamespace0.name);
console.log(MyNamespace0.OtherNamespace.name);

