console.log("===== SOMA =====");

const numero1 = Number(prompt("Digite um número:"));
const numero2 = Number(prompt("Digite outro número:"));

const soma = numero1 + numero2;

// concatenação de strings:
// alert("A soma dos numéros é " + soma);

// template string
alert(`A soma dos números é ${soma}`);

console.log(typeof numero1);
console.log(typeof numero2);