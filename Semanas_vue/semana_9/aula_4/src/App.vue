<template>
  <!-- <h3>Nome completo: {{ nomeCompleto }}</h3>
  <h3>Ano de nascimento: {{ anoNascimento }}</h3> -->

  <h3>Calcule o quadrado de um número:</h3>
  <input type="number" v-model="numero" placeholder="Número" />
  <span>Quadrado: {{ quadrado }}</span
  ><br />
  <span v-if="verificaNumero()">Esse número é PAR!</span>
  <span v-else>Esse número é ÍMPAR!</span>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nome: "Caroline",
      sobrenome: "Sampaio",
      idade: 24,

      numero: 0,
      quadrado: 0,
    };
  },

  watch: {
    numero: function (novoValor, valorAntigo) {
      this.quadrado = novoValor * novoValor;
    },
  },

  computed: {
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    anoNascimento() {
      return new Date().getFullYear() - this.idade;
    },
  },

  methods: {
    verificaNumero() {
      return this.numero % 2 === 0;
    },
  },
};
</script>

<style></style>
