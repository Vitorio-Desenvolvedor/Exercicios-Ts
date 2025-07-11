"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_VALOR = exports.OperacoesMatematicas = void 0;
class OperacoesMatematicas {
    static somarArray(numeros) {
        return numeros.reduce((soma, n) => soma + n, 0);
    }
    static ehPar(numero) {
        return numero % 2 === 0;
    }
}
exports.OperacoesMatematicas = OperacoesMatematicas;
exports.MAX_VALOR = 1000;
