
function obterValoresDoFormulario(event){

    return {
        nota1: Number(form.get('nota1')),
        nota2: Number(form.get('nota2')),
        nota3: Number(form.get('nota3'))
    }
}
function calcularMedia(event) {
    event.preventDefault();
  
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
      document.getElementById('mensagemErro').innerText = "Dados inválidos. Verifique as notas informadas e tente novamente.";
      document.getElementById('mensagemErro').style.color = 'red';
      return;
    }
  
    const media = (nota1 + nota2 + nota3) / 3;
    document.getElementById('media').innerText = media.toFixed(2);
  
    if (media >= 7) {
      document.getElementById('resultadoTexto').innerText = "Aprovado";
      document.getElementById('resultadoTexto').style.color = "blue";
    } else {
      document.getElementById('resultadoTexto').innerText = "Reprovado";
      document.getElementById('resultadoTexto').style.color = "orange";
    }
  }
