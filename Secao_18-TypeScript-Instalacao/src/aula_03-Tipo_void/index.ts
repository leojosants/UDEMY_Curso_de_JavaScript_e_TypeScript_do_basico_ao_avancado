function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Leonardo', 'Santos');

const pessoa = {
  nome: 'Leonardo',
  sobrenome: 'Santos',

  exibirNome(): void {
    console.log(this.nome, this.sobrenome);
  }
};

pessoa.exibirNome();

export { pessoa };
