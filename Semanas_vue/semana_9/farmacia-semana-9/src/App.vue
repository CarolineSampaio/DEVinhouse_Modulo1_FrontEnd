<template>
  <div></div>
  <div>
    <Header />
    <FormularioNovoMedicamento />
  </div>
</template>

<script></script>
<script>
import Header from "./components/Header.vue";
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento.vue";

export default {
  name: "App",
  data() {
    return {
      listaMedicamentos: [],
    };
  },
  components: {
    Header,
    FormularioNovoMedicamento,
  },
};
</script>

<style scoped></style>
