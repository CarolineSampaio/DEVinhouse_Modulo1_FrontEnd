const usuarios = [
  { email: "henrique@gmail.com", password: "devinhouse123" },
  { email: "douglas@gmail.com", password: "devinhouse321" },
  { email: "cavalcante@gmail.com", password: "senha" },
];

function clicaNoBotao() {
  const login = document.getElementById("campoLogin").value;
  const senha = document.getElementById("campoSenha").value;

  document.getElementById("campoLogin").classList.remove("input-error");
  document.getElementById("campoSenha").classList.remove("input-error");

  if (login === "") {
    /* adiciona um estilo inline */
    // document.getElementById('campo-email').style = "border-color: red"

    /* adiciona um estilo direto no objeto */
    // document.getElementById('campo-email').style.backgroundColor = 'red'

    /* adiciona uma nova classe ao objeto e devemos configurar css */
    document.getElementById("campoLogin").classList.add("input-error");
    document.getElementById("campoLogin").focus();
  } else if (senha === "") {
    document.getElementById("campoSenha").classList.add("input-error");
    document.getElementById("campoLogin").focus();
  } else {
    document.getElementById("loginButton").disabled = true;
    document.getElementById("loginButton").style.opacity = 0.5;
    document.getElementById("loginButton").innerText = "Logando...";

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === login && usuario.password === senha
    );

    if (usuarioEncontrado) {
      // redireciona para outra página
      window.location.href = "S6-A2-EX1_home.html";
    } else {
      document.getElementById("loginButton").disabled = false;
      document.getElementById("loginButton").style.opacity = 1;
      document.getElementById("loginButton").innerText = "Entrar";

      alert("Usuário não foi encontrado");
    }
  }
}
