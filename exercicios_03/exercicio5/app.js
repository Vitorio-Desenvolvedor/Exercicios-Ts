"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strings_1 = __importDefault(require("./utils/strings"));
const strings_2 = require("./utils/strings");
const numeros_1 = require("./utils/numeros");
console.log((0, strings_1.default)("joão da silva souza"));
console.log("Quantidade de vogais:", (0, strings_2.contarVogais)("Frase de Exemplo"));
const numeros = [10, 25, 5, 40, 15];
const soma = numeros_1.OperacoesMatematicas.somarArray(numeros);
console.log("Soma:", soma);
console.log("É par?", numeros_1.OperacoesMatematicas.ehPar(soma));
if (soma > numeros_1.MAX_VALOR) {
    console.log("Soma excede o valor máximo permitido.");
}
else {
    console.log("Soma dentro do limite.");
}
