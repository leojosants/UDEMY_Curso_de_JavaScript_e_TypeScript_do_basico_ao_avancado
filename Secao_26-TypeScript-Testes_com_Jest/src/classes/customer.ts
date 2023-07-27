import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from "./interfaces/customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  fisrtName: string;
  lastName: string;
  cpf: string;

  constructor(fisrtName: string, lastName: string, cpf: string) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return `${this.fisrtName} ${this.lastName}`;
  }

  getIDN(): string {
    return `${this.cpf}`;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return `${this.name}`;
  }

  getIDN(): string {
    return `${this.cnpj}`;
  }
}
