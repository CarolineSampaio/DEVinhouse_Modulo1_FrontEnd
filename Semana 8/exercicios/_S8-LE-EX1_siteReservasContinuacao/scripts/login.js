import { usuarios } from "../constantes/usuarios.js";

const email = document.getElementById("email");
const senha = document.getElementById("senha");

document.getElementById("login").addEventListener("submit", loginReservas);

function loginReservas(event) {
  event.preventDefault();
  console.log("teste");

  document.getElementById("loginError").innerText = "";

  const emailValido = validaInputs(email, "Digite um email válido!");
  const senhaValida = validaInputs(senha, "Digite uma senha válida!");

  if (emailValido && senhaValida) {
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email === email.value && usuario.senha === senha.value
    );
    if (usuarioEncontrado) {
      window.location.href = "home.html";
    } else {
      document.getElementById("loginError").hidden = false;
      document.getElementById("loginError").innerText =
        "Email e/ou senha inválidos!";
    }
  }
}

function validaInputs(input, msg) {
  const error = document.querySelector(`#${input.id}Error`);
  input.classList.remove("inputErro");
  error.hidden = true;

  if (!input.value) {
    input.classList.add("inputErro");
    error.hidden = false;
    error.innerText = msg;
    return false;
  }
  return true;
}
