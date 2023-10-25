class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo == "Mago") {
      console.log(`O ${this.tipo} atacou usando magia`);
    } else if (this.tipo == "Guerreiro") {
      console.log(`O ${this.tipo} atacou usando espada`);
    } else if (this.tipo == "Monge") {
      console.log(`O ${this.tipo} atacou usando artes marciais`);
    } else if (this.tipo == "Ninja") {
      console.log(`O ${this.tipo} atacou usando shuriken`);
    }
  }
}

var heroiMonge = new heroi("Bumba meu boi", 189, "Ninja");
var heroiMago = new heroi("Etan", 1500, "Mago");
console.log(heroiMago.nome);
heroiMonge.atacar();
heroiMago.atacar();
