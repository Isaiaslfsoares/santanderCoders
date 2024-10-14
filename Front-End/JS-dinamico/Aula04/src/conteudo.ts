//promises

// console.log('Meu código rodando...');

// //algo assíncrono
// setTimeout(() => {
//     console.log('Opa, demorei mas cheguei!')
// }, 1000);

// console.log('Outro código rodando')

// function recuperaDados(){
//     setTimeout(() => {
//         //minha função demora 1s para retornar
//         return true;
//     }, 1000);
// }

// const retorno = recuperaDados();
// console.log(retorno)

// //Pendente (pending) - ainda não foi concluída
// //Resolvida (fullfiled) - foi concluída com sucesso
// //Rejeitada (rejected) - requisição falhou

// function recuperarDadoPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const tempo = Math.floor(Math.random() * 3000) + 1000;            

//             if(tempo < 2000){
//                 resolve('Dados recuperados');
//             } else {
//                 reject('Falha na recuperação de dados')
//             }
//         }, 1000);
//     })       
// }

// recuperarDadoPromise()
// .then(valor => {
//     console.log(valor);
// })
// .catch(erro => {
//     console.log(erro);
// })
// .finally(() => {
//     //exemplo de aplicação: desligar loading
//     console.log('Fim da operação')
// })

fetch('http://viacep.com.br/ws/01001000/json/')
// .then(valor => {
//     console.log(valor);

//     valor.json().then(endereco => {
//         console.log(endereco);
//     })
// })
// .catch(erro => {
//     console.log(erro);
// })
// .finally(() => {
//     console.log('Fim da operação')
// })

.then(resposta => resposta.json())
.then(valor => console.log(valor))
.catch(erro => {
    console.log('Ops, parece que algo deu erradao :(', erro);
})
.finally(() => {
    console.log('Fim da operação');
})