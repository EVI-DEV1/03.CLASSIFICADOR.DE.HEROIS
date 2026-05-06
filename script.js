let nome = "Arthas";
let xp = 7500;
 let nivel = '';

 // estrutura condicional
 if (xp<= 1000) {
    nivel = "bronze"
 }
else if (xp<=2000){
    nivel = "prata"
}
else if (xp<=3500){
    nivel = "ouro"
}
else if (xp<=4500) {
    nivel = "platina"
}
else if (xp<=6000){
    nivel = "ascendente"
}
else if (xp<=8000){
    nivel = "radiante"
}
else if (xp<=1000){
    nivel = "imortal"
}

//saida
console.log("O Heroi de nome" + nome + " está no nivel de " + nivel)