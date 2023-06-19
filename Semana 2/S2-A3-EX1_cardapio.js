//Implemente um cardápio usando switch/case.
var opcao = prompt(`
1 - 🍔 Hambúrguer - R$ 15,00
2 - 🍟 Batata Frita - R$ 8,00
3 - 🥗 Salada - R$ 12,00
4 - 🍕 Pizza - R$ 20,00
5 - 🍣 Sushi - R$ 25,00
6 - 🍦 Sorvete - R$ 7,00
7 - 🍩 Donut - R$ 5,00
8 - 🍹 Suco - R$ 6,00
9 - 🍰 Bolo - R$ 10,00`);

switch (opcao) {
  case "1": {
    console.log(
      "🍔 Hambúrguer Tradicional\n🍔 Hambúrguer Vegetariano\n🍔 Hambúrguer de Frango"
    );
    break;
  }

  case "2": {
    console.log(
      "🍟 Batata Frita Tradicional\n🍟 Batata Frita com Queijo\n🍟 Batata Frita com Bacon"
    );
    break;
  }

  case "3": {
    console.log("🥗 Salada Caesar\n🥗 Salada Grega\n🥗 Salada de Frutas");
    break;
  }

  case "4": {
    console.log(
      "🍕 Pizza de Queijo\n🍕 Pizza Margherita\n🍕 Pizza de Pepperoni"
    );
    break;
  }

  case "5": {
    console.log("🍣 Sushi de Salmão\n🍣 Sushi de Atum\n🍣 Sushi Vegetariano");
    break;
  }

  case "6": {
    console.log(
      "🍦 Sorvete de Chocolate\n🍦 Sorvete de Baunilha\n🍦 Sorvete de Morango"
    );
    break;
  }

  case "7": {
    console.log(
      "🍩 Donut Tradicional\n🍩 Donut com Cobertura de Chocolate\n🍩 Donut com Recheio de Creme"
    );
    break;
  }

  case "8": {
    console.log("🍹 Suco de Laranja\n🍹 Suco de Abacaxi\n🍹 Suco de Morango");
    break;
  }

  case "9": {
    console.log("🍰 Bolo de Chocolate\n🍰 Bolo de Cenoura\n🍰 Bolo de Limão");
    break;
  }

  default: {
    console.log("Opção inválida.");
  }
}
