type HaveName = { name: string };
type HaveLastName = { lastName: string };
type HaveAge = { age: number };
type Person = HaveName & HaveLastName & HaveAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type intersection = AB & AC; //eslint-disable-line

const person: Person = {
  name: 'Leonardo',
  lastName: 'Santos',
  age: 39,
}

console.log(person);

export { person };
