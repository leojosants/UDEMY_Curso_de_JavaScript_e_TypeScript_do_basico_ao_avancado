export class Company {
  public readonly name: string;
  protected readonly cnpj: string;
  private readonly collaborators: Collaborator[] = [];

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public addColaborator(colaborator: Collaborator): void {
    this.collaborators.push(colaborator);
  }

  public showCollaborators(): void {
    for (const colaborator of this.collaborators) {
      console.log(colaborator);
    }
  }
}

export class Collaborator {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public readonly name: string,

    // eslint-disable-next-line no-unused-vars
    public readonly lastName: string,
  ) { }
}

const company1 = new Company('Udemy', '00.000.000/0001-00');

const colaborator1 = new Collaborator('Leonardo', 'Santos');
const colaborator2 = new Collaborator('João', 'Santos');
const colaborator3 = new Collaborator('Maria', 'Santos');

company1.addColaborator(colaborator1);
company1.addColaborator(colaborator2);
company1.addColaborator(colaborator3);
company1.showCollaborators();

console.log(company1);
