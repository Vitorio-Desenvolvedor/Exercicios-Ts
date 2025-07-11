"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const relatorioVendas_1 = require("./utils/relatorioVendas");
const vendas = [
    { idVenda: "V001", data: "2025-07-03", valorTotal: 500, clienteId: "C001", status: "pendente" },
    { idVenda: "V002", data: "2025-07-02", valorTotal: 800, clienteId: "C002", status: "concluida" },
];
console.log("Resumo:", (0, relatorioVendas_1.gerarResumoVendas)(vendas));
const vendaAtualizada = (0, relatorioVendas_1.atualizarStatusVenda)(vendas[0], { status: "concluida" });
console.log("Venda atualizada:", vendaAtualizada);
const vendaReadonly = Object.assign({}, vendas[1]);
(0, relatorioVendas_1.registrarVenda)(vendaReadonly);
// vendaReadonly.status = "cancelada"; // erro se descomentado
console.log("Venda sem dados sensíveis:", (0, relatorioVendas_1.prepararVendaParaCliente)(vendas[0]));
vendas.forEach(v => {
    if (v.status === "concluida") {
        console.log("Venda concluída:", v);
    }
});
