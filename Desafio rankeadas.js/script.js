let nome ="Arthas";
function calcularRank(vitorias, derrotas){  // serve para calcular o rank

    let saldoVitorias = vitorias - derrotas;
    let  nivel ="";

    if (vitorias <= 10){
        nivel = "Bronze";
    }
else if ( vitorias <= 20){
 nivel = "Prata";
}
 else if (vitorias <= 50){
    nivel = "Ouro";
 }
 else if (vitorias <= 80){
    nivel = "Platina";
}
else if (vitorias <= 100){
    nivel = "Ascendente";
}
else if (vitorias <= 150){
    nivel = "Radiante";
}
else {
    nivel = "Imortal";
}
//saída
console.log(
    "O Herói tem saldo de" +
    saldoVitorias + 
    " e está no nivel de " +
    nivel
);
}
// chamado da função
calcularRank(85,20)
