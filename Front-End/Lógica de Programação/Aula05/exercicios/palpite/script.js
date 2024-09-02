function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adivinheAleatorio() {
    const numeroCorreto = gerarNumeroAleatorio(1, 100);
    console.log(numeroCorreto);
    let tentativas = 10;

    while (tentativas > 0) {
        let palpite = Number(prompt(`Você ainda tem ${tentativas} tentativas. Digite um número entre 1 e 100:`));

        if (palpite === numeroCorreto) {
            alert(`Parabéns, você acertou o número ${numeroCorreto} com ${11 - tentativas} tentativas!`);
            return;
        }

        if (isNaN(palpite) || palpite > 100 || palpite < 1) {
            alert(`Número inválido! Insira um número de 1 a 100.`);
            continue; // Vai para a próxima iteração se o número for inválido
        }

        if (tentativas > 1) {
            if (palpite > numeroCorreto) {
                alert(`Dica: o número correto é menor que ${palpite}.`);
            } else {
                alert(`Dica: o número correto é maior que ${palpite}.`);
            }
        }

        tentativas--;
    }

    alert(`Game Over! Suas tentativas acabaram. O número correto era ${numeroCorreto}.`);
}

adivinheAleatorio();