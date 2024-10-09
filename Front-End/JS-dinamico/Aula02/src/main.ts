const lampada = document.getElementById('lamp') as HTMLImageElement;

let contagemCliques = 0;
const MAX_CLIQUES = 10;

function atualizarEstadoLampada(): void {
  if (contagemCliques >= MAX_CLIQUES) {
    lampada.src = './public/quebrada.jpg';
  } else if (contagemCliques % 2 === 0) {
    lampada.src = './public/acesa.jpg';
  } else {
    lampada.src = './public/apagada.jpg';
  }
}

lampada.addEventListener('click', () => {
  if (contagemCliques < MAX_CLIQUES) {
    contagemCliques++;
    atualizarEstadoLampada();
  }
});