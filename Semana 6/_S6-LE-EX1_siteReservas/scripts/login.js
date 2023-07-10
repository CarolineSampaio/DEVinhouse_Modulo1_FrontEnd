import { usuarios } from "../constantes/usuarios.js";

document.getElementById("botaoLogin").addEventListener("click", loginReservas);

function validaInputs(email, senha) {
  let valido = true;
  if (email === "") {
    document.getElementById("campoEmail").classList.add("inputErro");
    document.getElementById("erroEmail").hidden = false;
    document.getElementById("erroEmail").innerText = "Digite um email válido!";
    valido = false;
  } else {
    document.getElementById("campoEmail").classList.remove("inputErro");
    document.getElementById("erroEmail").hidden = true;
  }

  if (senha === "") {
    document.getElementById("campoSenha").classList.add("inputErro");
    document.getElementById("erroSenha").hidden = false;
    document.getElementById("erroSenha").innerText = "Digite uma senha válida!";
    valido = false;
  } else {
    document.getElementById("campoSenha").classList.remove("inputErro");
    document.getElementById("erroSenha").hidden = true;
  }
  return valido;
}

function loginReservas() {
  const email = document.getElementById("campoEmail").value;
  const senha = document.getElementById("campoSenha").value;

  document.getElementById("erroLogin").innerText = "";

  if (validaInputs(email, senha)) {
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );
    if (usuarioEncontrado) {
      window.location.href = "home.html";
    } else {
      document.getElementById("erroLogin").hidden = false;
      document.getElementById("erroLogin").innerText =
        "Email e/ou senha inválidos!";
    }
  }
}
