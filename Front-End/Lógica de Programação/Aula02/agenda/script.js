console.log("===== AGENDA =====");
// Implemente um algoritmo que receba o nome de um contato e retorne seu telefone:

const agenda = [
  {
    nome: 'Tião',
    telefone: '5555-4444'
  },
  {
    nome: 'Tieta',
    telefone: '5555-3333'
  },
  {
    nome: 'Tibúrcio',
    telefone: '5555-2222'
  }
];

let nomeContato = prompt("Escreva o nome do contato: ");

const nomeEncontrado = agenda.find(contato => contato.nome.toLocaleLowerCase() === nomeContato.toLocaleLowerCase());
if(nomeEncontrado) {
    alert(`Telefone: ${nomeEncontrado.telefone}`);
} else {
    alert(`Contato não encontrado!`);
};