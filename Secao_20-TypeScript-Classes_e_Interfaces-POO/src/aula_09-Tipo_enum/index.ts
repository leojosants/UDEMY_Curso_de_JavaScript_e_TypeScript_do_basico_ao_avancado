export function exemplo_01() {

  enum Cores {
    VERMELHO,
    AZUL,
    AMARELO,
  }

  console.log(Cores);
  console.log(Cores.VERMELHO);
  console.log(Cores.AZUL);
  console.log(Cores.AMARELO);
  console.log(Cores[0]);
  console.log(Cores[1]);
  console.log(Cores[2]);

  exemplo_01();
};

export function exemplo_02() {

  enum Cores {
    VERMELHO = 10,
    AZUL = 100,
    AMARELO = 200,
  }

  console.log(Cores);
  console.log(Cores[0]);
  console.log(Cores[10]);

  exemplo_02();
};

export function exemplo_03() {

  enum Cores {
    VERMELHO = 10,
    AZUL = 100,
    AMARELO = 200,
    ROXO = 'ROXO',
  }

  console.log(Cores);
  console.log(Cores.ROXO);

  exemplo_03();
};

export function exemplo_04() {

  enum Cores {
    VERMELHO = 10,
    AZUL = 100,
    AMARELO = 200,
  }

  enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA,
  }

  console.log(Cores);

  exemplo_04();
};

export function exemplo_05() {

  enum Cores {
    VERMELHO = 10,
    AZUL = 100,
    AMARELO = 200,
  }

  enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA,
  }

  function escolhaAcor(cor: Cores): void {
    console.log(Cores[cor]);
  }

  escolhaAcor(Cores.AZUL);

  exemplo_05();
};
