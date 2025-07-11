import { processarDados } from "./utils/dataProcessor";

const dadosRecebidos: any[] = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, produtoId: "P100", valor: 250 },
    { id: 3, descricao: "Objeto inválido" }
];

processarDados(dadosRecebidos);

