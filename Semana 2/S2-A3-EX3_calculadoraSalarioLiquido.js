//Construa uma calculadora de salário líquido de um funcionário, considerando a alíquota do INSS e imposto de renda.

function calcularImpostoRenda(salarioFuncionario) {
  var impostoRenda = 0;

  if (salarioFuncionario <= 1903.98) {
    impostoRenda = 0;
  } else if (salarioFuncionario >= 1903.99 && salarioFuncionario <= 2826.65) {
    impostoRenda = salarioFuncionario * 0.075 - 142.8;
  } else if (salarioFuncionario >= 2826.66 && salarioFuncionario <= 3751.05) {
    impostoRenda = salarioFuncionario * 0.15 - 354.8;
  } else if (salarioFuncionario >= 3751.06 && salarioFuncionario <= 4664.68) {
    impostoRenda = salarioFuncionario * 0.225 - 636.13;
  } else {
    impostoRenda = salarioFuncionario * 0.275 - 869.36;
  }
  return impostoRenda.toFixed(2);
}

function calcularInss(salarioFuncionario) {
  var inss = 0;

  if (salarioFuncionario <= 1302) {
    inss = salarioFuncionario * 0.075;
  } else if (salarioFuncionario >= 1302.01 && salarioFuncionario <= 2571.29) {
    inss = salarioFuncionario * 0.09;
  } else if (salarioFuncionario >= 2571.3 && salarioFuncionario <= 3856.94) {
    inss = salarioFuncionario * 0.12;
  } else {
    inss = salarioFuncionario * 0.14;
  }
  return inss.toFixed(2);
}

function calcularSalarioLiquido(salarioFuncionario, impostoRenda, inss) {
  var salarioLiquido = salarioFuncionario - impostoRenda - inss;
  return salarioLiquido.toFixed(2);
}

var salarioFuncionario = Number(prompt("Qual é o salário do funcionário?"));

var impostoRenda = calcularImpostoRenda(salarioFuncionario);
var inss = calcularInss(salarioFuncionario);
var salarioLiquido = calcularSalarioLiquido(
  salarioFuncionario,
  impostoRenda,
  inss
);

console.log(`Com base no seu salário de R$ ${salarioFuncionario.toFixed(2)}:
    A alíquota do imposto de renda será de R$ ${impostoRenda}.
    A alíquota do INSS será de R$ ${inss}.

Salário líquido igual a R$ ${salarioLiquido}.
`);
