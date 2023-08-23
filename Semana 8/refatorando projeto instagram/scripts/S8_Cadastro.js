import { regexEmail, regexTelefone } from "../constantes/regexs.js";

const campoEmail = document.getElementById("campoEmail");
const campoTelefone = document.getElementById("campoTelefone");
const campoNomeCompleto = document.getElementById("campoNomeCompleto");
const campoNomeUsuario = document.getElementById("campoNomeUsuario");
const campoSenha = document.getElementById("campoSenha");

document
  .getElementById("formCadastro")
  .addEventListener("submit", fazerCadastro);

function fazerCadastro(event) {
  event.preventDefault();
  var email = campoEmail.value;
  var telefone = campoTelefone.value;
  var nomeCompleto = campoNomeCompleto.value;
  var nomeUsuario = campoNomeUsuario.value;
  var senha = campoSenha.value;

  campoEmail.classList.remove("inputError");
  document.getElementById("errorEmail").hidden = true;

  campoTelefone.classList.remove("inputError");
  document.getElementById("errorTelefone").hidden = true;

  campoNomeCompleto.classList.remove("inputError");
  document.getElementById("errorNome").hidden = true;

  campoNomeUsuario.classList.remove("inputError");
  document.getElementById("errorUsuario").hidden = true;

  campoSenha.classList.remove("inputError");
  document.getElementById("errorSenha").hidden = true;

  if (regexEmail.test(email) === false) {
    campoEmail.classList.add("inputError");
    document.getElementById("errorEmail").hidden = false;
    document.getElementById("errorEmail").innerText = "Digite um email válido!";
  } else if (regexTelefone.test(telefone) === false) {
    campoTelefone.classList.add("inputError");
    document.getElementById("errorTelefone").hidden = false;
    document.getElementById("errorTelefone").innerText =
      "Digite um telefone válido!";
  } else if (nomeCompleto === "") {
    campoNomeCompleto.classList.add("inputError");
    document.getElementById("errorNome").hidden = false;
    document.getElementById("errorNome").innerText = "O nome é obrigatório!";
  } else if (nomeUsuario === "") {
    campoNomeUsuario.classList.add("inputError");
    document.getElementById("errorUsuario").hidden = false;
    document.getElementById("errorUsuario").innerText =
      "Nome de usuário é obrigatório!";
  } else if (senha.length < 9) {
    campoSenha.classList.add("inputError");
    document.getElementById("errorSenha").hidden = false;
    document.getElementById("errorSenha").innerText =
      "A senha deve ter no mínimo 8 caracteres!";
  } else {
    document.getElementById("loginButton").style.opacity = 0.5;
    document.getElementById("loginButton").innerText = "Cadastrando ....";
    document.getElementById("loginButton").disabled = true;

    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        telefone: telefone,
        nomeCompleto: nomeCompleto,
        nomeUsuario: nomeUsuario,

        senha: senha,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Cadastrado com sucesso");
        window.location.href = "./S8_loginInstagram.html";
      })
      .catch(() => {
        alert("Desculpe. Houve um erro ao cadastrar o usuario");
      });
  }
}
