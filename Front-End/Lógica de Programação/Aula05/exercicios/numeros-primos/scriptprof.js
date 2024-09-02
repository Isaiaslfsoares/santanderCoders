console.log('===== NUMEROS PRIMOS =====');

function isNumeroValido(numero) {
  if (isNaN(numero)) {
    return false;
  }

  if (!Number.isInteger(numero)) {
    return false;
  }

  if (numero <= 1) {
    return false;
  }

  return true;
}

function obterNumeroValido() {
  let numero;

  do {
    numero = Number(prompt('Digite um número:'));
  } while (!isNumeroValido(numero));

  return numero;
}

function isPrimo(numero) {
  let divisores = 0;
  let divisor = 1;

  while (divisor <= numero) {
    if (numero % divisor === 0) {
      divisores++;
    }

    divisor++;
  }

  return divisores <= 2;
}

function verificarNumerosPrimos() {
  const numero = obterNumeroValido();

  // verificar os números primos entre 1 e numero.
  let indice = 1;
  while (indice <= numero) {
    if (isPrimo(indice)) {
      console.log(indice);
    }
    indice++;
  }

}

verificarNumerosPrimos();