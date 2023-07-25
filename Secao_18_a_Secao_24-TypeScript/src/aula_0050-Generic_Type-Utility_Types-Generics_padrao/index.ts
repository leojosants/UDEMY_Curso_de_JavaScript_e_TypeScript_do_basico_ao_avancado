// Record
const object0: Record<string, string | number> = {
  name: 'Leonardo',
  lastname: 'Santos',
  age: 39,
}
console.log(object0);

type PersonProtocol = {
  name?: string,
  lastname?: string,
  age?: number,
}

// Required - Transforma tudo que for opcional em requerido
type PersonRequired = Required<PersonProtocol>;

// Partial - Transforma tudo que for requerido em opcional
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type PersonPartial = Partial<PersonRequired>;

// Readonly - Não permite modificação
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type PersonReadonly = Readonly<PersonRequired>;

// Pick - Permite pegar dados dentro do objeto para utilização
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type PersonPick = Pick<PersonRequired, 'name' | 'lastname'>;

const object1: PersonRequired = {
  name: 'Leonardo',
  lastname: 'Santos',
  age: 39,
}
console.log(object1);

/* Extract e Exclude */
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';


// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type TypeExclude = Exclude<ABC, CDE>; // Computa tudo que está em ABC que não estão em CDE

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type TypeExtract = Extract<ABC, CDE>; // Computa tudo que está em ABC que podem ser atribuídos em CDE

type AccountMongo = {
  _id: string,
  name: string,
  age: number,
  lastname: string,
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string };

const accountMongo: AccountMongo = {
  _id: 'asasassdfffr989f9r89fr8',
  name: 'Leonardo',
  age: 39,
  lastname: 'Santos',
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);

console.log(accountApi);

// Module mode
export default 1;
