//vitórias e derrotas
let vitorias = 85
let derrotas = 26

//função que recebe quantidade de vitórias e derrotas do jogador
function calcularRank(vitorias, derrotas) {
    return vitorias - derrotas;
}

//resultado para variável
let saldoVitorias = calcularRank(vitorias, derrotas)

if (saldoVitorias <= 10){
    nivel = "Ferro"
} else if ((saldoVitorias >= 11) && (saldoVitorias <= 20)){
    nivel = "Bronze"
} else if ((saldoVitorias >= 21) && (saldoVitorias <= 50)){
    nivel = "Prata"
} else if ((saldoVitorias >= 51) && (saldoVitorias <= 80)){
    nivel = "Ouro"
} else if ((saldoVitorias >= 81) && (saldoVitorias <= 90)){
    nivel = "Diamante"
} else if ((saldoVitorias >= 91) && (saldoVitorias <= 100)){
    nivel = "Lendário"
} else if (saldoVitorias >= 101){
    nivel = "Imortal"
}

// saída: ao final deve ser exibido a mensagem: "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nível}**"
console.log("-------CALCULADORA DE PARTIDAS RANKEADAS-------")
console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível " + nivel + " !") 