<template>
  <v-container class="ma-0 pa-0 pt-2">
    <header class="menu">
      <router-link to="/">
        <img class="mt-1" src="../assets/logo-funk-lab.png" alt="logo Funko Lab" />
      </router-link>
      <router-link to="/carrinho" class="carrinho">
        <v-icon color="white" size="large">mdi-cart</v-icon>
        <div class="quantidade">{{ this.$store.state.produtosCarrinho.length }}</div>
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
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-left: 15vh;
  padding-right: 15vh;
  height: 70px;
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
  gap: 10px;
}

.quantidade {
  background-color: #f5a623;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  margin-left: -15px;
  margin-top: -15px;
}
</style>
