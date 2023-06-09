var dinheiroCarteira = Number(prompt("Quantos reais você tem na carteira? "));

var dolares = Math.floor(dinheiroCarteira / 4.92);

console.log(
  "Você têm R$ " +
    dinheiroCarteira.toFixed(2) +
    " e com esse valor é possivel comprar aproximadamente U$ " +
    dolares.toFixed(2) +
    "."
);
