<template>
  <div>
    <Card>
      <template v-slot:header>
        <h1>Titulo do card</h1>
      </template>
      <p>
        Conteúdo do slot default, sem nome. Lorem ipsum dolor sit amet. Sed
        porro dolorem ut aliquam tenetur qui officiis ratione id omnis
        voluptates quo voluptatum expedita! Et aliquam similique aut esse sint
        qui rerum labore cum officiis culpa sit odio omnis.
      </p>
      <template #footer>
        <h6>Created by Caroline Sampaio</h6>
      </template>
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
