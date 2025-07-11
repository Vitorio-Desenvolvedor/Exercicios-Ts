"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const Publicacao_1 = require("./Publicacao");
class Livro extends Publicacao_1.Publicacao {
    constructor(id, titulo, autor, anoPublicacao) {
        super(id, titulo);
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.estaDisponivel = true;
    }
    emprestar() {
        if (this.estaDisponivel) {
            this.estaDisponivel = false;
            return true;
        }
        return false;
    }
    devolver() {
        if (!this.estaDisponivel) {
            this.estaDisponivel = true;
            return true;
        }
        return false;
    }
}
exports.Livro = Livro;
