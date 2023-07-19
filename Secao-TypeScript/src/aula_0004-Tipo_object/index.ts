const objetoA: {
  chaveA: string,
  chaveB: string,
  chaveC?: string,
  [key: string]: unknown, // permite a criação de uma nova chave
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Outro valor';
objetoA.chaveD = 'Outro valor';
