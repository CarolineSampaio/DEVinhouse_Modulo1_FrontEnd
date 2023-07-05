const seguidores = [
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "João Silva",
    quantidadeSeguidores: 1000,
    quantidadePublicacoes: 50,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Maria Santos",
    quantidadeSeguidores: 500,
    quantidadePublicacoes: 120,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Pedro Oliveira",
    quantidadeSeguidores: 200,
    quantidadePublicacoes: 75,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Ana Souza",
    quantidadeSeguidores: 800,
    quantidadePublicacoes: 100,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Lucas Pereira",
    quantidadeSeguidores: 350,
    quantidadePublicacoes: 200,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Camila Alves",
    quantidadeSeguidores: 1500,
    quantidadePublicacoes: 90,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "João Silva",
    quantidadeSeguidores: 1000,
    quantidadePublicacoes: 50,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Maria Santos",
    quantidadeSeguidores: 500,
    quantidadePublicacoes: 120,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Pedro Oliveira",
    quantidadeSeguidores: 200,
    quantidadePublicacoes: 75,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Ana Souza",
    quantidadeSeguidores: 800,
    quantidadePublicacoes: 100,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Lucas Pereira",
    quantidadeSeguidores: 350,
    quantidadePublicacoes: 200,
  },
  {
    url: "https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?w=740&t=st=1688598633~exp=1688599233~hmac=50bfd56c918c046b6a624c9abcff17dd937c453d73afd8d00b98a21ff177e72a",
    nome: "Camila Alves",
    quantidadeSeguidores: 1500,
    quantidadePublicacoes: 90,
  },
];

function criarLinhasTabela() {
  seguidores.map((seguidor) => {
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
    tdNome.innerHTML = seguidor.nome;
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
