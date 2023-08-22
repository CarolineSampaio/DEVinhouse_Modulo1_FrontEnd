<template>
  <div>
    <Header />
    <FormularioNovoMedicamento @cadastrar="adicionarMedicamento" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento.vue";

export default {
  name: "App",
  data() {
    return {
      listaMedicamentos: [],
    };
  },

  components: {
    Header,
    FormularioNovoMedicamento,
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
      const medicamento = this.listaMedicamentos.find(
        (medicamento) => medicamento.id === id
      );

      medicamento.favorito = !medicamento.favorito;

      console.log(this.listaMedicamentos);
    },
  },
};
</script>

<style scoped></style>
