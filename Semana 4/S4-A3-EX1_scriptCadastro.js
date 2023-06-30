var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefone = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;

function fazerCadastro() {
  var email = document.getElementById("campoEmail").value;
  var telefone = document.getElementById("campoTelefone").value;
  var nomeCompleto = document.getElementById("campoNomeCompleto").value;
  var nomeUsuario = document.getElementById("campoNomeUsuario").value;
  var senha = document.getElementById("campoSenha").value;

  document.getElementById("campoEmail").classList.remove("inputError");
  document.getElementById("errorEmail").hidden = true;

  document.getElementById("campoTelefone").classList.remove("inputError");
  document.getElementById("errorTelefone").hidden = true;

  document.getElementById("campoNomeCompleto").classList.remove("inputError");
  document.getElementById("errorNome").hidden = true;

  document.getElementById("campoNomeUsuario").classList.remove("inputError");
  document.getElementById("errorUsuario").hidden = true;

  document.getElementById("campoSenha").classList.remove("inputError");
  document.getElementById("errorSenha").hidden = true;

  if (regexEmail.test(email) === false) {
    document.getElementById("campoEmail").classList.add("inputError");
    document.getElementById("errorEmail").hidden = false;
    document.getElementById("errorEmail").innerText = "Digite um email válido";
  }

  if (regexTelefone.test(telefone) === false) {
    document.getElementById("campoTelefone").classList.add("inputError");
    document.getElementById("errorTelefone").hidden = false;
    document.getElementById("errorTelefone").innerText =
      "Digite um telefone válido";
  }

  if (nomeCompleto === "") {
    document.getElementById("campoNomeCompleto").classList.add("inputError");
    document.getElementById("errorNome").hidden = false;
    document.getElementById("errorNome").innerText = "O nome é obrigatório";
  }

  if (nomeUsuario === "") {
    document.getElementById("campoNomeUsuario").classList.add("inputError");
    document.getElementById("errorUsuario").hidden = false;
    document.getElementById("errorUsuario").innerText =
      "O usuário é obrigatório";
  }

  if (senha.length < 9) {
    document.getElementById("campoSenha").classList.add("inputError");
    document.getElementById("errorSenha").hidden = false;
    document.getElementById("errorSenha").innerText =
      "A senha deve ter no mínimo 8 caracteres!";
  }
}
