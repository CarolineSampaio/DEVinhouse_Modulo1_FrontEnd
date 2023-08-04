<template>
  <div>
    <h1>Título: {{ titulo }}</h1>
    <span>Duração: {{ duracao }} horas</span> <br />
    <span>Vagas: {{ vagas }} vagas</span>
  </div>
</template>

<script>
export default {
  props: ["titulo", "duracao", "vagas"],
};
</script>
