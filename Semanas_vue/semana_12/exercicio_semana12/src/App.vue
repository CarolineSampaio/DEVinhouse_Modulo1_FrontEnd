<template>
  <PagMenu />

  <main>
    <router-view></router-view>
  </main>

  <footer>
    (C) 2023 FunkoLAB - Rua dos Colecionáveis n° 456, Sala 202, CEP 98765-432 GeekCity/SP - CNPJ:
    88.888.888/0001-88
  </footer>
</template>

<script>
import PagMenu from './components/PagMenu.vue'

export default {
  components: {
    PagMenu
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  margin-top: 50px;
  background-color: #0392b6;
  padding: 25px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #ffffff;
}
</style>
