"use strict";
// Array<T> - T[]
Object.defineProperty(exports, "__esModule", { value: true });
exports.exemplo_03 = exports.exemplo_02 = exports.exemplo_01 = void 0;
function exemplo_01() {
    function multiplicaArgs() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (acumulador, valor) { return acumulador * valor; }, 1);
    }
    var result = multiplicaArgs(1, 2, 3);
    console.log(result);
    exemplo_01();
}
exports.exemplo_01 = exemplo_01;
;
function exemplo_02() {
    function concatenaString() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (acumulador, valor) { return acumulador + valor; });
    }
    var concatenacao = concatenaString('a', 'b', 'c');
    console.log(concatenacao);
    exemplo_02();
}
exports.exemplo_02 = exemplo_02;
;
function exemplo_03() {
    function toUpperCase() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.map(function (valor) { return valor.toUpperCase(); });
    }
    var upper = toUpperCase('a', 'b', 'c');
    console.log(upper);
    exemplo_03();
}
exports.exemplo_03 = exemplo_03;
;
