<template>
  <v-container class="bg-blue-grey-lighten-4 ma-0 pa-0">
    <header>
      <router-link to="/">
        <img
          class="mt-1"
          src="../assets/logo-farma-vida.png"
          alt="logo farma vida"
        />
      </router-link>
    </header>
  </v-container>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.v-container {
  max-width: 100%;
}

img {
  padding-left: 215px;
  height: 70px;
  opacity: 0.9;
}
</style>
