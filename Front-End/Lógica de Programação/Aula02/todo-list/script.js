
const tarefas = [];

function addTarefa() {
    
    const tituloTarefa = document.getElementById('titulo').value;
    tarefas.push(tituloTarefa);

    const elementoUL = document.getElementById('tarefas');
    elementoUL.innerHTML = '';

    for (const item of tarefas)  {
        const elementoLi = document.createElement('li');
        elementoLi.innerText = item;
        
        elementoUL.appendChild(elementoLi)
    }

    document.getElementById('titulo').value = ''; 
}