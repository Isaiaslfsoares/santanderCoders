
function obterValoresDoFormulario(event) {
  const form = new FormData(event.target);

  return {
    nota1: Number(form.get('nota1')),
    nota2: Number(form.get('nota2')),
    nota3: Number(form.get('nota3'))
  };
}

function validarNotas(notas) {
  for (const chave in notas) {
    const nota = notas[chave];
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
  }
  return true;
}

function validarSituacao(media) {
  return media >= 7 ? 'Aprovado' : 'Reprovado';
}

function calcularMedia(event) {
  // previne a execução do evento padrão do submit
  event.preventDefault();

  const notas = obterValoresDoFormulario(event);
  if (!validarNotas(notas)) {
    document.getElementById('mensagemErro').innerText = 'Notas inválidas. Verifique as notas informadas e tente novamente.';
    return;
  }
  
  const { nota1, nota2, nota3 } = notas;
  const media = (nota1 + nota2 + nota3) / 3;
  
  const situacao = validarSituacao(media);
  
  document.getElementById('media').innerText = media.toFixed(2);
  const resultadoTexto = document.getElementById('resultadoTexto');
  resultadoTexto.innerText = situacao;
  resultadoTexto.style.color = situacao === 'Aprovado' ? 'blue' : 'orange';
}