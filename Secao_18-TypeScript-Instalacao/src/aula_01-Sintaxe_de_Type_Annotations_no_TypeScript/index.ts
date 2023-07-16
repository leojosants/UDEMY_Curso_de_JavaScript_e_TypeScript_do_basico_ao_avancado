/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tpos)
let nome: string = 'Leonardo';                  //  Qualquer tipo de string
let idade: number = 30;                         //  10, 1.57, -5.55, 0xf00d, 0b1010, 0a7744
let adulto: boolean = true;                     //  true ou false
let simbol: symbol = Symbol('qualquer-simbol'); //  symbol
// let big: bigint = 10n;                          //  bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['1', '2', '3'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean, } = {
  nome: 'Leonardo',
  idade: 39,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
