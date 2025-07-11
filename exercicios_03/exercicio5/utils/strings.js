"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = formatarNome;
exports.contarVogais = contarVogais;
function formatarNome(nomeCompleto) {
    const partes = nomeCompleto.trim().split(" ");
    if (partes.length === 0)
        return "";
    return partes
        .map((parte, index) => {
        if (index === 0) {
            return parte.toUpperCase();
        }
        return parte.charAt(0).toUpperCase() + parte.slice(1).toLowerCase();
    })
        .join(" ");
}
function contarVogais(texto) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    for (const char of texto) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}
