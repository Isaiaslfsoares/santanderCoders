//Revisão UML, Classes e Objetos
//Fluxo de compra

import { Carrinho } from "./Carrinho";
import { Produto } from "./Produto";

const produto1 = new Produto('1', 'Notebook', 3000, 'Notebook muito muito bom!!!');
produto1.aplicarDesconto(10);

const produto2 = new Produto('2', 'Celular', 1500, 'Nokia super mega power forte!!!');

const produto3 = new Produto('3', 'Livro Legal', 80, 'Um livro muito legal!');

const carrinho = new Carrinho("carrinho1");

carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);
// carrinho.removerProduto(produto3);

console.clear();
// console.log(produto1);
// console.log(produto2);
// console.log(carrinho);

console.log(carrinho.produtos);

console.log(`Quantidade total: ${carrinho.quantidadeTotal}`);
console.log(`Valor total: R$ ${carrinho.valorTotal}`);