<template>
  <div>
    <h1>PAR / ÍMPAR</h1>
    <div>
      <label>Digite um número: </label>
      <input type="number" v-model="number" />
      <button @click="verificaNumero()">Verificar</button>
      <span>{{ resultado }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      resultado: "",
    };
  },
  methods: {
    verificaNumero() {
      if (!!this.number == false) {
        alert("Digite um número!");
        return;
      }

      if (this.number % 2 == 0) {
        this.resultado = "O número " + this.number + " é par.";
      } else {
        this.resultado = "O número " + this.number + " é ímpar.";
      }
    },
  },
};
</script>

<style></style>
