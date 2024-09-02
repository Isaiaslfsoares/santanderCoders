// app.js
document.getElementById('myForm').addEventListener('submit',  logar(event));

function logar(event){
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Cria um objeto FormData com os dados do formulário
    const formData = new FormData(this);

    // Converte os dados para um objeto JSON
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data)

    // Envia os dados com fetch
    fetch('https://webhook.site/accd6173-0168-49be-a556-2d3b5a22f215', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        // Exibe a resposta do servidor
        document.getElementById('result').textContent = 'Resposta do servidor: ' + result.message;
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}