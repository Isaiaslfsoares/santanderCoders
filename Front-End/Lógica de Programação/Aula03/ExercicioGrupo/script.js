
const contatos = [];

function montarTabela(resultados){

    const elementTable = document.getElementById('contatos');
    elementTable.innerHTML = '';

    for (const item of contatos) {
        const elementoTr = document.createElement('tr');
    
        const elementoTdNome = document.createElement('td');
        elementoTdNome.innerText = item.nome
        const elementoTdTelefone = document.createElement('td');
        elementoTdTelefone.innerText = item.telefone
        
        elementoTr.appendChild(elementoTdNome)
        elementoTr.appendChild(elementoTdTelefone)
    
        elementTable.appendChild(elementoTr);
      }
    
      if(resultados){
        const elementTable = document.getElementById('contatos');
        elementTable.innerHTML = '';

        for (const item of resultados) {
        const elementoTr = document.createElement('tr');
    
        const elementoTdNome = document.createElement('td');
        elementoTdNome.innerText = item.nome
        const elementoTdTelefone = document.createElement('td');
        elementoTdTelefone.innerText = item.telefone
        
        elementoTr.appendChild(elementoTdNome)
        elementoTr.appendChild(elementoTdTelefone)
    
        elementTable.appendChild(elementoTr);
        }
      }
}

function addNovoContato() {
    const nomeContato = document.getElementById('nome').value;
    const telefoneContato = document.getElementById('telefone').value;

    const novoContato = {
        nome: nomeContato,
        telefone: telefoneContato
    }

    contatos.push(novoContato);
    montarTabela();


    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}

function buscarContato(){
    const filtro = document.getElementById('buscar').value;
    const resultados = contatos.filter((contatos) => contatos.nome.includes(filtro))
    montarTabela(resultados);
}

buscarContato();