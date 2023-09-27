console.log("m1-s05-e1");

const classificaIdade = (idade) => {
  if (idade <= 15) {
    return "Pessoa Jovem.";
  }

  if (idade <= 64) {
    return "Pessoa Adulta";
  }

  return "Pessoa Idosa";
};

const idade = prompt("Qual sua idade?");

const resultado = classificaIdade(idade);

alert(resultado);
