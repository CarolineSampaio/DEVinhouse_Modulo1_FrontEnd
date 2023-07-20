import { usuarios } from "../constantes/usuarios.js";

const campoLogin = document.getElementById("campoLogin");
const campoSenha = document.getElementById("campoSenha");
const loginBotao = document.getElementById("loginButton");

document.getElementById("formLogin").addEventListener("submit", realizarLogin);
document.getElementById("aceitar").addEventListener("click", salvarDecisao);
document.getElementById("rejeitar").addEventListener("click", salvarDecisao);

function salvarDecisao() {
  localStorage.setItem("decisaoPermissao", "ok");
  document.getElementById("modalPermissao").style.display = "none";
}

function resetForm() {
  campoLogin.classList.remove("input-error");
  campoSenha.classList.remove("input-error");
}

function realizarLogin(event) {
  event.preventDefault();

  const login = campoLogin.value;
  const senha = campoSenha.value;

  resetForm();

  if (login === "") {
    campoLogin.classList.add("input-error");
    campoLogin.focus();
  } else if (senha === "") {
    campoSenha.classList.add("input-error");
    campoSenha.focus();
  } else {
    loginBotao.disabled = true;
    loginBotao.style.opacity = 0.5;
    loginBotao.innerText = "Logando...";

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === login && usuario.password === senha
    );

    if (usuarioEncontrado) {
      localStorage.setItem("nomeUsuario", "joao");

      campoLogin.style.display = "none";
      campoSenha.style.display = "none";
      loginBotao.style.display = "none";

      document.getElementById("formLogin").innerText = "Entrando ...";

      setTimeout(() => {
        window.location.href = "S8_home.html";
      }, 3000);
    } else {
      loginBotao.disabled = false;
      loginBotao.style.opacity = 1;
      loginBotao.innerText = "Entrar";

      alert("Usuário não foi encontrado");
    }
  }
}

function exibirModal() {
  const decisao = localStorage.getItem("decisaoPermissao");

  if (decisao !== "ok") {
    document.getElementById("modalPermissao").style.display = "flex";
  }
}

setTimeout(exibirModal, 5000);

function exibirData() {
  const data = new Date().toLocaleTimeString();
  document.getElementById("data").innerHTML = data;
}
setInterval(exibirData, 1000);
