document.addEventListener('DOMContentLoaded', function () {

    // Código que precisa rodar após o DOM estar pronto
    const serviceOrder = JSON.parse(localStorage.getItem("atendimentos"));
    showInHtml(serviceOrder)
});

function showInHtml(serviceOrder) {
    const breed = serviceOrder[0].cachorro
    const dogImg = document.getElementById('dogImg')
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then(response => dogImg.src = response.data.message);

    // Acessando o body da tabela.
    const tableBody = document.getElementById('tableBody');

    //Passando por todos os valores da lista de atendimentos
    for (let i = 0; i < serviceOrder.length; i++) {

        // Cria uma nova linha para a tabela.
        const row = document.createElement('tr');

        // criando uma célula para id
        const idCell = document.createElement('td')
        idCell.innerHTML = serviceOrder[i].id
        row.appendChild(idCell)

        //criando célula nome do pet
        const petNameCell = document.createElement('td')
        petNameCell.innerHTML = serviceOrder[i].petName
        row.appendChild(petNameCell)

        //criando célula do horário do atendimento
        const hourCell = document.createElement('td')
        hourCell.innerHTML = serviceOrder[i].horario
        row.appendChild(hourCell)

        //criando célula para o funcionário
        const employeeCell = document.createElement('td');
        employeeCell.innerHTML = serviceOrder[i].funcionario;
        row.appendChild(employeeCell);

        //criando célula para a raça do pet
        const breedCell = document.createElement('td');
        breedCell.innerHTML = breed;
        row.appendChild(breedCell);

        //criando célula para os serviços 
        const serviceCell = document.createElement('td');
        serviceCell.innerHTML = serviceOrder[i].tipoServico;
        row.appendChild(serviceCell);

        // for (let j = 0; j < serviceOrder[i].servicos.length; j++) { // passa por todos os serviçoes escolhidos pelo cliente
        //     serviceCell.innerHTML += `${serviceOrder[i].servicos[j]} <br>`; // adiciona todos os valores em uma única celula 
        //     row.appendChild(serviceCell);
        // }


        //criando célula de progresso de atendimento
        const progressCell = document.createElement('td');
        progressCell.innerHTML = serviceOrder[i].progresso;
        row.appendChild(progressCell);
        const priceCell = document.createElement('td');
        priceCell.innerHTML = serviceOrder[i].valor;
        row.appendChild(priceCell)

        //criando célula para oimg do cachorro
        const imgCell = document.createElement('td');
        imgCell.innerHTML = `<img src="${dogImg}" alt="Imagem do cachorro"`

        tableBody.appendChild(row); // Adiciona a linha à tabela
    }

    const row = document.getElementById("row1")

    let itemRow = document.createElement('td')
    let itemRow2 = document.createElement('td')
    itemRow.innerHTML += `${employee} `
    itemRow2.innerHTML += `${breed} `
    row.appendChild(itemRow)
    row.appendChild(itemRow2)

}

// function displayServiceOrders() {
//     const tableBody = document.getElementById('serviceTableBody');

//     serviceOrder.forEach(order => {
//         const row = document.createElement('tr'); // Cria uma nova linha para a tabela

//         // Coluna para o nome do funcionário
//         const employeeCell = document.createElement('td');
//         employeeCell.textContent = order.funcionario;
//         row.appendChild(employeeCell);

//         // Coluna para a raça do cachorro
//         const breedCell = document.createElement('td');
//         breedCell.textContent = order.cachorro;
//         row.appendChild(breedCell);

//         // Coluna para a imagem do cachorro
//         const imageCell = document.createElement('td');
//         const dogImg = document.createElement('img');
//         dogImg.alt = `Imagem de um ${ order.cachorro } `;
//         dogImg.width = 100;

//         // Fazendo a requisição para obter uma imagem do cachorro
//         axios.get(`https://dog.ceo/api/breed/${order.cachorro}/images/random`)
//             .then(response => {
//                 dogImg.src = response.data.message; // Define a URL da imagem
//             })
//             .catch(error => {
//                 console.error("Erro ao buscar imagem do cachorro:", error);
//                 dogImg.alt = "Imagem não disponível";
//             });

//         imageCell.appendChild(dogImg);
//         row.appendChild(imageCell);

//         // Adiciona a linha à tabela
//         tableBody.appendChild(row);
//     });
// }

// // Chama a função para exibir os dados
// displayServiceOrders();