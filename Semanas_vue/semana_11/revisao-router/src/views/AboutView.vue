<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ cliente }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: 1,
      cliente: {},
    };
  },
  mounted() {
    console.log(this.$route);
    if (!!this.$route.params.id) {
      this.id = this.$route.params.id;
    }

    axios
      .get(`http://localhost:50001/clientes/${this.id}`)
      .then((res) => (this.cliente = res.data));
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
