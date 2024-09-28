console.log("========= Aula 07 =========")

function olaMundo (nome) {
    nome = nome ? nome : 'Mundo'; //criar parâmetro caso a função não mande

    console.log(`Olá, ${nome}!`)

}

/*
Truthy:
- []

Falsy: 
- boolean false
- string vazia: ''
- undefined 
- null
- numer 0
- NaN

*/

let frutas; //não tipou

if(frutas?.length){  // a ? serve pra verificar quando não temos certeza se vai existir ou não, para não dar erro. É passivo de concatenção da ? em objetos e atributos por exemplo
    console.log('Contém Frutas');

}

/*O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.*/

function olaMMundo(nome) {
    nome = nome ?? 'mundo';

    console.log(`Olá, ${nome}!`)
}