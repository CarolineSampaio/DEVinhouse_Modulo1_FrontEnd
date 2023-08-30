<template>
  <Header />

  <main>
    <router-view />
  </main>

  <footer>
    <p>
      (C) 2023 Farmácia FarmaVida - Rua dos Remédios n° 123, Sala 101, CEP
      12345-678 Vitamed/SP - CNPJ: 99.999.999/0001-99
    </p>
  </footer>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
main {
  margin: auto 215px;
}
footer {
  width: 100%;
  margin-top: 50px;
  background-color: #cfd8dc;
  padding: 25px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #155786;
}
</style>
