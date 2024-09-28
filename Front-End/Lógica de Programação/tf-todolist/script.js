let tarefas = [];

// Corrija o id para coincidir com o HTML
document.getElementById('formTarefas').addEventListener('submit', function(event) {
    event.preventDefault();
    adicionarTarefa();
});

function adicionarTarefa() {
    const status = document.getElementById('statusTarefa').value;
    const tarefaTexto = document.getElementById('inputTarefa').value;

    const novaTarefa = {
        id: tarefas.length + 1,
        status: status,
        texto: tarefaTexto,
    };
    
    tarefas.push(novaTarefa);
    renderizarTarefas();
    document.getElementById('inputTarefa').value = '';
    document.getElementById('statusTarefa').selectedIndex = 0;
}

function editarTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    
    const novoTexto = prompt('Quer editar o nome da tarefa?', tarefa.texto);
    if (novoTexto !== null) {
        tarefa.texto = novoTexto;
    }
    
    const novoStatus = prompt('Edite o status da tarefa (1: Feito, 2: Tranquila, 3: Importante, 4: Urgente):', tarefa.status);
    if (novoStatus !== null && ['1', '2', '3', '4'].includes(novoStatus)) {
        tarefa.status = novoStatus;
    }

    renderizarTarefas();
}

function removerTarefa(id) {
    tarefas = tarefas.filter(t => t.id !== id);
    renderizarTarefas();
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach(tarefa => {
        const li = document.createElement('li');

        // Cria a div para a imagem do Teletubby
        const divTeletubby = document.createElement('div');
        divTeletubby.className = `teletubby${tarefa.status}`;

        // Cria o elemento de texto da tarefa
        const spanTexto = document.createElement('span');
        spanTexto.textContent = tarefa.texto;

        // Cria os botões de editar e remover
        const divButtons = document.createElement('div');
        const btnEditar = document.createElement('button');
        btnEditar.className = 'editar';
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => editarTarefa(tarefa.id);

        const btnRemover = document.createElement('button');
        btnRemover.className = 'remover';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerTarefa(tarefa.id);

        divButtons.appendChild(btnEditar);
        divButtons.appendChild(btnRemover);

        // Adiciona a div do Teletubby, o texto e os botões ao <li>
        li.appendChild(divTeletubby);
        li.appendChild(spanTexto);
        li.appendChild(divButtons);

        // Adiciona o <li> à lista
        listaTarefas.appendChild(li);
        
    });
}