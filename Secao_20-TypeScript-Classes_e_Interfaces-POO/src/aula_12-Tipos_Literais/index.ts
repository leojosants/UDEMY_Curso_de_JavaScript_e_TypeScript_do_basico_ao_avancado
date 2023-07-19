/* function exemplo_01() {

  let x = 10; // eslint-disable-line

  x = 9;

  const y = 10;

  let a = 100 as const; // eslint-disable-line

  a = 38;

  console.log(x);

  exemplo_01();
};
*/

/* function exemplo_02() {

  const pessoa = {
    nome: 'Leonardo' as const,
    sobrenome: 'Santos',
  }

  console.log(pessoa);

  // pessoa.nome = 'João';
  pessoa.sobrenome = 'Santana';

  console.log(pessoa);

  exemplo_02();
};
*/

function exemplo_02() {

  function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;
  }

  // console.log(escolhaCor('Rosa'));
  console.log(escolhaCor('Vermelho'));
  console.log(escolhaCor('Amarelo'));
  console.log(escolhaCor('Azul'));

};
exemplo_02();
