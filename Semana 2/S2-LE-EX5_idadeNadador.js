//Elabore um algoritmo que dada a idade de um nadador classifica-o ma categoria correta.
console.log(
  "Bem vindo a página da Confederação Nacional de Natação!\nDescubra a categoria a seguir:"
);
var idade = Number(
  prompt("Digite a idade do nadador para descobrir a categoria: ")
);

var categoria;

if (idade >= 5 && idade <= 7) {
  categoria = "Infantil A";
} else if (idade >= 8 && idade <= 10) {
  categoria = "Infantil B";
} else if (idade >= 11 && idade <= 13) {
  categoria = "Juvenil A";
} else if (idade >= 14 && idade <= 17) {
  categoria = "Juvenil B";
} else if (idade >= 18) {
  categoria = "Adulto";
} else {
  categoria = "Opção inválida";
}

console.log("Idade: " + idade + " anos\nCategoria do nadador: " + categoria);
