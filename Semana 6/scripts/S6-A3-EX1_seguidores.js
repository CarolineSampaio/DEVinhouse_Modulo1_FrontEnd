import { seguidores } from "../constantes/seguidores.js";

document.getElementById("formPesquisa").addEventListener("submit", (event) => {
  event.preventDefault();

  const valorDigitadoPesquisa = document.getElementById("inputPesquisa").value;

  const seguidoresFiltrados = seguidores.filter(
    (seguidor) => seguidor.nome === valorDigitadoPesquisa
  );

  document.getElementById("corpoTabela").innerHTML = "";

  // continua na aula 4
});

function criarLinhasTabela() {
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

  seguidoresFormatados.map((seguidor) => {
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

window.onload = criarLinhasTabela;
