const quarto = document.getElementById("nQuarto");
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const dataEntrada = document.getElementById("dataEntrada");
const dataSaida = document.getElementById("dataSaida");

document.getElementById("reservar").addEventListener("submit", fazerReserva);

function formataData(data) {
  const dataFormatada = new Date(data).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });
  return dataFormatada;
}

function fazerReserva(event) {
  event.preventDefault();
  if (
    validaInput(quarto, "O número do quarto é obrigatório!") &&
    validaInput(nome, "O nome é obrigatório!") &&
    validaInput(cpf, "O CPF é obrigatório!") &&
    validaInput(dataEntrada, "A data de entrada é obrigatória!") &&
    validaInput(dataSaida, "A data de saída é obrigatória!")
  ) {
    const dataEntradaFormatada = formataData(dataEntrada.value);
    const dataSaidaFormatada = formataData(dataSaida.value);

    fetch("http://localhost:3000/reservas", {
      method: "POST",
      body: JSON.stringify({
        quarto: quarto.value,
        nome: nome.value,
        cpf: cpf.value,
        dataEntrada: dataEntradaFormatada,
        dataSaida: dataSaidaFormatada,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        quarto.value = "";
        nome.value = "";
        cpf.value = "";
        dataEntrada.value = "";
        dataSaida.value = "";

        window.location.href = "./home.html";
      })
      .catch((error) => {
        console.log(error);
        alert("Falha ao tentar cadastrar a reserva");
      });
  }
}

function validaInput(input, msg) {
  const error = document.querySelector(`#${input.id}Error`);
  input.classList.remove("inputErro");
  error.hidden = true;

  if (!input.value) {
    input.classList.add("inputErro");
    error.hidden = false;
    error.innerText = msg;
    return false;
  }
  return true;
}
