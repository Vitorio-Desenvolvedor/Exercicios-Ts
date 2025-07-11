"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CatalogoGenerico_1 = require("./models/CatalogoGenerico");
const eletronico1 = { id: 1, nome: "Smartphone", preco: 1200, marca: "XYZ" };
const eletronico2 = { id: 2, nome: "Notebook", preco: 3500, marca: "ABC" };
const vestuario1 = { id: 3, nome: "Camiseta", preco: 50, tamanho: "M" };
const vestuario2 = { id: 4, nome: "Calça Jeans", preco: 120, tamanho: "G" };
const catalogoEletronicos = new CatalogoGenerico_1.CatalogoGenerico();
catalogoEletronicos.adicionarProduto(eletronico1);
catalogoEletronicos.adicionarProduto(eletronico2);
const catalogoVestuario = new CatalogoGenerico_1.CatalogoGenerico();
catalogoVestuario.adicionarProduto(vestuario1);
catalogoVestuario.adicionarProduto(vestuario2);
console.log("Eletrônicos disponíveis:", catalogoEletronicos.listarProdutos());
console.log("Vestuário disponível:", catalogoVestuario.listarProdutos());
const busca = catalogoEletronicos.buscarPorNome("note");
if (busca.length > 0) {
    console.log("Resultados da busca:", busca);
}
else {
    console.log("Nenhum produto encontrado na busca.");
}
