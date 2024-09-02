
const sectionDados = document.getElementById('dados');

const LADOS = [4, 6, 8, 10, 12, 20];
const dados = [4, 6, 8];

function adicionarNovoDado(){
    dados.push(4)
    exibirDados();
}

function exibirDados(){
    sectionDados.innerHTML = '';

    for(const [indice, valor] of Object.entries(dados)) {
        const divDado = document.createElement('div');
        
        //adicionar span
        const spanOrdem = document.createElement('span');
        spanOrdem.innerText = `Dado #${Number(indice) + 1} com `;
        
        //adicionar as options
        const selectDado = document.createElement('select');
        selectDado.id = `dado-${indice}`;

        for(const lado of LADOS){
            const option = document.createElement('option');
            option.value = lado;
            option.innerText = `${lado} Lados`
            // option.selected = lado === valor ? true : false;

            selectDado.appendChild(option);
        }

        const linkRemover = document.createElement('a');
        linkRemover.innerText = ' ❌';
        linkRemover.href = '#'
        linkRemover.onclick = () => excluirDado(selectDado.id);
        
        divDado.appendChild(spanOrdem);
        divDado.appendChild(selectDado);
        divDado.appendChild(linkRemover)
        sectionDados.appendChild(divDado);

    }

}

function excluirDado(id){
    const [, idDado] = id.split('-');
    dados.splice(idDado, 1)

    exibirDados();
}

function rolarDados(){
    
    const rolagens = [];
    for (const indice in dados) {
        const ladosSelecionados = document.getElementById(`dado-${indice}`).value;

        const rolagem = rolarDado(Number(ladosSelecionados));

        rolagens.push(rolagem);
    }

    const 

    const spanTotal = document.getElementById('total');
    spanTotal.innerText = rolagens.reduce((acumulador, valor) => acumulador + valor, 0);
}

function rolarDado(max){
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
}

exibirDados();
