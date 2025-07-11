"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processarDados = processarDados;
function processarDados(dados) {
    dados.forEach(item => {
        if (item && typeof item.nome === "string" && typeof item.email === "string") {
            const usuario = item;
            console.log("Usuário:", usuario.id, usuario.nome, usuario.email);
        }
        else if (item && typeof item.produtoId === "string" && typeof item.valor === "number") {
            const pedido = item;
            console.log("Pedido:", pedido.id, pedido.produtoId, pedido.valor);
        }
        else {
            console.log("Item com estrutura desconhecida:", item);
        }
    });
}
