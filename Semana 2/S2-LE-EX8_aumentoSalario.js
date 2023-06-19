var salario = Number(prompt("Qual é o seu salario atual? "));
var cargo = Number(
  prompt(`Qual é os seu cargo? Digite o código conforme tabela abaixo:
  Código      Cargo 
   101        Gerente 
   102        Engenheiro
   103        Técnico `)
);

var aumento = 0;

if (cargo === 101) {
  aumento = salario + salario * 0.1;
} else if (cargo === 102) {
  aumento = salario + salario * 0.2;
} else if (cargo === 103) {
  aumento = salario + salario * 0.3;
} else {
  aumento = salario + salario * 0.4;
}

console.log(
  "O seu salário era de R$" +
    salario.toFixed(2) +
    ", e com o aumento proporcionado passa a ser R$ " +
    aumento.toFixed(2)
);
