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

const nome = prompt('Digite o nome do contato que está procurando');
const resultado = agenda.find(contato =>
  contato.nome.toLowerCase() === nome.toLowerCase());

if (resultado) {
  console.log(`O telefone de ${resultado.nome} é ${resultado.telefone}.`);
} else {
  console.log(`O contato ${nome} não foi encontrado.`);
}
