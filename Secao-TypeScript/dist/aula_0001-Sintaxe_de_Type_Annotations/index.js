"use strict";
/* eslint-disable */
/* Tipos básicos (aqui ocorre inferência de tipos) */
let nome = 'leonardo';
let idade = 39;
let adulto = true;
let simbolo = Symbol('qualquer símbolo');
// let big: bigint = 10n;
/* Arrays */
let arrayDeNumeros = [1, 2, 3];
let arrayDeNumeros2 = [1, 2, 3];
let arrayDStrings = ['a', 'b', 'c'];
let arrayDStrings2 = ['a', 'b', 'c'];
/* Objetos */
let pessoa = {
    nome: 'Leonardo',
    idade: 39,
    adulto: true,
};
/* Funções */
function soma(x, y) {
    return x + y;
}
const soma2 = (x, y) => {
    return x + y;
};
