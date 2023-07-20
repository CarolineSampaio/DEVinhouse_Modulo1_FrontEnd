var usuario = {
  username: "douglas#Cavalcante",
  qtdSeguidores: 20,
  qtdPessoasSeguindo: 20,
  nome: "Henrique Douglas C. Costa",
  qtdPublicacoes: 1000,
  foto: "https://avatars.githubusercontent.com/u/38563983?v=4",
};

var nomes = [
  "https://http.cat/images/202.jpg",
  "https://http.cat/images/202.jpg",
  "https://http.cat/images/202.jpg",
  "https://http.cat/images/301.jpg",
  "https://http.cat/images/404.jpg",
  "https://http.cat/images/408.jpg",
  "https://http.cat/images/417.jpg",
  "https://http.cat/images/498.jpg",
  "https://http.cat/images/498.jpg",
  "https://http.cat/images/500.jpg",
];

function exibirImage() {
  var galeria = document.getElementById("galeria");

  nomes.forEach((item) => {
    var image = document.createElement("img");
    var div = document.createElement("div");
    div.classList.add("gridItem");

    image.setAttribute("src", item);
    div.appendChild(image);

    galeria.appendChild(div);
  });
}

function mostrarInformacoes() {
  document.getElementById("nome").innerText = usuario.nome;
  document.getElementById("username").innerText = usuario.username;
  document.getElementById("qtdSeguidores").innerText = usuario.qtdSeguidores;
  document.getElementById("qtdPublicacoes").innerText = usuario.qtdPublicacoes;
  exibirImage();
}

function gerarTextoBemVindo() {
  const nome = localStorage.getItem("nomeUsuario");
  document.getElementById("BemVindoUsuario").innerText = "Bem vindo " + nome;
}

gerarTextoBemVindo();

window.onload = mostrarInformacoes;
