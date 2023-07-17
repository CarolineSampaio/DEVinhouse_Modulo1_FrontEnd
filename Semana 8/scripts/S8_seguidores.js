import { seguidores } from "../constantes/seguidores.js";

const seguidoresFormatados = seguidores.map((seguidor) => {
  return {
    ...seguidor,
    apelido:
      "#" +
      seguidor.nome
        .toLowerCase()
        .replace(" ", "_")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
  };
});

document.getElementById("formPesquisa").addEventListener("submit", (event) => {
  event.preventDefault();

  const valorDigitadoPesquisa = document.getElementById("inputPesquisa").value;

  const seguidoresFiltrados = seguidoresFormatados.filter((seguidor) =>
    seguidor.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        valorDigitadoPesquisa
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );

  document.getElementById("corpoTabela").innerHTML = "";

  gerarLinhasTabela(seguidoresFiltrados);

  // continua na aula 4
});

function criarTabela() {
  gerarLinhasTabela(seguidoresFormatados);
}

function gerarLinhasTabela(dados) {
  dados.map((seguidor) => {
    const tr = document.createElement("tr"); // <tr></tr>

    const tdFoto = document.createElement("td"); // <td> </td>
    /*
         const image = document.createElement('img')
         image.setAttribute('src', seguidor.url)
         tdFoto.appendChild(image)
        */
    tdFoto.innerHTML = `<img src=${seguidor.url} />`; // td> <img /> </td>
    tr.appendChild(tdFoto); //<tr><td> </td></tr>

    const tdNome = document.createElement("td");
    tdNome.innerHTML = `${seguidor.nome} (${seguidor.apelido})`;
    tr.appendChild(tdNome);

    const tdSeguidores = document.createElement("td");
    tdSeguidores.innerHTML = seguidor.quantidadeSeguidores;
    tr.appendChild(tdSeguidores);

    const tdPublicacoes = document.createElement("td");
    tdPublicacoes.innerHTML = seguidor.quantidadePublicacoes;
    tr.appendChild(tdPublicacoes);

    document.getElementById("corpoTabela").appendChild(tr);
  });
}

function exibirObservacao() {
  const seguidoresAtivos = seguidoresFormatados.every(
    (seguidor) => seguidor.quantidadePublicacoes >= 20
  );

  if (seguidoresAtivos === true) {
    document.getElementById("observationMessage").innerText =
      "Parabéns! Sua rede de seguidores é ativa";
    document
      .getElementById("observationMessage")
      .classList.remove("disableMessage");
  } else {
    document.getElementById("observationMessage").innerText =
      "Sua rede de seguidores não é ativa";
    document
      .getElementById("observationMessage")
      .classList.remove("disableMessage");
  }
}

function quantidadePublicacoesSeguidores() {
  const total = seguidoresFormatados.reduce((acumulador, itemDaVez) => {
    return itemDaVez.quantidadePublicacoes + acumulador;
  }, 0);

  console.log(total);

  const nomes = seguidoresFormatados.reduce((acumulador, itemDaVez) => {
    return acumulador + "," + itemDaVez.nome;
  }, "");

  console.log(nomes);
}

quantidadePublicacoesSeguidores();

// exibirObservacao();
window.onload = criarTabela;
