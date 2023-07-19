function exemplo_01() {

  type Idade = number;

  type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
  };

  type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
  type CorCMYK = 'Ciano' | 'Majenta' | 'Amarelo' | 'Preto';
  type CorPreferida = CorRGB | CorCMYK;

  const pessoa: Pessoa = {
    nome: 'Leonardo',
    idade: 30,
    salario: 200_000,
  };

  function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor };
  }

  console.log(setCorPreferida(pessoa, 'Azul'));

};
exemplo_01();
