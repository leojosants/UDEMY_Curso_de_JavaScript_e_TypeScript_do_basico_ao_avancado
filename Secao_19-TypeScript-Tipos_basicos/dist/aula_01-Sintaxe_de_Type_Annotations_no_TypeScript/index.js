"use strict";
/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tpos)
var nome = 'Leonardo'; //  Qualquer tipo de string
var idade = 30; //  10, 1.57, -5.55, 0xf00d, 0b1010, 0a7744
var adulto = true; //  true ou false
var simbol = Symbol('qualquer-simbol'); //  symbol
// let big: bigint = 10n;                          //  bigint
// Arrays
var arrayDeNumeros = [1, 2, 3];
var arrayDeNumeros2 = [1, 2, 3];
var arrayDeStrings = ['1', '2', '3'];
var arrayDeStrings2 = ['1', '2', '3'];
// Objetos
var pessoa = {
    nome: 'Leonardo',
    idade: 39,
};
// Funções
function soma(x, y) {
    return x + y;
}
var soma2 = function (x, y) { return x + y; };
