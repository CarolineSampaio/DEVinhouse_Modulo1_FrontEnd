<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ nome }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
    };
  },
  mounted() {
    console.log(this.$route);
    if (!!this.$route.params.nome) {
      this.nome = this.$route.params.nome;
    }
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
