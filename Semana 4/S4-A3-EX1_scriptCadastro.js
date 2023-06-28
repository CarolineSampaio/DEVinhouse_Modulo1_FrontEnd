function fazerCadastro() {
  var email = document.getElementById("campoEmail").value;
  var telefone = document.getElementById("campoTelefone").value;
  var nomeCompleto = document.getElementById("campoNomeCompleto").value;
  var nomeUsuario = document.getElementById("campoNomeUsuario").value;
  var senha = document.getElementById("campoSenha").value;

  if (nomeCompleto === "") {
    document.getElementById("campoNomeCompleto").classList.add("inputError");
    document.getElementById("campoNomeCompleto").focus();
    document.getElementById("errorNome").hidden = false;
    document.getElementById("errorNome").innerText = "O nome é obrigatório";
  } else if (senha.length < 9) {
    document.getElementById("campoSenha").classList.add("inputError");
    document.getElementById("errorSenha").hidden = false;
    document.getElementById("errorSenha").innerText =
      "A senha deve ter no mínimo 8 caracteres!";
  }
}
