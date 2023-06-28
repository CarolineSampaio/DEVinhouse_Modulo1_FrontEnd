function clicaNoBotao() {
  var login = document.getElementById("campoLogin").value;
  var senha = document.getElementById("campoSenha").value;

  document.getElementById("campoLogin").classList.remove("input-error");
  document.getElementById("campoSenha").classList.remove("input-error");

  if (login === "") {
    /* adiciona um estilo inline */
    // document.getElementById('campo-email').style = "border-color: red"

    /* adiciona um estilo direto no objeto */
    // document.getElementById('campo-email').style.backgroundColor = 'red'

    /* adiciona uma nova classe ao objeto e devemos configurar css */
    document.getElementById("campoLogin").classList.add("input-error");
    /* foca o cursor no elemento vazio */
    document.getElementById("campoLogin").focus();
  } else if (senha === "") {
    document.getElementById("campoSenha").classList.add("input-error");
    document.getElementById("campoLogin").focus();
  } else {
    document.getElementById("loginButton").disabled = true;
    document.getElementById("loginButton").style.opacity = 0.5;
    document.getElementById("loginButton").innerText = "Logando...";

    // redireciona para outra página
    window.location.href = "https://www.google.com/";
  }
}
