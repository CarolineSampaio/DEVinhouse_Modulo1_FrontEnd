<template>
  <div>
    <FormularioNovoMedicamento @cadastrar="adicionarMedicamento" />
  </div>
</template>

<script>
import FormularioNovoMedicamento from "../../components/FormularioNovoMedicamento.vue";
import axios from "axios";

export default {
  components: {
    FormularioNovoMedicamento,
  },
  methods: {
    adicionarMedicamento({ nome, laboratorio, preco, favorito }) {
      if (!nome || !laboratorio || !preco) {
        alert("Preencha todos os campos!");
        return;
      }

      axios
        .post("http://localhost:50001/medicamentos", {
          nome,
          laboratorio,
          preco,
          favorito,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
