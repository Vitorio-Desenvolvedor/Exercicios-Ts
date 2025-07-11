import { Livro } from "./models/Livro";

const livro1 = new Livro("1", "Clean Code", "Robert C. Martin", 2008);
const livro2 = new Livro("2", "Domain-Driven Design", "Eric Evans", 2003);

if (livro1.emprestar()) {
    console.log(`O livro "${livro1.titulo}" foi emprestado com sucesso.`);
} else {
    console.log(`O livro "${livro1.titulo}" não está disponível para empréstimo.`);
}

if (!livro1.emprestar()) {
    console.log(`Tentativa de emprestar novamente falhou.`);
}

if (livro1.devolver()) {
    console.log(`O livro "${livro1.titulo}" foi devolvido.`);
}

if (livro1.emprestar()) {
    console.log(`O livro "${livro1.titulo}" foi emprestado novamente com sucesso.`);
}
