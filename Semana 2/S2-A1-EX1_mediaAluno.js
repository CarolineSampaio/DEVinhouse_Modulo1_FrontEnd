//Construa um algoritmo que calcule a média aritmética de um aluno (N1+ N2+ N3+ N4).
var nota1 = Number(prompt("Digite a nota 1"));
var nota2 = Number(prompt("Digite a nota 2"));
var nota3 = Number(prompt("Digite a nota 3"));
var nota4 = Number(prompt("Digite a nova 4"));

var media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
  console.log("Aluno aprovado!");
} else {
  console.log("Aluno reprovado!");
}

// Com funcao

function calcularMedia() {
  var nota1 = Number(prompt("Digite a nota 1"));
  var nota2 = Number(prompt("Digite a nota 2"));
  var nota3 = Number(prompt("Digite a nota 3"));
  var nota4 = Number(prompt("Digite a nota 4"));

  var media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 7) {
    console.log("aluno aprovado");
  } else {
    console.log("aluno em recuperacao");
  }
}

calcularMedia();
calcularMedia();
calcularMedia();
