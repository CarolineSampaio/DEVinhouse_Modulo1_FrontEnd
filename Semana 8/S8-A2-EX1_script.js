document.getElementById("cepForm").addEventListener("submit", exibirDados);

function exibirDados(event) {
  event.preventDefault();

  const cep = document.getElementById("cep").value;

  if (cep.length === 8 || cep.length === 9) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`) // GET
      .then((response) => {
        console.log("teste, entrei aqui no then");
        if (response.ok === false) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        const resultDiv = document.getElementById("result");

        resultDiv.innerHTML = `
            <p>Endereço: ${data.logradouro}</p>
            <p>Bairro: ${data.bairro}</p>
            <p>Cidade: ${data.localidade}</p>
            <p>UF: ${data.uf}</p>
            <p>DDD: ${data.ddd}</p>
        `;
      })
      .catch((error) => {
        console.log("teste, entrei aqui no catch");
        alert("ERRO, CEP NÃO ENCONTRADO!");
      });
  } else {
    alert("Digite um CEP válido!");
  }
}
