<template>
  <h1>Página inicial</h1>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get("https://api.github.com/users/CarolineSampaio")
      .then((response) => {
        console.log(response.data);
        console.log(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
