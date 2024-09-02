console.log("===== AULA 01 =====");

var nomeDaPessoa = "Nano";
console.log("Tipo da varíavel nomeDaPessoa:", typeof nomeDaPessoa);

var idade = 33;
console.log("Tipo da variável idade:", typeof idade);

var maiorDeIdade = false;
console.log("Tipo da variável maiorDeIdade:", typeof maiorDeIdade);

var ferias;
console.log("Tipo da variável ferias:", typeof ferias);

var contaBancaria = null;
console.log("Tipo da variável contaBancaria:", typeof contaBancaria);

var endereco = {
  rua: "do Limoeiro",
  cidade: "São Paulo",
  uf: "SP",
  cep: "01314-000"
};
console.log("Tipo da variável endereco:", typeof endereco);

// const & let
// const cidade = "Cuiabá";
// cidade = "São Paulo"; // não permitido

let cidade = "Cuiabá";
cidade = "São Paulo";

console.error(cidade);
const numero = Math.floor(1.99);

// console.log(numero);

const numeroInteiro = parseInt("1");
console.log(typeof numeroInteiro);

const numeroDecimal = parseFloat("1.23");
console.log(typeof numeroDecimal);

