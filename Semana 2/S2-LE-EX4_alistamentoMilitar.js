// Escreva um programa que leia o ano de nascimento de um programador e mostre a sua situação em relação ao alistamento militar.
// Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento. Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.
console.log("-=".repeat(30));
console.log("Verifique sua situação em relação ao serviço militar:");
console.log("-=".repeat(30));

var anoAtual = new Date().getFullYear();
var nascimento = Number(prompt("Qual é o ano do seu nascimento? "));
var idade = anoAtual - nascimento;
var sexo = prompt("Digite [F] para feminino e [M] para masculino: ");

if (sexo == "F" || sexo == "f") {
  console.log("Para mulheres, o alistamento militar não é obrigatório.");
} else if (sexo == "M" || sexo == "m") {
  if (idade == 18) {
    console.log(
      `Quem nasceu em ${nascimento} completa ${idade} anos em ${anoAtual}.
        Você precisa se alistar este ano!`
    );
  } else if (idade < 18) {
    console.log(
      `Quem nasceu em ${nascimento} completa ${idade} anos em ${anoAtual}.
        Ainda falta(m) ${18 - idade} ano(s) para o alistamento.
        Seu alistamento será em ${anoAtual + (18 - idade)}.`
    );
  } else if (idade > 18) {
    console.log(
      `Quem nasceu em ${nascimento} completa ${idade} anos em ${anoAtual}.
        Você já deveria ter se alistado há ${idade - 18} ano(s).
        Seu alistamento foi em ${anoAtual - (idade - 18)}.`
    );
  }
} else {
  console.log("Opção inválida. Tente novamente.");
}
