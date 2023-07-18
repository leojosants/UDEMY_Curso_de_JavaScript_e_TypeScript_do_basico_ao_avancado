"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exemplo_03 = exports.exemplo_02 = exports.exemplo_01 = void 0;
function exemplo_01() {
    var x;
    if (typeof x === 'undefined')
        x = 20;
    console.log(x * 2);
    exemplo_01();
}
exports.exemplo_01 = exemplo_01;
;
function exemplo_02() {
    function createPerson(firstName, lastName) {
        return { firstName: firstName, lastName: lastName };
    }
    console.log(createPerson('Leonardo', 'Santos'));
    exemplo_02();
}
exports.exemplo_02 = exemplo_02;
;
function exemplo_03() {
    function squareOf(x) {
        if (typeof x === 'number')
            return x * x;
        return null;
    }
    ;
    var squareOfTwoNumber = squareOf(2);
    if (squareOfTwoNumber === null) {
        console.log('Conta inválida');
    }
    else {
        console.log(squareOfTwoNumber * 100);
    }
    exemplo_03();
}
exports.exemplo_03 = exemplo_03;
;
