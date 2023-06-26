function clicaNoBotao() {
  var login = document.getElementById("campoLogin").value;
  var senha = document.getElementById("campoSenha").value;

  if (login === "") {
    alert("Login inválido. Insira um telefone, nome de usuário ou email.");
  }
}
