console.log("Aula 06")

const frutas = ['maçã', 'banana', 'uva', 'melancia'];

// //for of itera sobre cada elemento do array  saída: maca banana uva melancia
// for (const fruta of frutas) {
//     console.log(fruta);
// }


// //for in itera sobre cada ÍNDICE de cada elemento do array saída : 0 1 2 3 4
// for(const fruta in frutas){
//     console.log(fruta)
// }

// //forEach executa um bloco de código por cada item do array
// frutas.forEach((fruta, indice) => {
//     console.log(indice, fruta)
// })

const pessoa = {
    nome: 'Isaias',
    idade: 33,
    cidade: 'Passos',
    profissao: 'Professor'
}

//Em objeto o for in itera sobre o atributo. O for of da erro. (Object.entries(pessoa))
for(const atributo in pessoa){
    console.log(atributo)
}