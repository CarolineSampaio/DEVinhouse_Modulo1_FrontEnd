console.log("m1-s05-e6");

const verificaPalindromo = (palavra) => {
  if (!palavra?.length) {
    return false;
  }

  const reversedString = palavra.split("").reverse().join("");
  return palavra === reversedString;
};

const teste1 = verificaPalindromo("ana");
console.log(teste1);

const teste2 = verificaPalindromo("julia");
console.log(teste2);
