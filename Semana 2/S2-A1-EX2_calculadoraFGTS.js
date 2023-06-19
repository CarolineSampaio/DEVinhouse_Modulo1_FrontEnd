//Construa um algoritmo que calcule o FGTS de um funcionário com base no salário bruto recebido. Exiba o resultado no terminal.
var salarioBruto = Number(prompt("Digite seu salário bruto"));
var fgts = salarioBruto * 0.08;
var anual = fgts * 12;
console.log("O valor descontado mensalmente para FGTS é R$" + fgts);
console.log("Ao final de um ano você acumulará, em FGTS, R$" + anual);

// Com função
function calculofgts() {
  var salarioBruto = Number(prompt("Digite seu salário bruto"));
  var fgts = salarioBruto * 0.08;
  var anual = fgts * 12;
  console.log("O valor descontado mensalmente para FGTS é R$" + fgts);
  console.log("Ao final de um ano você acumulará, em FGTS, R$" + anual);
}

calculofgts();
