console.log("m1-s05-e5");

const somaTudo = (...numeros) => {
  const total = numeros.reduce((acc, num) => acc + num, 0);

  return total;
};

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
