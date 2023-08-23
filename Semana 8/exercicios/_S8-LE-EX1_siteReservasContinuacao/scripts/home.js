const tabela = document.getElementById("corpoTabela");

document.getElementById("logout").addEventListener("click", () => {
  window.location.href = "login.html";
});

function gerarTabela() {
  fetch("http://localhost:3000/reservas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resposta) => resposta.json())
    .then((resposta) => {
      tabela.innerHTML = "";
      const dadosReserva = resposta;
      dadosReserva.map((reserva) => insereLinha(reserva));
    });
}

function deletarReserva(id) {
  fetch(`http://localhost:3000/reservas/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Falha ao tentar remover reserva!");
      }
    })
    .then(gerarTabela())
    .catch((error) => alert(error.message));
}

function insereLinha(reserva) {
  const tr = document.createElement("tr");

  tr.appendChild(criaTd(reserva.quarto));
  tr.appendChild(criaTd(reserva.nome));
  tr.appendChild(criaTd(reserva.cpf));
  tr.appendChild(criaTd(`${reserva.dataEntrada} - ${reserva.dataSaida}`));
  tr.appendChild(criaTd(botaoDeletar(reserva.id)));

  tabela.appendChild(tr);
}

function criaTd(dado) {
  const td = document.createElement("td");
  if (typeof dado === "object") {
    td.appendChild(dado);
  } else {
    td.innerHTML = dado;
  }
  return td;
}

function botaoDeletar(id) {
  const botaoDeletar = document.createElement("button");
  botaoDeletar.innerText = "Deletar Reserva";
  botaoDeletar.addEventListener("click", () => deletarReserva(id));
  return botaoDeletar;
}

window.onload = gerarTabela;
