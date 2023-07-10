import { reservas } from "../constantes/reservas.js";

let dadosReserva = [...reservas];

document.getElementById("logout").addEventListener("click", () => {
  window.location.href = "login.html";
});

function gerarTabela() {
  reservas.map((reserva) => {
    const tr = document.createElement("tr");

    const tdNumeroQuarto = document.createElement("td");
    tdNumeroQuarto.innerHTML = reserva.numeroQuarto;
    tr.appendChild(tdNumeroQuarto);

    const tdNomeCliente = document.createElement("td");
    tdNomeCliente.innerHTML = reserva.nomeCliente;
    tr.appendChild(tdNomeCliente);

    const tdCpfCliente = document.createElement("td");
    tdCpfCliente.innerHTML = reserva.cpf;
    tr.appendChild(tdCpfCliente);

    const tdPeriodo = document.createElement("td");
    tdPeriodo.innerHTML = `${reserva.dataEntrada} - ${reserva.dataSaida}`;
    tr.appendChild(tdPeriodo);

    const tdAcoes = document.createElement("td");

    const botaoDeletar = document.createElement("button");
    botaoDeletar.innerText = "Deletar Reserva";

    botaoDeletar.addEventListener("click", () => deletarReserva(reserva.id));

    tdAcoes.appendChild(botaoDeletar);

    tr.appendChild(tdAcoes);

    document.getElementById("corpoTabela").appendChild(tr);
  });
}

function deletarReserva(id) {
  const filtrados = dadosReserva.filter((item) => item.id !== id);
  document.getElementById("corpoTabela").innerHTML = "";
  dadosReserva = filtrados;

  filtrados.map((reserva) => {
    const tr = document.createElement("tr");

    const tdNumeroQuarto = document.createElement("td");
    tdNumeroQuarto.innerHTML = reserva.numeroQuarto;
    tr.appendChild(tdNumeroQuarto);

    const tdNomeCliente = document.createElement("td");
    tdNomeCliente.innerHTML = reserva.nomeCliente;
    tr.appendChild(tdNomeCliente);

    const tdCpfCliente = document.createElement("td");
    tdCpfCliente.innerHTML = reserva.cpf;
    tr.appendChild(tdCpfCliente);

    const tdPeriodo = document.createElement("td");
    tdPeriodo.innerHTML = `${reserva.dataEntrada} - ${reserva.dataSaida}`;
    tr.appendChild(tdPeriodo);

    const tdAcoes = document.createElement("td");

    const botaoDeletar = document.createElement("button");
    botaoDeletar.innerText = "Deletar Reserva";

    botaoDeletar.addEventListener("click", () => deletarReserva(reserva.id));

    tdAcoes.appendChild(botaoDeletar);

    tr.appendChild(tdAcoes);

    document.getElementById("corpoTabela").appendChild(tr);
  });
}

window.onload = gerarTabela;
