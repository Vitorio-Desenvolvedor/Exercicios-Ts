import { IVenda } from "./interfaces/IVenda";
import { gerarResumoVendas, atualizarStatusVenda, registrarVenda, prepararVendaParaCliente } from "./utils/relatorioVendas";

const vendas: IVenda[] = [
    { idVenda: "V001", data: "2025-07-03", valorTotal: 500, clienteId: "C001", status: "pendente" },
    { idVenda: "V002", data: "2025-07-02", valorTotal: 800, clienteId: "C002", status: "concluida" },
];

console.log("Resumo:", gerarResumoVendas(vendas));

const vendaAtualizada = atualizarStatusVenda(vendas[0], { status: "concluida" });
console.log("Venda atualizada:", vendaAtualizada);

const vendaReadonly: Readonly<IVenda> = { ...vendas[1] };
registrarVenda(vendaReadonly);

// vendaReadonly.status = "cancelada"; // erro se descomentado

console.log("Venda sem dados sensíveis:", prepararVendaParaCliente(vendas[0]));

vendas.forEach(v => {
    if (v.status === "concluida") {
        console.log("Venda concluída:", v);
    }
});

