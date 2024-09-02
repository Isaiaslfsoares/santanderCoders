document.getElementById('cepForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const cep = document.getElementById('cep').value.trim();

    // Verifica se o CEP tem 8 dígitos
    if (cep.length === 8 && /^[0-9]+$/.test(cep)) {
        // Faz a requisição para a API ViaCEP
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert('CEP não encontrado.');
                } else {
                    // Preenche os dados do endereço na página
                    document.getElementById('logradouro').textContent = data.logradouro;
                    document.getElementById('bairro').textContent = data.bairro;
                    document.getElementById('localidade').textContent = data.localidade;
                    document.getElementById('uf').textContent = data.uf;
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
            });
    } else {
        alert('Por favor, insira um CEP válido com 8 dígitos.');
    }
});