console.log('Oi novamente...');

// declarar uma classe Pessoa

// O TS adiciona as palavras chaves: 

// # protected -> TODO: Esperar falar de herança

// + public -> acessível fora da classe (padrão, se não tem assume esse papel)
// _ private -> não acessível fora da classe (precisa declarar)

// getters e setters -> métodos de acesso
export class Pessoa {
    public nome: string;
    private _idade: number;
    // private nascimento: number;
    sexo?: string;
    private cpf: string;
    altura: number;

    constructor(nome: string,
        idade: number,
        cpf: string,
        altura: number){
            this.nome = nome;
            this._idade = idade;
            this.cpf = cpf;
            this.altura = altura;
    }

    public andar() {
        this.respirar();
        console.log('Andou...');
    }

    public falar(palavra: string) {
        this.respirar();
        console.log('Falou...', palavra);
    }

    private respirar() {
        console.log('Respirou...');
    }

    // public obterIdade() {
    //     return this.idade;
    // }

    get idade() {
        // calculo da idade utilizando this.nascimento 
        // const idadeAtual = ?? // retornar a idade atual
        return this._idade;
    }

    set idade(idade: number) {
        // validações para o atributo

        if(idade < 0){
            throw new Error('Idade não deve ser negativa!!');
            console.error('Idade não deve ser negativa!!');
        }else{
            this._idade = idade;
        }
    }
}

const pessoa = new Pessoa('Fulano', 13, '12345678', 0.58);
pessoa.andar();
console.log(pessoa.nome);
// console.log(pessoa.cpf); // TODO: resolver erro na compilação
// pessoa.respirar();
pessoa.falar('Olá!');
// console.log(pessoa.obterIdade());
pessoa.idade = 15;
pessoa.idade = 20;
pessoa.idade = 0;
console.log(pessoa.idade);

