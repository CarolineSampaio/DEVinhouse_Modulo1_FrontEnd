<template>
  <v-container class="ma-0 pa-0">
    <header class="menu">
      <router-link to="/">
        <img class="mt-1" src="../assets/logo-funk-lab.png" alt="logo Funko Lab" />
      </router-link>
      <router-link to="/carrinho" class="carrinho">
        <h4>{{ this.$store.state.produtosCarrinho.length }} itens</h4>
        <v-icon color="white" size="large">mdi-cart</v-icon>
      </router-link>
    </header>
  </v-container>
</template>

<script>
export default {
  name: 'PagMenu'
}
</script>

<style scoped>
.v-container {
  display: flex;
  align-items: center;
  max-width: 100%;
  background-color: #0392b6;
  height: 70px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-left: 15vh;
  padding-right: 15vh;
}

img {
  max-width: 50vh;
  height: 40px;
  opacity: 0.9;
}

a {
  text-decoration: none;
  color: white;
}
.carrinho {
  display: flex;
  gap: 20px;
}
</style>
