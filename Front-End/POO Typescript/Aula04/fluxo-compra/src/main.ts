class Usuario {
  //transformamos os atributos de Usuário em private
  private id: number;
  private nome: string;
  private email: string;

  constructor(nome: string, email: string) {
    this.id = this.gerarId();
    this.nome = nome;
    this.email = email;
  }
  //transformamos o método gerarId em privado
  private gerarId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(_nome: string): void {
    if (_nome.length > 0) {
      this.nome = _nome;
    } else {
      console.error("Nome inválido!");
    }
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(_email: string): void {
    if (_email.includes("@")) {
      this.email = _email;
    } else {
      console.error("Email inválido!");
    }
  }
}

class Produto {
  private id: number;
  private nome: string;
  private preco: number;
  private descricao: string;
  private estoque: number;

  constructor(id: number, nome: string, preco: number, descricao: string) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.estoque = this.verificarEstoque();
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(_nome: string): void {
    if (_nome.length > 0) {
      this.nome = _nome;
    } else {
      console.error("Nome inválido!");
    }
  }

  public getPreco(): string {
    return this.nome;
  }

  public setPreco(_preco: string): void {
    if (_preco.length > 0) {
      this.nome = _preco;
    } else {
      console.error("Preço inválido!");
    }
  }

  public adicionarAoCarrinho(): void {
    console.log("Produto adicionado ao carrinho");
  }
  public adicionarAoEstoque(quantidade: number): void {
    console.log("adicionando ao estoque:", quantidade);
  }
  public removerDoEstoque(quantidade: number): void {
    console.log("removendo do estoque:", quantidade);
  }
  public verificarEstoque(): number {
    return 10;
  }
}

class CarrinhoDeCompras {
  id: number;
  total: number;

  constructor(id: number) {
    this.id = id;
    this.total = this.calcularTotal();
  }
  calcularTotal(): number {
    return 0;
  }
  adicionarAoCarrinho(quantidade: number): void {
    console.log("adicionando ao estoque:", quantidade);
  }
  removerDoCarrinho() {
    console.log("removendo do carrinho");
  }
}

class Pedido {
  id: number;
  data: Date;
  status: string;

  constructor(id: number, data: Date, status: string) {
    this.id = id;
    this.data = data;
    this.status = status;
  }

  confirmarPedido(): boolean {
    return true;
  }
}

class Pagamento {
  id: number;
  valor: number;
  metodo: string;

  constructor(id: number, valor: number, metodo: string) {
    this.id = id;
    this.valor = valor;
    this.metodo = metodo;
  }

  pagar(): void {
    console.log("Pagamento realizado com sucesso");
  }
  cancelar(): void {
    console.log("Pagamento cancelado");
  }
}

console.log(Usuario, Produto, CarrinhoDeCompras, Pedido, Pagamento);
