<template>
  <div>
    <h1>Consulta de CEP:</h1>
    <form>
      <h3>Resultado da sua consulta:</h3>
      <p>Cep: {{ cep.cep }}</p>
      <p>Logradoro: {{ cep.logradouro }}</p>
      <p>Bairro: {{ cep.bairro }}</p>
      <p>Cidade: {{ cep.localidade }}</p>
      <p>Estado: {{ cep.uf }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cep: {},
    };
  },

  methods: {
    consultarCep() {
      axios
        .get("https://viacep.com.br/ws/02046050/json/")
        .then((response) => {
          this.cep = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.consultarCep();
  },
};
</script>
<style scoped>
h1 {
  font-size: 1.5rem;
  margin: 20px 0px;
  text-align: center;
}
h3 {
  font-size: 1.2rem;
  font-weight: 500;
}

p {
  font-size: 1rem;
  font-weight: 400;
  margin: 10px 0px;
}
</style>
