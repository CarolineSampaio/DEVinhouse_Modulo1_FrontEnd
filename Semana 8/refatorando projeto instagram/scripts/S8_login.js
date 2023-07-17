import { usuarios } from "../constantes/usuarios.js";

document.getElementById("formLogin").addEventListener("submit", realizarLogin);

const CampoLogin = document.getElementById("campoLogin");
const CampoSenha = document.getElementById("campoSenha");
const loginBotao = document.getElementById("loginButton");

function resetForm() {
  CampoLogin.classList.remove("input-error");
  CampoSenha.classList.remove("input-error");
}

function realizarLogin(event) {
  event.preventDefault();

  const login = CampoLogin.value;
  const senha = CampoSenha.value;

  resetForm();

  if (login === "") {
    CampoLogin.classList.add("input-error");
    CampoLogin.focus();
  } else if (senha === "") {
    CampoSenha.classList.add("input-error");
    CampoSenha.focus();
  } else {
    loginBotao.disabled = true;
    loginBotao.style.opacity = 0.5;
    loginBotao.innerText = "Logando...";

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === login && usuario.password === senha
    );

    if (usuarioEncontrado) {
      window.location.href = "S8_home.html";
    } else {
      loginBotao.disabled = false;
      loginBotao.style.opacity = 1;
      loginBotao.innerText = "Entrar";

      alert("Usuário não foi encontrado");
    }
  }
}
