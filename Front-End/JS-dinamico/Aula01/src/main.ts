const campoNome = document.querySelector<HTMLInputElement>('#campoNome');
const campoSobrenome = document.querySelector<HTMLInputElement>('#campoSobrenome');
const campoEmail = document.querySelector<HTMLInputElement>('#campoEmail');
const campoCPF = document.querySelector<HTMLInputElement>('#campoCPF');

if(campoNome){
  campoNome.oninput = function(){
    const valorDigitado = campoNome.value
  }
}