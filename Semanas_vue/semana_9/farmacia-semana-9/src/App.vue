<template>
  <div>
    <Header />
    <FormularioNovoMedicamento @cadastrar="adicionarMedicamento" />

    <ul>
      <li v-for="medicamento in listaMedicamentos.slice().reverse()">
        <CardMedicamento
          :id="medicamento.id"
          :nome="medicamento.nome"
          :laboratorio="medicamento.laboratorio"
          :preco="medicamento.preco"
          :favorito="medicamento.favorito"
          @favoritar="favoritarMedicamento"
        />
      </li>
    </ul>
  </div>
  <footer>
    <p>
      (C) 2023 Farmácia FarmaVida - Rua dos Remédios n° 123, Sala 101, CEP
      12345-678 Vitamed/SP - CNPJ: 99.999.999/0001-99
    </p>
  </footer>
</template>

<script>
import Header from "./components/Header.vue";
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento.vue";
import CardMedicamento from "./components/CardMedicamento.vue";

export default {
  name: "App",
  data() {
    return {
      listaMedicamentos: [
        {
          id: 1,
          nome: "Losartana",
          laboratorio: "Laboratório Pharmaco",
          preco: 17.25,
          favorito: false,
        },
        {
          id: 2,
          nome: "Cetirizina",
          laboratorio: "Laboratório HealthWave",
          preco: 9.85,
          favorito: false,
        },
        {
          id: 3,
          nome: "Atorvastatina",
          laboratorio: "Laboratório MedLife",
          preco: 23.75,
          favorito: false,
        },
        {
          id: 4,
          nome: "Amoxicilina",
          laboratorio: "Laboratório Biogen",
          preco: 14.99,
          favorito: false,
        },
        {
          id: 5,
          nome: "Omeprazol",
          laboratorio: "Laboratório PharmaCare",
          preco: 12.49,
          favorito: false,
        },
        {
          id: 6,
          nome: "Alegra",
          laboratorio: "Laboratório SAS",
          preco: 32.99,
          favorito: false,
        },
        {
          id: 7,
          nome: "DorFlex",
          laboratorio: "Laboratório POP",
          preco: 10.99,
          favorito: false,
        },
        {
          id: 8,
          nome: "Enalapril",
          laboratorio: "Laboratório MKK",
          preco: 25.99,
          favorito: false,
        },
        {
          id: 9,
          nome: "Paracetamol",
          laboratorio: "Laboratório ADS",
          preco: 18.99,
          favorito: false,
        },
        {
          id: 10,
          nome: "Ibuprofeno",
          laboratorio: "Laboratório XYZ",
          preco: 15.99,
          favorito: false,
        },
      ],
    };
  },

  components: {
    Header,
    FormularioNovoMedicamento,
    CardMedicamento,
  },

  methods: {
    adicionarMedicamento({ nome, laboratorio, preco, favorito }) {
      if (!nome || !laboratorio || !preco) {
        alert("Preencha todos os campos!");
        return;
      }

      this.listaMedicamentos.push({
        id: this.listaMedicamentos.length + 1,
        nome,
        laboratorio,
        preco,
        favorito,
      });

      console.log(this.listaMedicamentos);
    },

    favoritarMedicamento(id) {
      const index = this.listaMedicamentos.findIndex(
        (medicamento) => medicamento.id === id
      );
      this.listaMedicamentos[index].favorito =
        !this.listaMedicamentos[index].favorito;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px 20px;
  margin: 0px 10%;
  justify-content: space-between;
}

li {
  list-style: none;
}

footer {
  width: 100%;
  height: 70px;
  margin-top: 50px;
  background-color: #cfd8dc;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #155786;
}
</style>
