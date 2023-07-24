export class Company {
  public readonly name: string;
  private readonly cnpj: string;
  protected readonly collaborators: Collaborator[] = [];

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

export class Udemy extends Company {
  constructor() {
    super('Udemy', '00.000.000/0001-00');
  }

  public removeColaborator(): Collaborator | null {
    const colaboratorRemoved = this.collaborators.pop();
    if (colaboratorRemoved) return colaboratorRemoved;
    return null;
  }
}

const company1 = new Udemy();

const colaborator1 = new Collaborator('Leonardo', 'Santos');
const colaborator2 = new Collaborator('João', 'Santos');
const colaborator3 = new Collaborator('Maria', 'Santos');

company1.addColaborator(colaborator1);
company1.addColaborator(colaborator2);
company1.addColaborator(colaborator3);

console.log(company1);
console.log('Colaborador removido', company1.removeColaborator());
console.log(company1);
