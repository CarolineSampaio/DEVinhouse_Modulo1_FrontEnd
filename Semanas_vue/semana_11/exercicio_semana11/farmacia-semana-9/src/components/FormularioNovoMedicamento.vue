<template>
  <div class="d-flex justify-center align-center container">
    <v-container class="main">
      <h2>Formulário de cadastro de medicamentos</h2>
      <v-form class="formCadastro" @submit.prevent="cadastrarMedicamento">
        <v-row>
          <v-col cols="4">
            <v-text-field
              variant="outlined"
              v-model="nome"
              label="Nome"
              placeholder="Informe o nome do medicamento"
              class="mt-6"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              variant="outlined"
              class="mt-6"
              v-model="laboratorio"
              label="Laboratório"
              placeholder="Informe o nome do laboratório"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              variant="outlined"
              class="mt-6"
              v-model="preco"
              label="Preço"
              placeholder="Informe o preço"
              required
              type="number"
              step="0.01"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn type="submit" color="#3e88bd" size="large">Cadastrar</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FormularioNovoMedicamento",
  data() {
    return {
      id: 0,
      nome: "",
      laboratorio: "",
      preco: 0,
      favorito: false,
    };
  },
  methods: {
    cadastrarMedicamento() {
      this.$emit("cadastrar", {
        nome: this.nome,
        laboratorio: this.laboratorio,
        preco: this.preco,
        favorito: this.favorito,
      });
    },
  },
};
</script>

<style scoped>
.container {
  height: 60vh;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 300px;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(27, 111, 170, 0.2);
}

h2 {
  margin: 20px 10% 30px;
  color: #155786;
}

.formCadastro {
  width: 90%;
  display: flex;
  margin: 0 auto;

  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>
