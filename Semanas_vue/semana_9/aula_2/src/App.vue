<template>
  <div>
    <h1>Olá, {{ nome }}!</h1>
    <p>Numero: {{ numero % 2 === 0 ? "PAR" : "ÍMPAR" }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "João",
      numero: 10,
    };
  },
};
</script>

<style></style>
