"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataProcessor_1 = require("./utils/dataProcessor");
const dadosRecebidos = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, produtoId: "P100", valor: 250 },
    { id: 3, descricao: "Objeto inválido" }
];
(0, dataProcessor_1.processarDados)(dadosRecebidos);
