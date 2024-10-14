console.log('Tudo funcionando!!!!');
// Storage

// Armazenar informações
// localStorage // até que o usuário remova
// sessionStorage // tempo de vida (fechar navegador)

// Toda informação que o sistema precisa persistir
// Preferências (Tema)
// localStorage.setItem('@TESTE_KEY', 'O meu valor!!!');
// localStorage.removeItem('teste');
// localStorage.clear();

// const meuValor = localStorage.getItem('@TESTE_KEY');
// const meuOutroValor = localStorage.getItem('@OUTRA_KEY');

// Informações voláteis 
// Token
// sessionStorage.setItem('@TESTE_KEY', 'O meu valor no session!!!');
// sessionStorage.removeItem('@TESTE_KEY');

// console.log(meuValor);
// console.log(meuOutroValor); // lembrar de validar

// window.addEventListener('storage', () => {
//     console.log('Opa, storage atualizado');
// });


const KEY = '@ANIMAIS';

localStorage.setItem(KEY, JSON.stringify(['Cachorro', 'Gato', 'Passarinho']));

const animaisArmazenados = localStorage.getItem(KEY);
const animaisArray = animaisArmazenados ? JSON.parse(animaisArmazenados) : [];

const lista: string[] = animaisArray;

console.log(lista);