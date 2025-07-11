import { IEletronico } from "./interfaces/IEletronico";
import { IVestuario } from "./interfaces/IVestuario";
import { CatalogoGenerico } from "./models/CatalogoGenerico";

const eletronico1: IEletronico = { id: 1, nome: "Smartphone", preco: 1200, marca: "XYZ" };
const eletronico2: IEletronico = { id: 2, nome: "Notebook", preco: 3500, marca: "ABC" };

const vestuario1: IVestuario = { id: 3, nome: "Camiseta", preco: 50, tamanho: "M" };
const vestuario2: IVestuario = { id: 4, nome: "Calça Jeans", preco: 120, tamanho: "G" };

const catalogoEletronicos = new CatalogoGenerico<IEletronico>();
catalogoEletronicos.adicionarProduto(eletronico1);
catalogoEletronicos.adicionarProduto(eletronico2);

const catalogoVestuario = new CatalogoGenerico<IVestuario>();
catalogoVestuario.adicionarProduto(vestuario1);
catalogoVestuario.adicionarProduto(vestuario2);

console.log("Eletrônicos disponíveis:", catalogoEletronicos.listarProdutos());
console.log("Vestuário disponível:", catalogoVestuario.listarProdutos());

const busca = catalogoEletronicos.buscarPorNome("note");
if (busca.length > 0) {
    console.log("Resultados da busca:", busca);
} else {
    console.log("Nenhum produto encontrado na busca.");
}

