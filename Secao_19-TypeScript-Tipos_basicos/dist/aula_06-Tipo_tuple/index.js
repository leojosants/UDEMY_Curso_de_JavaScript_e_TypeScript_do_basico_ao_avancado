"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exemplo_04 = exports.exemplo_03 = exports.exemplo_02 = exports.exemplo_01 = void 0;
function exemplo_01() {
    var dadosCliente1 = ['Leonardo', 39];
    dadosCliente1[0] = 'Leonardo Santos';
    dadosCliente1[1] = 40;
    console.log(dadosCliente1);
    exemplo_01();
}
exports.exemplo_01 = exemplo_01;
;
function exemplo_02() {
    var dadosCliente1 = ['Leonardo', 39];
    dadosCliente1[0] = 'Leonardo';
    dadosCliente1[2] = 'Santos';
    dadosCliente1[1] = 40;
    console.log(dadosCliente1[0], dadosCliente1[2], dadosCliente1[1]);
    exemplo_02();
}
exports.exemplo_02 = exemplo_02;
;
function exemplo_03() {
    var dadosCliente1 = ['Leonardo', 39, 'SJDR', 'MG'];
    // dadosCliente1.pop(); o tipo 'readonly' não permite nenhum tipo de alteração
    console.log(dadosCliente1);
    exemplo_03();
}
exports.exemplo_03 = exemplo_03;
;
function exemplo_04() {
    var array1 = ['Leonardo', 'Santos'];
    var array2 = ['Leonardo', 'Santos'];
    console.log(array1);
    console.log(array2);
    exemplo_04();
}
exports.exemplo_04 = exemplo_04;
;
