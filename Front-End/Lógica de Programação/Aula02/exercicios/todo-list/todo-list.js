console.log('===== TO-DO LIST =====');

const tarefas = [];

function adicionarTarefa() {
  const tituloTarefa = document.getElementById('titulo').value;
  tarefas.push(tituloTarefa);

  const elementoUl = document.getElementById('tarefas');
  elementoUl.innerHTML = '';

  for (const item of tarefas) {
    const elementoLi = document.createElement('li');
    elementoLi.innerText = item;

    elementoUl.appendChild(elementoLi);
  }

  document.getElementById('titulo').value = '';
}