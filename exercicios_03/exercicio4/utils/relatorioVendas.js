"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarResumoVendas = gerarResumoVendas;
exports.atualizarStatusVenda = atualizarStatusVenda;
exports.registrarVenda = registrarVenda;
exports.prepararVendaParaCliente = prepararVendaParaCliente;
function gerarResumoVendas(vendas) {
    return vendas.map(v => ({
        idVenda: v.idVenda,
        valorTotal: v.valorTotal,
        status: v.status
    }));
}
function atualizarStatusVenda(vendaOriginal, novoStatus) {
    return Object.assign(Object.assign({}, vendaOriginal), novoStatus);
}
function registrarVenda(venda) {
    console.log("Registrando venda:", venda);
    // venda.status = "cancelada"; // Isso causaria erro de compilação
}
function prepararVendaParaCliente(venda) {
    const { clienteId, status } = venda, restante = __rest(venda, ["clienteId", "status"]);
    return restante;
}
