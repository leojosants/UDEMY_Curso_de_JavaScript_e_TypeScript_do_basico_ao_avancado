interface PersonProtocol<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

type PersonProtocol1<T = string, U = number> = {
  name: T;
  lastname: T;
  age: U;
}

const studenty1: PersonProtocol<string, number> = {
  name: 'Leonardo',
  lastname: 'Santos',
  age: 39,
};

const studenty2: PersonProtocol<number, number> = {
  name: 0,
  lastname: 1,
  age: 39,
};

const studenty3: PersonProtocol1 = {
  name: 'Leonardo1',
  lastname: 'Santos1',
  age: 38,
};

console.log(studenty1);
console.log(studenty2);
console.log(studenty3);
