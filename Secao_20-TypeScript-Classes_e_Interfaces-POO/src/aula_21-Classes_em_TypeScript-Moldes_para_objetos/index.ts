export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string
    ;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador)
  }

  public exiberColaboradores(): void {
    for (const colaborador of this.colaboradores) console.log(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) { }
}

const empresa1 = new Empresa('Udemy', '11.111/0001-111');
const colaborador1 = new Colaborador('Leonardo', 'Santos');
const colaborador2 = new Colaborador('João', 'Santos');
const colaborador3 = new Colaborador('Maria', 'Santos');

empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);

empresa1.exiberColaboradores();
