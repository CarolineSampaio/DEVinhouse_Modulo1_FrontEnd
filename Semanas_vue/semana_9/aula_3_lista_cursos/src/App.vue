<template>
  <div>
    <h1>Lista de Cursos</h1>
    <!-- O v-bind ou : é uma diretiva que nos permite passar valores Javascript dentro das props  -->
    <CursoItem
      v-for="(curso, index) in listaCursos"
      :key="index"
      :titulo="curso.titulo"
      :duracao="curso.duracao"
      :vagas="curso.vagas"
    />
  </div>
</template>

<script>
import CursoItem from "./components/CursoItem.vue";
export default {
  components: {
    CursoItem,
  },

  data() {
    return {
      listaCursos: [
        {
          titulo: "HTML e CSS",
          duracao: 20,
          vagas: 40,
        },
        {
          titulo: "Javascript",
          duracao: 20,
          vagas: 40,
        },
        {
          titulo: "PHP",
          duracao: 20,
          vagas: 40,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
