console.log("m1-s05-e7");

const pessoa = {
  nome: "Caroline",
  idade: 24,
  profissao: "Arquiteta",
};

const criaMensagem = ({ nome, idade, profissao }) =>
  `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;

const mensagem = criaMensagem(pessoa);
console.log(mensagem);
