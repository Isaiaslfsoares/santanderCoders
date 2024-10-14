const cepInput = document.getElementById('cep') as HTMLInputElement;
const ruaInput = document.getElementById('rua') as HTMLInputElement;
const cidadeInput = document.getElementById('cidade') as HTMLInputElement;
const estadoInput = document.getElementById('estado') as HTMLInputElement;
const erroCep = document.getElementById('erroCep') as HTMLParagraphElement;

cepInput.addEventListener('blur', () => {
  const cep = cepInput.value.replace(/\D/g, '');
  if (cep.length === 8) {
    buscarEndereco(cep);
  } else {
    erroCep.textContent = 'CEP deve ter 8 dígitos.';
    limparCampos();
  }
});

function buscarEndereco(cep: string): void {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((dadosEndereco) => {
      if (dadosEndereco.erro) {
        erroCep.textContent = 'CEP não encontrado.';
        limparCampos();
      } else {
       
        ruaInput.value = dadosEndereco.logradouro || '';
        cidadeInput.value = dadosEndereco.localidade || '';
        estadoInput.value = dadosEndereco.uf || '';
        erroCep.textContent = ''; 
      }
    })
    .catch(() => {
      erroCep.textContent = 'Erro ao buscar o CEP.';
      limparCampos();
    });
}


function limparCampos(): void {
  ruaInput.value = '';
  cidadeInput.value = '';
  estadoInput.value = '';
}
