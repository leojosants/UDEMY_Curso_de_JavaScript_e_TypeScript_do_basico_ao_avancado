export function exemplo_01() {

  function criaErro(): never {
    throw new Error('ERRO!');
  }

  criaErro();

};
exemplo_01();
