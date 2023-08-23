<template>
  <div>
    <Header />
    <FormularioNovoMedicamento @cadastrar="adicionarMedicamento" />
    <CardMedicamento
      :id="1"
      nome="Ibuprofeno"
      laboratorio="Laboratório XYZ"
      :preco="15.99"
      :favorito="false"
      @favoritar="favoritarMedicamento"
    />
  </div>
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
      const favoritar = document.querySelector(".heart");
      const index = this.listaMedicamentos.findIndex(
        (medicamento) => medicamento.id === id
      );
      this.listaMedicamentos[index].favorito =
        !this.listaMedicamentos[index].favorito;

      if (this.listaMedicamentos[index].favorito === true) {
        favoritar.classList.add("active");
      } else {
        favoritar.classList.remove("active");
      }
    },
  },
};
</script>

<style scoped></style>
