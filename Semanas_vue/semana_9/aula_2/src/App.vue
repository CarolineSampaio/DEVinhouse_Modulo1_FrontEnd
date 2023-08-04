<template>
  <div>
    <h1>Calculara IMC</h1>
    <input type="number" placeholder="Peso" v-model="peso" />
    <input type="number" placeholder="Altura" v-model="altura" />
    <button @click="calcularImc()">Calcular</button>
    <span>{{ resultado }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peso: 0,
      altura: 0,
      resultado: "",
    };
  },
  methods: {
    calcularImc() {
      if (this.peso == 0 || this.altura == 0) {
        alert("Preencha todos os dados!");
        return;
      }

      let resultado = (this.peso / this.altura ** 2).toFixed(2);

      if (resultado < 18.5) {
        this.resultado = "IMC: " + resultado + " Classificação: Abaixo do peso";
      } else if (resultado < 24.9) {
        this.resultado = "IMC: " + resultado + " Classificação: Peso normal";
      } else if (resultado < 29.9) {
        this.resultado = "IMC: " + resultado + " Classificação: Sobrepeso";
      } else if (resultado < 34.9) {
        this.resultado =
          "IMC: " + resultado + " Classificação: Obesidade grau 1";
      } else if (resultado < 39.9) {
        this.resultado =
          "IMC: " + resultado + " Classificação: Obesidade grau 2";
      } else {
        this.resultado =
          "IMC: " + resultado + " Classificação: Obesidade grau 3";
      }
    },
  },
};
</script>

<style></style>
