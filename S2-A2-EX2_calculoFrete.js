//O algoritmo deve receber o peso de um produto em quilogramas e a distância da entrega em quilômetros, e retornar o custo total do frete.
//Considere as seguintes informações: taxa fixa de R$0,50 por quilo do produto e R$0,10 por quilômetro da distância percorrida.
//O custo total do frete é a soma do custo do peso com o custo da distância.
var pesoProduto = Number(prompt("Digite o peso (kg) do produto: "));
var distancia = Number(prompt("Digite a distância (km) a ser percorrida: "));

var custoPeso = pesoProduto * 0.5;
var custoDistancia = distancia * 0.1;
var custoFrete = custoPeso + custoDistancia;

console.log("O custo total é R$" + custoFrete.toFixed(2) + " reais");
