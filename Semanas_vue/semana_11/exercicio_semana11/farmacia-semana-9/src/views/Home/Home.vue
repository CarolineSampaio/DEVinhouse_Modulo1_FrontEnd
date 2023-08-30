<template>
  <v-container class="pa-0 ma-0">
    <v-row class="d-flex flex-row-reverse mt-2">
      <v-btn
        color="#3e88bd"
        class="mt-6 mr-2"
        @click="$router.push('/cadastro')"
      >
        Cadastrar novo medicamento
      </v-btn>
    </v-row>

    <v-row class="pa-0">
      <v-col
        class="pa-0"
        v-for="medicamento in listaMedicamentos.slice().reverse()"
        :key="medicamento.id"
      >
        <CardMedicamento
          :id="medicamento.id"
          :nome="medicamento.nome"
          :laboratorio="medicamento.laboratorio"
          :preco="medicamento.preco"
          :favorito="medicamento.favorito"
          @favoritar="favoritarMedicamento"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardMedicamento from "../../components/CardMedicamento.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      listaMedicamentos: [],
    };
  },

  components: {
    CardMedicamento,
  },

  methods: {
    async carregarMedicamentos() {
      try {
        const response = await axios.get("http://localhost:50001/medicamentos");
        this.listaMedicamentos = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    favoritarMedicamento(id) {
      const medicamentos = this.listaMedicamentos;
      const index = axios.patch(`http://localhost:50001/medicamentos/${id}`, {
        favorito: !medicamentos[id].favorito,
      });
      console.log(id, medicamentos, index);

      medicamentos[id].favorito = !medicamentos[id].favorito;
    },
  },
  mounted() {
    this.carregarMedicamentos();
  },
};
</script>
