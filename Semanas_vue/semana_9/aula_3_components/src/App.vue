<template>
  <Card>
    <template #header>
      <h1>Carro novo da Ferrari</h1>
    </template>
    <template #imagem>
      <img
        :width="200"
        src="https://media.formula1.com/content/dam/fom-website/sutton/2022/Brazil/Friday/1440800084.jpg"
        alt=""
      />
    </template>
  </Card>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
};
</script>

<style scoped></style>
