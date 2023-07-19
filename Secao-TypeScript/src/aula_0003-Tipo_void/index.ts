function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
semRetorno('Leonardo', 'Santos', 'MG');

const pessoa = {
  nome: 'Leonardo',
  sobrenome: 'Santos',
  estado: 'MG',

  exibeNome(): void {
    console.log(this.nome, this.sobrenome, this.estado);
  }
};
pessoa.exibeNome();

export { pessoa };
