// Escreva um algoritmo que receba do usuário um número inteiro, positivo e maior que 1 e imprima todos os números primos entre 1 e o número recebido.

function isNumeroValido(numero){
    
    if(isNaN(numero)){
        return false;
    }

    if(!Number.isInteger(numero)){
        return false;
    }

    if(numero <= 1){
        return false;
    }

    return true;
}

function obterNumeroValido(){
    let numero;

    do {
        numero = Number(prompt('Digite um número: '));
    }while(!isNumeroValido(numero));

    return numero;
}


function verificarNumerosPrimos(){
    const numero = obterNumeroValido();

    console.log(`Números primos entre 1 e ${numero} :`);

    for (let i = 2; i <= numero; i++) {
        if (isPrimo(i)) {
            console.log(i);
        }
    }
}

function isPrimo(numero){
    
        if (numero === 2) return true; 
        if (numero % 2 === 0) return false;
    
        for (let i = 3; i <= Math.sqrt(numero); i += 2) {
            if (numero % i === 0) return false;
        }
        return true;
}

verificarNumerosPrimos();