console.log("Aula 5");

//while e do..while

const frutas = ['maça', 'banana', 'melancia', 'uva'];

// //for
// for (let index = 0; index < frutas.length; index++){
//     const element = frutas[index];
//     console.log(element);
// }

// //for of

// for(const fruta of frutas) {
//     console.log(fruta);
// } //condiçaõ de para é percorrer todo o array

//while do while

let index = 0; 

// while(index < frutas.length){
//     console.log(frutas[index])
//     index++;
// }

do {
    console.log(frutas[index]);
    index++;
} while (index < frutas.length);