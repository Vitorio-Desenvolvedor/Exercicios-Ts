type StatusPedido = "pendente" | "processando" | "concluido" | "cancelado";

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

enum PrioridadeEnvio {
  Baixa = 1,
  Media = 2,
  Alta = 3
}

function detalhesPedido(
  produto: Produto,
  status: StatusPedido,
  prioridade: PrioridadeEnvio,
): void {
  console.log("Detalhes do Pedido:");
  console.log("Produto ID:", produto.id);
  console.log("Nome do Produto:", produto.nome);
  console.log("Preço:", produto.preco.toFixed(2));
  console.log("Status do Pedido:", status);
  console.log("Prioridade de Envio:", `${prioridade} (${PrioridadeEnvio[prioridade]})`);
}

const produtoExemplo: Produto = {
  id: 134 ,
  nome: "Shorts",
  preco: 40.36
};

const statusExemplo: StatusPedido = "processando";
const prioridadeExemplo: PrioridadeEnvio = PrioridadeEnvio.Media;

detalhesPedido(produtoExemplo, statusExemplo, prioridadeExemplo);
