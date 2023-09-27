function validaInputs(termo, razao) {
  if (!termo) {
    document.getElementById("termo").classList.add("error");
    document.getElementById("erroTermo").hidden = false;
    document.getElementById("erroTermo").textContent =
      "Insira um valor inválido";
  } else {
    document.getElementById("termo").classList.remove("error");
    document.getElementById("erroTermo").hidden = true;
  }
  if (!razao) {
    document.getElementById("razao").classList.add("error");
    document.getElementById("erroRazao").hidden = false;
    document.getElementById("erroRazao").textContent =
      "Insira um valor inválido";
  } else {
    document.getElementById("razao").classList.remove("error");
    document.getElementById("erroRazao").hidden = true;
  }
  if (termo && razao) {
    return true;
  }
}

function calculaPA() {
  const termo = Number(document.getElementById("termo").value);
  const razao = Number(document.getElementById("razao").value);
  const decimo = termo + (10 - 1) * razao;

  if (validaInputs(termo, razao)) {
    let PA = "";
    for (let termos = termo; termos <= decimo; termos += razao) {
      PA += PA !== "" ? " → " + termos : termos;
    }
    document.getElementById("resultado").textContent = PA;

    document.getElementById("telaInicial").style.display = "none";
    document.getElementById("telaFinal").style.display = "flex";
  }
}

function calcularNovamente() {
  document.getElementById("termo").value = "";
  document.getElementById("razao").value = "";

  document.getElementById("telaFinal").style.display = "none";
  document.getElementById("telaInicial").style.display = "flex";
}
