//Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$4,92.
var dinheiroCarteira = Number(prompt("Quantos reais você tem na carteira? "));

var dolares = Math.floor(dinheiroCarteira / 4.92);

console.log(
  "Você têm R$ " +
    dinheiroCarteira.toFixed(2) +
    " e com esse valor é possivel comprar aproximadamente U$ " +
    dolares.toFixed(2) +
    "."
);

// Com função

function cambio(dinheiroCarteira) {
  var dolares = Math.floor(dinheiroCarteira / 4.92);
  return dolares;
}

var dinheiroCarteira = Number(prompt("Quantos reais você tem na carteira? "));
var dolares = cambio(dinheiroCarteira);
console.log(
  "Você têm R$ " +
    dinheiroCarteira.toFixed(2) +
    " e com esse valor é possivel comprar aproximadamente U$ " +
    dolares.toFixed(2) +
    "."
);
