class Usuario {
  nome: string;
  email: string;
  endereco?: Endereco;
  nascimento: Date;

  constructor(nome: string, email: string, nascimento: Date) {
      this.nome = nome;
      this.email = email;
      this.nascimento = nascimento;

      return this;
  }

  logar() {
      console.log("Logou o usuário =D");
  }

  preencherEndereco(){
      this.endereco = new Endereco("SP", "Sao Paulo", "123456789");
  }
}

class Endereco {
  cidade: string;
  estado: string;
  cep: string;

  constructor(cidade: string, estado: string, cep: string){
      this.cidade =  cidade;
      this.estado =  estado;
      this.cep =  cep;
  }
}

// const endereco = new Endereco("SP", "Sao Paulo", "123456789");
// console.log(endereco);

const aluno = new Usuario("Lucas", "lucas@ada", new Date("1996-09-22"));
// aluno.preencherEndereco();

const aluno3 = {
  nome: "Lucas",
  email: "lucas@ada",
  endereco: undefined,
  nascimento: new Date("1996-09-22")
}

console.clear();
console.log(JSON.stringify(aluno, null, 4));
console.log(JSON.stringify(aluno3, null, 4));


console.log(aluno instanceof Usuario);
console.log(aluno3 instanceof Usuario);

console.log(aluno.constructor.name); 
console.log(aluno3.constructor.name);


if(aluno3 instanceof Usuario){
  console.log("é um usuário válido");
}else{
  console.log("usuário inválido, estancie da classe Usuario");
}

// const aluno2 = new Usuario("Gabriela", "gabi@ada", new Date("1996-09-22"));

// console.log(aluno);
// console.log(aluno.endereco?.cidade);

// console.log(aluno2);
// console.log(aluno2.endereco?.cidade || 'Sem Endereço');


// if(!aluno2.endereco?.cidade){
//     console.log("Pedir endereço");
// }


// Factory Pattern (Pesquisa Individual)
class Admin {}
class Editor {}
class Usuario2 {}

function usuarioFactory(tipo: "admin" | "editor"){
  switch (tipo) {
      case "admin":
          return new Admin();
      case "editor":
          return new Editor();
      default:
          return new Usuario2();
  }
}

const usuario = usuarioFactory("admin");
const usuario2 = usuarioFactory("editor");

console.clear();
console.log(usuario);
console.log(usuario2);

class Lista {
  nome: string;
  items: string[] = [];

  constructor(nome: string){
      this.nome = nome;
  }

  adicionarItem(item: string){
      this.items.push(item);
  }

  // excluir
  // editar
  // marcar como finalizado
}

const listaCasa = new Lista("Afazeres de Casa");
listaCasa.adicionarItem("Lavar louça");
listaCasa.adicionarItem("Cuidados do gato");

console.log(listaCasa.items);
