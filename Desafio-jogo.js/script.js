// Classe que representa um herói
class Heroi {
 constructor(nome, vida, ataque) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
 
}

//metodo para atacar outro heroi

atacar() {
    let ataque = "";
    
// ESTRUTURA DE DECISÃO PARA VER SE O HEROI VENCEU OU PERDEU
if (this.ataque === "mago") {
    ataque = "magia";
} else if (this.ataque === "guerreiro"){
    ataque = "espada";
} else if (this.ataque === "arqueiro"){
    ataque = "flecha";
} else if (this.ataque === "assassino"){
    ataque = "adaga";
}
  // exibe a menssagem
  console.log(`O ${this.ataque} atacou usando ${ataque}`);
} 
}

// criando objetos
let heroi1 = new Heroi("Arthur", 30, "guerreiro");
let heroi2 = new Heroi("Merlin",150, "mago");
let heroi3 = new Heroi("Lee", 40, "assassino");
let heroi4 = new Heroi("Shadow", 50, "arqueiro");

// chamando o metodo atacar
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();


