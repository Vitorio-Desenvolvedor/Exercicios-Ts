import { IVenda } from "../interfaces/IVenda";

export function gerarResumoVendas(vendas: IVenda[]): Pick<IVenda, "idVenda" | "valorTotal" | "status">[] {
    return vendas.map(v => ({
        idVenda: v.idVenda,
        valorTotal: v.valorTotal,
        status: v.status
    }));
}

export function atualizarStatusVenda(vendaOriginal: IVenda, novoStatus: Partial<IVenda>): IVenda {
    return { ...vendaOriginal, ...novoStatus };
}

export function registrarVenda(venda: Readonly<IVenda>): void {
    console.log("Registrando venda:", venda);
    // venda.status = "cancelada"; // Isso causaria erro de compilação
}

export function prepararVendaParaCliente(venda: IVenda): Omit<IVenda, "clienteId" | "status"> {
    const { clienteId, status, ...restante } = venda;
    return restante;
}

