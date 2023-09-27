console.log("m1-s05-e4");

const calculaTabuada = (numero) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
  }
};

const numero = prompt("Informe um número");

calculaTabuada(numero);
