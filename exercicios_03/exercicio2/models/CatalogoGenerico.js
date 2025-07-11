"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoGenerico = void 0;
class CatalogoGenerico {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    listarProdutos() {
        return this.produtos;
    }
    buscarPorNome(nome) {
        return this.produtos.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
    }
}
exports.CatalogoGenerico = CatalogoGenerico;
