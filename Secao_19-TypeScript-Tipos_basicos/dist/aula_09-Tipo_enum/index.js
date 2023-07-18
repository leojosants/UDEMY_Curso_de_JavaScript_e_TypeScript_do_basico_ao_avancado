"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exemplo_05 = exports.exemplo_04 = exports.exemplo_03 = exports.exemplo_02 = exports.exemplo_01 = void 0;
function exemplo_01() {
    var Cores;
    (function (Cores) {
        Cores[Cores["VERMELHO"] = 0] = "VERMELHO";
        Cores[Cores["AZUL"] = 1] = "AZUL";
        Cores[Cores["AMARELO"] = 2] = "AMARELO";
    })(Cores || (Cores = {}));
    console.log(Cores);
    console.log(Cores.VERMELHO);
    console.log(Cores.AZUL);
    console.log(Cores.AMARELO);
    console.log(Cores[0]);
    console.log(Cores[1]);
    console.log(Cores[2]);
    exemplo_01();
}
exports.exemplo_01 = exemplo_01;
;
function exemplo_02() {
    var Cores;
    (function (Cores) {
        Cores[Cores["VERMELHO"] = 10] = "VERMELHO";
        Cores[Cores["AZUL"] = 100] = "AZUL";
        Cores[Cores["AMARELO"] = 200] = "AMARELO";
    })(Cores || (Cores = {}));
    console.log(Cores);
    console.log(Cores[0]);
    console.log(Cores[10]);
    exemplo_02();
}
exports.exemplo_02 = exemplo_02;
;
function exemplo_03() {
    var Cores;
    (function (Cores) {
        Cores[Cores["VERMELHO"] = 10] = "VERMELHO";
        Cores[Cores["AZUL"] = 100] = "AZUL";
        Cores[Cores["AMARELO"] = 200] = "AMARELO";
        Cores["ROXO"] = "ROXO";
    })(Cores || (Cores = {}));
    console.log(Cores);
    console.log(Cores.ROXO);
    exemplo_03();
}
exports.exemplo_03 = exemplo_03;
;
function exemplo_04() {
    var Cores;
    (function (Cores) {
        Cores[Cores["VERMELHO"] = 10] = "VERMELHO";
        Cores[Cores["AZUL"] = 100] = "AZUL";
        Cores[Cores["AMARELO"] = 200] = "AMARELO";
    })(Cores || (Cores = {}));
    (function (Cores) {
        Cores["ROXO"] = "ROXO";
        Cores[Cores["VERDE"] = 201] = "VERDE";
        Cores[Cores["ROSA"] = 202] = "ROSA";
    })(Cores || (Cores = {}));
    console.log(Cores);
    exemplo_04();
}
exports.exemplo_04 = exemplo_04;
;
function exemplo_05() {
    var Cores;
    (function (Cores) {
        Cores[Cores["VERMELHO"] = 10] = "VERMELHO";
        Cores[Cores["AZUL"] = 100] = "AZUL";
        Cores[Cores["AMARELO"] = 200] = "AMARELO";
    })(Cores || (Cores = {}));
    (function (Cores) {
        Cores["ROXO"] = "ROXO";
        Cores[Cores["VERDE"] = 201] = "VERDE";
        Cores[Cores["ROSA"] = 202] = "ROSA";
    })(Cores || (Cores = {}));
    function escolhaAcor(cor) {
        console.log(Cores[cor]);
    }
    escolhaAcor(Cores.AZUL);
    exemplo_05();
}
exports.exemplo_05 = exemplo_05;
;
