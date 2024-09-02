console.log("===== AULA 02 =====");

// definição da função:
// function minhaFuncao() {
//   console.log('Executa a tarefa #1.')
//   console.log('Executa a tarefa #2.')
//   console.log('Executa a tarefa #3.')

//   return 1;
// }

// arrow function:
// const minhaSegundaFuncao = (nome, sobrenome) => `O nome é ${nome} ${sobrenome}`;

/** Arrays */
const frutas = ["melancia", "laranja", "maçã", "uva"];

/** Adicionar um elemento ao final do array: */
frutas.push("kiwi");

/** Adicionar um elemento no início do array: */
frutas.unshift("ata");

/** Obter o índice do elemento no array: */
const indiceLaranja = frutas.indexOf("laranja");
const indicePequi = frutas.indexOf("pequi");

/** Verificar se o elemento existe no array: */
const existeAta = frutas.includes("ata");
const existeAcai = frutas.includes("açaí");

/** Excluir um elemento: */
const exclusao = frutas.splice(2, 1);

/** Excluir o ultimo elemento do array: */
frutas.pop();

/** Exlcuir o primeiro elemento do arry: */
frutas.shift();

/** Encontrar elementos que atendam à validação: */
frutas.filter((fruta) => fruta === 'melancia');

/** Encontrar um elemento que atenda à validação: */
frutas.find((fruta) => fruta === 'melancia');