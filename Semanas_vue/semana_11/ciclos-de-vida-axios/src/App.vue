<template>
  <h1>Formulário de cadastro de novo cliente</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Digite seu nome" v-model="cliente.nome" />
    <input
      type="email"
      placeholder="Digite seu email"
      v-model="cliente.email"
    />
    <button type="submit">Cadastrar cliente</button>
  </form>
  <hr />
  <br />
  <h2>Lista de clientes</h2>
  {{ listaClientes }}
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cliente: {
        nome: "",
        email: "",
      },

      listaClientes: [],
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post("http://localhost:50001/clientes", this.cliente)
        .then((res) => {
          alert("Cliente cadastrado com sucesso!");
        })
        .catch((error) => {
          console.log(error);
        });

      this.getDados();
    },

    getDados() {
      axios
        .get("http://localhost:50001/clientes")
        .then((response) => {
          this.listaClientes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.getDados();
  },
};
</script>

<style scoped></style>
