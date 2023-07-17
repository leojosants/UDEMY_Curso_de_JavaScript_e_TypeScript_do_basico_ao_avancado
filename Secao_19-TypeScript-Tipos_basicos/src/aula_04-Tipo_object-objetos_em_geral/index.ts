const objetoA: {
  readonly chaveA: string; // não permite alteração
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Nova chave';

console.log(objetoA);
