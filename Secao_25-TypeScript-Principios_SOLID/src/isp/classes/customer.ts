import { IndividualCustomerProtocol, EnterpriseCustomerProtocol } from "./interfaces/customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol {
  fisrtName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(
    fisrtName: string,
    lastName: string,
    cpf: string,
  ) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = '';
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;

  constructor(
    name: string,
    cnpj: string,
  ) {
    this.name = name;
    this.cnpj = cnpj;
  }

}
