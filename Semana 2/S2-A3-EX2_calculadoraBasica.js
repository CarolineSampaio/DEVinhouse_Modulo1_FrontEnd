//Implemente uma calculadora básica usando switch/case. Dessa vez o professor deu alguns minutos para tentarmos sozinhos.

//Minha solucção:
var operador = prompt("Digite o operador (+, -, *, /):");
var numero1 = Number(prompt("Digite o primeiro número:"));
var numero2 = Number(prompt("Digite o segundo número:"));
var resultado;
switch (operador) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    resultado = numero1 / numero2;
    break;
  default:
    resultado = "Operador inválido";
    break;
}
console.log("Resultado:", resultado);

//Solução professor, adiciona raiz quadrada e exponenciação
var valor1 = Number(prompt("Digite o primeiro valor ?"));
var valor2 = Number(prompt("Digite o segundo valor ?"));

var operacao = prompt(`
Escolha uma operação:
(1) - ➕ SOMA
(2) - ➖ SUBTRAÇÃO
(3) - ✖️ MULTIPLICAÇÃO
(4) - ➗ DIVISÃO
(5) - Expoente
(6) - Raiz quadrada
`);

switch (operacao) {
  case "1":
  case "+": {
    var resultado = valor1 + valor2;
    console.log(`${valor1} + ${valor2} = ${resultado}`);
    break;
  }
  case "2":
  case "-": {
    var resultado = valor1 - valor2;
    console.log(`${valor1} - ${valor2} = ${resultado}`);
    break;
  }
  case "3":
  case "*": {
    var resultado = valor1 * valor2;
    console.log(`${valor1} X ${valor2} = ${resultado}`);
    break;
  }
  case "4":
  case "/": {
    var resultado = valor1 / valor2;
    console.log(`${valor1} / ${valor2} = ${resultado}`);
    break;
  }
  case "5":
  case "^": {
    var resultado = valor1 ** valor2;
    console.log(`${valor1}^${valor2} = ${resultado}`);
    break;
  }
  case "6": {
    var raizValor1 = Math.sqrt(valor1);
    var raizValor2 = Math.sqrt(valor2);

    console.log(`
    Raiz de ${valor1} = ${raizValor1}
    Raiz de ${valor2} = ${raizValor2}
    `);
    break;
  }
  default: {
    console.log("Você não escolheu uma operação válida");
  }
}
