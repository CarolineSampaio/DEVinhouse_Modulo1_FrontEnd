// Escrever um algoritmo que leia o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche.
//Considere que a cada execução somente será calculado um item.
var codigo = Number(
  prompt(`
Especificação     Código Preço
Cachorro quente    100    1,20
Bauru simples      101    1,30
Bauru com ovo      102    1,50
Hambúrger          103    1,20
Cheeseburguer      104    1,30
Refrigerante       105    1,00

Digite o código do item: `)
);
var quantidade = Number(prompt("Digite a quantidade desejada: "));

switch (codigo) {
  case 100: {
    calcularPreco(1.2, quantidade);
    break;
  }
  case 101: {
    calcularPreco(1.3, quantidade);
    break;
  }
  case 102:
    calcularPreco(1.5, quantidade);
    break;
  case 103: {
    calcularPreco(1.2, quantidade);
    break;
  }
  case 104: {
    calcularPreco(1.3, quantidade);
    break;
  }
  case 105: {
    calcularPreco(1.0, quantidade);
    break;
  }
  default:
    console.log("Código inválido");
}

function calcularPreco(preco, quantidade) {
  var valorTotal = preco * quantidade;
  console.log("Valor a ser pago: R$ " + valorTotal.toFixed(2));
}
