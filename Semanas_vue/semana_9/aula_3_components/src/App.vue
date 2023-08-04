<template>
  <div>
    <h1>Hello, world!</h1>
    <Card>
      <p>Conteúdo do slot</p>
    </Card>
  </div>
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
