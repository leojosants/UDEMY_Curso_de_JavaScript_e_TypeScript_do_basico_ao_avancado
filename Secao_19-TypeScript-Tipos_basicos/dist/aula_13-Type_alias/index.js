"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function exemplo_01() {
    var pessoa = {
        nome: 'Leonardo',
        idade: 30,
        salario: 200000,
    };
    function setCorPreferida(pessoa, cor) {
        return __assign(__assign({}, pessoa), { corPreferida: cor });
    }
    console.log(setCorPreferida(pessoa, 'Azul'));
}
;
exemplo_01();
