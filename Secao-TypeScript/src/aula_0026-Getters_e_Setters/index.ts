export class Person {
  constructor(
    private _name: string,
    private _lastname: string,
    private _age: number,
    private _cpf: string,

  ) {
    this.name = _name;
    this.lastname = _lastname;
    this.age = _age;
    this.cpf = _cpf;
  }

  public get name(): string { return this._name; }
  public set name(name: string) { this._name = name; }

  public get lastname(): string { return this._lastname; }
  public set lastname(lastname: string) { this._lastname = lastname }

  public get age(): number { return this._age; }
  public set age(age: number) { this._age = age; }

  public get cpf(): string { return this._cpf.replace(/\D/g, ''); }
  public set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const person1 = new Person('Leonardo', 'Santos', 39, '000.222.333-44');

person1.cpf = '000.222.333-00';

console.log(person1.cpf);
