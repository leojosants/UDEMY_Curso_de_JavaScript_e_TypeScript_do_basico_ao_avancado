import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  fisrtName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(fisrtName, lastName, cpf);
}

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
}

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have fisrtName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Leonardo', 'Santos', '000.000.000-00');
    expect(sut).toHaveProperty('fisrtName', 'Leonardo');
    expect(sut).toHaveProperty('lastName', 'Santos');
    expect(sut).toHaveProperty('cpf', '000.000.000-00');
  });

  it('should have methods to get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('Leonardo', 'Santos', '000.000.000-00');
    expect(sut.getName()).toBe('Leonardo Santos');
    expect(sut.getIDN()).toBe('000.000.000-00');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Nome da Empresa', '00.000.000/0001-00');
    expect(sut).toHaveProperty('name', 'Nome da Empresa');
    expect(sut).toHaveProperty('cnpj', '00.000.000/0001-00');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Nome da Empresa', '00.000.000/0001-00');
    expect(sut.getName()).toBe('Nome da Empresa');
    expect(sut.getIDN()).toBe('00.000.000/0001-00');
  });
});

/*
  SUT - System under test
  A nomenclatura 'sut' é utilizada para referenciar uma classe em teste
*/
