/* eslint-disable */

/* Tipos básicos (aqui ocorre inferência de tipos) */
let nome: string = 'leonardo';
let idade: number = 39;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer símbolo');
// let big: bigint = 10n;

/* Arrays */
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDStrings: Array<string> = ['a', 'b', 'c'];
let arrayDStrings2: string[] = ['a', 'b', 'c'];

/* Objetos */
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Leonardo',
  idade: 39,
  adulto: true,
}

/* Funções */
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => {
  return x + y;
}
