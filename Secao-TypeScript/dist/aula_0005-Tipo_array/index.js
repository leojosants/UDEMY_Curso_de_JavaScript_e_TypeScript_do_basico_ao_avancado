"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornaMaiusculo = exports.concatenaStrings = exports.multiplicaArgs = void 0;
function multiplicaArgs(...args) {
    return args.reduce((acumulador, valor) => acumulador * valor, 1);
}
exports.multiplicaArgs = multiplicaArgs;
function concatenaStrings(...args) {
    return args.reduce((acumulador, valor) => acumulador + ' ' + valor);
}
exports.concatenaStrings = concatenaStrings;
function retornaMaiusculo(...args) {
    return args.map((valor) => valor.toUpperCase());
}
exports.retornaMaiusculo = retornaMaiusculo;
console.log(multiplicaArgs(1, 2, 3));
console.log(concatenaStrings('Leonardo', 'Santos'));
console.log(retornaMaiusculo('a', 'b', 'c'));
