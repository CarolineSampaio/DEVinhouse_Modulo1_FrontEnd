<template>
  <h1>Página inicial</h1>
  <h2>Nome: {{ usuario.name }}</h2>
  <img :src="usuario.avatar_url" :width="200" />
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuario: {},
    };
  },

  mounted() {
    axios
      .get("https://api.github.com/users/CarolineSampaio")
      .then((res) => (this.usuario = res.data))
      .catch((erro) => console.log(erro));
  },
};
</script>

<style scoped></style>
